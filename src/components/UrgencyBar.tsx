import { useState, useEffect } from "react";

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 30 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-cta-orange py-2.5 px-4 text-center">
      <p className="text-sm md:text-base font-semibold text-accent-foreground font-body flex items-center justify-center gap-2 flex-wrap">
        <span>⚠️ Oferta especial por tempo limitado — Garanta agora por apenas R$27</span>
        <span className="inline-flex items-center bg-chocolate/30 rounded-md px-3 py-0.5 font-mono text-accent-foreground tabular-nums">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </p>
    </div>
  );
};

export default UrgencyBar;
