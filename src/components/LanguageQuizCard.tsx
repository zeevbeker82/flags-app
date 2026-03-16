'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Country } from '@/types';

interface LanguageQuizCardProps {
  country: Country;
  options: Country[];
  onAnswer: (isCorrect: boolean) => void;
}

export default function LanguageQuizCard({ country, options, onAnswer }: LanguageQuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (selected !== null) return;
    setSelected(optionId);
    onAnswer(optionId === country.id);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-5">
      <p className="text-center text-gray-500 font-semibold text-sm">🌐 באיזו שפה מדברים?</p>

      {/* דגל המדינה */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-40 h-28 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={country.flagUrl}
            alt={country.nameHebrew}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <p className="text-xl font-bold text-gray-800">{country.nameHebrew}</p>
      </div>

      {/* 4 אפשרויות שפה */}
      <div className="grid grid-cols-2 gap-3">
        {options.map(option => {
          const isCorrect = option.id === country.id;
          const isSelected = option.id === selected;

          let bg = 'bg-gray-50 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-300';
          let text = 'text-gray-800';

          if (selected !== null) {
            if (isCorrect) {
              bg = 'bg-green-100 border-2 border-green-400';
              text = 'text-green-800';
            } else if (isSelected) {
              bg = 'bg-red-100 border-2 border-red-400';
              text = 'text-red-800';
            } else {
              bg = 'bg-gray-50 border-2 border-gray-200 opacity-50';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={selected !== null}
              className={`${bg} ${text} rounded-2xl p-4 font-bold text-center transition-all text-base leading-tight ${selected === null ? 'hover:scale-105 active:scale-95' : ''}`}
            >
              {isCorrect && selected !== null && <span className="block text-lg mb-1">✓</span>}
              {isSelected && !isCorrect && <span className="block text-lg mb-1">✗</span>}
              {option.language || '—'}
            </button>
          );
        })}
      </div>
    </div>
  );
}
