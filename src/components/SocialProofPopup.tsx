import { useEffect, useState } from "react";
import { X } from "lucide-react";

const buyers = [
  { name: "Mariana S.", city: "São Paulo, SP" },
  { name: "Fernanda O.", city: "Belo Horizonte, MG" },
  { name: "Camila R.", city: "Curitiba, PR" },
  { name: "Juliana M.", city: "Fortaleza, CE" },
  { name: "Patrícia L.", city: "Salvador, BA" },
  { name: "Aline T.", city: "Recife, PE" },
  { name: "Vanessa B.", city: "Manaus, AM" },
  { name: "Renata C.", city: "Porto Alegre, RS" },
  { name: "Cristiane F.", city: "Goiânia, GO" },
  { name: "Daniela N.", city: "Brasília, DF" },
];

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  

  useEffect(() => {
    if (dismissed) return;

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;
    if (!visible) return;

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % buyers.length);
      setVisible(true);
    }, 20000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const buyer = buyers[index];
  const randomMin = Math.floor(Math.random() * 9) + 1;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-[320px] w-full transition-all duration-500 pointer-events-auto ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border-l-4 border-l-cta-orange p-4 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>
        <span className="absolute top-2 right-8 text-sm">🔥</span>
        <p className="font-body font-bold text-chocolate text-sm pr-10">
          {buyer.name} — {buyer.city}
        </p>
        <p className="font-body text-foreground/70 text-xs mt-1">
          acabou de garantir por R$27 e vai lucrar muito nessa Páscoa! 🔥
        </p>
        <p className="font-body text-foreground/40 text-[11px] mt-1.5">
          há {randomMin} minutos
        </p>
      </div>
    </div>
  );
};

export default SocialProofPopup;
