import { Lock, ShieldCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";
import { SITE_CONFIG } from "@/config/site";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-narrow relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
          Como Pessoas Comuns Estão Fazendo Até R$2.000 em 7 Dias{" "}
          <span className="text-gold-light">Vendendo Ovos de Páscoa Caseiros (Mesmo Sem Experiência)</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          Um passo a passo simples com as receitas exatas que mais vendem, + como precificar, divulgar e transformar ingredientes baratos em lucro real — mesmo começando do zero e com pouco dinheiro.
        </p>

        <CTAButton />

        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
          <span className="flex items-center gap-1.5 text-cream/70 text-xs sm:text-sm font-body">
            <Lock size={14} /> Compra segura
          </span>
          <span className="flex items-center gap-1.5 text-cream/70 text-xs sm:text-sm font-body">
            <Zap size={14} /> Acesso imediato
          </span>
          <span className="flex items-center gap-1.5 text-cream/70 text-xs sm:text-sm font-body">
            <ShieldCheck size={14} /> Garantia de 7 dias
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
