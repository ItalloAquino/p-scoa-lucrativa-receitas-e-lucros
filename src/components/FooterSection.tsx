const FooterSection = () => {
  return (
    <footer className="bg-chocolate py-10 px-4">
      <div className="container-narrow text-center">
        <p className="text-cream/60 font-body text-sm mb-3">
          © 2025 Páscoa Lucrativa — Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <button className="text-cream/40 font-body text-xs hover:text-cream/60 transition-colors underline">
            Política de Privacidade
          </button>
          <span className="text-cream/20">|</span>
          <button className="text-cream/40 font-body text-xs hover:text-cream/60 transition-colors underline">
            Termos de Uso
          </button>
        </div>
        <p className="text-cream/30 font-body text-[10px] max-w-lg mx-auto leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho
          de resultados feita por nosso produto é apenas estimativa e não há garantia de que
          você alcançará os mesmos resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
