import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência para começar?",
    a: "Não. O método foi criado especialmente para quem está começando do zero. A primeira aula já te coloca em prática.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, você recebe o acesso à área de membros por e-mail.",
  },
  {
    q: "Funciona fora da época da Páscoa?",
    a: "Sim! Ovos de chocolate gourmet têm demanda o ano todo — datas comemorativas, presentes corporativos, encomendas personalizadas.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia total. Basta enviar um e-mail e devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    q: "Como vou assistir às aulas?",
    a: "Pela área de membros, direto no celular ou computador, sem precisar baixar nada. Acesso 24h por dia.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chocolate text-center mb-10">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-cream-dark rounded-xl border border-border px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-body font-semibold text-chocolate text-sm sm:text-base hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/70 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
