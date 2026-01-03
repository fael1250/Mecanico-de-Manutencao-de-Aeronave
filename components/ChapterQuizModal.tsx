import React, { useState, useCallback, useEffect } from 'react';
import { generateQuizWithGemini } from "../services/quizService";
import { QuizQuestion, Chapter } from '../types';

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
    const [showExplanation, setShowExplanation] = useState(false);

    const startQuiz = useCallback(async () => {
        setQuizState('loading');
        setError(null);
        try {
            const generatedQuestions = await generateQuizWithGemini(chapter, 10);
            if (generatedQuestions && generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
                setUserAnswers(new Array(generatedQuestions.length).fill(null));
                setCurrentQuestionIndex(0);
                setScore(0);
                setShowExplanation(false);
                setQuizState('active');
            } else {
                setError("Não foi possível gerar questões para este capítulo no momento.");
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
        if (showExplanation) return;
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
        if (optionIndex === questions[currentQuestionIndex].correctAnswerIndex) {
            setScore(s => s + 1);
        }
        setShowExplanation(true);
    };
    
    const nextQuestion = () => {
        setShowExplanation(false);
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
                    <p className="font-technical text-lg text-gray-300">Gerando quiz com IA...</p>
                    <p className="font-technical text-sm text-gray-500">Isso pode levar alguns segundos.</p>
                </div>
            );
        }

        if (quizState === 'finished') {
             const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
             return (
                <div className="text-center p-6 flex flex-col flex-grow">
                    <div className="flex-grow flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Quiz Concluído!</h3>
                        {error ? (
                             <p className="text-red-400 font-technical">{error}</p>
                        ) : (
                            <>
                                <p className="text-gray-300 text-lg">Sua pontuação final:</p>
                                <p className="text-6xl font-black my-2 text-cyan-400">{percentage}%</p>
                                <p className="font-technical text-gray-400">({score} de {questions.length} respostas corretas)</p>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center mt-6 space-x-4">
                        {!error && (
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
                            
                            let buttonClass = 'bg-[#30363D] hover:bg-gray-600 border-transparent';
                            if (showExplanation) {
                                if (isCorrect) {
                                    buttonClass = 'bg-green-600 border-green-400 scale-[1.02] shadow-lg shadow-green-500/20';
                                } else if (isSelected) {
                                     buttonClass = 'bg-red-600 border-red-400 opacity-80';
                                } else {
                                     buttonClass = 'bg-[#161B22] border-[#30363D] opacity-40';
                                }
                            }

                            return (
                                <button key={index} onClick={() => handleAnswer(index)} disabled={showExplanation}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all text-white flex items-start ${buttonClass}`}>
                                    <span className="font-bold mr-4 bg-black/20 w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0">
                                        {String.fromCharCode(65 + index)}
                                    </span> 
                                    <span>{option}</span>
                                </button>
                            );
                        })}
                    </div>
                     {showExplanation && (
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                           {question.explanation && (
                               <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30 mb-4">
                                   <p className="font-bold text-cyan-400 mb-1">Fundamento:</p>
                                   <p className="text-gray-300 text-sm leading-relaxed">{question.explanation}</p>
                               </div>
                           )}
                           <div className="flex justify-end">
                               <button onClick={nextQuestion} className="bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                                   <span>{currentQuestionIndex < questions.length - 1 ? 'PRÓXIMA' : 'FINALIZAR'}</span>
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                   </svg>
                               </button>
                           </div>
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