import { toast } from "sonner";

const CTAButton = () => {
  const handleClick = () => {
    // Track Interest/Scroll
    if ((window as any).fbq) {
      (window as any).fbq("trackCustom", "ClickToOffer", {
        button_location: "Hero/CTA"
      });
      console.log("Facebook Pixel: ClickToOffer event tracked");
    }

    const element = document.getElementById("pricing-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn-cta text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-5 animate-pulse-glow"
    >
      QUERO COMEÇAR AGORA — R$27
    </button>
  );
};

export default CTAButton;
