import { Check } from "lucide-react";

const bullets = [
  "Ovo trufado cremoso que justifica cobrar R$45+ a unidade",
  "Técnica de temperagem sem equipamentos caros",
  "Embalagem de baixo custo com aparência premium",
  "Como precificar sem trabalhar de graça",
  "Script de vendas pelo WhatsApp que converte",
  "Os sabores mais pedidos do mercado em 2025",
  "Como organizar a produção e não se perder nos pedidos",
  "Passo a passo para quem está começando do zero",
];

const LearningSection = () => {
  return (
    <section className="bg-chocolate section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream text-center mb-12">
          O que você vai dominar com o{" "}
          <span className="text-gold-light">Páscoa Lucrativa</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bullets.map((bullet, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-chocolate-medium/60 rounded-xl p-5 border border-gold/10"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                <Check size={14} className="text-gold-light" />
              </div>
              <p className="text-cream/90 font-body text-sm sm:text-base leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
