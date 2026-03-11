import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ArrowRight, Sparkles, Heart, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
    id: string;
    text: string;
    block: 1 | 2;
    options: {
        text: string;
        points?: number;
    }[];
}

const QUESTIONS: Question[] = [
    // BLOCO 1 — COLETA DE DADOS DA LEAD
    {
        id: "gender",
        text: "Antes de começar, como prefere ser chamada?",
        block: 1,
        options: [
            { text: "Mulher" },
            { text: "Homem" },
            { text: "Prefiro não dizer" }
        ]
    },
    {
        id: "age",
        text: "Qual é a sua faixa de idade?",
        block: 1,
        options: [
            { text: "18–25" },
            { text: "26–35" },
            { text: "36–45" },
            { text: "46+" }
        ]
    },
    {
        id: "job",
        text: "Como está sua situação de trabalho hoje?",
        block: 1,
        options: [
            { text: "Empregada com carteira" },
            { text: "Autônoma/Freelancer" },
            { text: "Desempregada no momento" },
            { text: "Sou dona de casa" }
        ]
    },
    {
        id: "intent",
        text: "O que te trouxe até aqui hoje?",
        block: 1,
        options: [
            { text: "Quero uma renda extra nessa Páscoa" },
            { text: "Quero aprender a fazer chocolate" },
            { text: "Quero montar um negócio próprio" },
            { text: "Só estou explorando por enquanto" }
        ]
    },
    // BLOCO 2 — PERGUNTAS DE DOR, DESEJO E QUALIFICAÇÃO
    {
        id: "finance",
        text: "Como descreveria sua situação financeira agora?",
        block: 2,
        options: [
            { text: "Tenho contas atrasadas e preciso resolver isso logo", points: 3 },
            { text: "Pago as contas mas não sobra nada no fim do mês", points: 3 },
            { text: "Estável, mas quero aumentar minha renda", points: 2 },
            { text: "Boa, só quero uma renda extra por lazer", points: 1 }
        ]
    },
    {
        id: "experience",
        text: "Qual é sua relação com chocolate e confeitaria?",
        block: 2,
        options: [
            { text: "Nunca fiz nada, sou totalmente iniciante", points: 3 },
            { text: "Já tentei mas não ficou bom", points: 3 },
            { text: "Faço algumas coisas simples em casa", points: 2 },
            { text: "Tenho experiência, quero me aperfeiçoar", points: 1 }
        ]
    },
    {
        id: "fear",
        text: "O que mais te impede de começar a vender hoje?",
        block: 2,
        options: [
            { text: "Medo de investir e não conseguir vender", points: 3 },
            { text: "Não sei nem por onde começar", points: 3 },
            { text: "Falta de tempo para aprender", points: 2 },
            { text: "Ainda estou avaliando se vale a pena", points: 1 }
        ]
    },
    {
        id: "desire",
        text: "Se soubesse que ia funcionar, o que faria com a renda extra?",
        block: 2,
        options: [
            { text: "Pagaria contas atrasadas e respiraria aliviada", points: 3 },
            { text: "Compraria algo que adiei há tempos", points: 3 },
            { text: "Guardaria para uma reserva de emergência", points: 2 },
            { text: "Faria uma viagem ou presente especial", points: 2 }
        ]
    },
    {
        id: "urgency",
        text: "A Páscoa está chegando. Como se sente em relação a isso?",
        block: 2,
        options: [
            { text: "Ansiosa — preciso começar agora", points: 3 },
            { text: "Motivada — ainda dá tempo se eu começar logo", points: 3 },
            { text: "Tranquila — ainda tenho tempo de sobra", points: 2 },
            { text: "Insegura — não sei se consigo a tempo", points: 1 }
        ]
    },
    {
        id: "readiness",
        text: "Se tivesse as receitas certas agora, quando começaria?",
        block: 2,
        options: [
            { text: "Hoje mesmo, sem pensar duas vezes", points: 3 },
            { text: "Essa semana com certeza", points: 3 },
            { text: "Esse mês, me organizando", points: 2 },
            { text: "Ainda precisaria pensar mais", points: 1 }
        ]
    }
];

