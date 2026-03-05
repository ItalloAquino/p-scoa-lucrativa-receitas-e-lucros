import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FacebookPixel = () => {
    const location = useLocation();

    useEffect(() => {
        const PIXEL_ID = "907951455286362";

        // Initialize Facebook Pixel if not already initialized
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
        }
    }, []);

    useEffect(() => {
        if ((window as any).fbq) {
            (window as any).fbq("track", "PageView");
        }
    }, [location]);

    return null;
};

export default FacebookPixel;
