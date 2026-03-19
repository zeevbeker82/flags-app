import { Country, Continent, Difficulty, QuizQuestion } from '@/types';
import { countries } from '@/data/countries';
import { shuffle } from './shuffle';

// ─── מדינות קלות (מפורסמות) לפי יבשת ───────────────────────────────────────

const EASY_IDS: Record<string, Set<string>> = {
  europe: new Set([
    'fr', 'de', 'gb', 'it', 'es', 'ru', 'gr', 'ch', 'pt', 'nl',
    'se', 'no', 'dk', 'fi', 'pl', 'ua', 'at', 'be', 'ie',
  ]),
  asia: new Set([
    'cn', 'jp', 'in', 'il', 'tr', 'sa', 'ae', 'kr', 'th', 'vn',
    'id', 'sg', 'my', 'ph', 'ir', 'iq', 'jo', 'lb', 'pk',
  ]),
  africa: new Set([
    'eg', 'za', 'ma', 'et', 'ng', 'ke', 'tn', 'ly', 'gh',
    'tz', 'cm', 'sn', 'dz',
  ]),
  'north-america': new Set([
    'us', 'ca', 'mx', 'cu', 'ht', 'jm', 'do', 'cr', 'pa', 'gt',
  ]),
  'south-america': new Set([
    'br', 'ar', 'cl', 'co', 'pe', 've', 'ec', 'bo', 'py', 'uy',
  ]),
  oceania: new Set(['au', 'nz', 'fj', 'pg']),
};

// ─── מדינות בינוניות (פחות מוכרות, נוסף על הקלות) ───────────────────────────

const MEDIUM_EXTRA_IDS: Record<string, Set<string>> = {
  europe: new Set([
    'al', 'ad', 'by', 'ba', 'bg', 'hr', 'cy', 'cz', 'ee', 'hu',
    'is', 'lv', 'lt', 'lu', 'mt', 'mc', 'me', 'mk', 'ro', 'rs',
    'sk', 'si',
  ]),
  asia: new Set([
    'af', 'am', 'az', 'bh', 'bd', 'bt', 'bn', 'kh', 'ge', 'kz',
    'kw', 'kg', 'la', 'mn', 'mm', 'np', 'om', 'qa', 'lk', 'sy',
    'tw', 'tj',
  ]),
  africa: new Set([
    'ao', 'bj', 'bw', 'bf', 'bi', 'cv', 'cf', 'td', 'km', 'cg',
    'cd', 'dj', 'gq', 'er', 'sz', 'ga', 'gm', 'gn', 'gw', 'ci',
    'ls', 'lr', 'mg', 'mw', 'ml',
  ]),
  'north-america': new Set([
    'ag', 'bs', 'bb', 'bz', 'dm', 'sv', 'gd', 'hn', 'ni',
    'kn', 'lc', 'vc', 'tt',
  ]),
  'south-america': new Set(['gy', 'sr']),
  oceania: new Set(['ki', 'mh', 'fm', 'ws', 'sb', 'to', 'vu', 'pw', 'nr', 'tv']),
};

// ─── בחירת pool שאלות לפי רמת קושי ──────────────────────────────────────────

export function getQuestionPool(continent: Continent | 'all', difficulty: Difficulty): Country[] {
  const base = continent === 'all'
    ? countries
    : countries.filter(c => c.continent === continent);

  if (difficulty === 'hard') return base; // כל המדינות

  if (difficulty === 'easy') {
    const pool = continent === 'all'
      // "הכל" קל — רק המדינות הכי מפורסמות מכל יבשת
      ? countries.filter(c => EASY_IDS[c.continent]?.has(c.id))
      : base.filter(c => EASY_IDS[c.continent]?.has(c.id));
    return pool.length >= 4 ? pool : base; // fallback אם היבשת קטנה
  }

  // בינוני — קלות + בינוניות
  const pool = continent === 'all'
    ? countries.filter(c =>
        EASY_IDS[c.continent]?.has(c.id) || MEDIUM_EXTRA_IDS[c.continent]?.has(c.id),
      )
    : base.filter(c =>
        EASY_IDS[c.continent]?.has(c.id) || MEDIUM_EXTRA_IDS[c.continent]?.has(c.id),
      );
  return pool.length >= 4 ? pool : base;
}

// ─── בחירת distractors לפי רמת קושי ─────────────────────────────────────────
//
//  קל    → distractors מיבשות אחרות (דגלים שונים מאוד)
//  בינוני → 2 מאותה יבשת + 1 מיבשת אחרת (אתגר בינוני)
//  קשה   → כל 3 distractors מאותה יבשת (דגלים דומים, הכי קשה)

