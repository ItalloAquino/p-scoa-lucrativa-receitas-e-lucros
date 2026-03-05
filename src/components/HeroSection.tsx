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
          Não São Receitas Qualquer.{" "}
          <span className="text-gold-light">São as Que Geram R$800 a R$2.000 Nessa Páscoa</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          Um pack exclusivo com mais de 10 receitas gourmet mais lucrativas da temporada — do básico ao sofisticado — para você produzir em casa, encantar clientes e lucrar de verdade. Mesmo começando do zero.
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

        {/* Vertical Video Embed */}
        <div className="mt-12 max-w-[320px] mx-auto">
          <div className="bg-chocolate-medium rounded-xl p-3 shadow-2xl border border-gold/20">
            <div className="bg-black rounded-lg overflow-hidden relative" style={{ padding: "177.78% 0 0 0" }}>
              <iframe
                src="https://player.vimeo.com/video/1169377949?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="New Project"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
