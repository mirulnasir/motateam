(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0584/4978/9021/t/3/assets/appstle-membership.js?v=1654230262");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "motateam2.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "dM6L3YH4mW8W",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/480903261\":\"[{\\\"type\\\":\\\"text\\\",\\\"required\\\":true,\\\"visible\\\":true,\\\"label\\\":\\\"Name\\\"}]\"}",
        "rulesByCustomerTag": "{\"entry\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"templateFileName\\\":\\\"page.about.json\\\"}]\"]}",
        "membershipByCustomerTag": "{\"entry\":[{\"id\":1601,\"shop\":\"motateam2.myshopify.com\",\"groupName\":\"ENTRY\",\"subscriptionId\":96862301,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":96862301,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"ENTRY\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/480903261\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":1,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/480903261\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"ENTRY\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":6825531539549,\\\\\\\"title\\\\\\\":\\\\\\\"ENTRY\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":40172047925341,\\\\\\\"title\\\\\\\":\\\\\\\"ENTRY - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"ENTRY\\\",\\\"orderTag\\\":null,\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/page\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"templateFileName\\\\\\\":\\\\\\\"page.about.json\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":true,\\\\\\\"visible\\\\\\\":true,\\\\\\\"label\\\\\\\":\\\\\\\"Name\\\\\\\"}]\\\"}\",\"productIds\":\"6825531539549\",\"variantIds\":\"40172047925341\",\"variantProductIds\":\"6825531539549\",\"customerTag\":\"ENTRY\",\"orderTag\":null,\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"templateFileName\\\":\\\"page.about.json\\\"}]\",\"formFieldsJson\":\"[{\\\"type\\\":\\\"text\\\",\\\"required\\\":true,\\\"visible\\\":true,\\\"label\\\":\\\"Name\\\"}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2116883939421\"}]}",
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "#000000",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
