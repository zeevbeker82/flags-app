'use client';
import { useState, useCallback } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { useScore } from '@/hooks/useScore';
import QuizCard from '@/components/QuizCard';
import ContinentSelector from '@/components/ContinentSelector';
import { Continent, Difficulty, QuizQuestion } from '@/types';
import { calcQuizPoints } from '@/utils/scoring';
import { buildQuestion, getQuestionPool } from '@/utils/difficulty';

export default function QuizPage() {
  const [continent, setContinent] = useState<Continent | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [quizType, setQuizType] = useState<'flag-to-name' | 'name-to-flag'>('flag-to-name');
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; shown: boolean } | null>(null);
  const { addPoints, unlockAchievement } = useProgress();
  const { score, streak, correct, total, recordAnswer, addScore, reset } = useScore();

  // pool משמש רק לבדיקת מינימום מדינות לפני התחלה
  const pool = getQuestionPool(continent, difficulty);

  const nextQuestion = useCallback(() => {
    setQuestion(buildQuestion(continent, difficulty, quizType));
    setQuestionIndex(i => i + 1);
    setFeedback(null);
  }, [continent, difficulty, quizType]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    recordAnswer(isCorrect);
    const pts = calcQuizPoints(isCorrect, isCorrect ? streak + 1 : 0);
    if (isCorrect) { addScore(pts); addPoints(pts); }
    setQuestionsAnswered(q => q + 1);
    setFeedback({ correct: isCorrect, shown: true });

    if (questionsAnswered + 1 >= 10 && correct + (isCorrect ? 1 : 0) >= 10) {
      unlockAchievement('first_step');
    }
    if (isCorrect && streak + 1 >= 20) unlockAchievement('streak_master');

    setTimeout(nextQuestion, 1400);
  }, [recordAnswer, streak, addScore, addPoints, questionsAnswered, correct, unlockAchievement, nextQuestion]);

  const handleStart = () => {
    reset();
    setQuestionsAnswered(0);
    setFeedback(null);
    nextQuestion();
  };

  if (!question) {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">🎯 תרגול</h1>

        <div className="bg-white rounded-2xl shadow p-6 space-y-5">
          <div>
            <p className="font-semibold text-gray-700 mb-3">סוג שאלות</p>
            <div className="grid grid-cols-2 gap-3">
              {([['flag-to-name', '🏳️ דגל → מדינה'], ['name-to-flag', '🌍 מדינה → דגל']] as const).map(([v, label]) => (
                <button key={v} onClick={() => setQuizType(v)}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all ${quizType === v ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:border-blue-300'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-3">רמת קושי</p>
            <div className="grid grid-cols-3 gap-2">
              {([
                ['easy',   '😊 קל',     'מדינות מפורסמות, דגלים שונים'],
                ['medium', '🤔 בינוני', 'מדינות מגוונות, ערבוב יבשות'],
                ['hard',   '😤 קשה',    'הכל + דגלים דומים מאותה יבשת'],
              ] as const).map(([v, label, desc]) => (
                <button key={v} onClick={() => setDifficulty(v)}
                  className={`p-3 rounded-xl border-2 font-semibold text-sm transition-all text-center ${difficulty === v ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 text-gray-600 hover:border-green-300'}`}>
                  <p>{label}</p>
                  <p className="text-xs font-normal mt-1 opacity-70 leading-tight">{desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-3">יבשת</p>
            <ContinentSelector selected={continent} onChange={setContinent} />
          </div>

          <button onClick={handleStart}
            disabled={pool.length < 4}
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

  const difficultyLabel: Record<Difficulty, string> = { easy: '😊 קל', medium: '🤔 בינוני', hard: '😤 קשה' };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={() => setQuestion(null)} className="text-blue-500 hover:text-blue-700 font-semibold">
          ← חזור
        </button>
        <div className="flex gap-3 text-sm text-gray-600 flex-wrap justify-end">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{difficultyLabel[difficulty]}</span>
          <span>🔥 {streak}</span>
          <span>⭐ {score}</span>
          <span>✓ {correct}/{total}</span>
        </div>
      </div>

      <QuizCard key={questionIndex} question={question} onAnswer={handleAnswer} />
    </div>
  );
}