function pickDistractors(
  correct: Country,
  difficulty: Difficulty,
): Country[] {
  const sameContinent = countries.filter(
    c => c.continent === correct.continent && c.id !== correct.id,
  );
  const otherContinent = countries.filter(
    c => c.continent !== correct.continent && c.id !== correct.id,
  );

  const take = (arr: Country[], n: number) => shuffle(arr).slice(0, n);

  if (difficulty === 'easy') {
    // distractors רק ממדינות מפורסמות ביבשות אחרות — מאוד שונות ויזואלית
    const famousOther = otherContinent.filter(c => EASY_IDS[c.continent]?.has(c.id));
    const pool = famousOther.length >= 3 ? famousOther : otherContinent;
    return take(pool, 3);
  }

  if (difficulty === 'hard') {
    // distractors מאותה יבשת — הכי קשה להבדיל
    if (sameContinent.length >= 3) return take(sameContinent, 3);
    // fallback אם היבשת קטנה (אוקיאניה וכד')
    return take([...sameContinent, ...take(otherContinent, 3 - sameContinent.length)], 3);
  }

  // בינוני — 2 מאותה יבשת + 1 מאחרת
  const fromSame = take(sameContinent, 2);
  const fromOther = take(otherContinent, 1);
  const combined = shuffle([...fromSame, ...fromOther]);
  if (combined.length >= 3) return combined.slice(0, 3);
  // fallback
  return take(countries.filter(c => c.id !== correct.id), 3);
}

// ─── פונקציה ראשית — יצירת שאלה לפי יבשת + רמה ──────────────────────────────

export function buildQuestion(
  continent: Continent | 'all',
  difficulty: Difficulty,
  type: 'flag-to-name' | 'name-to-flag',
): QuizQuestion {
  const pool = getQuestionPool(continent, difficulty);
  const country = pool[Math.floor(Math.random() * pool.length)];
  const distractors = pickDistractors(country, difficulty);
  const options = shuffle([country, ...distractors]);
  return { country, options, type };
}

// ─── שאלת בירה — מראה דגל, מנחש בירה ────────────────────────────────────────

export function buildCapitalQuestion(
  continent: Continent | 'all',
  difficulty: Difficulty,
): { country: Country; options: Country[] } {
  // סנן רק מדינות שיש להן בירה ייחודית (לא ריקה)
  const fullPool = getQuestionPool(continent, difficulty).filter(c => c.capital && c.capital.trim() !== '');
  const pool = fullPool.length >= 4 ? fullPool : getQuestionPool('all', difficulty).filter(c => c.capital && c.capital.trim() !== '');
  const country = pool[Math.floor(Math.random() * pool.length)];
  const distractors = pickDistractors(country, difficulty).filter(c => c.capital && c.capital !== country.capital);
  // אם אין מספיק distractors, קח מהpool הכולל
  const allOthers = pool.filter(c => c.id !== country.id && c.capital && c.capital !== country.capital);
  const finalDistractors = distractors.length >= 3 ? distractors.slice(0, 3) : shuffle(allOthers).slice(0, 3);
  const options = shuffle([country, ...finalDistractors]);
  return { country, options };
}

// ─── שאלת שפה — מראה דגל, מנחש שפה ─────────────────────────────────────────

export function buildLanguageQuestion(
  continent: Continent | 'all',
  difficulty: Difficulty,
): { country: Country; options: Country[] } {
  const fullPool = getQuestionPool(continent, difficulty).filter(c => c.language && c.language.trim() !== '');
  const pool = fullPool.length >= 4 ? fullPool : countries.filter(c => c.language && c.language.trim() !== '');
  const country = pool[Math.floor(Math.random() * pool.length)];
  // מנסה להביא distractors עם שפות שונות
  const diffLang = pool.filter(c => c.id !== country.id && c.language !== country.language);
  let distractors = shuffle(diffLang).slice(0, 3);
  // fallback: אם אין מספיק distractors עם שפות שונות, הוסף כל מדינה שונה
  if (distractors.length < 3) {
    const extras = countries
      .filter(c => c.language && c.language.trim() !== '' && c.id !== country.id && !distractors.find(d => d.id === c.id));
    distractors = [...distractors, ...shuffle(extras)].slice(0, 3);
  }
  const options = shuffle([country, ...distractors]);
  return { country, options };
}
