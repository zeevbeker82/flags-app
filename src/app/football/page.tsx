'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { clubs, players } from '@/data/football';
import type { Club, Player } from '@/data/football';

type View = 'landing' | 'setup' | 'quiz' | 'results';
type Category = 'clubs' | 'players';
type GameMode = 'practice' | 'quick' | 'challenge';
type Difficulty = 'easy' | 'medium' | 'hard';
type FootballItem = Club | Player;

interface Question {
  item: FootballItem;
  options: FootballItem[];
}

function isClub(item: FootballItem): item is Club {
  return 'logoUrl' in item;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateQuestions(items: FootballItem[], count: number): Question[] {
  const shuffled = shuffle(items);
  const questionItems = shuffled.slice(0, Math.min(count, shuffled.length));
  return questionItems.map(item => {
    const others = items.filter(i => i.id !== item.id);
    const wrongOptions = shuffle(others).slice(0, 3);
    return { item, options: shuffle([item, ...wrongOptions]) };
  });
}

// Confetti
function Confetti({ show }: { show: boolean }) {
  const [pieces, setPieces] = useState<{ id: number; left: number; color: string; size: number; delay: number }[]>([]);
  useEffect(() => {
    if (show) {
      const colors = ['#22c55e', '#fbbf24', '#3b82f6', '#ef4444', '#8b5cf6', '#f97316', '#ec4899'];
      setPieces(Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[i % colors.length],
        size: Math.random() * 10 + 6,
        delay: Math.random() * 0.6,
      })));
    } else {
      setPieces([]);
    }
  }, [show]);

  if (!show || pieces.length === 0) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          className="absolute confetti-piece"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.id % 2 === 0 ? '50%' : '2px',
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Club logo with fallback
function ClubLogo({ club, size = 130 }: { club: Club; size?: number }) {
  const [err, setErr] = useState(false);
  const initials = club.nameEnglish.split(' ').map(w => w[0]).join('').slice(0, 3);
  if (err) {
    return (
      <div
        className="rounded-2xl flex items-center justify-center font-black text-3xl shadow-inner select-none"
        style={{
          width: size, height: size,
          background: `linear-gradient(135deg, ${club.primaryColor === '#FFFFFF' ? '#e5e7eb' : club.primaryColor}, ${club.secondaryColor})`,
          color: club.primaryColor === '#FFFFFF' ? club.secondaryColor : '#FFFFFF',
          border: '3px solid rgba(0,0,0,0.1)',
          fontSize: size * 0.22,
        }}
      >
        {initials}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={club.logoUrl}
      alt={club.nameEnglish}
      width={size}
      height={size}
      style={{ objectFit: 'contain', width: size, height: size }}
      onError={() => setErr(true)}
      loading="eager"
    />
  );
}

// Player card
function PlayerCard({ player, size = 130 }: { player: Player; size?: number }) {
  const [imgErr, setImgErr] = useState(false);
  const lastName = player.nameEnglish.split(' ').slice(-1)[0];

  if (player.photoUrl && !imgErr) {
    return (
      <div
        className="rounded-2xl overflow-hidden shadow-inner select-none relative"
        style={{ width: size, height: size, border: '3px solid rgba(255,255,255,0.3)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={player.photoUrl}
          alt={player.nameEnglish}
          width={size}
          height={size}
          style={{ objectFit: 'cover', objectPosition: 'top center', width: size, height: size }}
          onError={() => setImgErr(true)}
          loading="eager"
        />
        <div
          className="absolute bottom-0 left-0 right-0 text-center font-black text-white py-1"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            fontSize: size * 0.1,
          }}
        >
          {player.flagEmoji}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden select-none"
      style={{ width: size, height: size, background: `linear-gradient(160deg, ${player.jerseyColor}, ${player.jerseySecondaryColor})`, border: '3px solid rgba(255,255,255,0.3)' }}
    >
      <div className="absolute inset-0 opacity-15 flex">
        {[0,1,2,3].map(i => <div key={i} className="flex-1 bg-white" style={{ margin: '0 2px' }} />)}
      </div>
      <div className="text-5xl z-10" style={{ fontSize: size * 0.35 }}>{player.flagEmoji}</div>
      <div
        className="z-10 font-black text-center px-1 leading-tight mt-1 drop-shadow"
        style={{
          color: '#FFFFFF',
          textShadow: '0 1px 3px rgba(0,0,0,0.6)',
          fontSize: size * 0.11,
          maxWidth: size - 8,
        }}
      >
        {lastName}
      </div>
    </div>
  );
}

export default function FootballPage() {
  const [view, setView] = useState<View>('landing');
  const [category, setCategory] = useState<Category>('clubs');
  const [gameMode, setGameMode] = useState<GameMode>('practice');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showGoal, setShowGoal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  const handleAnswerRef = useRef<(id: string | null) => void>(() => {});

  const getItems = useCallback((): FootballItem[] => {
    const pool = category === 'clubs' ? clubs : players;
    if (difficulty === 'easy') return pool.filter(i => i.difficulty === 'easy');
    if (difficulty === 'medium') return pool.filter(i => i.difficulty !== 'hard');
    return pool;
  }, [category, difficulty]);

  const startQuiz = useCallback(() => {
    const items = getItems();
    const count = gameMode === 'quick' ? 10 : items.length;
    const qs = generateQuestions(items, count);
    setQuestions(qs);
    setQIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrect(0);
    setSelected(null);
    setShowGoal(false);
    setShowConfetti(false);
    setTimeLeft(15);
    setView('quiz');
  }, [getItems, gameMode]);

  const handleAnswer = useCallback((answerId: string | null) => {
    if (selected !== null) return;
    const currentQ = questions[qIndex];
    if (!currentQ) return;

    const isCorrect = answerId === currentQ.item.id;
    setSelected(answerId ?? '__timeout__');

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak(ms => Math.max(ms, newStreak));
      setCorrect(c => c + 1);
      let points = 10;
      if (newStreak >= 5) points += 10;
      else if (newStreak >= 3) points += 5;
      setScore(s => s + points);
      setShowGoal(true);
      setShowConfetti(true);
      setTimeout(() => { setShowGoal(false); setShowConfetti(false); }, 2200);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (gameMode === 'challenge' && !isCorrect) {
        setView('results');
        return;
      }
      if (qIndex + 1 >= questions.length) {
        setView('results');
      } else {
        setQIndex(qi => qi + 1);
        setSelected(null);
        setTimeLeft(15);
      }
    }, 1800);
  }, [selected, questions, qIndex, streak, gameMode]);

  // Keep ref updated
  handleAnswerRef.current = handleAnswer;

  // Timer for quick mode
  useEffect(() => {
    if (view !== 'quiz' || gameMode !== 'quick' || selected !== null) return;
    if (timeLeft <= 0) {
      handleAnswerRef.current(null);
      return;
    }
    const t = setTimeout(() => setTimeLeft(tl => tl - 1), 1000);
    return () => clearTimeout(t);
  }, [view, gameMode, selected, timeLeft]);

  const currentQ = questions[qIndex];

  // ═══ RESULTS ═══
  if (view === 'results') {
    const isChallenge = gameMode === 'challenge';
    const total = isChallenge ? correct : questions.length;
    const pct = total > 0 ? Math.round((correct / (isChallenge ? Math.max(correct + 1, 1) : total)) * 100) : 0;
    const finalPct = isChallenge ? 0 : pct;

    let emoji = '⚽';
    let msg = 'כל הכבוד!';
    if (isChallenge) {
      if (correct >= 10) { emoji = '🏆'; msg = `מדהים! ${correct} תשובות ברצף!`; }
      else if (correct >= 5) { emoji = '⭐'; msg = `יפה! ${correct} ברצף!`; }
      else { emoji = '💪'; msg = `${correct} ברצף - אפשר יותר!`; }
    } else {
      if (finalPct === 100) { emoji = '🏆'; msg = 'מושלם! אלוף כדורגל!'; }
      else if (finalPct >= 80) { emoji = '⭐'; msg = 'מצוין! כמעט מושלם!'; }
      else if (finalPct >= 60) { emoji = '👍'; msg = 'יפה מאוד!'; }
      else { emoji = '💪'; msg = 'תתאמן עוד קצת!'; }
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #14532d, #166534, #15803d)' }}>
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl animate-bounce-in">
          <div className="text-7xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-black text-gray-800 mb-1">{msg}</h1>
          <p className="text-gray-400 text-sm mb-5">{category === 'clubs' ? 'מועדונים ⚽' : 'כוכבים ⭐'} · {gameMode === 'practice' ? 'תרגול' : gameMode === 'quick' ? 'מהיר' : 'אתגר'}</p>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-green-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-green-600">{score}</p>
              <p className="text-xs text-gray-500 mt-0.5">נקודות</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-blue-600">{correct}</p>
              <p className="text-xs text-gray-500 mt-0.5">נכונות</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-3">
              <p className="text-3xl font-black text-orange-500">🔥{maxStreak}</p>
              <p className="text-xs text-gray-500 mt-0.5">רצף</p>
            </div>
          </div>

          {!isChallenge && (
            <div className="mb-5">
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${finalPct}%` }} />
              </div>
              <p className="text-sm text-gray-400">{correct} מתוך {questions.length} ({finalPct}%)</p>
            </div>
          )}

          {/* Achievements */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {correct >= 10 && <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-bold">⚽ אוהד מתחיל</span>}
            {maxStreak >= 10 && <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-bold">🔥 רצף גולים</span>}
            {!isChallenge && finalPct === 100 && <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-bold">🏆 אלוף הכדורגל</span>}
          </div>

          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-2xl transition-all hover:scale-105">
              🔄 שחק שוב
            </button>
            <button onClick={() => setView('landing')} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all">
              🏠 ראשי
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══ QUIZ ═══
  if (view === 'quiz' && currentQ) {
    const item = currentQ.item;
    const isAnswered = selected !== null;
    const isTimeout = selected === '__timeout__';

    return (
      <div className="min-h-screen p-4" style={{ background: 'linear-gradient(135deg, #14532d, #166534, #15803d)' }}>
        <Confetti show={showConfetti} />

        {/* Goal animation */}
        {showGoal && (
          <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
            <div className="goal-animation text-center">
              <div className="text-8xl" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))' }}>⚽</div>
              <div className="text-5xl font-black mt-2" style={{ color: '#FFEF00', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                גוֹוֹוֹל!
              </div>
            </div>
          </div>
        )}

        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setView('setup')} className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl text-sm font-bold transition-all">
              ← חזור
            </button>
            <div className="flex gap-2">
              <span className="bg-yellow-400/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-black">⭐ {score}</span>
              {streak > 0 && <span className="bg-orange-500/90 text-white px-3 py-1 rounded-full text-sm font-black">🔥 {streak}</span>}
              {gameMode !== 'challenge' && (
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">{qIndex + 1}/{questions.length}</span>
              )}
            </div>
          </div>

          {/* Timer */}
          {gameMode === 'quick' && !isAnswered && (
            <div className="mb-4">
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(timeLeft / 15) * 100}%`, backgroundColor: timeLeft > 5 ? '#22c55e' : '#ef4444' }}
                />
              </div>
              <p className="text-white/70 text-center text-xs mt-1">{timeLeft} שניות</p>
            </div>
          )}

          {/* Question card */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl mb-4 text-center">
            <p className="text-gray-400 text-sm font-semibold mb-4">
              {category === 'clubs' ? '🏟️ מה שם המועדון?' : '⭐ מי השחקן?'}
            </p>
            <div className="flex justify-center">
              {isClub(item) ? <ClubLogo club={item} size={140} /> : <PlayerCard player={item} size={140} />}
            </div>
            {isClub(item) && (
              <p className="text-xs text-gray-300 mt-3">🌍 {item.countryHebrew}</p>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3">
            {currentQ.options.map(option => {
              const isCorrectOption = option.id === item.id;
              const isSelectedOption = option.id === selected;
              let bg = 'bg-white hover:bg-green-50 border-2 border-white/60';
              let text = 'text-gray-800';
              let opacity = '';
              if (isAnswered) {
                if (isCorrectOption) {
                  bg = 'bg-green-500 border-2 border-green-600';
                  text = 'text-white';
                } else if (isSelectedOption || (isTimeout && false)) {
                  bg = 'bg-red-400 border-2 border-red-500';
                  text = 'text-white';
                } else {
                  bg = 'bg-white border-2 border-white/40';
                  opacity = 'opacity-40';
                  text = 'text-gray-600';
                }
              }
              return (
                <button
                  key={option.id}
                  onClick={() => !isAnswered && handleAnswer(option.id)}
                  disabled={isAnswered}
                  className={`${bg} ${text} ${opacity} rounded-2xl p-4 font-bold text-center transition-all shadow-lg ${!isAnswered ? 'hover:scale-105 hover:shadow-xl active:scale-95' : ''}`}
                >
                  <div className="text-sm leading-tight">{option.nameEnglish}</div>
                  {isCorrectOption && isAnswered && (
                    <div className="text-xs opacity-80 mt-1">{option.nameHebrew}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div
              className={`mt-4 p-4 rounded-2xl text-center font-black text-lg animate-bounce-in ${
                selected === item.id ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-800'
              }`}
            >
              {selected === item.id
                ? '⚽ כל הכבוד! גוֹל!'
                : isTimeout
                ? `⏰ הזמן נגמר! התשובה: ${item.nameEnglish}`
                : `💡 התשובה הנכונה: ${item.nameEnglish}`
              }
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══ SETUP ═══
  if (view === 'setup') {
    const items = getItems();
    const modeCount = gameMode === 'quick' ? Math.min(10, items.length) : items.length;
    return (
      <div className="min-h-screen p-4" style={{ background: 'linear-gradient(135deg, #14532d, #166534, #15803d)' }}>
        <div className="max-w-md mx-auto">
          <button onClick={() => setView('landing')} className="text-white/80 hover:text-white mb-6 flex items-center gap-2 font-bold">← חזור</button>

          <div className="text-center mb-6">
            <div className="text-5xl mb-2">{category === 'clubs' ? '🏟️' : '⭐'}</div>
            <h1 className="text-3xl font-black text-white">{category === 'clubs' ? 'מועדונים ⚽' : 'כוכבים ⭐'}</h1>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
            {/* Game mode */}
            <div>
              <h3 className="font-black text-gray-700 mb-3 text-lg">🎮 מצב משחק</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'practice', label: 'תרגול', desc: 'ללא זמן', emoji: '📚' },
                  { id: 'quick', label: 'מהיר', desc: '10 שאלות', emoji: '⚡' },
                  { id: 'challenge', label: 'אתגר', desc: 'עד שגוי', emoji: '🔥' },
                ].map(m => (
                  <button
                    key={m.id}
                    onClick={() => setGameMode(m.id as GameMode)}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      gameMode === m.id ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="text-2xl">{m.emoji}</div>
                    <div className="font-bold text-sm text-gray-800">{m.label}</div>
                    <div className="text-xs text-gray-400">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <h3 className="font-black text-gray-700 mb-3 text-lg">⚡ רמת קושי</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'easy', label: 'קל', emoji: '😊', desc: 'הכי מפורסמים' },
                  { id: 'medium', label: 'בינוני', emoji: '😤', desc: 'ערבוב' },
                  { id: 'hard', label: 'קשה', emoji: '😈', desc: 'הכל' },
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDifficulty(d.id as Difficulty)}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      difficulty === d.id ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="text-2xl">{d.emoji}</div>
                    <div className="font-bold text-sm text-gray-800">{d.label}</div>
                    <div className="text-xs text-gray-400">{d.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-black text-xl py-4 rounded-2xl shadow-lg transition-all hover:scale-105"
            >
              ⚽ התחל! ({modeCount} שאלות)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══ LANDING ═══
  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(135deg, #14532d, #166534, #15803d)' }}>
      {/* Field decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white" />
      </div>

      <div className="relative p-6 max-w-md mx-auto">
        <Link href="/" className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold">
          ← חזרה לדף הבית
        </Link>

        <div className="text-center mb-8 mt-2">
          <div className="text-7xl mb-3" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
            ⚽
          </div>
          <h1 className="text-5xl font-black text-white mb-2" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            כדורגל!
          </h1>
          <p className="text-green-200 text-lg">למד מועדונים וכוכבים מכל העולם</p>
        </div>

        <div className="space-y-4">
          {/* Clubs card */}
          <button
            onClick={() => { setCategory('clubs'); setView('setup'); }}
            className="w-full bg-white rounded-3xl p-6 text-center shadow-2xl hover:scale-105 active:scale-95 transition-all group"
          >
            <div className="text-5xl mb-2 group-hover:animate-bounce">🏟️</div>
            <h2 className="text-2xl font-black text-green-800">מועדונים ⚽</h2>
            <p className="text-gray-500 mt-1 text-sm">זהה 30 מועדוני כדורגל מפורסמים</p>
            <div className="flex gap-1 justify-center mt-3 flex-wrap">
              {['ספרד 🇪🇸', 'אנגליה 🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'איטליה 🇮🇹', 'ישראל 🇮🇱', 'עוד...'].map(c => (
                <span key={c} className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">{c}</span>
              ))}
            </div>
          </button>

          {/* Players card */}
          <button
            onClick={() => { setCategory('players'); setView('setup'); }}
            className="w-full bg-white rounded-3xl p-6 text-center shadow-2xl hover:scale-105 active:scale-95 transition-all group"
          >
            <div className="text-5xl mb-2 group-hover:animate-bounce">⭐</div>
            <h2 className="text-2xl font-black text-yellow-700">כוכבים ⭐</h2>
            <p className="text-gray-500 mt-1 text-sm">זהה 25 שחקנים מפורסמים</p>
            <div className="flex gap-1 justify-center mt-3 flex-wrap">
              {['מסי 🇦🇷', 'רונאלדו 🇵🇹', 'מבאפה 🇫🇷', 'זהבי 🇮🇱', 'עוד...'].map(c => (
                <span key={c} className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-semibold">{c}</span>
              ))}
            </div>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { emoji: '🏟️', count: '30', label: 'מועדונים' },
            { emoji: '⭐', count: '25', label: 'שחקנים' },
            { emoji: '🌍', count: '12', label: 'ליגות' },
          ].map(s => (
            <div key={s.label} className="bg-white/15 rounded-2xl p-3 text-center">
              <div className="text-2xl">{s.emoji}</div>
              <div className="text-white font-black text-xl">{s.count}</div>
              <div className="text-green-200 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bouncing balls */}
        <div className="flex justify-center gap-6 mt-8 text-3xl opacity-40">
          {['⚽', '⚽', '⚽'].map((b, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.25}s` }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
