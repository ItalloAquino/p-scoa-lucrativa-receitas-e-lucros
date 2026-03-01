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

const IncludedSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate mb-10">
          Tudo que você recebe ao garantir hoje
        </h2>

        <div className="max-w-lg mx-auto space-y-3 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-cream-dark rounded-xl p-4 shadow-card text-left"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                <Check size={16} className="text-gold" />
              </div>
              <p className="font-body text-foreground text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/70 font-body text-base sm:text-lg mb-8 italic">
          Tudo isso por apenas <strong className="text-cta-orange">R$27</strong> — menos que um ovo
          industrializado de supermercado.
        </p>

        <CTAButton />
      </div>
    </section>
  );
};

export default IncludedSection;
