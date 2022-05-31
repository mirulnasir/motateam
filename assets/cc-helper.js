// used for rendering cart
class CcHelper {
    constructor(tenantId = '', bufferUrl = '') {
        this.projectsLoaded = false;
        this.bufferUrl = bufferUrl;
        this.tenantId = tenantId;
        this.projects = {};
        this.cart = {};
    }

    async loadCart() {
        let data = await fetch('/cart.js');
        let cart = await data.json();

        this.cart = cart;
    }

    async loadProductForCc() {
        if (this.cart == undefined || Object.keys(this.cart).length == 0) {
            await this.loadCart();
        }
        let ccProduct = this.cart.items.filter(x => x.properties && Object.keys(x.properties).includes('_projectId'))[0];
        if (ccProduct == undefined || ccProduct == null) {
            throw new Error('There are no configured product in cart');
        }
        let data = await fetch(`/products/${ccProduct.handle}.js`);
        let product = await data.json();

        return product;
    }

    async updateCart(itemKey, itemQuantity) {
        let response = await fetch('/cart/change.js', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: `quantity=${itemQuantity}&id=${itemKey}`
        });
        if (!response.ok) {
            console.error(`Could not access ${response.url}. Status: ${response.status}: ${response.statusText}`);
        } else {
            if (itemQuantity == '0') {
                if (Object.keys(this.cart.items.filter(x => x.key == itemKey)[0]).includes('_projectId')) {
                    let removedProjectId = this.cart.items.filter(x => x.key == itemKey)[0].properties._projectId;
                    delete this.projects[removedProjectId];
                }
                await this.loadCart();
                return null;
            }
            this.cart = await response.json();
            let updatedItem = this.cart.items.filter(x => x.key == itemKey)[0];
            let updatedItemPrice = new Intl.NumberFormat('en', { style: 'currency', currency: this.cart.currency })
                .format((updatedItem.line_price / 100).toFixed(2));
            let subtotalPrice = new Intl.NumberFormat('en', { style: 'currency', currency: this.cart.currency })
                .format((this.cart.items_subtotal_price / 100).toFixed(2));
            let updatedData = { cartCount: this.cart.item_count, updatedItemPrice: updatedItemPrice, subtotal: subtotalPrice };
            return updatedData;
        }
    }

    async loadProjects() {
        this.projects = {};
        let projects = this.cart.items.reduce((acc, cur) => {
            if (cur.properties && cur.properties._projectId != undefined && cur.properties._projectId != null) {
                acc[cur.properties._projectId] = [...acc[cur.properties._projectId] || [], cur];
            }
            return acc;
        }, {});

        await Promise.all(Object.keys(projects).map(async (key) => {
            let data = await fetch(`${this.bufferUrl}/${key}`);
            let project = await data.json();
            this.projects[key] = project.line_items;
        }));

        this.projectsLoaded = true;
    }

    async renderCart() {
        await this.loadCart();
        if (!this.projectsLoaded || Object.keys(this.projects) != this.cart.items.length) {
            await this.loadProjects();
        }
        Object.keys(this.projects).forEach(projectId => {
            this.projects[projectId].forEach(item => {
                this.renderItem(item);
            });
        });
    }

    renderItem(item) {
        if (Object.keys(item.properties).includes('_hidden')) {
            if (Object.keys(item.properties._hidden).includes('images')) {
                let imgElement = document.querySelector(`img[name='product-image-${item.key}']`);
                if (imgElement != null && item.properties._hidden.images[0] != undefined && item.properties._hidden.images[0] != "") {
                    let symbol = item.properties._hidden.images[0].indexOf("?") > -1 ? "&v=" : "?v=";

                    if (item.properties._hidden.images[0].includes('data:image')) {
                        imgElement.src = item.properties._hidden.images[0];
                    } else {
                        imgElement.src = item.properties._hidden.images[0] + symbol + Date.now().toString();
                    }
                }
            }
            if (Object.keys(item.properties._hidden).includes('snapshot')) {
                let cartItem = this.cart.items.filter(x => x.properties && x.properties['_itemId'] == item.key)[0];
                let productUrl = cartItem.url;
                let parentElement = document.getElementById(`cc-product-${item.key}-data`).parentElement;
                let snapshot = item.properties._hidden.snapshot;

                if (snapshot != null) {
                    productUrl += `&snapshot=${snapshot}`;
                }
                productUrl += `&key=${cartItem.key}&quantity=${cartItem.quantity}&page=design`;
                let link = document.createElement("a");
                link.href = productUrl;
                link.text = "Return to edit";
                parentElement.appendChild(link);
            }
        }
    }

    async renderMiniCart() {
        await this.loadCart();
        if (!this.projectsLoaded || Object.keys(this.projects) != this.cart.items.length) {
            await this.loadProjects();
        }
        Object.keys(this.projects).forEach(projectId => {
            this.projects[projectId].forEach(item => {
                this.renderMiniCartItem(item);
            });
        });
    }

    renderMiniCartItem(item) {
        if (Object.keys(item.properties).includes('_hidden')) {
            let cartItem = this.cart.items.filter(x => x.properties && x.properties['_itemId'] == item.key)[0];
            if (!cartItem) {
                return;
            }
            const cartHtmlItem = document.querySelector('.ajaxcart__inner');
            //Array.from(cartHtmlItem.querySelectorAll('.ajaxcart__product-meta>span')).forEach(x => {
            Array.from(cartHtmlItem.querySelectorAll('.ajaxcart__product-meta>span[data-swatch="Size"]')).forEach(x => {
                x.parentElement.style.display = 'none';
            });
            if (Object.keys(item.properties._hidden).includes('images')) {
                const ajaxQtyWrapper = document.querySelector(`[data-id="${cartItem.key}"]`)?.parentElement;
                if (ajaxQtyWrapper) {
                    const img = ajaxQtyWrapper?.parentElement?.parentElement?.parentElement?.parentElement?.querySelector('img');
                    if (img && item.properties._hidden.images[0] != undefined && item.properties._hidden.images[0] != "") {
                        let symbol = item.properties._hidden.images[0].indexOf("?") > -1 ? "&v=" : "?v=";
                        img.src = item.properties._hidden.images[0] + symbol + Date.now().toString();
                    }
                }
            }
            if (Object.keys(item.properties._hidden).includes('snapshot')) {
                const ajaxQtyWrapper = document.querySelector(`[data-id="${cartItem.key}"]`)?.parentElement;
                if (ajaxQtyWrapper) {
                    const parent = ajaxQtyWrapper?.parentElement?.parentElement?.parentElement;
                    if (parent) {
                        let productUrl = cartItem.url;
                        let snapshot = item.properties._hidden.snapshot;

                        if (snapshot != null) {
                            productUrl += `&snapshot=${snapshot}`;
                        }
                        productUrl += `&key=${cartItem.key}&quantity=${cartItem.quantity}&page=design`;
                        let link = document.createElement("a");
                        link.href = productUrl;
                        link.text = "Return to edit";
                        link.setAttribute('id', 'mini-return-' + cartItem.key);
                        Array.from(document.querySelectorAll('[id="mini-return-' + cartItem.key + '"]')).forEach(x => x.remove());
                        parent.appendChild(link);
                    }
                }
            }
        }
    }
}