'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { allHebrewUnits } from '@/data/hebrewUnits';
import { UNIT_CATEGORIES } from '@/data/hebrewUnitsTypes';
import { useProgress } from '@/hooks/useProgress';
import { useSound } from '@/hooks/useSound';

// ─── types ──────────────────────────────────────────────────

type View = 'intro' | 'learn' | 'quiz' | 'results';

// ─── helpers ────────────────────────────────────────────────

function markUnitCompleted(unitId: string) {
  try {
    const raw = localStorage.getItem('hebrewPractice_completed');
    const ids: string[] = raw ? JSON.parse(raw) : [];
    if (!ids.includes(unitId)) {
      localStorage.setItem('hebrewPractice_completed', JSON.stringify([...ids, unitId]));
    }
  } catch {}
}

const DIFFICULTY_LABELS: Record<string, { emoji: string; label: string }> = {
  easy:   { emoji: '😊', label: 'קל'    },
  medium: { emoji: '🤔', label: 'בינוני' },
  hard:   { emoji: '😤', label: 'קשה'   },
};

// ─── main component ─────────────────────────────────────────

export default function UnitPage({ params }: { params: { id: string } }) {
  const unit = allHebrewUnits.find(u => u.id === params.id);

  const [view, setView]               = useState<View>('intro');
  const [cardIndex, setCardIndex]     = useState(0);
  const [qIndex, setQIndex]           = useState(0);
  const [selected, setSelected]       = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore]             = useState(0);

  const { progress, addPoints } = useProgress();
  const { playCorrect, playWrong, playComplete } = useSound(progress.soundEnabled !== false);

  // ── guard ────────────────────────────────────────────────
  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-700 to-indigo-900 p-4" dir="rtl">
        <div className="bg-white rounded-3xl p-10 text-center shadow-2xl max-w-sm w-full">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-xl font-black text-gray-800 mb-4">יחידה לא נמצאה</h1>
          <Link href="/hebrew-practice" className="bg-violet-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-violet-700 transition-all">
            ← חזור לרשימה
          </Link>
        </div>
      </div>
    );
  }

  const catMeta = UNIT_CATEGORIES[unit.category];
  const diffMeta = DIFFICULTY_LABELS[unit.difficulty];

  // ── handlers ─────────────────────────────────────────────

  const startLearn = useCallback(() => {
    setCardIndex(0);
    setView('learn');
  }, []);

  const startQuiz = useCallback(() => {
    setQIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setScore(0);
    setView('quiz');
  }, []);

  const handleNextCard = useCallback(() => {
    if (cardIndex + 1 < unit.learnCards.length) {
      setCardIndex(i => i + 1);
    } else {
      startQuiz();
    }
  }, [cardIndex, unit.learnCards.length, startQuiz]);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    const question = unit.questions[qIndex];
    const isCorrect = optionIndex === question.correctIndex;
    if (isCorrect) {
      setScore(s => s + 10);
      setCorrectCount(c => c + 1);
      addPoints(10);
      playCorrect();
    } else {
      playWrong();
    }
    setTimeout(() => {
      if (qIndex + 1 >= unit.questions.length) {
        playComplete();
        markUnitCompleted(unit.id);
        setView('results');
      } else {
        setQIndex(i => i + 1);
        setSelected(null);
      }
    }, 2000);
  }, [selected, unit.questions, qIndex, unit.id, addPoints, playCorrect, playWrong, playComplete]);

  const handlePlayAgain = useCallback(() => {
    setCardIndex(0);
    setQIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setScore(0);
    setView('intro');
  }, []);

  // ════════════════════════════════════════════════════════
  // VIEW: RESULTS
  // ════════════════════════════════════════════════════════
  if (view === 'results') {
    const total = unit.questions.length;
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const resultEmoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 50 ? '👍' : '📚';
    const message =
      pct === 100 ? 'מושלם! ידעת הכל!' :
      pct >= 80  ? 'כל הכבוד! ממש טוב!' :
      pct >= 50  ? 'לא רע! תמשיך לתרגל!' :
                   'כדאי לחזור ולתרגל!';

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-700 to-indigo-900" dir="rtl">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl animate-bounce-in">
          <div className="text-7xl mb-3">{resultEmoji}</div>
          <h1 className="text-2xl font-black text-gray-800 mb-1">{message}</h1>
          <p className="text-gray-400 text-sm mb-2">{unit.emoji} {unit.title}</p>
          <p className="text-violet-500 text-xs font-bold mb-5">{catMeta.emoji} {unit.category}</p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-violet-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-violet-600">{score}</p>
              <p className="text-xs text-gray-500 mt-0.5">נקודות</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-green-600">{correctCount}/{total}</p>
              <p className="text-xs text-gray-500 mt-0.5">נכונות</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-5">
            <div
              className="h-full bg-violet-500 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePlayAgain}
              className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 rounded-2xl transition-all"
            >
              🔄 שוב
            </button>
            <Link
              href="/hebrew-practice"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all text-center"
            >
              📚 כל היחידות
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // VIEW: QUIZ
  // ════════════════════════════════════════════════════════
  if (view === 'quiz') {
    const question = unit.questions[qIndex];
    if (!question) return null;
    const isAnswered = selected !== null;
    const isCorrect = selected === question.correctIndex;

    return (
      <div className="min-h-screen p-4 bg-gradient-to-br from-violet-700 to-indigo-900" dir="rtl">
        <div className="max-w-md mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setView('learn')}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl text-sm font-bold"
            >
              ← חזור
            </button>
            <div className="flex gap-2">
              <span className="bg-yellow-400/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-black">
                ⭐ {score}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                שאלה {qIndex + 1}/{unit.questions.length}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-white/20 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${((qIndex + 1) / unit.questions.length) * 100}%` }}
            />
          </div>

          {/* Question card */}
          <div className="bg-white rounded-3xl shadow-2xl mb-4 overflow-hidden">
            <div className={`${catMeta.bg} px-4 py-2 flex items-center gap-2`}>
              <span className={`${catMeta.color} text-sm font-bold`}>
                {catMeta.emoji} {unit.category} — {unit.emoji} {unit.title}
              </span>
            </div>
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">{unit.emoji}</div>
              <p className="text-xl font-black text-gray-800 leading-relaxed">{question.question}</p>
            </div>
          </div>

          {/* Answer options */}
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((opt, idx) => {
              const isCorrectOpt = idx === question.correctIndex;
              const isSelectedOpt = idx === selected;
              let bg = 'bg-white hover:bg-violet-50 border-2 border-white/60 hover:scale-105';
              let textColor = 'text-gray-800';
              let opacity = '';
              if (isAnswered) {
                if (isCorrectOpt) {
                  bg = 'bg-green-500 border-2 border-green-600';
                  textColor = 'text-white';
                } else if (isSelectedOpt) {
                  bg = 'bg-red-400 border-2 border-red-500';
                  textColor = 'text-white';
                } else {
                  bg = 'bg-white border-2 border-white/40';
                  opacity = 'opacity-40';
                  textColor = 'text-gray-500';
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => !isAnswered && handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`${bg} ${textColor} ${opacity} rounded-2xl p-4 font-bold text-center text-sm leading-tight transition-all shadow-lg active:scale-95 min-h-[72px] flex items-center justify-center`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div className={`mt-4 p-4 rounded-2xl text-center animate-bounce-in ${
              isCorrect ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-800'
            }`}>
              <p className="font-black text-base mb-1">
                {isCorrect ? '✅ נכון! כל הכבוד!' : `💡 התשובה: ${question.options[question.correctIndex]}`}
              </p>
              <p className={`text-sm ${isCorrect ? 'text-green-100' : 'text-orange-700'}`}>
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // VIEW: LEARN (flashcards)
  // ════════════════════════════════════════════════════════
  if (view === 'learn') {
    const card = unit.learnCards[cardIndex];
    const isLastCard = cardIndex + 1 === unit.learnCards.length;

    return (
      <div className="min-h-screen p-4 bg-gradient-to-br from-violet-700 to-indigo-900" dir="rtl">
        <div className="max-w-md mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setView('intro')}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl text-sm font-bold"
            >
              ← חזור
            </button>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
              כרטיס {cardIndex + 1} מתוך {unit.learnCards.length}
            </span>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-6">
            {unit.learnCards.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all ${
                  i < cardIndex
                    ? 'w-3 h-3 bg-green-400'
                    : i === cardIndex
                    ? 'w-4 h-4 bg-white shadow-lg'
                    : 'w-3 h-3 bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Flashcard */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-4 animate-bounce-in">
            {/* Category strip */}
            <div className={`${catMeta.bg} px-4 py-2`}>
              <span className={`${catMeta.color} text-sm font-bold`}>
                {catMeta.emoji} {unit.category}
              </span>
            </div>

            <div className="p-8 text-center">
              <div className="text-7xl mb-4">{card.emoji}</div>
              <h2 className="text-2xl font-black text-gray-800 mb-4 leading-snug">
                {card.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {card.content}
              </p>
              {card.example && (
                <div className={`${catMeta.bg} ${catMeta.border} border-2 rounded-2xl p-4 mt-2`}>
                  <p className={`${catMeta.color} font-bold text-sm`}>
                    💡 דוגמה: {card.example}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            {cardIndex > 0 && (
              <button
                onClick={() => setCardIndex(i => i - 1)}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-4 rounded-2xl transition-all"
              >
                ← הקודם
              </button>
            )}
            <button
              onClick={handleNextCard}
              className="flex-1 bg-white hover:bg-violet-50 text-violet-700 font-black py-4 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              {isLastCard ? '🎯 לתרגול!' : 'הבא →'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // VIEW: INTRO
  // ════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-violet-700 to-indigo-900" dir="rtl">
      <div className="max-w-md mx-auto">

        {/* Back link */}
        <Link
          href="/hebrew-practice"
          className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold w-fit"
        >
          ← כל היחידות
        </Link>

        {/* Hero */}
        <div className="text-center mb-6 mt-2">
          <div className="text-8xl mb-3">{unit.emoji}</div>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 mb-3">
            <span className="text-white/80 text-xs font-bold">יחידה {unit.number}</span>
            <span className="text-white/40">·</span>
            <span className={`text-xs font-bold ${catMeta.bg} ${catMeta.color} px-2 py-0.5 rounded-full`}>
              {catMeta.emoji} {unit.category}
            </span>
          </div>
          <h1 className="text-3xl font-black text-white mb-3 leading-tight">{unit.title}</h1>
          <p className="text-violet-200 text-sm leading-relaxed px-4">{unit.description}</p>
        </div>

        {/* Info card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-4">

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-violet-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-black text-violet-600">{unit.learnCards.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">כרטיסי לימוד</p>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-black text-indigo-600">{unit.questions.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">שאלות</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-black text-amber-600">{unit.duration}</p>
              <p className="text-xs text-gray-500 mt-0.5">דקות</p>
            </div>
          </div>

          {/* Difficulty badge */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-2xl p-3 mb-5">
            <span className="text-2xl">{diffMeta.emoji}</span>
            <div>
              <p className="font-black text-gray-700 text-sm">רמת קושי: {diffMeta.label}</p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-violet-50 rounded-2xl p-4 mb-5 text-sm text-violet-700 space-y-1">
            <p className="font-bold">📋 איך זה עובד?</p>
            <p>1. קורא {unit.learnCards.length} כרטיסי לימוד</p>
            <p>2. עונה על {unit.questions.length} שאלות</p>
            <p>3. מרוויח עד {unit.questions.length * 10} נקודות!</p>
          </div>

          {/* Start button */}
          <button
            onClick={startLearn}
            className="w-full bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-black text-xl py-4 rounded-2xl shadow-lg transition-all hover:scale-105"
          >
            📖 התחל ללמוד!
          </button>
        </div>

        {/* Decorative emojis */}
        <div className="flex justify-center gap-6 mt-6 text-3xl opacity-30">
          {['✏️', '📚', '🔤'].map((a, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.25}s` }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
