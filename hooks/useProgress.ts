import { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
// FIX: Removed v9 modular imports for Firestore.
import { db } from '../services/firebase';
import { Progress } from '../types';

const PROGRESS_STORAGE_KEY = 'aeroStudyProgress';

export const useProgress = (user: User | null) => {
  const [progress, setProgress] = useState<Progress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      setIsLoaded(false);
      try {
        if (user) {
          // Usuário logado: busca do Firestore
          // FIX: Changed to v8 compat API style for document reference.
          const docRef = db.collection('progress').doc(user.uid);
          // FIX: Changed to v8 compat API style for getting a document.
          const docSnap = await docRef.get();
          
          if (docSnap.exists) {
            setProgress(docSnap.data() as Progress);
          } else {
            // Se não houver progresso na nuvem, verifica o local e sincroniza
            const localProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
            if (localProgress) {
                const parsedLocal = JSON.parse(localProgress);
                setProgress(parsedLocal);
                // FIX: Changed to v8 compat API style for setting a document.
                await docRef.set(parsedLocal); // Salva na nuvem
                localStorage.removeItem(PROGRESS_STORAGE_KEY); // Limpa o local
            } else {
                setProgress({}); // Inicia progresso vazio se não houver nada
            }
          }
        } else {
          // Usuário deslogado: busca do localStorage
          const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
          if (storedProgress) {
            setProgress(JSON.parse(storedProgress));
          } else {
            setProgress({});
          }
        }
      } catch (error) {
        console.error("Falha ao carregar progresso:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadProgress();
  }, [user]);

  const toggleSubTopicComplete = useCallback(async (subTopicId: string) => {
    const newProgress = { ...progress, [subTopicId]: !progress[subTopicId] };
    setProgress(newProgress); // Atualiza o estado local imediatamente para feedback visual
    try {
      if (user) {
        // Logado: salva no Firestore
        // FIX: Changed to v8 compat API style for document reference.
        const docRef = db.collection('progress').doc(user.uid);
        // FIX: Changed to v8 compat API style for setting a document with merge.
        await docRef.set(newProgress, { merge: true }); // Usar merge é mais seguro
      } else {
        // Deslogado: salva no localStorage
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(newProgress));
      }
    } catch (error) {
      console.error("Falha ao salvar progresso:", error);
      // Opcional: reverter o estado se a gravação falhar
    }
  }, [progress, user]);
  
  const resetProgress = useCallback(async () => {
    setProgress({});
    try {
      if(user) {
        // FIX: Changed to v8 compat API style for document reference.
        const docRef = db.collection('progress').doc(user.uid);
        // FIX: Changed to v8 compat API style for setting an empty document.
        await docRef.set({});
      } else {
        localStorage.removeItem(PROGRESS_STORAGE_KEY);
      }
    } catch (error) {
        console.error("Failed to reset progress", error);
    }
  }, [user]);

  return { progress, toggleSubTopicComplete, isLoaded, resetProgress };
};
