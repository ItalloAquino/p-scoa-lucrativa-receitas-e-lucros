import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    city: "São Paulo",
    initials: "CR",
    text: "Segui o passo a passo e já no primeiro fim de semana fiz R$940 em pedidos. Não acreditei quando vi o Pix caindo!",
  },
  {
    name: "Fernanda L.",
    city: "Belo Horizonte",
    initials: "FL",
    text: "Sempre tive vontade mas achava que era difícil. O método da Ana é tão claro que fiz meu primeiro ovo perfeito na segunda aula.",
  },
  {
    name: "Juliana M.",
    city: "Curitiba",
    initials: "JM",
    text: "Investi R$27 e já recuperei mais de R$1.500. É o melhor investimento que fiz esse ano sem dúvida.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-12">
          O que nossas alunas estão dizendo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream-dark rounded-xl p-6 shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-chocolate text-sm">{t.name}</p>
                  <p className="font-body text-xs text-foreground/50">{t.city}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
