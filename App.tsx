
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

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
