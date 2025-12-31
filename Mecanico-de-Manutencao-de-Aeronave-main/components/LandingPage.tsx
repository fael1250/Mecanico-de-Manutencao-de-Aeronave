import React, { useEffect } from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-[#0D1117] text-white">
      {/* Hero Section */}
      <header
        className="relative min-h-screen flex items-center justify-center text-center bg-black"
      >
        <div className="relative z-10 px-4 scroll-animate fade-in-up is-visible border-2 border-cyan-400/80 rounded-xl p-8 md:p-12 shadow-[0_0_25px_rgba(56,189,248,0.2)]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Sua Carreira na Aviação <span className="text-cyan-400">Começa Aqui</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            A plataforma definitiva para sua aprovação como Mecânico de Manutenção de Aeronaves.
          </p>
          <button
            onClick={onStart}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            INICIAR ESTUDOS
          </button>
        </div>
      </header>

      <main>
        {/* Features Section */}
        <section className="py-20 bg-[#161B22]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold scroll-animate fade-in-up">Prepare-se para Decolar</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-technical scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }}>
                O AeroStudy é o seu co-piloto na jornada para se tornar um MMA. Oferecemos tudo o que você precisa para dominar o conteúdo e ser aprovado na ANAC.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6 bg-[#0D1117] border border-[#30363D] rounded-lg scroll-animate fade-in-up" style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-500/20 mx-auto mb-4 border border-cyan-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Conteúdo Focado</h3>
                <p className="text-gray-400 text-sm font-technical">Material completo baseado nos módulos oficiais da ANAC.</p>
              </div>
              {/* Feature 2 */}
              <div className="text-center p-6 bg-[#0D1117] border border-[#30363D] rounded-lg scroll-animate fade-in-up" style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-500/20 mx-auto mb-4 border border-cyan-500/50">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Progresso Visual</h3>
                <p className="text-gray-400 text-sm font-technical">Acompanhe sua evolução em um dashboard intuitivo.</p>
              </div>
              {/* Feature 3 */}
              <div className="text-center p-6 bg-[#0D1117] border border-[#30363D] rounded-lg scroll-animate fade-in-up" style={{ transitionDelay: '500ms' }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-500/20 mx-auto mb-4 border border-cyan-500/50">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Simulados Realistas</h3>
                <p className="text-gray-400 text-sm font-technical">Teste seus conhecimentos com quizzes que simulam a prova oficial.</p>
              </div>
               {/* Feature 4 */}
              <div className="text-center p-6 bg-[#0D1117] border border-[#30363D] rounded-lg scroll-animate fade-in-up" style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-500/20 mx-auto mb-4 border border-cyan-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Estudo Interativo</h3>
                <p className="text-gray-400 text-sm font-technical">Acesse o conteúdo de forma clara e organizada em um clique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Section 1 */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-in-left">
                <div className="relative h-80 w-full bg-[#0D1117] border border-[#30363D] rounded-lg p-6 flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-500/10">
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg transition-all duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#30363D] rounded-tr-lg transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#30363D] rounded-bl-lg transition-all duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyan-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
              </div>
              <div className="scroll-animate slide-in-right">
                <h3 className="text-3xl font-bold mb-4">Domine o <span className="text-cyan-400">Módulo Básico</span></h3>
                <p className="text-gray-400 mb-4 font-technical leading-relaxed">
                  Nossa plataforma organiza todo o conteúdo do Módulo Básico da ANAC em capítulos e tópicos fáceis de navegar. Estude a matéria, marque seu progresso e revise o conteúdo a qualquer momento.
                </p>
                <ul className="text-gray-300 space-y-2 font-technical text-sm">
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Conteúdo dividido por matéria.</li>
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Acompanhamento de leitura por tópico.</li>
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Navegação intuitiva entre capítulos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Section 2 */}
        <section className="py-20 bg-[#161B22] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 scroll-animate slide-in-right">
                 <div className="relative h-80 w-full bg-[#0D1117] border border-[#30363D] rounded-lg p-6 flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-500/10">
                    <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-slow"></div>
                    <div className="absolute w-48 h-48 rounded-full border-2 border-cyan-500/40"></div>
                    <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-cyan-500/60 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-cyan-400/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
              </div>
              <div className="md:order-1 scroll-animate slide-in-left">
                <h3 className="text-3xl font-bold mb-4">Teste Seu Conhecimento</h3>
                <p className="text-gray-400 mb-4 font-technical leading-relaxed">
                  A prática leva à perfeição. Realize quizzes ao final de cada capítulo para fixar o conteúdo e enfrente o Simulado ANAC completo com 60 questões para testar sua preparação em condições reais.
                </p>
                <ul className="text-gray-300 space-y-2 font-technical text-sm">
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Quizzes por capítulo para revisão.</li>
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Simulado completo com 60 questões.</li>
                    <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>Diferentes níveis de dificuldade.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animate fade-in-up">Pronto para Alcançar <span className="text-cyan-400">Novos Horizontes</span>?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-technical scroll-animate fade-in-up" style={{ transitionDelay: '200ms' }}>
                    Sua jornada para uma carreira de sucesso na manutenção de aeronaves está a um clique de distância.
                </p>
                <button
                    onClick={onStart}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/30 scroll-animate fade-in-up" style={{ transitionDelay: '300ms' }}
                >
                    ACESSAR A PLATAFORMA
                </button>
            </div>
        </section>
      </main>

       <footer className="text-center p-6 bg-[#161B22] border-t border-[#30363D] text-xs text-gray-500 font-technical">
        Desenvolvido para futuros Mecânicos de Manutenção de Aeronaves.
      </footer>
    </div>
  );
};

export default LandingPage;