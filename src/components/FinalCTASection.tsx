import { CreditCard, Lock, QrCode, Receipt } from "lucide-react";
import CTAButton from "./CTAButton";

const FinalCTASection = () => {
  return (
    <section className="bg-dark-gradient section-padding">
      <div className="container-narrow text-center">
        {/* Scarcity banner */}
        <div className="bg-[#CC0000] text-white font-bold text-sm sm:text-base py-3 px-4 rounded-t-xl mb-0 max-w-lg mx-auto">
          🔴 Restam apenas 10 vagas com este preço
        </div>

        <div className="max-w-lg mx-auto bg-chocolate-medium rounded-b-xl p-8 border border-gold/20 mb-6">
          <h3 className="text-cream font-display text-xl sm:text-2xl font-bold mb-2">
            Garanta seu acesso agora
          </h3>
          <p className="text-gold-light text-sm font-body mb-6">
            ♾️ Acesso vitalício — pague uma vez e assista para sempre
          </p>

          <p className="text-cream/50 font-body text-sm line-through mb-1">De R$147</p>
          <p className="text-[4rem] sm:text-[5rem] font-bold text-cta-orange mb-1 font-display leading-none">
            R$<span>27</span>
          </p>
          <p className="text-cream/60 font-body text-sm mb-8">
            ou 12x de R$2,70 no cartão
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

        {/* Pix notice */}
        <div className="max-w-lg mx-auto bg-[#FFFBEA] border border-yellow-300 rounded-xl px-5 py-4 text-center">
          <p className="text-gray-700 font-body text-[13px] leading-relaxed">
            ℹ️ O Pix será identificado no nome de <strong>ITALLO FERNANDES AQUINO</strong>, responsável financeiro do Páscoa Lucrativa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
