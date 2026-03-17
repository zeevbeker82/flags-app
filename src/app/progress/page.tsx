'use client';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { countries, continentInfo } from '@/data/countries';
import { getLevelInfo, LEVELS, getContinentStars } from '@/utils/scoring';
import ProgressBar from '@/components/ProgressBar';
import { Continent } from '@/types';

const continents: Continent[] = ['europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania'];

export default function ProgressPage() {
  const { progress, loaded, resetProgress } = useProgress();
  const levelInfo = getLevelInfo(progress.totalPoints);
  const nextLevel = LEVELS.find(l => l.min > progress.totalPoints);

  if (!loaded) return <div className="text-center py-20 text-gray-400">טוען...</div>;

  const learned = progress.learnedCountries.length;
  const total = countries.length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📊 ההתקדמות שלי</h1>

      {/* רמה וניקוד */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{levelInfo.emoji}</span>
          <div>
            <p className="text-2xl font-bold">{levelInfo.name}</p>
            <p className="text-blue-100">{progress.totalPoints.toLocaleString()} נקודות</p>
          </div>
        </div>
        {nextLevel && (
          <div>
            <div className="flex justify-between text-sm text-blue-100 mb-1">
              <span>קידום ל{nextLevel.name}</span>
              <span>{(nextLevel.min - progress.totalPoints).toLocaleString()} נקודות נוספות</span>
            </div>
            <div className="h-3 bg-white/30 rounded-full">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${Math.min(100, ((progress.totalPoints - levelInfo.min) / (nextLevel.min - levelInfo.min)) * 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* סטטיסטיקות */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'מדינות שנלמדו', value: learned, icon: '🌍', color: 'blue' },
          { label: 'הישגים', value: progress.achievements.length, icon: '🏆', color: 'yellow' },
          { label: 'מסומנות', value: progress.starredCountries.length, icon: '⭐', color: 'orange' },
          { label: 'ימי רצף', value: progress.streakDays, icon: '🔥', color: 'red' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl shadow p-4 text-center">
            <p className="text-3xl">{stat.icon}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* אלבום מדבקות */}
      <div className="bg-white rounded-2xl shadow p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-700 text-lg">📘 אלבום מדבקות</h2>
          <Link href="/sticker-album" className="text-blue-500 text-sm font-bold hover:underline">לאלבום →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'דגלים', collected: (progress.collectedCountries || []).length, total: 193, color: '#3b82f6', emoji: '🌍' },
            { label: 'שחקנים', collected: (progress.collectedPlayers || []).length, total: 132, color: '#f59e0b', emoji: '⭐' },
            { label: 'מועדונים', collected: (progress.collectedClubs || []).length, total: 54, color: '#22c55e', emoji: '🏟️' },
          ].map(item => {
            const pct = item.total > 0 ? Math.round((item.collected / item.total) * 100) : 0;
            return (
              <div key={item.label} className="text-center">
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="text-lg font-black" style={{ color: item.color }}>{item.collected}</div>
                <div className="text-xs text-gray-400">/{item.total}</div>
                <div className="h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: item.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* התקדמות כוללת */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-bold text-gray-700 text-lg mb-4">התקדמות כוללת</h2>
        <ProgressBar value={learned} max={total} color="#3B82F6" label="כל המדינות" />
      </div>

      {/* לפי יבשת */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-bold text-gray-700 text-lg mb-4">לפי יבשת</h2>
        <div className="space-y-4">
          {continents.map(c => {
            const info = continentInfo[c];
            const continentTotal = countries.filter(co => co.continent === c).length;
            const continentLearned = progress.learnedCountries.filter(id =>
              countries.find(co => co.id === id)?.continent === c
            ).length;
            const stars = getContinentStars(continentLearned, continentTotal);
            return (
              <div key={c}>
                <div className="flex items-center gap-2 mb-1">
                  <span>{info.emoji}</span>
                  <span className="font-semibold text-gray-700">{info.nameHebrew}</span>
                  <div className="flex gap-0.5 mr-auto">
                    {[1, 2, 3].map(i => <span key={i}>{i <= stars ? '⭐' : '☆'}</span>)}
                  </div>
                </div>
                <ProgressBar value={continentLearned} max={continentTotal} color={info.color} showPercent />
              </div>
            );
          })}
        </div>
      </div>

      {/* רמות */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-bold text-gray-700 text-lg mb-4">מסלול רמות</h2>
        <div className="flex flex-col gap-3">
          {LEVELS.map(l => (
            <div key={l.name} className={`flex items-center gap-3 p-3 rounded-xl ${l.name === levelInfo.name ? 'bg-blue-100 border-2 border-blue-400' : 'bg-gray-50'}`}>
              <span className="text-2xl">{l.emoji}</span>
              <span className="font-semibold text-gray-700">{l.name}</span>
              <span className="text-gray-400 text-sm mr-auto">{l.min.toLocaleString()}+ נקודות</span>
              {l.name === levelInfo.name && <span className="text-blue-600 text-sm font-bold">← אתה כאן</span>}
            </div>
          ))}
        </div>
      </div>

      {/* איפוס */}
      <div className="text-center pb-4">
        <button
          onClick={() => {
            if (confirm('האם אתה בטוח שברצונך לאפס את כל ההתקדמות?')) {
              resetProgress();
            }
          }}
          className="px-6 py-3 bg-red-100 text-red-600 rounded-xl font-semibold hover:bg-red-200 transition-all"
        >
          🗑️ איפוס התקדמות
        </button>
      </div>
    </div>
  );
}
