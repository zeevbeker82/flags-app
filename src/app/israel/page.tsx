'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { israelItems, IsraelItem } from '@/data/israel';
import { proxyUrl } from '@/utils/proxyUrl';
import { useProgress } from '@/hooks/useProgress';
import { useSound } from '@/hooks/useSound';
import FunFactPopup from '@/components/FunFactPopup';

type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

interface Question {
  correct: IsraelItem;
  options: IsraelItem[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getPool(difficulty: Difficulty): IsraelItem[] {
  if (difficulty === 'all') return israelItems;
  if (difficulty === 'easy') return israelItems.filter(i => i.difficulty === 'easy');
  if (difficulty === 'medium') return israelItems.filter(i => i.difficulty !== 'hard');
  return israelItems;
}

function buildQuestion(pool: IsraelItem[]): Question {
  const correct = pool[Math.floor(Math.random() * pool.length)];
  const others = shuffle(pool.filter(i => i.id !== correct.id)).slice(0, 3);
  // If not enough in pool, fill from all items
  const fillFrom = israelItems.filter(i => i.id !== correct.id && !others.find(o => o.id === i.id));
  while (others.length < 3 && fillFrom.length > 0) {
    others.push(fillFrom.splice(Math.floor(Math.random() * fillFrom.length), 1)[0]);
  }
  return { correct, options: shuffle([correct, ...others]) };
}

const typeColors: Record<string, string> = {
  'עיר': 'bg-blue-100 text-blue-700',
  'אתר': 'bg-amber-100 text-amber-700',
  'גוף מים': 'bg-cyan-100 text-cyan-700',
  'הר': 'bg-green-100 text-green-700',
  'אזור': 'bg-purple-100 text-purple-700',
};

export default function IsraelPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [funFact, setFunFact] = useState('');
  const [view, setView] = useState<'landing' | 'quiz' | 'results'>('landing');

  const { progress, addPoints } = useProgress();
  const { playCorrect, playWrong, playComplete } = useSound(progress.soundEnabled !== false);

  const startQuiz = useCallback(() => {
    const pool = getPool(difficulty);
    const count = Math.min(10, pool.length);
    const qs = Array.from({ length: count }, () => buildQuestion(pool));
    setQuestions(qs);
    setQIndex(0);
    setSelected(null);
    setScore(0);
    setCorrect(0);
    setFunFact('');
    setView('quiz');
  }, [difficulty]);

  const handleAnswer = useCallback((itemId: string) => {
    if (selected !== null) return;
    setSelected(itemId);
    const currentQ = questions[qIndex];
    const isCorrect = itemId === currentQ.correct.id;
    if (isCorrect) {
      setScore(s => s + 10);
      setCorrect(c => c + 1);
      addPoints(10);
      playCorrect();
      setFunFact(currentQ.correct.funFact);
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
        setSelected(null);
      }
    }, 1800);
  }, [selected, questions, qIndex, addPoints, playCorrect, playWrong, playComplete]);

  // ─── RESULTS ───
  if (view === 'results') {
    const pct = Math.round((correct / Math.max(questions.length, 1)) * 100);
    const emoji = pct === 100 ? '🇮🇱' : pct >= 70 ? '⭐' : pct >= 40 ? '👍' : '📚';
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl animate-bounce-in">
          <div className="text-7xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-black text-gray-800 mb-1">
            {pct === 100 ? 'מושלם! ישראלי אמיתי!' : pct >= 70 ? 'כל הכבוד!' : 'כדאי לתרגל עוד!'}
          </h1>
          <p className="text-gray-400 text-sm mb-5">ישראל שלנו 🇮🇱</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-blue-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-blue-600">{score}</p>
              <p className="text-xs text-gray-500 mt-0.5">נקודות</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-green-600">{correct}/{questions.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">נכונות</p>
            </div>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-2xl transition-all">
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

  // ─── QUIZ ───
  if (view === 'quiz') {
    const currentQ = questions[qIndex];
    if (!currentQ) return null;
    const { correct: ca, options } = currentQ;
    const isAnswered = selected !== null;

    return (
      <div className="min-h-screen p-4 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setView('landing')} className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl text-sm font-bold">
              ← חזור
            </button>
            <div className="flex gap-2">
              <span className="bg-yellow-400/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-black">⭐ {score}</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">{qIndex + 1}/{questions.length}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl mb-4 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={proxyUrl(ca.photoUrl)}
                alt={ca.nameHebrew}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
            <div className="p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${typeColors[ca.type] || 'bg-gray-100 text-gray-600'}`}>{ca.type}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{ca.description}</p>
              <p className="text-gray-400 text-xs mt-3 font-semibold">🇮🇱 מה השם?</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {options.map(opt => {
              const isCorrectOpt = opt.id === ca.id;
              const isSelectedOpt = opt.id === selected;
              let bg = 'bg-white hover:bg-blue-50 border-2 border-white/60 hover:scale-105';
              let text = 'text-gray-800';
              let opacity = '';
              if (isAnswered) {
                if (isCorrectOpt) { bg = 'bg-green-500 border-2 border-green-600'; text = 'text-white'; }
                else if (isSelectedOpt) { bg = 'bg-red-400 border-2 border-red-500'; text = 'text-white'; }
                else { bg = 'bg-white border-2 border-white/40'; opacity = 'opacity-40'; text = 'text-gray-600'; }
              }
              return (
                <button
                  key={opt.id}
                  onClick={() => !isAnswered && handleAnswer(opt.id)}
                  disabled={isAnswered}
                  className={`${bg} ${text} ${opacity} rounded-2xl p-4 font-bold text-center transition-all shadow-lg active:scale-95`}
                >
                  <div className="text-2xl mb-1">{opt.emoji}</div>
                  <div className="text-sm leading-tight">{opt.nameHebrew}</div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`mt-4 p-4 rounded-2xl text-center font-black text-lg animate-bounce-in ${
              selected === ca.id ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-800'
            }`}>
              {selected === ca.id
                ? `✅ נכון! ${ca.emoji} ${ca.nameHebrew}`
                : `💡 התשובה: ${ca.emoji} ${ca.nameHebrew}`
              }
            </div>
          )}

          <FunFactPopup fact={funFact} visible={!!funFact && selected === ca.id} />
        </div>
      </div>
    );
  }

  // ─── LANDING ───
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="max-w-md mx-auto">
        <Link href="/" className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold">
          ← חזרה לדף הבית
        </Link>

        <div className="text-center mb-8 mt-2">
          <div className="text-7xl mb-3">🇮🇱</div>
          <h1 className="text-4xl font-black text-white mb-2">ישראל שלנו!</h1>
          <p className="text-blue-200">ערים, אתרים וגאוגרפיה</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-5">
          <div>
            <h3 className="font-black text-gray-700 mb-3 text-lg">⚡ רמת קושי</h3>
            <div className="grid grid-cols-2 gap-2">
              {([
                ['easy', '😊', 'קל', '15 מקומות בסיסיים'],
                ['medium', '🤔', 'בינוני', '35 מקומות'],
                ['hard', '😤', 'קשה', '50 מקומות'],
                ['all', '🌍', 'הכל', 'כל 50 המקומות'],
              ] as const).map(([v, emoji, label, desc]) => (
                <button
                  key={v}
                  onClick={() => setDifficulty(v)}
                  className={`p-3 rounded-2xl border-2 text-center transition-all ${
                    difficulty === v ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-2xl">{emoji}</div>
                  <div className="font-bold text-sm text-gray-800">{label}</div>
                  <div className="text-xs text-gray-400">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-3 text-sm text-blue-600 text-center">
            💡 רואים תמונה ותיאור → מנחשים את שם המקום!
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black text-xl py-4 rounded-2xl shadow-lg transition-all hover:scale-105"
          >
            🇮🇱 התחל!
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-3xl opacity-40">
          {['🕌', '🏖️', '🏜️'].map((a, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.25}s` }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
