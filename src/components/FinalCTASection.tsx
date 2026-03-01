import { CreditCard, Lock, QrCode, Receipt } from "lucide-react";
import CTAButton from "./CTAButton";

const FinalCTASection = () => {
  return (
    <section className="bg-dark-gradient section-padding">
      <div className="container-narrow text-center">
        <p className="text-cream/50 font-body text-sm line-through mb-2">De R$197</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-2 font-display">
          R$<span className="text-gold-light">27</span>
        </p>
        <p className="text-cream/70 font-body text-base sm:text-lg mb-8 max-w-lg mx-auto">
          Menos que uma caixa de bombom. O retorno pode ser de mais de{" "}
          <strong className="text-gold-light">50x</strong> já na sua primeira Páscoa.
        </p>

        <CTAButton />

        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
          <span className="flex items-center gap-1.5 text-cream/50 text-xs font-body">
            <QrCode size={16} /> Pix
          </span>
          <span className="flex items-center gap-1.5 text-cream/50 text-xs font-body">
            <CreditCard size={16} /> Cartão de Crédito
          </span>
          <span className="flex items-center gap-1.5 text-cream/50 text-xs font-body">
            <Receipt size={16} /> Boleto
          </span>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-cream/40 text-xs font-body mt-4">
          <Lock size={12} /> Pagamento 100% seguro e criptografado
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
