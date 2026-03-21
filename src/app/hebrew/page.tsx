'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  hebrewQuestions,
  HebrewQuestion,
  CATEGORIES,
  getQuestionsByCategory,
  getQuestionsByDifficulty,
} from '@/data/hebrew';
import { useProgress } from '@/hooks/useProgress';
import { useSound } from '@/hooks/useSound';
import FunFactPopup from '@/components/FunFactPopup';

type Difficulty = 'easy' | 'medium' | 'hard' | 'all';
type CategoryFilter = HebrewQuestion['category'] | 'הכל';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface GameQuestion {
  question: HebrewQuestion;
  shuffledOptions: { text: string; originalIndex: number }[];
  correctShuffledIndex: number;
}

function buildGameQuestions(pool: HebrewQuestion[], count: number): GameQuestion[] {
  const selected = shuffle(pool).slice(0, count);
  return selected.map(q => {
    const indexed = q.options.map((text, originalIndex) => ({ text, originalIndex }));
    const shuffled = shuffle(indexed);
    const correctShuffledIndex = shuffled.findIndex(o => o.originalIndex === q.correctIndex);
    return { question: q, shuffledOptions: shuffled, correctShuffledIndex };
  });
}

const categoryColorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
  'דקדוק':     { bg: 'bg-blue-500',   text: 'text-blue-700',  light: 'bg-blue-50',   border: 'border-blue-400' },
  'אוצר מילים': { bg: 'bg-green-500',  text: 'text-green-700', light: 'bg-green-50',  border: 'border-green-400' },
  'חגים':      { bg: 'bg-purple-500', text: 'text-purple-700', light: 'bg-purple-50', border: 'border-purple-400' },
  'אלף-בית':   { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-50', border: 'border-orange-400' },
  'סיפורים':   { bg: 'bg-pink-500',   text: 'text-pink-700',  light: 'bg-pink-50',   border: 'border-pink-400' },
};

function getCategoryColor(cat: string) {
  return categoryColorMap[cat] ?? { bg: 'bg-gray-500', text: 'text-gray-700', light: 'bg-gray-50', border: 'border-gray-400' };
}

