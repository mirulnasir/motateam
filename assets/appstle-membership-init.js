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
        "atcButtonSelector": "div.payment-buttons",
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
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/480903261\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"gid:\/\/shopify\/SellingPlan\/481067101\":\"[{\\\"label\\\":\\\"Name\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":true,\\\"visible\\\":true}]\",\"gid:\/\/shopify\/SellingPlan\/481132637\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"vip_premium\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612544605\\\",\\\"discountMessage\\\":\\\"15% off all products \u2022 For Appstle - PREMIUM customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP15\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP15\\\",\\\"discountPercentage\\\":\\\"15.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\"],\"vip_entry\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"templateFileName\\\":\\\"page.about.json\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612413533\\\",\\\"discountMessage\\\":\\\"10% off all products \u2022 For Appstle - ENTRY customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP10\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP10\\\",\\\"discountPercentage\\\":\\\"10.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\"],\"vip_elite\":[\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612577373\\\",\\\"discountMessage\\\":\\\"20% off all products \u2022 For Appstle - ELITE customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP20\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP20\\\",\\\"discountPercentage\\\":\\\"20.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\"]}",
        "membershipByCustomerTag": "{\"vip_premium\":[{\"id\":1602,\"shop\":\"motateam2.myshopify.com\",\"groupName\":\"PREMIUM\",\"subscriptionId\":96993373,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":96993373,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"PREMIUM\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/481067101\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":null,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/481067101\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"PREMIUM\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":6825714909277,\\\\\\\"title\\\\\\\":\\\\\\\"PREMIUM - MOST POPULAR\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"vip_premium\\\",\\\"orderTag\\\":\\\"PREMIUM\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/page\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\"},{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"968612544605\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"15% off all products \u2022 For Appstle - PREMIUM customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/www.motateam.com\/discount\/VIP15\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"VIP15\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"15.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"Name\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":true,\\\\\\\"visible\\\\\\\":true}]\\\"}\",\"productIds\":\"6825714909277\",\"variantIds\":\"\",\"variantProductIds\":\"\",\"customerTag\":\"vip_premium\",\"orderTag\":\"PREMIUM\",\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612544605\\\",\\\"discountMessage\\\":\\\"15% off all products \u2022 For Appstle - PREMIUM customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP15\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP15\\\",\\\"discountPercentage\\\":\\\"15.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"Name\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":true,\\\"visible\\\":true}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2116965204061\"}],\"vip_entry\":[{\"id\":1601,\"shop\":\"motateam2.myshopify.com\",\"groupName\":\"ENTRY\",\"subscriptionId\":96862301,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":96862301,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"ENTRY\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/480903261\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":1,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/480903261\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"ENTRY\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":6825531539549,\\\\\\\"title\\\\\\\":\\\\\\\"ENTRY\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"vip_entry\\\",\\\"orderTag\\\":null,\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/page\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"templateFileName\\\\\\\":\\\\\\\"page.about.json\\\\\\\"},{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"968612413533\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"10% off all products \u2022 For Appstle - ENTRY customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/www.motateam.com\/discount\/VIP10\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"VIP10\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"10.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"6825531539549\",\"variantIds\":\"\",\"variantProductIds\":\"\",\"customerTag\":\"vip_entry\",\"orderTag\":null,\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"templateFileName\\\":\\\"page.about.json\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612413533\\\",\\\"discountMessage\\\":\\\"10% off all products \u2022 For Appstle - ENTRY customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP10\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP10\\\",\\\"discountPercentage\\\":\\\"10.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2116883939421\"}],\"vip_elite\":[{\"id\":1603,\"shop\":\"motateam2.myshopify.com\",\"groupName\":\"ELITE\",\"subscriptionId\":97058909,\"productCount\":1,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":97058909,\\\"productCount\\\":1,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"ELITE\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/481132637\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":null,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/481132637\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"ELITE\\\",\\\"productIds\\\":\\\"[{\\\\\\\"id\\\\\\\":6825827106909,\\\\\\\"title\\\\\\\":\\\\\\\"ELITE - BEST CHANCE!\\\\\\\"}]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"vip_elite\\\",\\\"orderTag\\\":\\\"ELITE\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"alternateTemplate\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"templates\/page\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\"},{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"968612577373\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"20% off all products \u2022 For Appstle - ELITE customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/www.motateam.com\/discount\/VIP20\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"VIP20\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"20.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"6825827106909\",\"variantIds\":\"\",\"variantProductIds\":\"\",\"customerTag\":\"vip_elite\",\"orderTag\":\"ELITE\",\"rulesJson\":\"[{\\\"rule\\\":\\\"alternateTemplate\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"templates\/page\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"968612577373\\\",\\\"discountMessage\\\":\\\"20% off all products \u2022 For Appstle - ELITE customers\\\",\\\"discountUrl\\\":\\\"https:\/\/www.motateam.com\/discount\/VIP20\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountCodeText\\\":\\\"VIP20\\\",\\\"discountPercentage\\\":\\\"20.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2117045551197\"}]}",
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
                "border-color": "#000000",
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
