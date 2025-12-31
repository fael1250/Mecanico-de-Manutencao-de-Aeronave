import { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
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
        if (user && db) { // VERIFICA SE DB ESTÁ DISPONÍVEL
          const docRef = db.collection('progress').doc(user.uid);
          const docSnap = await docRef.get();
          
          if (docSnap.exists) {
            setProgress(docSnap.data() as Progress);
          } else {
            const localProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
            if (localProgress) {
                const parsedLocal = JSON.parse(localProgress);
                setProgress(parsedLocal);
                await docRef.set(parsedLocal);
                localStorage.removeItem(PROGRESS_STORAGE_KEY);
            } else {
                setProgress({});
            }
          }
        } else {
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
    setProgress(newProgress);
    try {
      if (user && db) { // VERIFICA SE DB ESTÁ DISPONÍVEL
        const docRef = db.collection('progress').doc(user.uid);
        await docRef.set(newProgress, { merge: true });
      } else {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(newProgress));
      }
    } catch (error) {
      console.error("Falha ao salvar progresso:", error);
    }
  }, [progress, user]);
  
  const resetProgress = useCallback(async () => {
    setProgress({});
    try {
      if(user && db) { // VERIFICA SE DB ESTÁ DISPONÍVEL
        const docRef = db.collection('progress').doc(user.uid);
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