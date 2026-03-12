import { SITE_CONFIG } from "@/config/site";

const CreatorSection = () => {
  return (
    <section className="bg-cream-dark section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-10">
          Quem está por trás do <span className="text-gold">{SITE_CONFIG.title.split(" — ")[0]}</span>
        </h2>

        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <div className="w-28 h-28 rounded-full mb-6 ring-4 ring-gold/30 overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co/tPNBH8Xj/PAOLA-RAMOS-02.jpg"
              alt="Paola Ramos"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-foreground/80 font-body text-base sm:text-lg leading-relaxed">
            <strong className="text-chocolate">Paola Ramos</strong> faz ovos de Páscoa há 5 anos e
            transformou a confeitaria em sua principal fonte de renda. Hoje ensina outras
            mulheres a fazer o mesmo com um método simples, direto e testado. Sua missão é provar
            que qualquer mulher pode começar a lucrar com chocolate — mesmo sem experiência
            nenhuma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
