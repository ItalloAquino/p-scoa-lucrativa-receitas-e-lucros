const CreatorSection = () => {
  return (
    <section className="bg-cream-dark section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-10">
          Quem está por trás do <span className="text-gold">Páscoa Lucrativa</span>
        </h2>

        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mb-6 ring-4 ring-gold/30">
            AS
          </div>
          <p className="text-foreground/80 font-body text-base sm:text-lg leading-relaxed">
            <strong className="text-chocolate">Ana Souza</strong> faz ovos de Páscoa há 5 anos e
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
