'use client';
import { useState, useCallback, useRef } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { useScore } from '@/hooks/useScore';
import { useSound } from '@/hooks/useSound';
import QuizCard from '@/components/QuizCard';
import CapitalQuizCard from '@/components/CapitalQuizCard';
import LanguageQuizCard from '@/components/LanguageQuizCard';
import FunFactPopup from '@/components/FunFactPopup';
import ContinentSelector from '@/components/ContinentSelector';
import { Continent, Difficulty, QuizQuestion, Country } from '@/types';
import { calcQuizPoints } from '@/utils/scoring';
import { buildQuestion, buildCapitalQuestion, buildLanguageQuestion, getQuestionPool } from '@/utils/difficulty';
import { countries } from '@/data/countries';

type QuizType = 'flag-to-name' | 'name-to-flag' | 'capital' | 'language';
type ActiveQ =
  | { kind: 'flags'; q: QuizQuestion }
  | { kind: 'capital'; country: Country; options: Country[] }
  | { kind: 'language'; country: Country; options: Country[] };

export default function QuizPage() {
  const [continent, setContinent] = useState<Continent | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [quizType, setQuizType] = useState<QuizType>('flag-to-name');
  const [activeQ, setActiveQ] = useState<ActiveQ | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null);
  const [funFact, setFunFact] = useState('');

  const { addPoints, unlockAchievement, collectCountry, progress } = useProgress();
  const { score, streak, correct, total, recordAnswer, addScore, reset } = useScore();
  const { playCorrect, playWrong } = useSound(progress.soundEnabled !== false);
  const currentCountryRef = useRef<Country | null>(null);

  // Check if language quiz is available (need ≥4 countries with language field)
  const hasLanguages = countries.filter(c => c.language && c.language.trim() !== '').length >= 4;

  const nextQuestion = useCallback(() => {
    setFunFact('');
    setFeedback(null);
    if (quizType === 'flag-to-name' || quizType === 'name-to-flag') {
      const q = buildQuestion(continent, difficulty, quizType);
      currentCountryRef.current = q.country;
      setActiveQ({ kind: 'flags', q });
    } else if (quizType === 'capital') {
      const { country, options } = buildCapitalQuestion(continent, difficulty);
      currentCountryRef.current = country;
      setActiveQ({ kind: 'capital', country, options });
    } else {
      const { country, options } = buildLanguageQuestion(continent, difficulty);
      currentCountryRef.current = country;
      setActiveQ({ kind: 'language', country, options });
    }
    setQuestionIndex(i => i + 1);
  }, [continent, difficulty, quizType]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    recordAnswer(isCorrect);
    const pts = calcQuizPoints(isCorrect, isCorrect ? streak + 1 : 0);
    const country = currentCountryRef.current;

    if (isCorrect) {
      addScore(pts);
      addPoints(pts);
      playCorrect();
      if (country) {
        collectCountry(country.id);
        if (country.funFact) setFunFact(country.funFact);
      }
    } else {
      playWrong();
    }

    setQuestionsAnswered(q => q + 1);
    setFeedback({ correct: isCorrect });

    if (questionsAnswered + 1 >= 10 && correct + (isCorrect ? 1 : 0) >= 10) {
      unlockAchievement('first_step');
    }
    if (isCorrect && streak + 1 >= 20) unlockAchievement('streak_master');

    setTimeout(nextQuestion, 1800);
  }, [recordAnswer, streak, addScore, addPoints, questionsAnswered, correct, unlockAchievement, nextQuestion, playCorrect, playWrong, collectCountry]);

  const handleStart = () => {
    reset();
    setQuestionsAnswered(0);
    setFeedback(null);
    setFunFact('');
    nextQuestion();
  };

  // ─── LANDING SCREEN ───
  if (!activeQ) {
    const flagPool = getQuestionPool(continent, difficulty);
    const canStart = quizType === 'language'
      ? hasLanguages
      : quizType === 'capital'
        ? flagPool.length >= 4
        : flagPool.length >= 4;

    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">🎯 תרגול</h1>

        <div className="bg-white rounded-2xl shadow p-6 space-y-5">
          {/* Quiz type - 2×2 grid */}
          <div>
            <p className="font-semibold text-gray-700 mb-3">סוג שאלות</p>
            <div className="grid grid-cols-2 gap-3">
              {([
                ['flag-to-name', '🏳️', 'דגל → מדינה', true],
                ['name-to-flag', '🌍', 'מדינה → דגל', true],
                ['capital', '🏛️', 'בירות', true],
                ['language', '🌐', 'שפות', hasLanguages],
              ] as [QuizType, string, string, boolean][]).map(([v, emoji, label, enabled]) => (
                <button
                  key={v}
                  onClick={() => enabled && setQuizType(v)}
                  disabled={!enabled}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all text-center ${
                    quizType === v
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : enabled
                        ? 'border-gray-200 text-gray-600 hover:border-blue-300'
                        : 'border-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <div className="text-xl mb-1">{emoji}</div>
                  <div>{label}</div>
                  {!enabled && <div className="text-xs mt-0.5 text-gray-300">בקרוב</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <p className="font-semibold text-gray-700 mb-3">רמת קושי</p>
            <div className="grid grid-cols-3 gap-2">
              {([
                ['easy', '😊 קל', 'מדינות מפורסמות, דגלים שונים'],
                ['medium', '🤔 בינוני', 'מדינות מגוונות, ערבוב יבשות'],
                ['hard', '😤 קשה', 'הכל + דגלים דומים מאותה יבשת'],
              ] as const).map(([v, label, desc]) => (
                <button key={v} onClick={() => setDifficulty(v)}
                  className={`p-3 rounded-xl border-2 font-semibold text-sm transition-all text-center ${difficulty === v ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 text-gray-600 hover:border-green-300'}`}>
                  <p>{label}</p>
                  <p className="text-xs font-normal mt-1 opacity-70 leading-tight">{desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Continent */}
          <div>
            <p className="font-semibold text-gray-700 mb-3">יבשת</p>
            <ContinentSelector selected={continent} onChange={setContinent} />
          </div>

          <button onClick={handleStart}
            disabled={!canStart}
            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all">
            🚀 התחל תרגול!
          </button>
        </div>

        {questionsAnswered > 0 && (
          <div className="bg-white rounded-2xl shadow p-5 text-center">
            <p className="text-gray-500 mb-2">תוצאה אחרונה</p>
            <p className="text-3xl font-bold text-blue-600">{score} נקודות</p>
            <p className="text-gray-500">{correct}/{total} תשובות נכונות</p>
          </div>
        )}
      </div>
    );
  }

  // ─── QUIZ SCREEN ───
  const difficultyLabel: Record<Difficulty, string> = { easy: '😊 קל', medium: '🤔 בינוני', hard: '😤 קשה' };
  const quizTypeLabel: Record<QuizType, string> = {
    'flag-to-name': '🏳️',
    'name-to-flag': '🌍',
    'capital': '🏛️',
    'language': '🌐',
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={() => setActiveQ(null)} className="text-blue-500 hover:text-blue-700 font-semibold">
          ← חזור
        </button>
        <div className="flex gap-2 text-sm text-gray-600 flex-wrap justify-end">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{difficultyLabel[difficulty]}</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{quizTypeLabel[quizType]}</span>
          <span>🔥 {streak}</span>
          <span>⭐ {score}</span>
          <span>✓ {correct}/{total}</span>
        </div>
      </div>

      {activeQ.kind === 'flags' && (
        <QuizCard key={questionIndex} question={activeQ.q} onAnswer={handleAnswer} />
      )}
      {activeQ.kind === 'capital' && (
        <CapitalQuizCard key={questionIndex} country={activeQ.country} options={activeQ.options} onAnswer={handleAnswer} />
      )}
      {activeQ.kind === 'language' && (
        <LanguageQuizCard key={questionIndex} country={activeQ.country} options={activeQ.options} onAnswer={handleAnswer} />
      )}

      <FunFactPopup fact={funFact} visible={!!funFact && !!feedback?.correct} />
    </div>
  );
}
