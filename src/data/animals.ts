export interface CountryAnimal {
  countryId: string;   // ISO 2-letter code matching countries.ts (e.g. 'fr', 'de', 'us')
  countryHebrew: string;
  animal: string;      // Hebrew name of the animal
  animalEnglish: string;
  emoji: string;       // best matching emoji
  difficulty: 'easy' | 'medium' | 'hard';
  funFact?: string;    // optional short Hebrew fun fact about the animal, child-friendly
}

export const nationalAnimals: CountryAnimal[] = [

  // ========== EASY (20) ==========

  {
    countryId: 'au',
    countryHebrew: 'אוסטרליה',
    animal: 'קנגורו',
    animalEnglish: 'Kangaroo',
    emoji: '🦘',
    difficulty: 'easy',
    funFact: 'לנקבת הקנגורו יש כיס בבטן שבו היא נושאת את הגור הקטן שלה. הגור נשאר בכיס עד שהוא גדול מספיק!'
  },
  {
    countryId: 'cn',
    countryHebrew: 'סין',
    animal: 'פנדה ענקית',
    animalEnglish: 'Giant Panda',
    emoji: '🐼',
    difficulty: 'easy',
    funFact: 'הפנדה הענקית אוכלת במשך 12 עד 16 שעות ביום! המאכל האהוב עליה הוא במבוק.'
  },
  {
    countryId: 'in',
    countryHebrew: 'הודו',
    animal: 'נמר בנגל',
    animalEnglish: 'Bengal Tiger',
    emoji: '🐯',
    difficulty: 'easy',
    funFact: 'לכל נמר יש פסים מיוחדים שרק לו יש – ממש כמו טביעת אצבע שונה לכל אדם!'
  },
  {
    countryId: 'us',
    countryHebrew: 'ארצות הברית',
    animal: 'נשר קרחת',
    animalEnglish: 'Bald Eagle',
    emoji: '🦅',
    difficulty: 'easy',
    funFact: 'הנשר הקרחת אינו קרח באמת – הראש שלו מכוסה נוצות לבנות! הוא יכול לטוס במהירות של יותר מ-60 קמ"ש.'
  },
  {
    countryId: 'ca',
    countryHebrew: 'קנדה',
    animal: 'ביבר',
    animalEnglish: 'Beaver',
    emoji: '🦫',
    difficulty: 'easy',
    funFact: 'הביבר בונה סכרים מענפים וטיט בנהרות. הוא אחד החיות הבנאיות החרוצות ביותר בטבע!'
  },
  {
    countryId: 'ru',
    countryHebrew: 'רוסיה',
    animal: 'דוב חום',
    animalEnglish: 'Brown Bear',
    emoji: '🐻',
    difficulty: 'easy',
    funFact: 'הדוב החום ישן כמעט כל החורף! זה נקרא תרדמת חורף, ובמהלכה הוא כמעט לא אוכל ולא שותה.'
  },
  {
    countryId: 'gb',
    countryHebrew: 'בריטניה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'easy',
    funFact: 'האריה נקרא "מלך החיות". הרעם שלו יכול להישמע ממרחק של 8 קילומטרים!'
  },
  {
    countryId: 'nz',
    countryHebrew: 'ניו זילנד',
    animal: 'קיווי',
    animalEnglish: 'Kiwi Bird',
    emoji: '🥝',
    difficulty: 'easy',
    funFact: 'ציפור הקיווי לא יכולה לעוף, אבל היא ריצה מהירה מאוד! היא גם ישנה ביום ויוצאת רק בלילה.'
  },
  {
    countryId: 'za',
    countryHebrew: 'דרום אפריקה',
    animal: 'ספרינגבוק',
    animalEnglish: 'Springbok',
    emoji: '🦌',
    difficulty: 'easy',
    funFact: 'הספרינגבוק יכול לקפוץ לגובה של 3 מטרים! הוא עושה זאת כשהוא שמח או כדי לבהל טורפים.'
  },
  {
    countryId: 'il',
    countryHebrew: 'ישראל',
    animal: 'דוכיפת',
    animalEnglish: 'Hoopoe Bird',
    emoji: '🐦',
    difficulty: 'easy',
    funFact: 'הדוכיפת היא ציפור הלאום של ישראל! על ראשה יש ציצת נוצות יפהפייה שהיא פותחת כמו מניפה.'
  },
  {
    countryId: 'de',
    countryHebrew: 'גרמניה',
    animal: 'נשר שחור',
    animalEnglish: 'Black Eagle',
    emoji: '🦅',
    difficulty: 'easy',
    funFact: 'הנשר השחור מופיע על סמל גרמניה כבר מאות שנים. הוא מסמל כוח ואומץ.'
  },
  {
    countryId: 'fr',
    countryHebrew: 'צרפת',
    animal: 'תרנגול גאלי',
    animalEnglish: 'Gallic Rooster',
    emoji: '🐓',
    difficulty: 'easy',
    funFact: 'התרנגול הגאלי הוא סמל של צרפת כבר מאות שנים. הוא מסמל גאווה וערנות – בדיוק כמו קריאת "קוקוריקו" בבוקר!'
  },
  {
    countryId: 'br',
    countryHebrew: 'ברזיל',
    animal: 'יגואר',
    animalEnglish: 'Jaguar',
    emoji: '🐆',
    difficulty: 'easy',
    funFact: 'היגואר הוא החתול הגדול ביותר באמריקה! הוא שחיין מעולה ואוהב מים.'
  },
  {
    countryId: 'mx',
    countryHebrew: 'מקסיקו',
    animal: 'נשר זהב',
    animalEnglish: 'Golden Eagle',
    emoji: '🦅',
    difficulty: 'easy',
    funFact: 'הנשר הזהב מופיע על דגל מקסיקו! הוא נראה שם אוחז נחש בפיו ועומד על קקטוס.'
  },
  {
    countryId: 'jp',
    countryHebrew: 'יפן',
    animal: 'פסיון ירוק',
    animalEnglish: 'Green Pheasant',
    emoji: '🦚',
    difficulty: 'easy',
    funFact: 'הפסיון הירוק הוא ציפור יפהפייה עם צבעים של ירוק וכחול. הוא חי רק ביפן!'
  },
  {
    countryId: 'ar',
    countryHebrew: 'ארגנטינה',
    animal: 'פומה',
    animalEnglish: 'Puma',
    emoji: '🐱',
    difficulty: 'easy',
    funFact: 'הפומה יכולה לקפוץ לגובה של 5 מטרים ולמרחק של 12 מטרים! היא ממש קפצנית.'
  },
  {
    countryId: 'no',
    countryHebrew: 'נורווגיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'easy',
    funFact: 'אריה מופיע על סמל המלוכה של נורווגיה כבר מהמאה ה-13. הוא מסמל את אומץ לבם של הנורווגים.'
  },
  {
    countryId: 'th',
    countryHebrew: 'תאילנד',
    animal: 'פיל',
    animalEnglish: 'Elephant',
    emoji: '🐘',
    difficulty: 'easy',
    funFact: 'הפיל הוא החיה הקדושה של תאילנד! פילים לבנים נחשבים מיוחדים במיוחד ושייכים למלך.'
  },
  {
    countryId: 'ke',
    countryHebrew: 'קניה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'easy',
    funFact: 'קניה היא אחד המקומות הטובים בעולם לראות אריות בטבע! בסוואנה חיים אלפי אריות.'
  },
  {
    countryId: 'nl',
    countryHebrew: 'הולנד',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'easy',
    funFact: 'האריה על סמל הולנד הוא כתום – צבע לאומי של הולנד! הצבע הכתום נקרא "כתום אורניה".'
  },

  // ========== MEDIUM (25) ==========

  {
    countryId: 'es',
    countryHebrew: 'ספרד',
    animal: 'שור',
    animalEnglish: 'Bull',
    emoji: '🐂',
    difficulty: 'medium',
    funFact: 'השור הוא סמל של ספרד. בספרד יש מסורת של מלחמות שוורים הנקראות "קוֹרִידָה", אם כי ימינו רבים מתנגדים לה.'
  },
  {
    countryId: 'it',
    countryHebrew: 'איטליה',
    animal: 'זאב',
    animalEnglish: 'Wolf',
    emoji: '🐺',
    difficulty: 'medium',
    funFact: 'לפי האגדה, רומא נוסדה על ידי שני תאומים – רומולוס ורמוס – שגדלו וינקו מזאבה!'
  },
  {
    countryId: 'se',
    countryHebrew: 'שוודיה',
    animal: 'אייל',
    animalEnglish: 'Elk / Moose',
    emoji: '🦌',
    difficulty: 'medium',
    funFact: 'האייל הוא החיה הגדולה ביותר בשוודיה! הזכר יכול לשקול יותר מחצי טון ולשאת קרניים רחבות.'
  },
  {
    countryId: 'fi',
    countryHebrew: 'פינלנד',
    animal: 'דוב חום',
    animalEnglish: 'Brown Bear',
    emoji: '🐻',
    difficulty: 'medium',
    funFact: 'בפינלנד חיים יותר מ-2,000 דובים חומים! הדוב נחשב לסמל כוח וחוסן של העם הפיני.'
  },
  {
    countryId: 'pl',
    countryHebrew: 'פולין',
    animal: 'נשר לבן',
    animalEnglish: 'White Eagle',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הנשר הלבן על רקע אדום הוא סמל פולין מזה מאות שנים. הוא מופיע על הדגל ועל כל מטבע פולני.'
  },
  {
    countryId: 'tr',
    countryHebrew: 'טורקיה',
    animal: 'זאב אפור',
    animalEnglish: 'Grey Wolf',
    emoji: '🐺',
    difficulty: 'medium',
    funFact: 'לפי האגדה הטורקית, הזאב האפור הוביל את העם הטורקי ממרכז אסיה לאנטוליה. לכן הוא נחשב לסמל לאומי חשוב.'
  },
  {
    countryId: 'ir',
    countryHebrew: 'איראן',
    animal: 'ציפרד אסייתי',
    animalEnglish: 'Asiatic Cheetah',
    emoji: '🐆',
    difficulty: 'medium',
    funFact: 'הציפרד האסייתי הוא מהחיות הנדירות ביותר בעולם! נותרו פחות מ-50 מהם, וכולם חיים באיראן.'
  },
  {
    countryId: 'pk',
    countryHebrew: 'פקיסטן',
    animal: 'מרחור',
    animalEnglish: 'Markhor',
    emoji: '🐐',
    difficulty: 'medium',
    funFact: 'למרחור יש קרניים ספירליות ארוכות ומפותלות בצורה מרהיבה! הוא מטפס על הרים תלולים בקלות רבה.'
  },
  {
    countryId: 'bd',
    countryHebrew: "בנגלדש",
    animal: 'נמר בנגל המלכותי',
    animalEnglish: 'Royal Bengal Tiger',
    emoji: '🐯',
    difficulty: 'medium',
    funFact: 'נמר הבנגל המלכותי הוא שחיין נפלא ואוהב מים! יערות המנגרובים בבנגלדש הם ביתם של מאות נמרים.'
  },
  {
    countryId: 'lk',
    countryHebrew: 'סרי לנקה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'medium',
    funFact: 'האריה מופיע על דגל סרי לנקה אוחז חרב. הוא מסמל את האומץ ואת ההיסטוריה הגאה של המדינה.'
  },
  {
    countryId: 'np',
    countryHebrew: 'נפאל',
    animal: 'פרה',
    animalEnglish: 'Cow',
    emoji: '🐄',
    difficulty: 'medium',
    funFact: 'בנפאל הפרה היא חיה קדושה! היא מסמלת אמהות, עושר ואדמה. אסור לפגוע בפרות בנפאל.'
  },
  {
    countryId: 'eg',
    countryHebrew: 'מצרים',
    animal: 'נשר מצרי',
    animalEnglish: 'Steppe Eagle',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הנשר מופיע על דגל מצרים ונקרא "נשר צלאח אל-דין" על שם הגיבור הערבי הגדול. הוא מסמל כוח ורוממות.'
  },
  {
    countryId: 'ma',
    countryHebrew: 'מרוקו',
    animal: 'אריה ברברי',
    animalEnglish: 'Barbary Lion',
    emoji: '🦁',
    difficulty: 'medium',
    funFact: 'האריה הברברי היה הגדול ביותר בין תת-המינים של האריות! לצערנו הוא נכחד בטבע, אך חי בגני חיות ברחבי העולם.'
  },
  {
    countryId: 'et',
    countryHebrew: 'אתיופיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'medium',
    funFact: 'קיסרי אתיופיה לשעבר נקראו "אריה יהודה" – תואר שמסמל כוח ומלכות מקראית.'
  },
  {
    countryId: 'ng',
    countryHebrew: 'ניגריה',
    animal: 'נשר',
    animalEnglish: 'Eagle',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הנשר על סמל ניגריה מסמל כוח ורצון לפרוח קדימה. ניגריה היא המדינה המאוכלסת ביותר באפריקה!'
  },
  {
    countryId: 'co',
    countryHebrew: 'קולומביה',
    animal: 'קונדור',
    animalEnglish: 'Condor',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הקונדור הוא אחד מהציפורים הגדולות ביותר בעולם! כנפיו פרושות יכולות להגיע לרוחב של 3 מטרים.'
  },
  {
    countryId: 'pe',
    countryHebrew: 'פרו',
    animal: 'ביקוניה',
    animalEnglish: 'Vicuña',
    emoji: '🦙',
    difficulty: 'medium',
    funFact: 'לביקוניה יש את הצמר הרך ביותר בעולם! בימי קדם רק מלכי האינקה הורשו ללבוש בגדים מצמרה.'
  },
  {
    countryId: 'cl',
    countryHebrew: 'צ\'ילה',
    animal: 'קונדור',
    animalEnglish: 'Condor',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הקונדור מסמל את חופש ורוח ההרים של האנדים. הוא יכול לעוף בגבהים של יותר מ-5,000 מטר!'
  },
  {
    countryId: 'id',
    countryHebrew: 'אינדונזיה',
    animal: 'דרקון קומודו',
    animalEnglish: 'Komodo Dragon',
    emoji: '🦎',
    difficulty: 'medium',
    funFact: 'דרקון קומודו הוא הלטאה הגדולה ביותר בעולם! הוא יכול להגיע לאורך של 3 מטרים ולשקול 70 קילוגרם.'
  },
  {
    countryId: 'ph',
    countryHebrew: 'הפיליפינים',
    animal: 'נשר פיליפיני',
    animalEnglish: 'Philippine Eagle',
    emoji: '🦅',
    difficulty: 'medium',
    funFact: 'הנשר הפיליפיני הוא אחד הנשרים הגדולים ביותר בעולם! ראשו מעוטר בנוצות חומות כמו רעמה של אריה.'
  },
  {
    countryId: 'sg',
    countryHebrew: 'סינגפור',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'medium',
    funFact: 'שמה של סינגפור מגיע מהמילה הסנסקריטית "סינגה-פורה" שפירושה "עיר האריות"! על הסמל שלה יש יצור חצי אריה חצי דג.'
  },
  {
    countryId: 'kr',
    countryHebrew: 'דרום קוריאה',
    animal: 'נמר סיבירי',
    animalEnglish: 'Siberian Tiger',
    emoji: '🐯',
    difficulty: 'medium',
    funFact: 'הנמר הסיבירי הופיע בסיפורים ובאגדות קוריאניות מזה אלפי שנים. בקוריאה הוא מסמל אומץ ועוצמה.'
  },
  {
    countryId: 'dk',
    countryHebrew: 'דנמרק',
    animal: 'ברבור אילם',
    animalEnglish: 'Mute Swan',
    emoji: '🦢',
    difficulty: 'medium',
    funFact: 'הברבור האילם הוא אחת הציפורות הגדולות באירופה! הסופר הנס כריסטיאן אנדרסן, שהיה דני, כתב את הסיפור "אפרוח הברבור המכוער".'
  },
  {
    countryId: 'ch',
    countryHebrew: 'שווייץ',
    animal: 'פרה',
    animalEnglish: 'Cow',
    emoji: '🐄',
    difficulty: 'medium',
    funFact: 'בשווייץ יש יותר פרות מאנשים בכמה קנטונים! הפרות השווייצריות מפורסמות בחלב הטעים שלהן, ממנו מכינים שוקולד ושוויצרי.'
  },
  {
    countryId: 'ua',
    countryHebrew: 'אוקראינה',
    animal: 'זמיר',
    animalEnglish: 'Nightingale',
    emoji: '🐦',
    difficulty: 'medium',
    funFact: 'הזמיר הוא ציפור קטנה עם שיר נפלא ועשיר מאוד! בשירה וספרות אוקראינית הוא מסמל יופי, אהבה וחופש.'
  },

  // ========== HARD (20) ==========

  {
    countryId: 'al',
    countryHebrew: 'אלבניה',
    animal: 'נשר',
    animalEnglish: 'Eagle',
    emoji: '🦅',
    difficulty: 'hard',
    funFact: 'על דגל אלבניה יש נשר שחור עם שתי ראשים! זה סמל עתיק מאוד שמסמל את מבט אלבניה גם מזרחה וגם מערבה.'
  },
  {
    countryId: 'be',
    countryHebrew: 'בלגיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'hard',
    funFact: 'סמל בלגיה הוא "האריה הבלגי" – אריה שחור על רקע זהב. הוא מופיע על שיריון לוחמי בלגיה כבר מהמאה ה-12.'
  },
  {
    countryId: 'bg',
    countryHebrew: 'בולגריה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    difficulty: 'hard',
    funFact: 'הסמל הלאומי של בולגריה הוא אריה זהוב על מגן כחול-אדום. האריה מסמל את עוצמת האומה הבולגרית.'
  },
  {
    countryId: 'hr',
    countryHebrew: 'קרואטיה',
    animal: 'מרטן',
    animalEnglish: 'Marten',
    emoji: '🦦',
    difficulty: 'hard',
    funFact: 'המרטן הוא חיה זריזה ומהירה שחיה ביערות קרואטיה. שמה של מטבע קרואטיה – "קונה" – פירושו "מרטן" בקרואטית!'
  },
  {
    countryId: 'cz',
    countryHebrew: "צ'כיה",
    animal: 'אריה דו-זנבי',
    animalEnglish: 'Double-tailed Lion',
    emoji: '🦁',
    difficulty: 'hard',
    funFact: "על סמל צ'כיה יש אריה לבן מיוחד עם שני זנבות! הוא מופיע על הסמל מהמאה ה-12 ומסמל את גבורת המדינה."
  },
  {
    countryId: 'hu',
    countryHebrew: 'הונגריה',
    animal: 'תורול',
    animalEnglish: 'Turul Bird',
    emoji: '🦅',
    difficulty: 'hard',
    funFact: 'הטורול הוא ציפור מיתולוגית הדומה לנשר גדול. לפי האגדה ההונגרית, הוא הוביל את עם הונגריה לארצם החדשה לפני יותר מאלף שנה.'
  },
  {
    countryId: 'ro',
    countryHebrew: 'רומניה',
    animal: 'לינקס',
    animalEnglish: 'Lynx',
    emoji: '🐱',
    difficulty: 'hard',
    funFact: 'הלינקס הוא חתול בר בינוני עם אוזניים עם ציצות פרווה בקצותיהן! הוא חי ביערות הקרפטים ברומניה.'
  },
  {
    countryId: 'rs',
    countryHebrew: 'סרביה',
    animal: 'נשר לבן דו-ראשי',
    animalEnglish: 'White Double-headed Eagle',
    emoji: '🦅',
    difficulty: 'hard',
    funFact: 'על סמל סרביה יש נשר לבן עם שתי ראשות. זהו סמל עתיק שמופיע באמנות סרבית מהמאה ה-13.'
  },
  {
    countryId: 'sk',
    countryHebrew: 'סלובקיה',
    animal: 'נשר סמל לאומי',
    animalEnglish: 'Double Cross Eagle',
    emoji: '🦅',
    difficulty: 'hard',
    funFact: 'על דגל סלובקיה יש נשר לבן ועליו צלב כפול על הרים כחולים. הצלב הכפול מסמל את האמונה הנוצרית העמוקה של העם.'
  },
  {
    countryId: 'si',
    countryHebrew: 'סלובניה',
    animal: 'לינקס',
    animalEnglish: 'Lynx',
    emoji: '🐱',
    difficulty: 'hard',
    funFact: 'הלינקס כמעט נכחד בסלובניה, אך תוכנית שימור מיוחדת הצליחה להשיבו! ימינו חיים שם עשרות לינקסים ביערות.'
  },
  {
    countryId: 'pt',
    countryHebrew: 'פורטוגל',
    animal: 'תרנגול ברסלוס',
    animalEnglish: 'Rooster of Barcelos',
    emoji: '🐓',
    difficulty: 'hard',
    funFact: 'התרנגול של ברסלוס הוא הסמל המפורסם ביותר של פורטוגל! לפי האגדה, תרנגול מת קם לתחייה כדי להוכיח חפותו של אדם תמים.'
  },
  {
    countryId: 'gr',
    countryHebrew: 'יוון',
    animal: 'דולפין',
    animalEnglish: 'Dolphin',
    emoji: '🐬',
    difficulty: 'hard',
    funFact: 'ביוון העתיקה הדולפין היה חיה קדושה לאל אפולו! מטבעות יווניות עתיקות מלפני 2,500 שנה כבר נשאו תמונות של דולפינים.'
  },
  {
    countryId: 'is',
    countryHebrew: 'איסלנד',
    animal: 'ג\'ירפלקון',
    animalEnglish: 'Gyrfalcon',
    emoji: '🦅',
    difficulty: 'hard',
    funFact: "הג'ירפלקון הוא הנץ הגדול ביותר בעולם! הוא גר בצפון הקפוא של איסלנד ויכול לטוס במהירות של 200 קמ\"ש."
  },
  {
    countryId: 'ie',
    countryHebrew: 'אירלנד',
    animal: 'צבי אדום',
    animalEnglish: 'Red Deer',
    emoji: '🦌',
    difficulty: 'hard',
    funFact: 'הצבי האדום הוא הממלה הגדולה ביותר באירלנד! הזכר מגדל קרניים ענקיות שהוא משיל ומחדש בכל שנה.'
  },
  {
    countryId: 'gb',
    countryHebrew: 'סקוטלנד',
    animal: 'חד-קרן',
    animalEnglish: 'Unicorn',
    emoji: '🦄',
    difficulty: 'hard',
    funFact: 'החד-קרן הוא חיה מיתולוגית – הסמל הלאומי של סקוטלנד! הסקוטים האמינו שהחד-קרן הוא היצור החזק ביותר בעולם, אפילו יותר מהאריה.'
  },
  {
    countryId: 'jo',
    countryHebrew: 'ירדן',
    animal: 'אוריקס ערבי',
    animalEnglish: 'Arabian Oryx',
    emoji: '🦌',
    difficulty: 'hard',
    funFact: 'האוריקס הערבי כמעט נכחד לגמרי! הודות לתוכניות שימור בירדן ובמדינות שכנות הוא הוחזר לטבע. ייתכן שהוא מקור האגדה על החד-קרן!'
  },
  {
    countryId: 'sa',
    countryHebrew: 'ערב הסעודית',
    animal: 'גמל ערבי',
    animalEnglish: 'Arabian Camel',
    emoji: '🐪',
    difficulty: 'hard',
    funFact: 'הגמל הערבי יכול לשתות 130 ליטר מים בבת אחת! הוא שומר שומן בדבשת שלו – לא מים כפי שרבים חושבים.'
  },
  {
    countryId: 'vn',
    countryHebrew: 'וייטנאם',
    animal: 'בופלו מים',
    animalEnglish: 'Water Buffalo',
    emoji: '🐃',
    difficulty: 'hard',
    funFact: 'בופלו המים עזר לחקלאים הווייטנאמים לעבד שדות אורז כבר אלפי שנים! הוא נחשב לחיה חיונית ולסמל עבודה קשה.'
  },
  {
    countryId: 'mm',
    countryHebrew: 'מיאנמר',
    animal: 'נמר',
    animalEnglish: 'Tiger',
    emoji: '🐯',
    difficulty: 'hard',
    funFact: 'הנמר מופיע על סמל מיאנמר ומסמל אומץ וכוח! ביערות מיאנמר חיים עדיין נמרי בנגל בטבע, אם כי מספרם הולך ופוחת.'
  },
  {
    countryId: 'bo',
    countryHebrew: 'בוליביה',
    animal: 'ליאמה',
    animalEnglish: 'Llama',
    emoji: '🦙',
    difficulty: 'hard',
    funFact: 'הליאמה חיה בהרי האנדים הגבוהים ומשמשת בני אדם כבר 5,000 שנה! היא נושאת עומסים, נותנת צמר ולא צריכה הרבה מים.'
  },
];
