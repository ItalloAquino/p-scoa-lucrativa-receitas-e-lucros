
const testimonials = [
  "https://iili.io/qcqh4xp.webp",
  "https://iili.io/qcqhgbR.webp",
  "https://iili.io/qcqhUOv.webp",
];

const TestimonialsSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-12">
          O que nossas alunas estão dizendo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {testimonials.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-card border border-border bg-cream-dark transition-transform hover:scale-[1.02]"
            >
              <img
                src={img}
                alt={`Depoimento ${i + 1}`}
                className="w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
