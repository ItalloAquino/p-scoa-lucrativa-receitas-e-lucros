import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="bg-cream-dark section-padding">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto bg-cream rounded-2xl p-8 sm:p-10 shadow-card border-2 border-gold/30 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
            <ShieldCheck size={32} className="text-gold" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-chocolate mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-foreground/70 font-body text-sm sm:text-base leading-relaxed">
            Se por qualquer motivo você não gostar do conteúdo, devolvemos{" "}
            <strong className="text-chocolate">100% do seu dinheiro</strong> — sem perguntas e sem
            burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
