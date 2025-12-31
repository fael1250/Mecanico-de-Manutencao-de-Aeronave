
import React, { useState, useEffect } from 'react';
// FIX: Updated Firebase imports to align with v8 compat API.
import { User } from 'firebase/auth';
import { auth, googleProvider } from './services/firebase';

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
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    // FIX: Changed to v8 compat API style for onAuthStateChanged.
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      // FIX: Changed to v8 compat API style for signInWithPopup.
      await auth.signInWithPopup(googleProvider);
    } catch (error: any) {
      console.error("Erro ao fazer login com Google:", error);
      if (error.code === 'auth/unauthorized-domain') {
        alert(
          'ERRO DE AUTENTICAÇÃO: Domínio não autorizado.\\n\\n' +
          'O site (domínio Vercel) onde o aplicativo está rodando não tem permissão para usar o login do Firebase.\\n\\n' +
          'COMO RESOLVER:\\n' +
          '1. Abra o Console do Firebase do seu projeto (aerostudy-app).\\n' +
          '2. No menu à esquerda, vá para "Authentication".\\n' +
          '3. Clique na aba "Settings" (Configurações).\\n' +
          '4. Na seção "Authorized domains" (Domínios autorizados), clique em "Add domain" (Adicionar domínio).\\n' +
          '5. Adicione o domínio do seu site Vercel (ex: seu-projeto.vercel.app).\\n\\n' +
          'Este é um ajuste de segurança no Firebase e não pode ser corrigido diretamente no código.'
        );
      } else if (error.code === 'auth/popup-closed-by-user') {
        console.log("Janela de login fechada pelo usuário.");
      } else {
         alert(`Ocorreu um erro ao tentar fazer login: ${error.message}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      // FIX: Changed to v8 compat API style for signOut.
      await auth.signOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const enterMainApp = () => {
    setAppState('main');
  };

  const goToLanding = () => {
    setAppState('landing');
  };

  if (isLoadingAuth) {
    return (
        <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
            <div className="text-center">
                <svg className="animate-spin h-10 w-10 text-cyan-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="font-technical text-gray-300">Autenticando...</p>
            </div>
        </div>
    );
  }

  if (appState === 'landing') {
    return <LandingPage onStart={enterMainApp} onLogin={handleLogin} user={user} />;
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 flex flex-col">
      <Header 
        onGoHome={goToLanding}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
       />
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

        {currentView === View.Dashboard && <Dashboard user={user} currentChapterIndex={currentChapterIndex} setCurrentChapterIndex={setCurrentChapterIndex} />}
        {currentView === View.Quiz && <QuizView />}
      </main>
      <footer className="text-center p-4 text-xs text-gray-500 font-technical">
        Desenvolvido para futuros Mecânicos de Manutenção de Aeronaves.
      </footer>
    </div>
  );
};

export default App;