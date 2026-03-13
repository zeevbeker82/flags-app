'use client';
import { useState, useCallback, useEffect } from 'react';
import { countries } from '@/data/countries';
import { useProgress } from '@/hooks/useProgress';
import { useScore } from '@/hooks/useScore';
import QuizCard from '@/components/QuizCard';
import { Country, QuizQuestion } from '@/types';
import { shuffle, pickRandomExcluding } from '@/utils/shuffle';
import { calcSpeedPoints } from '@/utils/scoring';

const TOTAL_QUESTIONS = 10;
const TIME_PER_QUESTION = 10;

function generateQ(pool: Country[]): QuizQuestion {
  const country = pool[Math.floor(Math.random() * pool.length)];
  const type = Math.random() < 0.5 ? 'flag-to-name' : 'name-to-flag';
  // מוודא: 3 תשובות שגויות ללא כפילויות, התשובה הנכונה תמיד כלולה
  const distractors = pickRandomExcluding(pool, country, 3);
  return { country, options: shuffle([country, ...distractors]), type };
}

type GameState = 'intro' | 'playing' | 'done';

export default function SpeedPage() {
  const [state, setState] = useState<GameState>('intro');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const { addPoints, unlockAchievement } = useProgress();
  const { score, streak, correct, recordAnswer, addScore, reset } = useScore();
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    try {
      const b = localStorage.getItem('speedBest');
      if (b) setBestScore(Number(b));
    } catch {}
  }, []);

  const handleStart = () => {
    const pool = countries;
    const qs = Array.from({ length: TOTAL_QUESTIONS }, () => generateQ(pool));
    setQuestions(qs);
    setCurrentQ(0);
    setAnswers([]);
    reset();
    setTimeLeft(TIME_PER_QUESTION);
    setState('playing');
  };

  const handleAnswer = useCallback((isCorrect: boolean) => {
    recordAnswer(isCorrect);
    const pts = calcSpeedPoints(isCorrect, timeLeft, isCorrect ? streak + 1 : 0);
    if (isCorrect) { addScore(pts); addPoints(pts); }
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (currentQ + 1 >= TOTAL_QUESTIONS) {
      // done
      const finalScore = score + (isCorrect ? pts : 0);
      if (finalScore > bestScore) {
        setBestScore(finalScore);
        try { localStorage.setItem('speedBest', String(finalScore)); } catch {}
      }
      const correctCount = newAnswers.filter(Boolean).length;
      if (correctCount === TOTAL_QUESTIONS) unlockAchievement('perfect_speed');
      const totalTime = (TOTAL_QUESTIONS * TIME_PER_QUESTION) - timeLeft;
      if (totalTime <= 30) unlockAchievement('lightning_fast');
      setState('done');
    } else {
      setCurrentQ(q => q + 1);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }, [recordAnswer, timeLeft, streak, addScore, addPoints, answers, currentQ, score, bestScore, unlockAchievement]);

  if (state === 'intro') {
    return (
      <div className="space-y-6 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800">⚡ מבחן מהיר</h1>
        <p className="text-gray-500">10 שאלות. 10 שניות לכל שאלה. כמה מהר תוכל לענות?</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 rounded-2xl p-4">
            <p className="text-2xl font-bold text-blue-600">10</p>
            <p className="text-xs text-blue-500">שאלות</p>
          </div>
          <div className="bg-orange-100 rounded-2xl p-4">
            <p className="text-2xl font-bold text-orange-600">10s</p>
            <p className="text-xs text-orange-500">לכל שאלה</p>
          </div>
          <div className="bg-yellow-100 rounded-2xl p-4">
            <p className="text-2xl font-bold text-yellow-600">{bestScore}</p>
            <p className="text-xs text-yellow-500">שיא אישי</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 text-right space-y-2 text-gray-600">
          <p>• <strong>זיהוי דגל</strong> - ראה דגל, בחר מדינה</p>
          <p>• <strong>זיהוי מדינה</strong> - ראה שם, בחר דגל</p>
          <p>• ניקוד גבוה יותר = מהירות גבוהה יותר!</p>
        </div>

        <button onClick={handleStart}
          className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-2xl shadow-xl transition-all hover:scale-105">
          ⚡ התחל!
        </button>
      </div>
    );
  }

  if (state === 'done') {
    const correctCount = answers.filter(Boolean).length;
    const pct = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    return (
      <div className="space-y-6 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold">⚡ תוצאות המבחן</h1>
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4 animate-bounce-in">
          <p className="text-6xl">{pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '📚'}</p>
          <p className="text-4xl font-extrabold text-blue-600">{score}</p>
          <p className="text-gray-500">נקודות</p>
          <div className="grid grid-cols-3 gap-3">
            <div><p className="text-2xl font-bold text-green-600">{correctCount}/{TOTAL_QUESTIONS}</p><p className="text-xs text-gray-500">תשובות נכונות</p></div>
            <div><p className="text-2xl font-bold text-purple-600">{pct}%</p><p className="text-xs text-gray-500">הצלחה</p></div>
            <div><p className="text-2xl font-bold text-yellow-600">{score > bestScore ? '🆕' : bestScore}</p><p className="text-xs text-gray-500">{score > bestScore ? 'שיא חדש!' : 'שיא'}</p></div>
          </div>
          <div className="flex gap-2 justify-center mt-2">
            {answers.map((a, i) => (
              <span key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${a ? 'bg-green-500' : 'bg-red-400'}`}>
                {a ? '✓' : '✗'}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={handleStart} className="px-8 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600">
            ⚡ שוב!
          </button>
          <button onClick={() => setState('intro')} className="px-8 py-3 bg-white border text-gray-700 rounded-xl font-bold hover:bg-gray-50">
            ← חזור
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-600">שאלה {currentQ + 1} / {TOTAL_QUESTIONS}</p>
        <div className="flex gap-3 text-sm text-gray-600">
          <span>🔥 {streak}</span>
          <span>⭐ {score}</span>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
          <div key={i} className={`flex-1 h-2 rounded-full ${i < currentQ ? 'bg-blue-400' : i === currentQ ? 'bg-blue-600' : 'bg-gray-200'}`} />
        ))}
      </div>
      {q && <QuizCard key={currentQ} question={q} onAnswer={handleAnswer} showTimer timeLimit={TIME_PER_QUESTION} />}
    </div>
  );
}
