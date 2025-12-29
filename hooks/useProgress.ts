
import { useState, useEffect, useCallback } from 'react';
import { Progress } from '../types';

const PROGRESS_STORAGE_KEY = 'aeroStudyProgress';

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    } finally {
        setIsLoaded(true);
    }
  }, []);

  const toggleSubTopicComplete = useCallback((subTopicId: string) => {
    setProgress(currentProgress => {
      const newProgress = { ...currentProgress, [subTopicId]: !currentProgress[subTopicId] };
      try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(newProgress));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      return newProgress;
    });
  }, []);
  
  const resetProgress = useCallback(() => {
    setProgress({});
    try {
        localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch (error) {
        console.error("Failed to reset progress in localStorage", error);
    }
  }, []);

  return { progress, toggleSubTopicComplete, isLoaded, resetProgress };
};
