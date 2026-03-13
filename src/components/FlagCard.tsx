'use client';
import Image from 'next/image';
import { Country } from '@/types';

interface FlagCardProps {
  country: Country;
  showName?: boolean;
  showCapital?: boolean;
  isStarred?: boolean;
  onStar?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function FlagCard({
  country,
  showName = true,
  showCapital = false,
  isStarred = false,
  onStar,
  size = 'md',
}: FlagCardProps) {
  const sizes = {
    sm: { img: 80, h: 'h-12', card: 'p-2' },
    md: { img: 160, h: 'h-24', card: 'p-4' },
    lg: { img: 320, h: 'h-48', card: 'p-6' },
  };
  const s = sizes[size];

  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${s.card} flex flex-col items-center gap-3`}>
      <div className={`relative w-full ${s.h} overflow-hidden rounded-lg`}>
        <img
          src={country.flagUrl}
          alt={`דגל ${country.nameHebrew}`}
          className="w-full h-full object-cover"
        />
      </div>
      {showName && (
        <div className="text-center">
          <p className="font-bold text-gray-800 text-lg">{country.nameHebrew}</p>
          <p className="text-gray-400 text-sm">{country.nameEnglish}</p>
          {showCapital && (
            <p className="text-gray-500 text-sm mt-1">🏛️ {country.capital}</p>
          )}
        </div>
      )}
      {onStar && (
        <button
          onClick={onStar}
          className="text-2xl hover:scale-125 transition-transform"
          title={isStarred ? 'הסר מסימניות' : 'הוסף לסימניות'}
        >
          {isStarred ? '⭐' : '☆'}
        </button>
      )}
    </div>
  );
}
