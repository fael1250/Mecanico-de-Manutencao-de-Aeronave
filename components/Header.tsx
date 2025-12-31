import React from 'react';

interface HeaderProps {
  onGoHome: () => void;
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


const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
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
        <nav className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            <ModuleButton text="Básico" active={true} />
            <ModuleButton text="Célula" disabled={true} />
            <ModuleButton text="GMP" disabled={true} />
            <ModuleButton text="Aviônicos" disabled={true} />
        </nav>
      </div>
    </header>
  );
};

export default Header;