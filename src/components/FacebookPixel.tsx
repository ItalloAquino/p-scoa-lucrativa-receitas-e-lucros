import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const FacebookPixel = () => {
    const location = useLocation();

    useEffect(() => {
        const PIXEL_ID = SITE_CONFIG.facebookPixelId;

        // Initialize Facebook Pixel synchronously!
        // This ensures fbq exists before the PageView event is logged
        if (!(window as any).fbq) {
            (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js", undefined, undefined, undefined);
            
            (window as any).fbq("init", PIXEL_ID);
            console.log("Facebook Pixel Initialized:", PIXEL_ID);
        }
    }, []);

    useEffect(() => {
        if ((window as any).fbq) {
            (window as any).fbq("track", "PageView");
            console.log("Facebook Pixel: PageView event tracked for", location.pathname);

            // Diagnostic: Force Purchase event if URL has ?activate=purchase
            const params = new URLSearchParams(window.location.search);
            if (params.get("activate") === "purchase") {
                (window as any).fbq("track", "Purchase", {
                    value: 27.00,
                    currency: "BRL",
                    content_name: "DIAGNOSTIC_PURCHASE_ACTIVATION"
                });
                console.log("Facebook Pixel: DIAGNOSTIC Purchase event fired!");
            }
        }
    }, [location]);

    return null;
};

export default FacebookPixel;
