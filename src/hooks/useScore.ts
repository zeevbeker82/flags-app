'use client';
import { useState, useCallback } from 'react';

export function useScore() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const recordAnswer = useCallback((isCorrect: boolean) => {
    setTotal(t => t + 1);
    if (isCorrect) {
      setCorrect(c => c + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  }, []);

  const addScore = useCallback((points: number) => {
    setScore(s => s + points);
  }, []);

  const reset = useCallback(() => {
    setScore(0);
    setStreak(0);
    setCorrect(0);
    setTotal(0);
  }, []);

  return { score, streak, correct, total, recordAnswer, addScore, reset };
}
