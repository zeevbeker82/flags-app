'use client';
import { useState, useEffect, useMemo } from 'react';
import { Country, QuizQuestion } from '@/types';
import { shuffle } from '@/utils/shuffle';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  showTimer?: boolean;
  timeLimit?: number;
}

export default function QuizCard({ question, onAnswer, showTimer = false, timeLimit = 10 }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  // useMemo מחשב מחדש בכל פעם שהשאלה משתנה — מבטיח שהתשובה הנכונה תמיד כלולה
  const options = useMemo(() => shuffle(question.options), [question]);

  useEffect(() => {
    setSelected(null);
    setTimeLeft(timeLimit);
  }, [question, timeLimit]);

  useEffect(() => {
    if (!showTimer || selected !== null) return;
    if (timeLeft <= 0) {
      onAnswer(false);
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, showTimer, selected, onAnswer]);

  const handleSelect = (country: Country) => {
    if (selected) return;
    const isCorrect = country.id === question.country.id;
    setSelected(country.id);
    setTimeout(() => onAnswer(isCorrect), 1200);
  };

  const isFlag = question.type === 'flag-to-name';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full mx-auto">
      {showTimer && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>זמן נותר</span>
            <span className={timeLeft <= 3 ? 'text-red-500 font-bold' : ''}>{timeLeft}s</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 3 ? 'bg-red-500' : 'bg-blue-500'}`}
              style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        {isFlag ? (
          // שאלה על דגל: מציג דגל גדול + שאלה קטנה מעליו
          <>
            <p className="text-gray-500 text-sm mb-3">איזו מדינה שייכת לדגל הזה?</p>
            <div className="flex justify-center">
              <img
                src={question.country.flagUrl}
                alt="דגל"
                className="h-40 max-w-full object-contain rounded-lg shadow"
              />
            </div>
          </>
        ) : (
          // שאלה על מדינה: מציג שם מדינה גדול + שאלה קטנה מתחתיו
          <>
            <p className="text-3xl font-extrabold text-gray-800 mb-2">{question.country.nameHebrew}</p>
            <p className="text-gray-500 text-sm">מה הדגל של מדינה זו?</p>
          </>
        )}
      </div>

      <div className={`grid gap-3 ${isFlag ? 'grid-cols-2' : 'grid-cols-2'}`}>
        {options.map(opt => {
          let btnClass = 'border-2 rounded-xl p-3 transition-all font-semibold text-sm ';
          if (!selected) {
            btnClass += 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
          } else if (opt.id === question.country.id) {
            btnClass += 'border-green-500 bg-green-100 text-green-800';
          } else if (opt.id === selected) {
            btnClass += 'border-red-500 bg-red-100 text-red-800';
          } else {
            btnClass += 'border-gray-200 opacity-50';
          }

          return (
            <button key={opt.id} onClick={() => handleSelect(opt)} className={btnClass}>
              {isFlag ? (
                // שאלה על דגל → תשובות = שמות מדינות בלבד
                <p>{opt.nameHebrew}</p>
              ) : (
                // שאלה על מדינה → תשובות = דגלים בלבד, ללא שמות
                <img src={opt.flagUrl} alt="דגל" className="h-16 w-full object-cover rounded" />
              )}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className={`mt-4 p-3 rounded-lg text-center font-bold ${selected === question.country.id ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {selected === question.country.id ? '✓ כל הכבוד!' : `✗ התשובה הנכונה: ${question.country.nameHebrew}`}
        </div>
      )}
    </div>
  );
}
