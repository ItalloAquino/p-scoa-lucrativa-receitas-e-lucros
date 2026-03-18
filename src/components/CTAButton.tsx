import { toast } from "sonner";
import { SITE_CONFIG } from "@/config/site";

const CTAButton = () => {
  const handleClick = () => {
    // Track InitiateCheckout event
    const eventId = "init_checkout_" + new Date().getTime();
    if ((window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: SITE_CONFIG.title,
        content_category: "Ebook/Course",
        value: 19.90,
        currency: "BRL"
      }, { eventID: eventId });
      console.log("Facebook Pixel: InitiateCheckout event tracked with eventID:", eventId);
    }

    // Add a small delay to ensure the pixel event is sent before navigating away
    setTimeout(() => {
      window.location.href = SITE_CONFIG.hotmartCheckoutUrl;
    }, 400);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-cta text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-5 animate-pulse-glow"
    >
      QUERO COMEÇAR AGORA — R$19,90
    </button>
  );
};

export default CTAButton;
