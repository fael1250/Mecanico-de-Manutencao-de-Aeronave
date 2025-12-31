import React, { useState, useCallback } from 'react';
import { generateQuiz } from '../services/quizService';
import { QuizQuestion, QuizDifficulty } from '../types';
import { basicModuleContent } from '../data/content';

type QuizState = 'idle' | 'loading' | 'active' | 'finished';

const QuizView: React.FC = () => {
    const [quizState, setQuizState] = useState<QuizState>('idle');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState<QuizDifficulty>(QuizDifficulty.Facil);
    const [showExplanation, setShowExplanation] = useState(false);

    const startQuiz = useCallback(async () => {
        setQuizState('loading');
        setError(null);
        try {
            // Configurado para 60 questões conforme pedido do usuário
            const generatedQuestions = await generateQuiz(basicModuleContent, difficulty, 60, true);
            if (generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
                setUserAnswers(new Array(generatedQuestions.length).fill(null));
                setCurrentQuestionIndex(0);
                setScore(0);
                setShowExplanation(false);
                setQuizState('active');
            } else {
                setError("Ocorreu um erro e não foi possível carregar as questões. Tente novamente.");
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
                <p className="font-technical text-lg text-gray-300">Compilando Simulando Geral (60 questões)...</p>
            </div>
        );
    }
    
    if (quizState === 'idle') {
        return (
            <div className="text-center p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Simulado Oficial ANAC</h2>
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-cyan-200 mb-2 font-bold">REGRAS DO EXAME:</p>
                    <ul className="text-xs text-gray-400 space-y-1 font-technical">
                        <li>• Questões: 60</li>
                        <li>• Matéria: Todos os capítulos</li>
                        <li>• Aprovação: 70% (mínimo 42 acertos)</li>
                        <li>• Tempo sugerido: 2 horas</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-2">Selecione o Nível de Dificuldade:</label>
                    <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value as QuizDifficulty)}
                        className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5">
                        <option value={QuizDifficulty.Facil}>Básico</option>
                        <option value={QuizDifficulty.Medio}>Intermediário</option>
                        <option value={QuizDifficulty.Dificil}>Avançado</option>
                    </select>
                </div>
                {error && <p className="text-red-400 mb-4">{error}</p>}
                <button onClick={startQuiz} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                    Iniciar Simulado Completo
                </button>
            </div>
        );
    }

    if (quizState === 'finished') {
        const finalScore = score;
        const percentage = Math.round((finalScore / questions.length) * 100);
        const isApproved = percentage >= 70;

        return (
            <div className="text-center p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-lg mx-auto shadow-2xl">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Exame Finalizado</h2>
                
                <div className={`inline-block p-4 rounded-full mb-6 ${isApproved ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'} border`}>
                    <p className={`text-4xl font-bold ${isApproved ? 'text-green-400' : 'text-red-400'}`}>
                        {isApproved ? 'APROVADO' : 'REPROVADO'}
                    </p>
                </div>

                <p className="text-gray-300 text-lg mb-2">Seu aproveitamento:</p>
                <p className={`text-6xl font-black mb-4 ${isApproved ? 'text-green-400' : 'text-yellow-500'}`}>{percentage}%</p>
                <p className="font-technical text-gray-400 mb-8">
                    Você acertou {finalScore} das {questions.length} questões.<br/>
                    {isApproved ? 'Excelente desempenho! Você está pronto para a banca.' : `Faltaram ${42 - finalScore} acertos para a nota de corte (70%).`}
                </p>

                <button onClick={resetQuiz} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
                    Tentar Novamente
                </button>
            </div>
        );
    }

    const question = questions[currentQuestionIndex];
    return (
        <div className="p-4 md:p-8 bg-[#161B22] border border-[#30363D] rounded-lg max-w-3xl mx-auto font-technical shadow-xl">
             <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                <span className="bg-[#30363D] px-3 py-1 rounded-full text-cyan-400 border border-cyan-400/30">{difficulty}</span>
                <span>Questão {currentQuestionIndex + 1} de {questions.length}</span>
            </div>
            
            <div className="mb-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
            </div>

            <p className="text-xl text-center text-gray-200 mb-8 leading-relaxed">{question.question}</p>
            <div className="grid grid-cols-1 gap-4">
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
                            <p className="font-bold text-cyan-400 mb-1">Fundamento ANAC:</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{question.explanation}</p>
                        </div>
                    )}
                    <div className="flex justify-end">
                        <button onClick={nextQuestion} className="bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                            <span>{currentQuestionIndex < questions.length - 1 ? 'PRÓXIMA QUESTÃO' : 'FINALIZAR EXAME'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizView;
