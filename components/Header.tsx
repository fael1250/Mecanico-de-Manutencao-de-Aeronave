
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavButton: React.FC<{ text: string; active?: boolean; disabled?: boolean; onClick?: () => void }> = ({ text, active = false, disabled = false, onClick }) => {
  const baseClasses = "px-4 py-2 rounded-md text-sm font-bold transition-all duration-300";
  const activeClasses = "bg-cyan-500 text-white shadow-lg";
  const inactiveClasses = "bg-gray-700 hover:bg-gray-600 text-gray-300"; // Fallback, not used in this layout for active/inactive
  const disabledClasses = "bg-gray-800/50 text-gray-500 cursor-not-allowed relative";

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${disabled ? disabledClasses : (active ? activeClasses : inactiveClasses)}`}>
      {text}
      {disabled && <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full transform scale-90">EM BREVE</span>}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-[#161B22]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#30363D]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">Aero<span className="text-cyan-400">Study</span></h1>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavButton text="Básico" active={true} />
            <NavButton text="Célula" disabled={true} />
            <NavButton text="GMP" disabled={true} />
            <NavButton text="Aviônicos" disabled={true} />
          </nav>
        </div>
        <div className="flex items-center justify-center space-x-8">
            <button 
                onClick={() => setCurrentView(View.Dashboard)}
                className={`py-3 text-sm font-semibold transition ${currentView === View.Dashboard ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 border-b-2 border-transparent hover:text-white'}`}>
                Dashboard
            </button>
            <button 
                onClick={() => setCurrentView(View.Quiz)}
                className={`py-3 text-sm font-semibold transition ${currentView === View.Quiz ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 border-b-2 border-transparent hover:text-white'}`}>
                Simulado ANAC
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
