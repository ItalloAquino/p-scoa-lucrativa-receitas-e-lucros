import { toast } from "sonner";
import { SITE_CONFIG } from "@/config/site";

const CTAButton = () => {
  const handleClick = () => {
    // Track Interest/Scroll
    if ((window as any).fbq) {
      (window as any).fbq("trackCustom", "ClickToOffer", {
        button_location: "Hero/CTA"
      });
      console.log("Facebook Pixel: ClickToOffer event tracked");
    }

    window.location.href = SITE_CONFIG.hotmartCheckoutUrl;
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
