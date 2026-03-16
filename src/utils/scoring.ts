import { Progress } from '@/types';

export const LEVELS = [
  { name: 'מתחיל', emoji: '🌱', min: 0, max: 500 },
  { name: 'לומד', emoji: '🌿', min: 501, max: 1500 },
  { name: 'מתקדם', emoji: '🌳', min: 1501, max: 3000 },
  { name: 'מומחה', emoji: '⭐', min: 3001, max: 5000 },
  { name: 'אלוף הדגלים', emoji: '🏆', min: 5001, max: Infinity },
];

export function getLevelInfo(points: number) {
  return LEVELS.find(l => points >= l.min && points <= l.max) || LEVELS[0];
}

export function calcQuizPoints(isCorrect: boolean, streak: number): number {
  if (!isCorrect) return 0;
  return 10 + Math.max(0, streak - 1) * 5;
}

export function calcSpeedPoints(isCorrect: boolean, timeLeft: number, streak: number): number {
  if (!isCorrect) return 0;
  const base = 10;
  const speedBonus = Math.floor(timeLeft * 2);
  const streakBonus = Math.max(0, streak - 1) * 5;
  return base + speedBonus + streakBonus;
}

export function calcMemoryPoints(pairs: number, moves: number): number {
  const base = pairs * 20;
  const efficiency = Math.max(0, pairs * 2 - moves);
  return base + efficiency * 5;
}

export function getContinentStars(learned: number, total: number): number {
  const pct = total > 0 ? learned / total : 0;
  if (pct >= 0.91) return 3;
  if (pct >= 0.76) return 2;
  if (pct >= 0.51) return 1;
  return 0;
}

export const defaultProgress: Progress = {
  learnedCountries: [],
  quizScores: {},
  totalPoints: 0,
  level: 'beginner',
  achievements: [],
  streakDays: 0,
  lastPlayed: '',
  starredCountries: [],
  collectedCountries: [],
  collectedPlayers: [],
  collectedClubs: [],
  soundEnabled: true,
};
