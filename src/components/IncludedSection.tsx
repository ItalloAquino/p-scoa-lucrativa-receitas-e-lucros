import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const items = [
  "10 vídeo-aulas completas em HD",
  "Acesso imediato pela área de membros",
  "Lista de fornecedores com preços atualizados",
  "Planilha de precificação editável",
  "Grupo de suporte exclusivo para alunas",
  "Bônus: Guia de embalagens que vendem",
];

const paymentMethods = [
  "Boleto", "Visa", "Mastercard", "Amex", "Pix",
  "Compra Segura", "Satisfação Garantida", "Privacidade Protegida"
];

const IncludedSection = () => {
  const handleCTA = () => {
    window.open("https://pay.hotmart.com/W104712605V?checkoutMode=10", "_blank");
  };

  return (
    <section id="pricing-section" className="bg-neutral-100 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl">
        {/* 1. Faixa Superior (Urgência) */}
        <div className="bg-[#FF5A1F] text-white text-center font-bold uppercase tracking-wide py-3 rounded-t-2xl shadow-lg">
          RESTA APENAS 10 VAGAS!
        </div>

        {/* 2. Corpo do Card */}
        <div className="bg-gradient-to-b from-[#1E120D] to-[#0F0A08] text-white px-6 md:px-8 py-10 rounded-b-2xl shadow-2xl border border-[#EADBC8]/20">

          {/* 3. Título Principal */}
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-8 leading-snug">
            Tudo que você recebe ao garantir hoje
          </h2>

          {/* 4. Lista de Benefícios */}
          <div className="space-y-4 mb-10">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white flex items-center justify-center text-sm">
                  ✓
                </div>
                <p className="text-base leading-relaxed">
                  {item.startsWith("Bônus:") ? (
                    <><span className="font-semibold">Bônus:</span> {item.replace("Bônus:", "").trim()}</>
                  ) : (
                    item
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* 5. Seção de Preço */}
          <div className="text-center mb-8">
            <span className="text-sm line-through opacity-70">De: R$ 147,00</span>
            <p className="text-base mt-2">Por apenas:</p>
            <div className="text-5xl md:text-6xl font-extrabold text-[#7CFF00] mt-2">
              R$27,00
            </div>
            <p className="text-sm mt-2 opacity-90">
              ou 12x R$ 2,70 no cartão
            </p>
          </div>

          {/* 6. Frase Persuasiva */}
          <p className="text-center text-sm italic opacity-90 mb-8">
            Tudo isso por apenas R$27 — menos que um ovo industrializado de supermercado.
          </p>

          {/* 7. Botão CTA */}
          <button
            onClick={handleCTA}
            className="w-full bg-[#FF5A1F] hover:bg-[#E14E1B] transition duration-300 text-white font-bold uppercase tracking-wide py-4 rounded-xl shadow-lg text-lg transform hover:scale-[1.02] active:scale-95"
          >
            QUERO COMEÇAR AGORA — R$27 →
          </button>

          {/* 8. Ícones de Pagamento */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 opacity-80">
            {paymentMethods.map((method, i) => (
              <span
                key={i}
                className="text-[10px] border border-white/30 px-2 py-1 rounded text-white/90 whitespace-nowrap"
              >
                {method}
              </span>
            ))}
          </div>

        </div>

        {/* Mensagem de Segurança */}
        <div className="mt-8 text-center px-4">
          <p className="text-neutral-500 text-[13px] leading-relaxed max-w-md mx-auto">
            🛡️ Pagamento 100% seguro. O pix será identificado no nome de <span className="font-bold text-neutral-800">ITALLO FERNANDES AQUINO</span>, responsável financeiro da Páscoa Lucrativa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
