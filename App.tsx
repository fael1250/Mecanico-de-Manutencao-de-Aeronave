import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import LandingPage from './components/LandingPage';
import { View } from './types';

type AppState = 'landing' | 'main';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const enterMainApp = () => {
    setAppState('main');
  };

  const goToLanding = () => {
    setAppState('landing');
  };

  if (appState === 'landing') {
    return <LandingPage onStart={enterMainApp} />;
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 flex flex-col">
      <Header onGoHome={goToLanding} />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="flex items-center space-x-8 border-b border-[#30363D] mb-8">
            <button 
                onClick={() => setCurrentView(View.Dashboard)}
                className={`flex items-center space-x-2 py-3 text-sm font-semibold transition border-b-2 -mb-px ${currentView === View.Dashboard ? 'text-cyan-400 border-cyan-400' : 'text-gray-400 border-transparent hover:text-white'}`}>
                <div className={`w-5 h-5 border-2 ${currentView === View.Dashboard ? 'border-cyan-400' : 'border-gray-500'} rounded-md`}></div>
                <span>Dashboard</span>
            </button>
            <button 
                onClick={() => setCurrentView(View.Quiz)}
                className={`py-3 text-sm font-semibold transition border-b-2 -mb-px ${currentView === View.Quiz ? 'text-cyan-400 border-cyan-400' : 'text-gray-400 border-transparent hover:text-white'}`}>
                <span>Simulado ANAC</span>
            </button>
        </div>

        {currentView === View.Dashboard && <Dashboard currentChapterIndex={currentChapterIndex} setCurrentChapterIndex={setCurrentChapterIndex} />}
        {currentView === View.Quiz && <QuizView />}
      </main>
      <footer className="text-center p-4 text-xs text-gray-500 font-technical">
        Desenvolvido para futuros Mecânicos de Manutenção de Aeronaves.
      </footer>
    </div>
  );
};

export default App;