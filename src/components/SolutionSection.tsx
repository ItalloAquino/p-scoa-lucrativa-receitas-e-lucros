const SolutionSection = () => {
  return (
    <section className="bg-cream-dark section-padding">
      <div className="container-narrow text-center">
        <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-4">
          A solução
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate mb-6">
          Apresentando o <span className="text-gold">Páscoa Lucrativa</span>
        </h2>
        <p className="text-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Um método completo para você sair do zero, receber pedidos reais, ter confiança na
          cozinha e <strong className="text-chocolate">lucrar ainda nesta Páscoa</strong>. Sem
          enrolação, sem termos complicados — apenas o passo a passo que funciona, testado por
          centenas de alunas.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {[
            { number: "10", label: "Vídeo-aulas" },
            { number: "500+", label: "Alunas" },
            { number: "R$2.000", label: "Potencial de lucro" },
          ].map((stat, i) => (
            <div key={i} className="bg-cream rounded-xl p-6 shadow-card min-w-[140px]">
              <p className="text-2xl sm:text-3xl font-bold text-gold font-display">{stat.number}</p>
              <p className="text-sm text-foreground/60 font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
