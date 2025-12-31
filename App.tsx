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

  if (appState === 'landing') {
    return <LandingPage onStart={enterMainApp} />;
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 flex flex-col">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-grow container mx-auto p-4 md:p-8">
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