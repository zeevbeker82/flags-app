'use client';
import { Continent } from '@/types';
import { continentInfo } from '@/data/countries';

interface ContinentSelectorProps {
  selected: Continent | 'all';
  onChange: (c: Continent | 'all') => void;
  counts?: Record<string, number>;
}

const continents: (Continent | 'all')[] = ['all', 'europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania'];

export default function ContinentSelector({ selected, onChange, counts }: ContinentSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {continents.map(c => {
        const info = c === 'all' ? { nameHebrew: 'הכל', color: '#6B7280', emoji: '🌍' } : continentInfo[c];
        const count = counts?.[c];
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            style={{ borderColor: info.color, backgroundColor: selected === c ? info.color : 'white', color: selected === c ? 'white' : info.color }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold transition-all hover:scale-105 text-sm"
          >
            <span>{info.emoji}</span>
            <span>{info.nameHebrew}</span>
            {count !== undefined && (
              <span className={`text-xs rounded-full px-2 py-0.5 ${selected === c ? 'bg-white/30' : 'bg-gray-100'}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