const Quiz = ({ onComplete }: { onComplete?: () => void }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leadData, setLeadData] = useState<Record<string, string>>({});
    const [totalScore, setTotalScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentQuestion = QUESTIONS[currentIndex];
    const progress = ((currentIndex) / QUESTIONS.length) * 100;

    useEffect(() => {
        if (showResult) {
            console.log("Lead Data Collected:", leadData);
            console.log("Final Score:", totalScore);
        }
    }, [showResult, leadData, totalScore]);

    const handleOptionSelect = (option: { text: string; points?: number }) => {
        setIsTransitioning(true);
        setLeadData(prev => ({ ...prev, [currentQuestion.id]: option.text }));
        if (option.points) {
            setTotalScore(prev => prev + (option.points || 0));
        }

        setTimeout(() => {
            if (currentIndex < QUESTIONS.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setIsTransitioning(false);
            } else {
                setShowResult(true);
                setIsTransitioning(false);
            }
        }, 300);
    };

    const getResult = () => {
        if (totalScore >= 15) {
            return {
                icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-gold animate-pulse" />,
                title: "🔥 Você Nasceu Pra Isso. Só Faltava a Receita Certa.",
                message: "Tudo indica que esse é o momento. A motivação está acesa, a necessidade é real e a Páscoa está chegando. O Pack Páscoa Lucrativa foi feito exatamente pra esse perfil — e por R$27 não existe razão pra adiar.",
                cta: "Ver Como Posso Lucrar Nessa Páscoa"
            };
        } else if (totalScore >= 9) {
            return {
                icon: <Rocket className="w-10 h-10 md:w-12 md:h-12 text-gold" />,
                title: "🍫 Uma Decisão Separa Você de Uma Páscoa Completamente Diferente.",
                message: "Já tem motivação e potencial — só precisa das receitas certas e de um passo de confiança. Mais de 10 receitas gourmet em vídeo, do básico ao sofisticado, por apenas R$27.",
                cta: "Ver Como Posso Lucrar Nessa Páscoa"
            };
        } else {
            return {
                icon: <Heart className="w-10 h-10 md:w-12 md:h-12 text-gold" />,
                title: "🌱 A Semente Já Está Plantada. Só Falta Regar.",
                message: "Talvez ainda esteja avaliando — e tudo bem. Mas a Páscoa não espera. Com mais de 10 receitas exclusivas em vídeo o aprendizado é simples e direto. Por R$27 o risco é mínimo e a oportunidade é enorme.",
                cta: "Ver Como Posso Lucrar Nessa Páscoa"
            };
        }
    };

    if (showResult) {
        const result = getResult();
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center p-4 md:p-8">
                <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold-light/20 animate-in fade-in zoom-in duration-500">
                    <div className="bg-chocolate p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-chocolate-medium/40 to-transparent"></div>
                        <div className="relative z-10 flex justify-center mb-4">
                            {result.icon}
                        </div>
                        <h1 className="relative z-10 font-display text-xl md:text-3xl text-gold mb-2 leading-tight">
                            Seu Resultado
                        </h1>
                    </div>
                    <div className="p-6 md:p-12 text-center">
                        <h2 className="font-display text-lg md:text-2xl text-chocolate mb-4 md:mb-6 leading-tight break-words">
                            {result.title}
                        </h2>
                        <p className="text-chocolate-medium mb-8 md:mb-10 leading-relaxed text-base md:text-lg italic">
                            {result.message}
                        </p>
                        <Button
                            onClick={() => {
                                if (onComplete) {
                                    onComplete();
                                } else {
                                    navigate("/");
                                }
                            }}
                            className="w-full h-auto py-4 md:py-5 px-6 text-base md:text-lg font-bold bg-cta-orange hover:bg-cta-orange-hover text-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(234,88,12,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] group whitespace-normal"
                        >
                            <span className="flex-1">{result.cta}</span>
                        </Button>

                        <p className="mt-6 text-sm text-chocolate-medium/60 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" /> Acesso imediato após o checkout
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4 md:p-8 font-body overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-chocolate/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-2xl w-full relative z-10 flex flex-col gap-6 md:gap-8">
                {/* Header/Progress */}
                <div className="text-center w-full px-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-chocolate/5 text-chocolate rounded-full text-xs md:text-sm font-semibold mb-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
                        Quiz: Desperte sua Páscoa Lucrativa
                    </div>
                    <div className="flex flex-wrap items-center justify-between text-[10px] md:text-sm text-chocolate-medium mb-2 font-medium gap-2">
                        <span>Progresso da sua jornada</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-chocolate/10 [&>div]:bg-gold rounded-full" />
                </div>

                {/* Question Card Container */}
                <div className="w-full min-h-[400px] flex flex-col items-stretch">
                    <div className={cn(
                        "bg-white rounded-3xl shadow-xl p-6 md:p-12 transition-all duration-300 border border-gold-light/10 flex-1",
                        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    )}>
                        <span className="text-gold font-bold text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                            {currentQuestion.block === 1 ? "Etapa 1: Conhecendo Você" : "Etapa 2: Seu Potencial"}
                        </span>
                        <h2 className="font-display text-xl md:text-3xl text-chocolate mb-6 md:mb-8 leading-tight break-words">
                            {currentQuestion.text}
                        </h2>

                        <div className="grid gap-3 md:gap-4">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(option)}
                                    className="group flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl border-2 border-chocolate/10 bg-white hover:border-gold hover:bg-gold/5 transition-all text-left whitespace-normal break-words"
                                >
                                    <span className="text-base md:text-lg text-chocolate-medium font-medium group-hover:text-chocolate transition-colors pr-4">
                                        {option.text}
                                    </span>
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-chocolate/20 group-hover:border-gold flex items-center justify-center transition-all group-hover:bg-gold flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-white transition-all"></div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60 px-4">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-chocolate-medium font-medium">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-gold" /> 100% Seguro
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-chocolate-medium font-medium">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-gold" /> Perfil Personalizado
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
