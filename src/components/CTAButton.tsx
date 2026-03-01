import { toast } from "sonner";

const CTAButton = () => {
  const handleClick = () => {
    toast.success("🎉 Você será redirecionada para a página de pagamento!", {
      description: "Esta é uma demonstração — nenhuma compra será realizada.",
    });
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
