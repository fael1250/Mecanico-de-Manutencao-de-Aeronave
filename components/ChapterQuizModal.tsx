import React, { useState, useCallback, useEffect } from 'react';
import { generateQuiz } from '../services/quizService';
import { QuizQuestion, QuizDifficulty, Chapter } from '../types';

interface ChapterQuizModalProps {
  chapter: Chapter;
  onClose: () => void;
}

type QuizState = 'loading' | 'active' | 'finished';

const ChapterQuizModal: React.FC<ChapterQuizModalProps> = ({ chapter, onClose }) => {
    const [quizState, setQuizState] = useState<QuizState>('loading');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
    const [score, setScore] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const startQuiz = useCallback(async () => {
        setQuizState('loading');
        setError(null);
        try {
            // Usa o gerador local para carregar 10 questões específicas do capítulo
            const generatedQuestions = await generateQuiz([chapter], QuizDifficulty.Medio, 10, false);
            if (generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
                setUserAnswers(new Array(generatedQuestions.length).fill(null));
                setCurrentQuestionIndex(0);
                setScore(0);
                setQuizState('active');
            } else {
                setError("Não há questões cadastradas para este capítulo no momento.");
                setQuizState('finished');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Um erro desconhecido ocorreu.");
            setQuizState('finished');
        }
    }, [chapter]);

    useEffect(() => {
        startQuiz();
    }, [startQuiz]);

    const handleAnswer = (optionIndex: number) => {
        if (userAnswers[currentQuestionIndex] !== null) return;
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
        if (optionIndex === questions[currentQuestionIndex].correctAnswerIndex) {
            setScore(s => s + 1);
        }
    };
    
    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setQuizState('finished');
        }
    };

    const renderContent = () => {
        if (quizState === 'loading') {
            return (
                <div className="text-center flex flex-col items-center justify-center h-64 flex-grow">
                    <svg className="animate-spin h-10 w-10 text-cyan-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="font-technical text-lg text-gray-300">Carregando questões do capítulo...</p>
                </div>
            );
        }

        if (quizState === 'finished') {
             const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
             const isApproved = percentage >= 70;
             return (
                <div className="text-center p-6 flex flex-col flex-grow">
                    <div className="flex-grow flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Quiz Concluído!</h3>
                        {error ? (
                             <p className="text-red-400">{error}</p>
                        ) : (
                            <>
                                <p className="text-gray-300 text-lg">Sua pontuação final:</p>
                                <p className="text-6xl font-black my-2 text-cyan-400">{percentage}%</p>
                                <p className="font-technical text-gray-400">({score} de {questions.length} respostas corretas)</p>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center mt-6 space-x-4">
                        {!isApproved && !error && (
                            <button onClick={startQuiz} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105">
                                Tentar Novamente
                            </button>
                        )}
                        <button onClick={onClose} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-8 rounded-lg transition-transform transform hover:scale-105">
                            Fechar
                        </button>
                    </div>
                </div>
            );
        }

        if (quizState === 'active' && questions.length > 0) {
            const question = questions[currentQuestionIndex];
            const answered = userAnswers[currentQuestionIndex] !== null;

            return (
                 <div className="p-6 overflow-y-auto font-technical">
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                       <span>Questão {currentQuestionIndex + 1} de {questions.length}</span>
                    </div>
                    <p className="text-lg md:text-xl text-center text-gray-200 mb-8">{question.question}</p>
                    <div className="space-y-4">
                        {question.options.map((option, index) => {
                            const isSelected = userAnswers[currentQuestionIndex] === index;
                            const isCorrect = question.correctAnswerIndex === index;
                            
                            let buttonClass = 'bg-[#30363D] hover:bg-gray-600';
                            if (answered) {
                                if (isCorrect) {
                                    buttonClass = 'bg-green-500';
                                } else if (isSelected) {
                                    buttonClass = 'bg-red-500';
                                } else {
                                    buttonClass = 'bg-[#30363D] opacity-60';
                                }
                            }

                            return (
                                <button key={index} onClick={() => handleAnswer(index)} disabled={answered}
                                    className={`w-full text-left p-4 rounded-lg transition-colors text-white ${buttonClass}`}>
                                    <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span> {option}
                                </button>
                            );
                        })}
                    </div>
                     {answered && (
                        <div className="flex justify-end mt-8">
                            <button onClick={nextQuestion} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
                                {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Finalizar'}
                            </button>
                        </div>
                    )}
                </div>
            );
        }

        return null;
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-[#161B22] border border-cyan-500/50 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b border-[#30363D]">
                    <h2 className="text-xl font-bold text-cyan-400">Avaliação: {chapter.title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default ChapterQuizModal;