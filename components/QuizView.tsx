
import React, { useState, useCallback } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, QuizDifficulty } from '../types';
import { basicModuleContent } from '../data/content';

type QuizState = 'idle' | 'loading' | 'active' | 'finished';

const QuizView: React.FC = () => {
    const [quizState, setQuizState] = useState<QuizState>('idle');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState<QuizDifficulty>(QuizDifficulty.Facil);
    const [showExplanation, setShowExplanation] = useState(false);

    const startQuiz = useCallback(async () => {
        setQuizState('loading');
        setError(null);
        try {
            const generatedQuestions = await generateQuiz(basicModuleContent, difficulty, 60, true);
            if (generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
                setUserAnswers(new Array(generatedQuestions.length).fill(null));
                setCurrentQuestionIndex(0);
                setScore(0);
                setShowExplanation(false);
                setQuizState('active');
            } else {
                setError("Ocorreu um erro e não foi possível gerar o quiz. Tente novamente.");
                setQuizState('idle');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Um erro desconhecido ocorreu.");
            setQuizState('idle');
        }
    }, [difficulty]);

    const handleAnswer = (optionIndex: number) => {
        if (showExplanation) return;
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswerIndex) {
            setScore(s => s + 1);
        }
        setShowExplanation(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setQuizState('finished');
        }
    };
    
    const resetQuiz = () => {
        setQuizState('idle');
        setQuestions([]);
        setUserAnswers([]);
    };

    if (quizState === 'loading') {
        return (
            <div className="text-center flex flex-col items-center justify-center h-64">
                <svg className="animate-spin h-10 w-10 text-cyan-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="font-technical text-lg text-gray-300">Gerando seu simulado com IA... Isso pode levar um momento.</p>
            </div>
        );
    }
    
    if (quizState === 'idle') {
        return (
            <div className="text-center p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Simulado ANAC - Módulo Básico</h2>
                <p className="text-gray-400 mb-6 font-technical">Teste seus conhecimentos com um quiz de 60 questões gerado por IA, baseado no material de estudo.</p>
                <div className="mb-6">
                    <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-2">Selecione a Dificuldade:</label>
                    <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value as QuizDifficulty)}
                        className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5">
                        <option value={QuizDifficulty.Facil}>Fácil</option>
                        <option value={QuizDifficulty.Medio}>Médio</option>
                        <option value={QuizDifficulty.Dificil}>Difícil</option>
                    </select>
                </div>
                {error && <p className="text-red-400 mb-4">{error}</p>}
                <button onClick={startQuiz} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
                    Iniciar Simulado
                </button>
            </div>
        );
    }

    if (quizState === 'finished') {
        const finalScore = userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswerIndex ? score + 1 : score;
        const percentage = Math.round((finalScore / questions.length) * 100);
        return (
            <div className="text-center p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Simulado Concluído!</h2>
                <p className="text-gray-300 text-lg mb-2">Sua pontuação final:</p>
                <p className={`text-5xl font-bold mb-4 ${percentage >= 70 ? 'text-green-400' : 'text-yellow-400'}`}>{percentage}%</p>
                <p className="font-technical text-gray-400 mb-6">({finalScore} de {questions.length} respostas corretas)</p>
                <button onClick={resetQuiz} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
                    Tentar Novamente
                </button>
            </div>
        );
    }

    const question = questions[currentQuestionIndex];
    return (
        <div className="p-4 md:p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-3xl mx-auto font-technical">
             <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                <span>Dificuldade: {difficulty}</span>
                <span>Questão {currentQuestionIndex + 1} de {questions.length}</span>
            </div>
            <p className="text-xl text-center text-gray-200 mb-8">{question.question}</p>
            <div className="space-y-4">
                {question.options.map((option, index) => {
                    const isSelected = userAnswers[currentQuestionIndex] === index;
                    const isCorrect = question.correctAnswerIndex === index;
                    
                    let buttonClass = 'bg-[#30363D]';
                    if (showExplanation) {
                        if (isCorrect) {
                            buttonClass = 'bg-green-500';
                        } else if (isSelected) {
                             buttonClass = 'bg-red-500';
                        }
                    }

                    return (
                        <button key={index} onClick={() => handleAnswer(index)} disabled={showExplanation}
                            className={`w-full text-left p-4 rounded-lg transition-colors text-white ${buttonClass}`}>
                            <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span> {option}
                        </button>
                    );
                })}
            </div>
            {showExplanation && question.explanation && (
                 <div className="mt-8">
                    <div className="p-4 bg-[#0D1117] rounded-lg border border-cyan-500/50">
                        <p className="font-bold text-cyan-400 mb-2">Explicação:</p>
                        <p className="text-gray-300">{question.explanation}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={nextQuestion} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
                            {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Finalizar'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizView;