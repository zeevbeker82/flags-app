'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { countries, continentInfo } from '@/data/countries';
import { useProgress } from '@/hooks/useProgress';
import FlagCard from '@/components/FlagCard';
import ContinentSelector from '@/components/ContinentSelector';
import { Continent } from '@/types';
import { Suspense } from 'react';

function LearnContent() {
  const searchParams = useSearchParams();
  const initialContinent = (searchParams.get('continent') as Continent) || 'all';
  const [selectedContinent, setSelectedContinent] = useState<Continent | 'all'>(initialContinent);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showStarred, setShowStarred] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'card'>('grid');
  const { progress, markLearned, toggleStarred } = useProgress();

  const filtered = countries.filter(c => {
    if (showStarred) return progress.starredCountries.includes(c.id);
    if (selectedContinent === 'all') return true;
    return c.continent === selectedContinent;
  });

  useEffect(() => { setCurrentIdx(0); }, [selectedContinent, showStarred]);

  const counts = Object.fromEntries(
    ['all', 'europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania'].map(c =>
      [c, c === 'all' ? countries.length : countries.filter(co => co.continent === c).length]
    )
  );

  const current = filtered[currentIdx];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">📚 למידה</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowStarred(!showStarred)}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${showStarred ? 'bg-yellow-400 text-white' : 'bg-white text-gray-600 border'}`}
          >
            ⭐ שמורים
          </button>
          <button
            onClick={() => setViewMode(v => v === 'grid' ? 'card' : 'grid')}
            className="px-4 py-2 rounded-xl bg-white border text-gray-600 font-semibold"
          >
            {viewMode === 'grid' ? '🃏 כרטיס' : '⊞ רשת'}
          </button>
        </div>
      </div>

      <ContinentSelector
        selected={selectedContinent}
        onChange={c => { setSelectedContinent(c); setShowStarred(false); }}
        counts={counts}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-xl">
          {showStarred ? 'אין מדינות שמורות עדיין' : 'אין מדינות'}
        </div>
      ) : viewMode === 'card' && current ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-500">{currentIdx + 1} / {filtered.length}</p>
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
            <img src={current.flagUrl} alt={current.nameHebrew} className="w-full h-56 object-cover rounded-2xl mb-6 shadow" />
            <h2 className="text-3xl font-extrabold text-gray-800 mb-1">{current.nameHebrew}</h2>
            <p className="text-gray-400 text-lg mb-2">{current.nameEnglish}</p>
            <p className="text-gray-500">🏛️ בירה: <span className="font-semibold">{current.capital}</span></p>
            <p className="text-gray-500">
              🌍 יבשת: <span className="font-semibold" style={{ color: continentInfo[current.continent].color }}>
                {continentInfo[current.continent].nameHebrew}
              </span>
            </p>
            {current.funFact && (
              <p className="mt-4 text-sm text-blue-600 bg-blue-50 rounded-xl p-3">{current.funFact}</p>
            )}
            <button onClick={() => toggleStarred(current.id)} className="mt-4 text-3xl hover:scale-125 transition-transform">
              {progress.starredCountries.includes(current.id) ? '⭐' : '☆'}
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
              disabled={currentIdx === 0}
              className="px-8 py-3 bg-white rounded-xl shadow font-bold text-gray-700 disabled:opacity-40 hover:bg-gray-50"
            >
              ← הקודם
            </button>
            <button
              onClick={() => { markLearned(current.id); setCurrentIdx(i => Math.min(filtered.length - 1, i + 1)); }}
              className="px-8 py-3 bg-blue-500 text-white rounded-xl shadow font-bold hover:bg-blue-600"
            >
              {currentIdx < filtered.length - 1 ? 'הבא →' : '✓ סיום'}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(c => (
            <FlagCard
              key={c.id}
              country={c}
              showCapital
              isStarred={progress.starredCountries.includes(c.id)}
              onStar={() => toggleStarred(c.id)}
              size="md"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">טוען...</div>}>
      <LearnContent />
    </Suspense>
  );
}
