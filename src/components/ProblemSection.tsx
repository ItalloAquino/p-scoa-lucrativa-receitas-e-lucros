const problems = [
  "Vê a Páscoa chegar e sente que deveria estar lucrando, mas não sabe por onde começar",
  "Já tentou fazer em casa mas ficou com aparência amadora que ninguém compra",
  "Tem medo de investir em ingredientes e não conseguir vender",
  "Não sabe quanto cobrar nem como divulgar pelo WhatsApp",
];

const ProblemSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-10">
          Você se identifica com alguma dessas situações?
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-cream-dark rounded-xl p-5 shadow-card"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">❌</span>
              <p className="text-foreground font-body text-base sm:text-lg leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-lg sm:text-xl font-semibold text-chocolate font-body">
          Se você disse sim para qualquer uma delas,{" "}
          <span className="text-cta-orange">você está no lugar certo.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
