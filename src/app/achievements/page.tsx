'use client';
import { useProgress } from '@/hooks/useProgress';
import { countries } from '@/data/countries';
import AchievementCard from '@/components/Achievement';

const ACHIEVEMENTS = [
  { id: 'first_step', icon: '🎯', title: 'צעד ראשון', description: 'ענה נכון על 10 שאלות' },
  { id: 'europe_master', icon: '🇪🇺', title: 'מכיר את אירופה', description: 'למד את כל מדינות אירופה' },
  { id: 'asia_master', icon: '🏯', title: 'מכיר את אסיה', description: 'למד את כל מדינות אסיה' },
  { id: 'africa_master', icon: '🦁', title: 'מכיר את אפריקה', description: 'למד את כל מדינות אפריקה' },
  { id: 'americas_master', icon: '🗽', title: 'מכיר את האמריקות', description: 'למד את כל מדינות צפון ודרום אמריקה' },
  { id: 'oceania_master', icon: '🦘', title: 'מכיר את אוקיאניה', description: 'למד את כל מדינות אוקיאניה' },
  { id: 'lightning_fast', icon: '⚡', title: 'מהיר כברק', description: 'ענה על 10 שאלות ב-30 שניות' },
  { id: 'streak_master', icon: '🔥', title: 'רצף מושלם', description: '20 תשובות נכונות ברצף' },
  { id: 'memory_elephant', icon: '🧠', title: 'זיכרון פיל', description: 'סיים משחק זיכרון קשה ב-20 צעדים' },
  { id: 'world_citizen', icon: '🌐', title: 'אזרח עולם', description: 'למד את כל מדינות העולם' },
  { id: 'perfect_speed', icon: '💯', title: 'מושלם!', description: 'ענה נכון על כל 10 שאלות במבחן מהיר' },
  { id: 'star_collector', icon: '⭐', title: 'אוסף כוכבים', description: 'סמן 20 מדינות מועדפות' },
];

export default function AchievementsPage() {
  const { progress } = useProgress();

  // בדיקה אוטומטית של הישגים לפי התקדמות
  const learned = progress.learnedCountries;
  const autoUnlocked = new Set(progress.achievements);

  const checkAuto = (id: string): boolean => {
    if (autoUnlocked.has(id)) return true;
    const europeLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'europe').length;
    const europeTotal = countries.filter(c => c.continent === 'europe').length;
    const asiaLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'asia').length;
    const asiaTotal = countries.filter(c => c.continent === 'asia').length;
    const africaLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'africa').length;
    const africaTotal = countries.filter(c => c.continent === 'africa').length;
    const naLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'north-america').length;
    const naTotal = countries.filter(c => c.continent === 'north-america').length;
    const saLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'south-america').length;
    const saTotal = countries.filter(c => c.continent === 'south-america').length;
    const ocLearned = learned.filter(l => countries.find(c => c.id === l)?.continent === 'oceania').length;
    const ocTotal = countries.filter(c => c.continent === 'oceania').length;

    if (id === 'europe_master') return europeLearned >= europeTotal;
    if (id === 'asia_master') return asiaLearned >= asiaTotal;
    if (id === 'africa_master') return africaLearned >= africaTotal;
    if (id === 'americas_master') return naLearned >= naTotal && saLearned >= saTotal;
    if (id === 'oceania_master') return ocLearned >= ocTotal;
    if (id === 'world_citizen') return learned.length >= countries.length;
    if (id === 'star_collector') return progress.starredCountries.length >= 20;
    return false;
  };

  const unlocked = ACHIEVEMENTS.filter(a => checkAuto(a.id));
  const locked = ACHIEVEMENTS.filter(a => !checkAuto(a.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">🏆 הישגים</h1>
        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-bold">
          {unlocked.length} / {ACHIEVEMENTS.length}
        </span>
      </div>

      {unlocked.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-600 mb-3">✨ הושגו</h2>
          <div className="grid gap-3">
            {unlocked.map(a => (
              <AchievementCard key={a.id} icon={a.icon} title={a.title} description={a.description} unlocked={true} />
            ))}
          </div>
        </div>
      )}

      {locked.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-600 mb-3">🔒 נעולים</h2>
          <div className="grid gap-3">
            {locked.map(a => (
              <AchievementCard key={a.id} icon={a.icon} title={a.title} description={a.description} unlocked={false} />
            ))}
          </div>
        </div>
      )}

      {unlocked.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-5xl mb-4">🏆</p>
          <p className="text-xl">התחל ללמוד ולשחק כדי לפתוח הישגים!</p>
        </div>
      )}
    </div>
  );
}
