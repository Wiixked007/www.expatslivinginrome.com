(function(){if(!window.$mcSite){$mcSite={};$mcSite.popup_form={settings:{base_url:"mc.us9.list-manage.com",list_id:"0f15f5f2c1",uuid:"2fe86c0349983970626ebfafe"}};$mcSite.facebookPixel={settings:{pixelId:"229706448232239",enabled:"1"}};}})();
(function () {
    if (window.$mcSite === undefined || window.$mcSite.popup_form === undefined) {
        return;
    }

    if (window.location.href.indexOf("checkout.shopify") >= 0) {
        return;
    }

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        // look for src containing the old embed.js code and bail if it exists
        if (scripts[i].getAttribute("src") === "//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" || scripts[i].getAttribute("src") === "//downloads.mailchimp.com/js/signup-forms/popup/embed.js") {
            return;
        }
    }

    var module = window.$mcSite.popup_form;

    if (module.installed === true) {
        return;
    }

    if (!module.settings) {
        return;
    }

    var settings = module.settings;

    if (!settings.base_url || !settings.uuid || !settings.list_id || settings.skip_install === "1") {
        return;
    }

    var script = document.createElement("script");

    script.src = "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js";
    script.type = "text/javascript";
    script.onload = function () {
        if (window.dojoRequire) {
            window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": settings.base_url, "uuid": settings.uuid, "lid": settings.list_id, "uniqueMethods": true}); });
        }
    };

    document.body.appendChild(script);

    window.$mcSite.popup_form.installed = true;
}());
/* eslint-disable */
(function () {
    if (!window.$mcSite.facebookPixel.settings || !!$mcSite.facebookPixel.installed || !window.$mcSite.facebookPixel.settings.enabled) {
        return;
    }

    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','//connect.facebook.net/en_US/fbevents.js');

    var pixelIds = JSON.parse($mcSite.facebookPixel.settings.pixelIds || "[]");
    if (pixelIds.length) {
        pixelIds.forEach(function (id) {
            fbq('init', id);
        });

        fbq('track', 'PageView');
    }

    $mcSite.facebookPixel.installed = true;
})();
