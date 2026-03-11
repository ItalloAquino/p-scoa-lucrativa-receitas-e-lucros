import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Index from "./Index";

const Home = () => {
    const [showQuiz, setShowQuiz] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if the user has already completed the quiz
        const quizCompleted = localStorage.getItem("quiz_completed");
        setShowQuiz(quizCompleted !== "true");
    }, []);

    const handleQuizComplete = () => {
        localStorage.setItem("quiz_completed", "true");

        // Track Lead event in Facebook Pixel
        if ((window as any).fbq) {
            (window as any).fbq("track", "Lead");
            console.log("Facebook Pixel: Lead event tracked");
        }

        // Reload the page to show the sales page (Index) as requested
        // Small delay to ensure pixel event is sent
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    // Prevent flash of content while checking localStorage
    if (showQuiz === null) return null;

    return showQuiz ? <Quiz onComplete={handleQuizComplete} /> : <Index />;
};

export default Home;
