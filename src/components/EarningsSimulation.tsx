import CTAButton from "./CTAButton";

const rows = [
  { ovos: 10, lucro: "R$500", highlight: false },
  { ovos: 20, lucro: "R$1.000", highlight: false },
  { ovos: 30, lucro: "R$1.500", highlight: false },
  { ovos: 40, lucro: "R$2.000", highlight: true },
];

const EarningsSimulation = () => {
  return (
    <section className="bg-cream section-padding" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div className="container-narrow text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate mb-4">
          Como você pode ganhar de R$800 a R$2.000 nessa Páscoa
        </h2>
        <p className="text-foreground/70 font-body text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Esses valores não são promessas. São exemplos reais do que alunas estão
          faturando com os Ovos de Páscoa Lucrativos. Os números abaixo são baseados
          em vendas reais com precificação correta — exatamente o que você vai aprender
          dentro do curso.
        </p>

        {/* Simulation card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-card border border-border p-6 sm:p-8 mb-8">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-chocolate mb-1">
            📊 Simulação Real de Ganhos
          </h3>
          <p className="font-body text-foreground/50 text-sm mb-6">
            Com base em 1 modelo de ovo gourmet
          </p>

          {/* Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-cream rounded-xl p-4 text-center">
              <span className="text-2xl block mb-1">🏷️</span>
              <p className="font-body text-xs text-foreground/50">Preço de venda</p>
              <p className="font-body font-bold text-chocolate text-lg">R$75</p>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center">
              <span className="text-2xl block mb-1">🛒</span>
              <p className="font-body text-xs text-foreground/50">Custo estimado</p>
              <p className="font-body font-bold text-chocolate text-lg">R$25</p>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center">
              <span className="text-2xl block mb-1">💰</span>
              <p className="font-body text-xs text-foreground/50">Lucro por ovo</p>
              <p className="font-body font-bold text-cta-orange text-lg">R$50</p>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <table className="w-full text-left font-body">
              <thead>
                <tr className="bg-chocolate-medium text-cream">
                  <th className="py-3 px-4 text-sm font-semibold">Ovos Vendidos</th>
                  <th className="py-3 px-4 text-sm font-semibold text-right">Seu Lucro</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.highlight
                        ? "bg-gold/20 font-bold"
                        : i % 2 === 0
                        ? "bg-white"
                        : "bg-cream"
                    }
                  >
                    <td className="py-3 px-4 text-sm text-foreground">{row.ovos} ovos</td>
                    <td className={`py-3 px-4 text-sm text-right ${row.highlight ? "text-cta-orange font-bold" : "text-foreground"}`}>
                      {row.lucro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xl sm:text-2xl font-bold text-cta-orange mb-6">
          Você decide quanto quer ganhar! 🚀
        </p>

        <CTAButton />
      </div>
    </section>
  );
};

export default EarningsSimulation;
