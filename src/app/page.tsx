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
