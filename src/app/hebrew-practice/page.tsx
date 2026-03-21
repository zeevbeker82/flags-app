'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allHebrewUnits } from '@/data/hebrewUnits';
import { UnitCategory, UNIT_CATEGORIES } from '@/data/hebrewUnitsTypes';
import { useProgress } from '@/hooks/useProgress';

// ─── helpers ────────────────────────────────────────────────

const ALL_CATEGORIES = 'הכל' as const;
type CategoryFilter = UnitCategory | typeof ALL_CATEGORIES;

const DIFFICULTY_LABELS: Record<string, { emoji: string; label: string; color: string }> = {
  easy:   { emoji: '😊', label: 'קל',    color: 'text-green-600' },
  medium: { emoji: '🤔', label: 'בינוני', color: 'text-amber-600' },
  hard:   { emoji: '😤', label: 'קשה',   color: 'text-red-600'   },
};

function padNumber(n: number): string {
  return String(n).padStart(2, '0');
}

// ─── component ──────────────────────────────────────────────

export default function HebrewPracticePage() {
  const { progress } = useProgress();
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>(ALL_CATEGORIES);
  const [search, setSearch] = useState('');

  // Derive unique categories that actually have units
  const usedCategories = useMemo<UnitCategory[]>(() => {
    const seen = new Set<UnitCategory>();
    allHebrewUnits.forEach(u => seen.add(u.category));
    return (Object.keys(UNIT_CATEGORIES) as UnitCategory[]).filter(c => seen.has(c));
  }, []);

  const filtered = useMemo(() => {
    return allHebrewUnits.filter(unit => {
      const matchCategory = categoryFilter === ALL_CATEGORIES || unit.category === categoryFilter;
      const matchSearch = search.trim() === '' ||
        unit.title.includes(search.trim()) ||
        unit.category.includes(search.trim());
      return matchCategory && matchSearch;
    });
  }, [categoryFilter, search]);

  // Track how many units have been "completed" via localStorage key pattern
  const completedIds: string[] = useMemo(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('hebrewPractice_completed');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.totalPoints]); // re-evaluate when points change (proxy for activity)

  const totalUnits = allHebrewUnits.length;
  const completedCount = completedIds.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 to-indigo-900 p-4" dir="rtl">
      <div className="max-w-2xl mx-auto">

        {/* ── Back link ─────────────────────────────────── */}
        <Link
          href="/"
          className="text-white/70 hover:text-white mb-6 flex items-center gap-2 text-sm font-bold w-fit"
        >
          ← חזרה לדף הבית
        </Link>

        {/* ── Header ────────────────────────────────────── */}
        <div className="text-center mb-6 mt-2">
          <div className="text-7xl mb-3">📖</div>
          <h1 className="text-4xl font-black text-white mb-2">תרגול עברית 📖</h1>
          <p className="text-violet-200 text-lg">78 יחידות לימוד לכיתה ב׳</p>
        </div>

        {/* ── Stats bar ─────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/15 backdrop-blur rounded-2xl p-3 text-center">
            <p className="text-2xl font-black text-white">{totalUnits}</p>
            <p className="text-violet-200 text-xs">יחידות סה"כ</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-2xl p-3 text-center">
            <p className="text-2xl font-black text-white">{completedCount}</p>
            <p className="text-violet-200 text-xs">הושלמו</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-2xl p-3 text-center">
            <p className="text-2xl font-black text-white">
              {totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0}%
            </p>
            <p className="text-violet-200 text-xs">התקדמות</p>
          </div>
        </div>

        {/* ── Search bar ────────────────────────────────── */}
        <div className="relative mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="חיפוש יחידה..."
            className="w-full bg-white/90 text-gray-800 font-semibold placeholder-gray-400 rounded-2xl px-5 py-3 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-violet-400 shadow"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
        </div>

        {/* ── Category filters ──────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setCategoryFilter(ALL_CATEGORIES)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              categoryFilter === ALL_CATEGORIES
                ? 'bg-white text-violet-700 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            🌟 הכל ({totalUnits})
          </button>
          {usedCategories.map(cat => {
            const meta = UNIT_CATEGORIES[cat];
            const count = allHebrewUnits.filter(u => u.category === cat).length;
            const isActive = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-white text-violet-700 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {meta.emoji} {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* ── Results count ─────────────────────────────── */}
        {(search || categoryFilter !== ALL_CATEGORIES) && (
          <p className="text-violet-200 text-sm mb-3 text-center">
            מציג {filtered.length} מתוך {totalUnits} יחידות
          </p>
        )}

        {/* ── Unit cards grid ───────────────────────────── */}
        {filtered.length === 0 ? (
          <div className="bg-white/10 rounded-3xl p-10 text-center">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-white font-bold text-lg">לא נמצאו יחידות</p>
            <p className="text-violet-300 text-sm mt-1">נסה חיפוש אחר</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map(unit => {
              const catMeta = UNIT_CATEGORIES[unit.category];
              const diffMeta = DIFFICULTY_LABELS[unit.difficulty];
              const isCompleted = completedIds.includes(unit.id);

              return (
                <div
                  key={unit.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Card header with category color strip */}
                  <div className={`${catMeta.bg} px-3 py-1.5 flex items-center justify-between`}>
                    <span className={`${catMeta.color} text-xs font-black`}>
                      {catMeta.emoji} {unit.category}
                    </span>
                    <span className="bg-white/70 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                      {padNumber(unit.number)}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-4xl mb-2 text-center">{unit.emoji}</div>
                    <h3 className="font-black text-gray-800 text-sm text-center leading-tight mb-3">
                      {unit.title}
                    </h3>

                    {/* Meta row */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        ⏱ {unit.duration} דק&apos;
                      </span>
                      <span className={`flex items-center gap-0.5 font-bold ${diffMeta.color}`}>
                        {diffMeta.emoji} {diffMeta.label}
                      </span>
                    </div>

                    {/* Completed badge */}
                    {isCompleted && (
                      <div className="bg-green-100 text-green-700 text-xs font-bold text-center rounded-full py-0.5 mb-2">
                        ✅ הושלם!
                      </div>
                    )}

                    {/* CTA button */}
                    <div className="mt-auto">
                      <Link
                        href={`/hebrew-practice/${unit.id}`}
                        className="block w-full bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-black text-sm py-2.5 rounded-2xl text-center transition-all shadow"
                      >
                        {isCompleted ? '🔄 חזור' : '🚀 התחל'}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Decorative footer ─────────────────────────── */}
        <div className="flex justify-center gap-6 mt-8 text-3xl opacity-30 pb-6">
          {['✏️', '📚', '🔤', '📖', '🖊️'].map((a, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
