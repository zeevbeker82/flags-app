'use client';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { countries, continentInfo } from '@/data/countries';
import { getLevelInfo, getContinentStars } from '@/utils/scoring';
import { Continent } from '@/types';

const continents: Continent[] = ['europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania'];

export default function HomePage() {
  const { progress, loaded } = useProgress();
  const levelInfo = getLevelInfo(progress.totalPoints);
  const learned = progress.learnedCountries.length;

  return (
    <div className="space-y-8">
      {/* כותרת */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2">🌍 לומדים דגלים!</h1>
        <p className="text-xl text-gray-500">גלה את דגלי כל מדינות העולם</p>
      </div>

      {/* סטטיסטיקות */}
      {loaded && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow p-5 text-center">
            <p className="text-4xl font-bold text-blue-600">{learned}</p>
            <p className="text-gray-500 text-sm mt-1">מדינות שנלמדו</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5 text-center">
            <p className="text-4xl font-bold text-yellow-500">{progress.totalPoints.toLocaleString()}</p>
            <p className="text-gray-500 text-sm mt-1">נקודות</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5 text-center">
            <p className="text-3xl">{levelInfo.emoji}</p>
            <p className="font-bold text-gray-700">{levelInfo.name}</p>
          </div>
        </div>
      )}

      {/* כפתורים ראשיים */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/learn" className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="text-4xl mb-2">📚</div>
          <h2 className="text-xl font-bold">למידה</h2>
          <p className="text-blue-100 text-sm mt-1">עיין בכל הדגלים לפי יבשות</p>
        </Link>
        <Link href="/quiz" className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="text-4xl mb-2">🎯</div>
          <h2 className="text-xl font-bold">תרגול</h2>
          <p className="text-green-100 text-sm mt-1">תרגל זיהוי דגלים ומדינות</p>
        </Link>
        <Link href="/memory" className="bg-purple-500 hover:bg-purple-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="text-4xl mb-2">🧠</div>
          <h2 className="text-xl font-bold">משחק זיכרון</h2>
          <p className="text-purple-100 text-sm mt-1">התאם דגלים לשמות מדינות</p>
        </Link>
        <Link href="/speed" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="text-4xl mb-2">⚡</div>
          <h2 className="text-xl font-bold">מבחן מהיר</h2>
          <p className="text-orange-100 text-sm mt-1">10 שאלות עם טיימר</p>
        </Link>
      </div>

      {/* כדורגל */}
      <Link
        href="/football"
        className="block rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #14532d, #166534, #15803d)' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-white" />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="text-5xl">⚽</div>
          <div className="text-right flex-1">
            <h2 className="text-2xl font-black text-white">כדורגל! ⚽</h2>
            <p className="text-green-200 text-sm mt-0.5">24 מועדונים · 132 כוכבים · ישראל ועולם</p>
          </div>
          <div className="text-3xl opacity-60">🏆</div>
        </div>
      </Link>

      {/* חדש! */}
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-3">🆕 סקשנים חדשים</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/sticker-album"
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">📘</div>
            <h3 className="font-bold">אלבום מדבקות</h3>
            <p className="text-blue-100 text-xs mt-0.5">אסוף דגלים, שחקנים ומועדונים</p>
          </Link>
          <Link href="/world-map"
            className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">🗺️</div>
            <h3 className="font-bold">מפת העולם</h3>
            <p className="text-teal-100 text-xs mt-0.5">גלה מדינות לפי יבשת</p>
          </Link>
          <Link href="/animals"
            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">🐾</div>
            <h3 className="font-bold">חיות לאומיות</h3>
            <p className="text-green-100 text-xs mt-0.5">נמרים, פנדות ועוד</p>
          </Link>
          <Link href="/israel"
            className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">🇮🇱</div>
            <h3 className="font-bold">ישראל שלנו</h3>
            <p className="text-blue-200 text-xs mt-0.5">ערים, אתרים וגאוגרפיה</p>
          </Link>
          <Link href="/wonders"
            className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">🏛️</div>
            <h3 className="font-bold">פלאות העולם</h3>
            <p className="text-purple-100 text-xs mt-0.5">20 אנדרטאות מדהימות</p>
          </Link>
          <Link href="/foods"
            className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-1">🍕</div>
            <h3 className="font-bold">אוכל מהעולם</h3>
            <p className="text-orange-100 text-xs mt-0.5">30 מאכלים ממדינות שונות</p>
          </Link>
        </div>
      </div>

      {/* יבשות */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">יבשות</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {continents.map(c => {
            const info = continentInfo[c];
            const total = countries.filter(co => co.continent === c).length;
            const learnedInContinent = progress.learnedCountries.filter(id =>
              countries.find(co => co.id === id)?.continent === c
            ).length;
            const stars = getContinentStars(learnedInContinent, total);
            return (
              <Link
                key={c}
                href={`/learn?continent=${c}`}
                style={{ borderColor: info.color }}
                className="bg-white rounded-2xl shadow p-4 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{info.emoji}</div>
                <h3 className="font-bold text-gray-700">{info.nameHebrew}</h3>
                <p className="text-gray-400 text-sm">{total} מדינות</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3].map(i => (
                    <span key={i} className="text-lg">{i <= stars ? '⭐' : '☆'}</span>
                  ))}
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${total > 0 ? (learnedInContinent / total) * 100 : 0}%`, backgroundColor: info.color }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{learnedInContinent}/{total} נלמדו</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* קישורים מהירים */}
      <div className="flex gap-4 justify-center flex-wrap pb-4">
        <Link href="/progress" className="flex items-center gap-2 bg-white rounded-xl shadow px-5 py-3 hover:shadow-md transition-all font-semibold text-gray-700">
          📊 ההתקדמות שלי
        </Link>
        <Link href="/achievements" className="flex items-center gap-2 bg-white rounded-xl shadow px-5 py-3 hover:shadow-md transition-all font-semibold text-gray-700">
          🏆 הישגים
        </Link>
      </div>
    </div>
  );
}
