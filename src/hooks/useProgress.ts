'use client';
import { useState, useEffect, useCallback } from 'react';
import { Progress } from '@/types';
import { defaultProgress, getLevelInfo } from '@/utils/scoring';

const STORAGE_KEY = 'flagsApp_progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch {}
    setLoaded(true);
  }, []);

  const save = useCallback((updated: Progress) => {
    setProgress(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }, []);

  const addPoints = useCallback((points: number) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        totalPoints: prev.totalPoints + points,
        level: getLevelInfo(prev.totalPoints + points).name,
        lastPlayed: new Date().toISOString().split('T')[0],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const markLearned = useCallback((countryId: string) => {
    setProgress(prev => {
      if (prev.learnedCountries.includes(countryId)) return prev;
      const updated = {
        ...prev,
        learnedCountries: [...prev.learnedCountries, countryId],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const toggleStarred = useCallback((countryId: string) => {
    setProgress(prev => {
      const starred = prev.starredCountries.includes(countryId)
        ? prev.starredCountries.filter(id => id !== countryId)
        : [...prev.starredCountries, countryId];
      const updated = { ...prev, starredCountries: starred };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const unlockAchievement = useCallback((id: string) => {
    setProgress(prev => {
      if (prev.achievements.includes(id)) return prev;
      const updated = { ...prev, achievements: [...prev.achievements, id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetProgress = useCallback(() => {
    save(defaultProgress);
  }, [save]);

  const collectCountry = useCallback((countryId: string) => {
    setProgress(prev => {
      const collected = prev.collectedCountries || [];
      if (collected.includes(countryId)) return prev;
      const updated = { ...prev, collectedCountries: [...collected, countryId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const collectPlayer = useCallback((playerId: string) => {
    setProgress(prev => {
      const collected = prev.collectedPlayers || [];
      if (collected.includes(playerId)) return prev;
      const updated = { ...prev, collectedPlayers: [...collected, playerId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const collectClub = useCallback((clubId: string) => {
    setProgress(prev => {
      const collected = prev.collectedClubs || [];
      if (collected.includes(clubId)) return prev;
      const updated = { ...prev, collectedClubs: [...collected, clubId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const setSoundEnabled = useCallback((enabled: boolean) => {
    setProgress(prev => {
      const updated = { ...prev, soundEnabled: enabled };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { progress, loaded, addPoints, markLearned, toggleStarred, unlockAchievement, resetProgress, save, collectCountry, collectPlayer, collectClub, setSoundEnabled };
}
