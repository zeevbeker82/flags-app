'use client';
import { useState, useCallback } from 'react';
import { countries } from '@/data/countries';
import { useProgress } from '@/hooks/useProgress';
import MemoryBoard from '@/components/MemoryBoard';
import ContinentSelector from '@/components/ContinentSelector';
import { Continent } from '@/types';
import { pickRandom } from '@/utils/shuffle';
import { calcMemoryPoints } from '@/utils/scoring';

type GameLevel = 'easy' | 'medium' | 'hard';
const pairsCount = { easy: 4, medium: 8, hard: 12 };

export default function MemoryPage() {
  const [continent, setContinent] = useState<Continent | 'all'>('all');
  const [level, setLevel] = useState<GameLevel>('easy');
  const [gameKey, setGameKey] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState<{ moves: number; time: number; points: number } | null>(null);
  const { addPoints, unlockAchievement } = useProgress();

  const pool = continent === 'all' ? countries : countries.filter(c => c.continent === continent);
  const pairs = pairsCount[level];

  const handleStart = () => {
    if (pool.length < pairs) return;
    setResult(null);
    setGameKey(k => k + 1);
    setPlaying(true);
  };

  const handleComplete = useCallback((moves: number, time: number) => {
    const pts = calcMemoryPoints(pairs, moves);
    addPoints(pts);
    setResult({ moves, time, points: pts });
    setPlaying(false);
    if (level === 'hard' && moves <= 20) unlockAchievement('memory_elephant');
  }, [pairs, addPoints, level, unlockAchievement]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  if (playing) {
    const selected = pickRandom(pool, pairs);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">🧠 משחק זיכרון</h1>
          <button onClick={() => setPlaying(false)} className="text-red-500 hover:text-red-700 font-semibold">
            ✕ עצור
          </button>
        </div>
        <MemoryBoard key={gameKey} countries={selected} onComplete={handleComplete} />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">🧠 משחק זיכרון</h1>
      <p className="text-gray-500">התאם כל דגל עם שם המדינה שלו!</p>

      {result && (
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 text-center animate-bounce-in">
          <p className="text-4xl mb-2">🎉</p>
          <p className="text-2xl font-bold text-green-700">כל הכבוד!</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div><p className="text-2xl font-bold text-blue-600">{result.moves}</p><p className="text-xs text-gray-500">צעדים</p></div>
            <div><p className="text-2xl font-bold text-purple-600">{formatTime(result.time)}</p><p className="text-xs text-gray-500">זמן</p></div>
            <div><p className="text-2xl font-bold text-yellow-600">+{result.points}</p><p className="text-xs text-gray-500">נקודות</p></div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow p-6 space-y-5">
        <div>
          <p className="font-semibold text-gray-700 mb-3">רמת קושי</p>
          <div className="grid grid-cols-3 gap-3">
            {([['easy', '😊 קל', '4 זוגות'], ['medium', '🤔 בינוני', '8 זוגות'], ['hard', '😤 קשה', '12 זוגות']] as const).map(([v, label, sub]) => (
              <button key={v} onClick={() => setLevel(v)}
                className={`p-4 rounded-xl border-2 font-semibold transition-all ${level === v ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 text-gray-600 hover:border-purple-300'}`}>
                <p>{label}</p>
                <p className="text-xs mt-1 font-normal opacity-70">{sub}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-700 mb-3">יבשת</p>
          <ContinentSelector selected={continent} onChange={setContinent} />
          {pool.length < pairs && (
            <p className="text-red-500 text-sm mt-2">צריך לפחות {pairs} מדינות ביבשת זו</p>
          )}
        </div>

        <button onClick={handleStart} disabled={pool.length < pairs}
          className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-2xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all">
          🎮 התחל משחק!
        </button>
      </div>
    </div>
  );
}
