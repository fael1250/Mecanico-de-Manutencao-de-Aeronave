import React from 'react';
import { User } from 'firebase/auth';

interface HeaderProps {
  onGoHome: () => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const ModuleButton: React.FC<{ text: string; active?: boolean; disabled?: boolean; }> = ({ text, active = false, disabled = false }) => {
  const baseClasses = "px-3 py-1.5 rounded-md text-sm font-bold transition-all duration-300";
  const activeClasses = "bg-cyan-600 text-white shadow-md";
  const disabledClasses = "text-gray-400 cursor-not-allowed";
  const inactiveClasses = "bg-gray-800 hover:bg-gray-700 text-gray-300";

  let specificClasses = inactiveClasses;
  if (active) {
    specificClasses = activeClasses;
  } else if (disabled) {
    specificClasses = disabledClasses;
  }
  
  return (
    <button disabled={disabled} className={`${baseClasses} ${specificClasses}`}>
        {text}
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ onGoHome, user, onLogin, onLogout }) => {
  return (
    <header className="bg-[#161B22] sticky top-0 z-50 border-b border-[#30363D]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center py-3 gap-4 md:gap-0">
        <button onClick={onGoHome} className="flex items-center space-x-2 group">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3 L2 21 H 22 L12 3 Z" />
              <path d="M12 21 V 9" />
              <path d="M7 15 H 17" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">Aero<span className="text-cyan-400">Study</span></h1>
        </button>
        <div className="flex items-center gap-4">
            <nav className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
                <ModuleButton text="Básico" active={true} />
                <ModuleButton text="Célula" disabled={true} />
                <ModuleButton text="GMP" disabled={true} />
                <ModuleButton text="Aviônicos" disabled={true} />
            </nav>
            <div className="h-8 border-l border-gray-700 hidden md:block"></div>
            {user ? (
                <div className="flex items-center gap-3">
                    <img src={user.photoURL || undefined} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                    <button onClick={onLogout} className="px-3 py-1.5 rounded-md text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors">
                        Sair
                    </button>
                </div>
            ) : (
                <button onClick={onLogin} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold bg-gray-700 hover:bg-gray-600 text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.3v2.84C4.08 20.98 7.74 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.3C1.46 8.85 1 10.39 1 12s.46 3.15 1.3 4.93l3.54-2.84z" />
                        <path d="M12 5.38c1.63 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.74 1 4.08 3.02 2.3 5.96l3.54 2.84C6.71 6.31 9.14 5.38 12 5.38z" />
                    </svg>
                    <span>Login</span>
                </button>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;