import React, { useState, useMemo } from 'react';
import { basicModuleContent } from '../data/content';
import { useProgress } from '../hooks/useProgress';
import ContentModal from './ContentModal';
import ChapterQuizModal from './ChapterQuizModal';
import { Topic, SubTopic } from '../types';

interface DashboardProps {
    currentChapterIndex: number;
    setCurrentChapterIndex: (index: number) => void;
}

const CheckboxIcon: React.FC<{ checked: boolean }> = ({ checked }) => (
  <div className={`w-5 h-5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${checked ? 'bg-cyan-500 border-cyan-400' : 'bg-transparent border-gray-500'}`}>
    {checked && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    )}
  </div>
);

const SubTopicItem: React.FC<{ subTopic: SubTopic; isCompleted: boolean; onToggle: () => void; onView: () => void; }> = ({ subTopic, isCompleted, onToggle, onView }) => (
  <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#30363D]/50 transition-colors">
    <div className="flex items-start space-x-3 cursor-pointer flex-1 mr-2" onClick={onToggle}>
      <CheckboxIcon checked={isCompleted} />
      <span className={`font-technical pt-px ${isCompleted ? 'line-through text-gray-500' : 'text-gray-300'}`}>{subTopic.title}</span>
    </div>
    <button onClick={onView} className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-1 px-3 rounded-full transition-transform transform hover:scale-105">
      Ver Conteúdo
    </button>
  </li>
);

const TopicCard: React.FC<{ topic: Topic; progress: { [id: string]: boolean }; onToggle: (id: string) => void; onView: (subTopic: SubTopic) => void; }> = ({ topic, progress, onToggle, onView }) => {
  const completedCount = useMemo(() => topic.subTopics.filter(st => progress[st.id]).length, [topic.subTopics, progress]);
  const totalCount = topic.subTopics.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-[#0D1117] border border-[#30363D] rounded-xl shadow-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold text-lg text-cyan-400">{topic.title}</h3>
        <div className="mt-2 flex items-center space-x-3">
            <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span className="text-xs font-technical text-gray-400">{completedCount}/{totalCount}</span>
        </div>
      </div>
      <ul className="p-2 space-y-1">
        {topic.subTopics.map(st => (
          <SubTopicItem
            key={st.id}
            subTopic={st}
            isCompleted={!!progress[st.id]}
            onToggle={() => onToggle(st.id)}
            onView={() => onView(st)}
          />
        ))}
      </ul>
    </div>
  );
};


const Dashboard: React.FC<DashboardProps> = ({ currentChapterIndex, setCurrentChapterIndex }) => {
  const { progress, toggleSubTopicComplete, isLoaded } = useProgress();
  const [modalContent, setModalContent] = useState<SubTopic | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isChapterNavOpen, setIsChapterNavOpen] = useState(false);

  const chapter = basicModuleContent[currentChapterIndex];

  const allSubTopicIds = useMemo(() => 
      chapter.topics.flatMap(topic => topic.subTopics.map(st => st.id)),
      [chapter]
  );
  const completedSubTopicsCount = useMemo(() => 
      allSubTopicIds.filter(id => progress[id]).length,
      [allSubTopicIds, progress]
  );
  const totalSubTopicsCount = allSubTopicIds.length;
  const isChapterComplete = totalSubTopicsCount > 0 && completedSubTopicsCount === totalSubTopicsCount;

  const handleChapterSelect = (index: number) => {
    setCurrentChapterIndex(index);
    setIsChapterNavOpen(false);
  };

  if (!isLoaded) {
      return <div className="text-center p-10">Carregando progresso...</div>
  }

  return (
    <>
      <div className="mb-8 p-6 bg-[#161B22] border border-cyan-500/50 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.3)] flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{chapter.title}</h2>
        <div className="flex items-center shrink-0 gap-4">
            <a 
                href="https://drive.google.com/uc?export=download&id=1axx3OFTq5bRkTMnHX25U4RI8CuOVVmi2"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="font-technical">BAIXAR APOSTILA</span>
            </a>
            <div className="relative">
              <button 
                onClick={() => setIsChapterNavOpen(!isChapterNavOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
              >
                <span className="font-technical">Menu de Capítulos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isChapterNavOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isChapterNavOpen && (
                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-[#161B22] border border-[#30363D] rounded-lg shadow-lg z-20">
                  <ul className="py-2 max-h-60 overflow-y-auto">
                    {basicModuleContent.map((chap, index) => (
                      <li key={chap.id}>
                        <button
                          onClick={() => handleChapterSelect(index)}
                          className={`w-full text-left px-4 py-2 text-xs md:text-sm font-technical transition-colors whitespace-normal ${
                            index === currentChapterIndex 
                            ? 'bg-cyan-600 text-white' 
                            : 'text-gray-300 hover:bg-[#30363D]'
                          }`}
                        >
                          {chap.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        </div>
      </div>

      <div>
        {chapter.topics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapter.topics.map(topic => (
              <TopicCard 
                key={topic.id}
                topic={topic}
                progress={progress}
                onToggle={toggleSubTopicComplete}
                onView={setModalContent}
              />
            ))}
          </div>
        ) : (
            <div className="text-center p-10 bg-[#161B22] border border-[#30363D] rounded-xl">
                <p className="font-technical text-gray-400">O conteúdo para este capítulo será adicionado em breve.</p>
            </div>
        )}

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-48 text-center md:text-left order-3 md:order-3">
              {currentChapterIndex > 0 && (
                 <button 
                    onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)}
                    className="w-full md:w-auto px-6 py-3 font-bold rounded-lg transition-all duration-300 transform bg-gray-700 hover:bg-gray-600 text-white hover:scale-105 cursor-pointer"
                >
                    Capítulo Anterior
                </button>
              )}
            </div>
            
            <div className="text-center order-1 md:order-2">
               {chapter.topics.length > 0 && (
                    <button 
                        onClick={() => setIsQuizModalOpen(true)}
                        className="w-full sm:w-auto px-8 py-3 font-bold rounded-lg transition-all duration-300 transform bg-cyan-700 hover:bg-cyan-600 text-white hover:scale-105 cursor-pointer"
                    >
                        Quiz do Capítulo
                    </button>
                )}
            </div>

            <div className="w-full md:w-48 text-center md:text-right order-2 md:order-1">
              {currentChapterIndex < basicModuleContent.length - 1 ? (
                <div>
                  <button 
                      disabled={!isChapterComplete}
                      onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)}
                      className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 transform w-full text-center ${
                          isChapterComplete 
                          ? 'bg-cyan-600 hover:bg-cyan-500 text-white hover:scale-105 cursor-pointer' 
                          : 'bg-gray-800 border border-gray-700 text-gray-600 cursor-not-allowed'
                      }`}
                  >
                      Próximo Capítulo
                  </button>
                  {!isChapterComplete && chapter.topics.length > 0 && (
                      <p className="text-xs text-gray-500 mt-2 font-technical">
                          Complete os tópicos para desbloquear.
                      </p>
                  )}
                </div>
              ) : (
                <div className="text-center">
                    <p className="font-bold text-green-400">
                        Módulo Básico concluído!
                    </p>
                </div>
              )}
            </div>
        </div>
      </div>


      {modalContent && <ContentModal content={modalContent} onClose={() => setModalContent(null)} />}
      {isQuizModalOpen && <ChapterQuizModal chapter={chapter} onClose={() => setIsQuizModalOpen(false)} />}
    </>
  );
};

export default Dashboard;