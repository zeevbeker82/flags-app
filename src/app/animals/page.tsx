'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nationalAnimals, CountryAnimal } from '@/data/animals';
import { countries } from '@/data/countries';
import { useProgress } from '@/hooks/useProgress';
import { useSound } from '@/hooks/useSound';
import FunFactPopup from '@/components/FunFactPopup';

type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

interface Question {
  correct: CountryAnimal;
  options: CountryAnimal[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getPool(difficulty: Difficulty): CountryAnimal[] {
  if (difficulty === 'all') return nationalAnimals;
  if (difficulty === 'easy') return nationalAnimals.filter(a => a.difficulty === 'easy');
  if (difficulty === 'medium') return nationalAnimals.filter(a => a.difficulty !== 'hard');
  return nationalAnimals;
}

function buildQuestion(pool: CountryAnimal[]): Question {
  const correct = pool[Math.floor(Math.random() * pool.length)];
  const others = shuffle(pool.filter(a => a.countryId !== correct.countryId)).slice(0, 3);
  return { correct, options: shuffle([correct, ...others]) };
}

export default function AnimalsPage() {
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
    const qs = Array.from({ length: Math.min(10, pool.length) }, () => buildQuestion(pool));
    setQuestions(qs);
    setQIndex(0);
    setSelected(null);
    setScore(0);
    setCorrect(0);
    setFunFact('');
    setView('quiz');
  }, [difficulty]);

  const handleAnswer = useCallback((animalId: string) => {
    if (selected !== null) return;
    setSelected(animalId);
    const currentQ = questions[qIndex];
    const isCorrect = animalId === currentQ.correct.countryId;
    if (isCorrect) {
      setScore(s => s + 10);
      setCorrect(c => c + 1);
      addPoints(10);
      playCorrect();
      if (currentQ.correct.funFact) setFunFact(currentQ.correct.funFact);
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
    const pct = Math.round((correct / questions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 70 ? '🌟' : pct >= 40 ? '👍' : '📚';
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-700 to-emerald-900">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl animate-bounce-in">
          <div className="text-7xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-black text-gray-800 mb-1">
            {pct === 100 ? 'מושלם! חיות-מאן!' : pct >= 70 ? 'מצוין!' : 'נסה שוב!'}
          </h1>
          <p className="text-gray-400 text-sm mb-5">חיות לאומיות 🐾</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-green-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-green-600">{score}</p>
              <p className="text-xs text-gray-500 mt-0.5">נקודות</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-blue-600">{correct}/{questions.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">נכונות</p>
            </div>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-2xl transition-all">
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
    const flagUrl = countries.find(c => c.id === ca.countryId)?.flagUrl;
    const isAnswered = selected !== null;

    return (
      <div className="min-h-screen p-4 bg-gradient-to-br from-green-700 to-emerald-900">
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

          <div className="bg-white rounded-3xl p-6 shadow-2xl mb-4 text-center">
            <p className="text-gray-400 text-sm font-semibold mb-4">🐾 מה החיה הלאומית של...?</p>
            <div className="flex flex-col items-center gap-3">
              {flagUrl && (
                <div className="relative w-40 h-28 rounded-2xl overflow-hidden shadow-md">
                  <Image src={flagUrl} alt={ca.countryHebrew} fill style={{ objectFit: 'cover' }} priority />
                </div>
              )}
              <p className="text-xl font-black text-gray-800">{ca.countryHebrew}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {options.map(opt => {
              const isCorrectOpt = opt.countryId === ca.countryId;
              const isSelectedOpt = opt.countryId === selected;
              let bg = 'bg-white hover:bg-green-50 border-2 border-white/60 hover:scale-105';
              let text = 'text-gray-800';
              let opacity = '';
              if (isAnswered) {
                if (isCorrectOpt) { bg = 'bg-green-500 border-2 border-green-600'; text = 'text-white'; }
                else if (isSelectedOpt) { bg = 'bg-red-400 border-2 border-red-500'; text = 'text-white'; }
                else { bg = 'bg-white border-2 border-white/40'; opacity = 'opacity-40'; text = 'text-gray-600'; }
              }
              return (
                <button
                  key={opt.countryId}
                  onClick={() => !isAnswered && handleAnswer(opt.countryId)}
                  disabled={isAnswered}
                  className={`${bg} ${text} ${opacity} rounded-2xl p-3 font-bold text-center transition-all shadow-lg active:scale-95 overflow-hidden`}
                >
                  <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2">
                    <Image
                      src={opt.photoUrl}
                      alt={opt.animalEnglish}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 45vw, 200px"
                    />
                  </div>
                  <div className="text-sm leading-tight">{opt.animal}</div>
                  {isCorrectOpt && isAnswered && <div className="text-xs opacity-80 mt-1">{opt.animalEnglish}</div>}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`mt-4 p-4 rounded-2xl text-center font-black text-lg animate-bounce-in ${
              selected === ca.countryId ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-800'
            }`}>
              {selected === ca.countryId
                ? `🎉 נכון! ה${ca.animal} הוא הסמל של ${ca.countryHebrew}!`
                : `💡 החיה הלאומית של ${ca.countryHebrew} היא ה${ca.animal} ${ca.emoji}`
              }
            </div>
          )}

          <FunFactPopup fact={funFact} visible={!!funFact && selected === ca.countryId} />
        </div>
      </div>
    );
  }

  // ─── LANDING ───
  const pool = getPool(difficulty);
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-green-700 to-emerald-900">
      <div className="max-w-md mx-auto">
        <Link href="/" className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold">
          ← חזרה לדף הבית
        </Link>

        <div className="text-center mb-8 mt-2">
          <div className="text-7xl mb-3">🐾</div>
          <h1 className="text-4xl font-black text-white mb-2">חיות לאומיות!</h1>
          <p className="text-green-200">נמרים, פנדות, נשרים ועוד...</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-5">
          <div>
            <h3 className="font-black text-gray-700 mb-3 text-lg">⚡ רמת קושי</h3>
            <div className="grid grid-cols-2 gap-2">
              {([
                ['easy', '😊', 'קל', '20 חיות מפורסמות'],
                ['medium', '🤔', 'בינוני', '45 חיות'],
                ['hard', '😤', 'קשה', '65 חיות'],
                ['all', '🌍', 'הכל', 'כל 65 החיות'],
              ] as const).map(([v, emoji, label, desc]) => (
                <button
                  key={v}
                  onClick={() => setDifficulty(v)}
                  className={`p-3 rounded-2xl border-2 text-center transition-all ${
                    difficulty === v ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-2xl">{emoji}</div>
                  <div className="font-bold text-sm text-gray-800">{label}</div>
                  <div className="text-xs text-gray-400">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startQuiz}
            disabled={pool.length < 4}
            className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-black text-xl py-4 rounded-2xl shadow-lg transition-all hover:scale-105 disabled:opacity-50"
          >
            🐾 התחל! ({Math.min(10, pool.length)} שאלות)
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-3xl opacity-40">
          {['🦁', '🐼', '🦅'].map((a, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.25}s` }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
