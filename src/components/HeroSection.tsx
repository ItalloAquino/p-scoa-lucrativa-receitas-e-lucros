import { Lock, ShieldCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-narrow relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
          Aprenda a Fazer Ovos de Páscoa Gourmet em Casa e{" "}
          <span className="text-gold-light">Lucre R$800 a R$2.000</span>{" "}
          Nesta Páscoa
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          10 receitas secretas e exclusivas em vídeo, do básico ao gourmet, para você vender do seu próprio lar — mesmo sem experiência
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

        {/* Course mockup */}
        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-chocolate-medium rounded-xl p-3 shadow-2xl border border-gold/20">
            <div className="bg-cream rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-cta-gradient flex items-center justify-center shadow-cta">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="white" />
                  </svg>
                </div>
                <p className="text-chocolate font-display font-bold text-lg">Páscoa Lucrativa</p>
                <p className="text-chocolate/60 font-body text-sm">10 vídeo-aulas exclusivas</p>
              </div>
              {/* Decorative eggs */}
              <div className="absolute bottom-2 left-4 w-8 h-10 rounded-full bg-gold/30 rotate-12" />
              <div className="absolute bottom-4 right-6 w-6 h-8 rounded-full bg-cta-orange/20 -rotate-6" />
              <div className="absolute top-4 right-8 w-5 h-7 rounded-full bg-chocolate/10 rotate-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
