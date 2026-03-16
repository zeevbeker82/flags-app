'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { countries, continentInfo } from '@/data/countries';
import { Continent } from '@/types';

const continentsList: Continent[] = ['europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania'];

export default function WorldMapPage() {
  const { progress, loaded } = useProgress();
  const [selected, setSelected] = useState<Continent | null>(null);

  if (!loaded) return <div className="text-center py-20 text-gray-400">טוען...</div>;

  const learned = progress.learnedCountries;

  if (selected) {
    const info = continentInfo[selected];
    const continentCountries = countries.filter(c => c.continent === selected);
    const learnedCount = continentCountries.filter(c => learned.includes(c.id)).length;
    const pct = continentCountries.length > 0 ? Math.round((learnedCount / continentCountries.length) * 100) : 0;

    return (
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={() => setSelected(null)} className="text-blue-500 font-bold text-sm hover:text-blue-700">← מפה</button>
          <span className="text-2xl">{info.emoji}</span>
          <h1 className="text-2xl font-black text-gray-800">{info.nameHebrew}</h1>
          <span className="text-gray-400 text-sm mr-auto">{learnedCount}/{continentCountries.length} ({pct}%)</span>
        </div>

        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: info.color }} />
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
            {continentCountries.map(country => {
              const isLearned = learned.includes(country.id);
              return (
                <div key={country.id} className="flex flex-col items-center gap-0.5" title={country.nameHebrew}>
                  <div className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                    isLearned ? 'border-green-400 shadow-sm shadow-green-200' : 'border-gray-200'
                  }`}>
                    <Image
                      src={country.flagUrl}
                      alt={country.nameHebrew}
                      fill
                      style={{ objectFit: 'cover', filter: isLearned ? 'none' : 'grayscale(1) opacity(0.35)' }}
                    />
                    {!isLearned && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-xs font-black">?</span>
                      </div>
                    )}
                  </div>
                  {isLearned && (
                    <span className="text-[8px] text-gray-500 text-center leading-tight max-w-[3rem] truncate">
                      {country.nameHebrew}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {pct === 100 && (
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4 text-center animate-bounce-in">
            <p className="text-green-700 font-black text-lg">🏆 למדת את כל מדינות {info.nameHebrew}!</p>
          </div>
        )}

        <div className="bg-blue-50 rounded-2xl p-4 text-center text-sm text-blue-600">
          💡 לחץ על <Link href="/learn" className="font-bold underline">למידה</Link> כדי ללמוד עוד מדינות!
        </div>
      </div>
    );
  }

  const totalLearned = learned.length;
  const totalCountries = countries.length;
  const totalPct = totalCountries > 0 ? Math.round((totalLearned / totalCountries) * 100) : 0;

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-blue-500 font-bold text-sm hover:text-blue-700">← בית</Link>
        <h1 className="text-3xl font-black text-gray-800">🗺️ מפת העולם</h1>
      </div>

      {/* Total progress */}
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
          <span>למדת {totalLearned} מתוך {totalCountries} מדינות</span>
          <span className={totalPct === 100 ? 'text-green-600 font-black' : 'text-blue-600'}>{totalPct}%</span>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${totalPct}%`, background: totalPct === 100 ? '#16a34a' : '#3b82f6' }}
          />
        </div>
        {totalPct === 100 && (
          <p className="text-center text-green-600 font-black text-sm mt-2 animate-bounce-in">🌍 למדת את כל מדינות העולם! מדהים!</p>
        )}
      </div>

      {/* Continent grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {continentsList.map(c => {
          const info = continentInfo[c];
          const continentCountries = countries.filter(co => co.continent === c);
          const learnedInContinent = continentCountries.filter(co => learned.includes(co.id)).length;
          const pct = continentCountries.length > 0 ? Math.round((learnedInContinent / continentCountries.length) * 100) : 0;

          return (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className="bg-white rounded-2xl shadow p-5 text-right border-2 border-transparent hover:shadow-lg hover:-translate-y-1 transition-all"
              style={{ borderColor: pct === 100 ? info.color : 'transparent' }}
            >
              <div className="text-4xl mb-2">{info.emoji}</div>
              <h3 className="font-black text-gray-800 text-lg">{info.nameHebrew}</h3>
              <p className="text-gray-400 text-xs mb-3">{continentCountries.length} מדינות</p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: info.color }} />
              </div>
              <p className="text-xs font-bold" style={{ color: info.color }}>{learnedInContinent}/{continentCountries.length} נלמדו · {pct}%</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