export default function HebrewPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('הכל');
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [funFact, setFunFact] = useState('');
  const [view, setView] = useState<'landing' | 'quiz' | 'results'>('landing');

  const { progress, addPoints } = useProgress();
  const { playCorrect, playWrong, playComplete } = useSound(progress.soundEnabled !== false);

  const startQuiz = useCallback(() => {
    let pool = getQuestionsByDifficulty(difficulty);
    if (categoryFilter !== 'הכל') {
      pool = pool.filter(q => q.category === categoryFilter);
    }
    if (pool.length === 0) pool = hebrewQuestions;
    const count = Math.min(10, pool.length);
    const qs = buildGameQuestions(pool, count);
    setQuestions(qs);
    setQIndex(0);
    setSelectedIdx(null);
    setScore(0);
    setCorrectCount(0);
    setFunFact('');
    setView('quiz');
  }, [difficulty, categoryFilter]);

  const handleAnswer = useCallback((shuffledIdx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(shuffledIdx);
    const gq = questions[qIndex];
    const isCorrect = shuffledIdx === gq.correctShuffledIndex;
    if (isCorrect) {
      setScore(s => s + 10);
      setCorrectCount(c => c + 1);
      addPoints(10);
      playCorrect();
      setFunFact(gq.question.explanation);
    } else {
      playWrong();
    }
    setTimeout(() => {
      setFunFact('');
      if (qIndex + 1 >= questions.length) {
        playComplete();
        setView('results');
      } else {
        setQIndex(i => i + 1);
        setSelectedIdx(null);
      }
    }, 1900);
  }, [selectedIdx, questions, qIndex, addPoints, playCorrect, playWrong, playComplete]);

  // ─── RESULTS ───────────────────────────────────────
  if (view === 'results') {
    const pct = Math.round((correctCount / Math.max(questions.length, 1)) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 50 ? '👍' : '📚';
    const message = pct === 100 ? 'מושלם! מוכשר בעברית!' : pct >= 80 ? 'כל הכבוד! ממש טוב!' : pct >= 50 ? 'לא רע! תמשיך לתרגל!' : 'כדאי לחזור ולתרגל!';
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-700 to-indigo-900">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-7xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-black text-gray-800 mb-1">{message}</h1>
          <p className="text-gray-400 text-sm mb-5">עברית לכיתה ב׳ 📖</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-violet-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-violet-600">{score}</p>
              <p className="text-xs text-gray-500 mt-0.5">נקודות</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-green-600">{correctCount}/{questions.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">נכונות</p>
            </div>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-5">
            <div className="h-full bg-violet-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 rounded-2xl transition-all">
              🔄 שוב
            </button>
            <button onClick={() => setView('landing')} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all">
              🏠 ראשי
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ ──────────────────────────────────────────
  if (view === 'quiz') {
    const gq = questions[qIndex];
    if (!gq) return null;
    const { question: q, shuffledOptions, correctShuffledIndex } = gq;
    const isAnswered = selectedIdx !== null;
    const colors = getCategoryColor(q.category);

    return (
      <div className="min-h-screen p-4 bg-gradient-to-br from-violet-700 to-indigo-900">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setView('landing')} className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl text-sm font-bold">
              ← חזור
            </button>
            <div className="flex gap-2">
              <span className="bg-yellow-400/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-black">⭐ {score}</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">{qIndex + 1}/{questions.length}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-white/20 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question card */}
          <div className="bg-white rounded-3xl shadow-2xl mb-4 overflow-hidden">
            <div className={`${colors.bg} px-4 py-2 flex items-center gap-2`}>
              <span className="text-white text-sm font-bold">{q.categoryEmoji} {q.category}</span>
            </div>
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">{q.emoji}</div>
              <p className="text-xl font-black text-gray-800 leading-relaxed">{q.question}</p>
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((opt, idx) => {
              const isCorrectOpt = idx === correctShuffledIndex;
              const isSelectedOpt = idx === selectedIdx;
              let bg = 'bg-white hover:bg-violet-50 border-2 border-white/60 hover:scale-105';
              let text = 'text-gray-800';
              let opacity = '';
              if (isAnswered) {
                if (isCorrectOpt) { bg = 'bg-green-500 border-2 border-green-600'; text = 'text-white'; }
                else if (isSelectedOpt) { bg = 'bg-red-400 border-2 border-red-500'; text = 'text-white'; }
                else { bg = 'bg-white border-2 border-white/40'; opacity = 'opacity-40'; text = 'text-gray-500'; }
              }
              return (
                <button
                  key={idx}
                  onClick={() => !isAnswered && handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`${bg} ${text} ${opacity} rounded-2xl p-4 font-bold text-center text-sm leading-tight transition-all shadow-lg active:scale-95 min-h-[72px] flex items-center justify-center`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div className={`mt-4 p-4 rounded-2xl text-center font-black text-base animate-bounce-in ${
              selectedIdx === correctShuffledIndex ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-800'
            }`}>
              {selectedIdx === correctShuffledIndex
                ? `✅ נכון! ${shuffledOptions[correctShuffledIndex].text}`
                : `💡 התשובה הנכונה: ${shuffledOptions[correctShuffledIndex].text}`
              }
            </div>
          )}

          <FunFactPopup fact={funFact} visible={!!funFact && selectedIdx === correctShuffledIndex} />
        </div>
      </div>
    );
  }

  // ─── LANDING ───────────────────────────────────────
  const totalByCategory: Record<string, number> = {};
  CATEGORIES.forEach(c => {
    totalByCategory[c.id] = hebrewQuestions.filter(q => q.category === c.id).length;
  });

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-violet-700 to-indigo-900">
      <div className="max-w-md mx-auto">
        <Link href="/" className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold">
          ← חזרה לדף הבית
        </Link>

        <div className="text-center mb-8 mt-2">
          <div className="text-7xl mb-3">📖</div>
          <h1 className="text-4xl font-black text-white mb-2">עברית לכיתה ב׳!</h1>
          <p className="text-violet-200">דקדוק, חגים, אוצר מילים ועוד</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-5">

          {/* Category filter */}
          <div>
            <h3 className="font-black text-gray-700 mb-3 text-lg">📚 נושא</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setCategoryFilter('הכל')}
                className={`p-3 rounded-2xl border-2 text-center transition-all ${
                  categoryFilter === 'הכל' ? 'border-violet-500 bg-violet-50 shadow-md' : 'border-gray-200 hover:border-violet-300'
                }`}
              >
                <div className="text-xl">🌟</div>
                <div className="font-bold text-xs text-gray-800 mt-0.5">הכל</div>
                <div className="text-xs text-gray-400">{hebrewQuestions.length} שאלות</div>
              </button>
              {CATEGORIES.map(cat => {
                const colors = getCategoryColor(cat.id);
                const isActive = categoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      isActive ? `${colors.border} ${colors.light} shadow-md` : 'border-gray-200 hover:border-violet-300'
                    }`}
                  >
                    <div className="text-xl">{cat.emoji}</div>
                    <div className="font-bold text-xs text-gray-800 mt-0.5">{cat.id}</div>
                    <div className="text-xs text-gray-400">{totalByCategory[cat.id]} שאלות</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h3 className="font-black text-gray-700 mb-3 text-lg">⚡ רמת קושי</h3>
            <div className="grid grid-cols-4 gap-2">
              {([
                ['easy', '😊', 'קל'],
                ['medium', '🤔', 'בינוני'],
                ['hard', '😤', 'קשה'],
                ['all', '🌍', 'הכל'],
              ] as const).map(([v, emoji, label]) => (
                <button
                  key={v}
                  onClick={() => setDifficulty(v)}
                  className={`p-3 rounded-2xl border-2 text-center transition-all ${
                    difficulty === v ? 'border-violet-500 bg-violet-50 shadow-md' : 'border-gray-200 hover:border-violet-300'
                  }`}
                >
                  <div className="text-xl">{emoji}</div>
                  <div className="font-bold text-xs text-gray-800 mt-0.5">{label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Info box */}
          <div className="bg-violet-50 rounded-2xl p-3 text-sm text-violet-700 text-center">
            💡 קוראים את השאלה ובוחרים את התשובה הנכונה!
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-black text-xl py-4 rounded-2xl shadow-lg transition-all hover:scale-105"
          >
            📖 התחל!
          </button>
        </div>

        {/* Bouncing emojis */}
        <div className="flex justify-center gap-6 mt-8 text-3xl opacity-40">
          {['✏️', '📚', '🔤'].map((a, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.25}s` }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
