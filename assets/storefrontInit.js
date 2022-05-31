(function() {

    const helper = {

        ecDriver: null,
        editorLoaded: false,
        isApplyOptions: false,

        applyOptions: function() {
            // update selected variant
            const selectedVariantId = this.getSelectedVariantId();
            const loadedVariantId = this.ecDriver.products.current.variations.current.id;
            if (loadedVariantId != selectedVariantId) {
                setTimeout(function() {
                    this.ecDriver.products.current.updateVariant(selectedVariantId);
                }.bind(this), 1000);
            }

            // update quantity
            var formElement = document.querySelector("form[action='/cart/add']");
            var formString = new URLSearchParams(new FormData(formElement)).toString();
            if (formString) {
                var formParams = this.getQueryParameters(formString);
                var quantity = formParams.quantity ? Number(formParams.quantity) : null;
            }

            if (!quantity) {
                quantity = !formParams ? formParams.quantity : 1;
            }

            if (!!quantity && (this.ecDriver.orders.current.quantity !== quantity)) {
                this.ecDriver.orders.current.quantity = quantity;
            }
        },

        navigateToPage: function(page, idArr) {
            if (this.ecDriver && this.ecDriver.config) {
                if (!this.ecDriver.config.displayInPopup) {
                    var elem = this.ccPages()[page];
                    elem.style.display = "inline-block";
                    elem.style.visibility = "visible";
                    elem.style.position = "static";
                    elem.style.top = "0px";
                    elem.style.left = "0px";
                    Object.keys(this.ccPages()).forEach(function(item) {
                        if (item != page) {
                            this.ccPages()[item].style.visibility = "hidden";
                            this.ccPages()[item].style.position = "absolute";
                            this.ccPages()[item].style.top = "-9999px";
                            this.ccPages()[item].style.left = "-9999px";
                        }
                    }.bind(this));
                    var relatedProducts = document.querySelector(".related-products-wrapper");
                    if (page === "product") {
                        if (relatedProducts) {
                            relatedProducts.style.display = "inline-block";
                        }
                    } else if (page === "editor") {
                        if (relatedProducts) {
                            relatedProducts.style.display = "none";
                        }
                    }
                } else {
                    if (window.auWizard) {
                        window.auWizard.showEditorPopup();
                    }
                    else {
                        document.body.addEventListener('load', () => {
                            window.auWizard.showEditorPopup();
                        });
                    }
                }
            } else {
                document.body.addEventListener('editor-loaded', () => {
                    if (ShopifyInit.ecDriver.config.displayInPopup) {
                        window.auWizard.showEditorPopup();
                    } else {
                        ShopifyInit.navigateToPage('editor');
                    }
                });   
            }
        },

        ccPages: function() {
            return {
                "product": document.querySelector(".product-template__container"),
                "editor": document.querySelector("#cc-editor-page")
            }
        },

        getCurrentSessionId: function() {
            var sessionId = "guest";
            var coockie = document.cookie;
            var coockieArr = coockie.split(";")
            var coockieObj = {};
            coockieArr.forEach(function(equal) {
                var arr = equal.split("=");
                var key = arr[0];
                var value = arr[1];
                coockieObj[key.trim()] = value;
            });

            function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            };
            sessionId =
                coockieObj["_shopify_y"] ||
                coockieObj["_y"] ||
                coockieObj["_shopify_s"] ||
                coockieObj["_s"] ||
                coockieObj["__ssid"] || guid();

            sessionId = "shopify_" + sessionId;
            return sessionId;
        },

        getUserIdForCc: function(shopDomain, customerId) {
            var shopDomain = shopDomain.split('.')[0];
            var userId = customerId
                ? 'shopify_' + shopDomain + '_' + customerId
                : ShopifyInit.getCurrentSessionId();

            return userId;
        },

        getRootUrl: function(url) {
            return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/, "$1");
        },

        getQueryParameters: function(str) {
            var result = (str || document.location.search).replace(/(^\?)/, '').split("&").map(function(n) {
                return n = n.split("="), this[n[0]] = n[1], this
            }.bind({}))[0];
            delete result[""];

            Object.keys(result).forEach(function(key) {
                result[key] = decodeURIComponent(result[key]);
            });

            if (Object.keys(result).length == 0 && result.constructor === Object) {
                result = {};
            }

            return result;
        },

        getSelectedVariantId: function() {
            // get from form or shopifyMetaAnalitics selectedVariantId
            var self = this;
            var queryParams = self.getQueryParameters();
            var _getFromForm = function() {
                var formElement = document.querySelector("form[action='/cart/add']");
                var formString = new URLSearchParams(new FormData(formElement)).toString();
                if (formString) {
                    var objData = self.getQueryParameters(formString);
                    if (objData && objData.id) {
                        return objData.id;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            };
            var _getFromShopifyMeta = function() {
                try {
                    return ShopifyAnalytics.meta.selectedVariantId;
                } catch (ex) {
                    return null;
                }
            };
            var _getFromQueryString = function() {
                if (queryParams && queryParams['variant']) {
                    return queryParams['variant'];
                } else {
                    return null;
                }
            };
            var selectedVariantId = _getFromForm() || _getFromShopifyMeta() || _getFromQueryString();
            return selectedVariantId == null ? selectedVariantId : Number(selectedVariantId);
        },

        getExistingOrder: function() {
            var queryParams = this.getQueryParameters();
            // order already exist
            if (queryParams && queryParams['snapshot']) {
                return {
                    snapshot: queryParams['snapshot'],
                    key: queryParams['key']
                };
            }
            return null;
        },

        getLanguage: function() {
            try {
                var lang = document.querySelector("html").lang;
                lang = lang.substr(0, 2);
                return lang;
            } catch (ex) {
                console.warn("Can't parse locale");
                return "EN";
            }
        },

        getCurrency: function() {
            try {
                return window.Shopify.currency.active || window.ShopifyAnalytics.meta.currency
            } catch (ex) {
                console.warn("Can't parse currency");
                return "USD";
            };
        },

        saveProject: async function(createEndpoint) {
            let project = { line_items: [] };
            let lineItemsKeys = [];
            this.ecDriver.cart.lineItems.forEach(lineItem => {
                let lineItemKey = `${Date.now()}:${Math.floor(Math.random() * 101)}:${lineItem.quantity}`;
                lineItem.data.itemId = lineItemKey;
                let projectLineItem = {
                    key: lineItemKey,
                    quantity: lineItem.quantity,
                    properties: lineItem.props
                }
                project.line_items.push(projectLineItem);
                lineItemsKeys.push(lineItemKey);
            });
            let projectData = JSON.stringify(project);
            let projectId = await this.sendProjectToBuffer(createEndpoint, projectData);
            this.ecDriver.cart.lineItems.forEach((lineItem, i) => {
                lineItem.data.projectId = projectId;
                lineItem.data.itemId = lineItemsKeys[i];
            });
            return projectId;
        },

        sendProjectToBuffer: async function(endpoint, projectData) {
            let response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: projectData
            });
            let projectId = await response.text();
            return projectId;
        },
          
		pingBuffer: async function(endpoint) {
            let response = await fetch(endpoint, {
                method: 'GET'
            });
            return response.ok;
        }
    }

    window.ShopifyInit = helper;

}());