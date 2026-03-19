export interface WorldWonder {
  id: string;
  nameHebrew: string;
  nameEnglish: string;
  country: string;
  countryHebrew: string;
  countryId: string;  // ISO 2-letter country code for flag lookup
  photoUrl: string;   // Wikipedia Commons URL
  difficulty: 'easy' | 'medium' | 'hard';
  funFact: string;    // Hebrew, child-friendly
  year?: string;      // e.g. "נבנה ב-100 לפנה״ס"
}

export const worldWonders: WorldWonder[] = [

  // ========== EASY (7) ==========

  {
    id: 'eiffel-tower',
    nameHebrew: 'מגדל אייפל',
    nameEnglish: 'Eiffel Tower',
    country: 'France',
    countryHebrew: 'צרפת',
    countryId: 'fr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg',
    difficulty: 'easy',
    funFact: 'מגדל אייפל נבנה ב-1889 ובתחילה אנשים לא אהבו אותו! היום הוא הדבר הנצפה ביותר בעולם ומבקרים בו יותר מ-7 מיליון אנשים כל שנה.',
    year: 'נבנה ב-1889'
  },
  {
    id: 'statue-of-liberty',
    nameHebrew: 'פסל החירות',
    nameEnglish: 'Statue of Liberty',
    country: 'USA',
    countryHebrew: 'ארצות הברית',
    countryId: 'us',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg',
    difficulty: 'easy',
    funFact: 'פסל החירות הוא מתנה שצרפת נתנה לאמריקה לפני יותר מ-100 שנה! הפסל גבוה כמו בניין של 22 קומות.',
    year: 'נבנה ב-1886'
  },
  {
    id: 'pyramids-of-giza',
    nameHebrew: 'הפירמידות',
    nameEnglish: 'Pyramids of Giza',
    country: 'Egypt',
    countryHebrew: 'מצרים',
    countryId: 'eg',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/800px-Kheops-Pyramid.jpg',
    difficulty: 'easy',
    funFact: 'הפירמידה הגדולה של גיזה נבנתה לפני 4,500 שנה ועוד היום איננו יודעים בדיוק איך הצליחו לבנות אותה! היא הייתה הבניין הגבוה בעולם במשך 3,800 שנים.',
    year: 'נבנה לפני 4,500 שנה'
  },
  {
    id: 'taj-mahal',
    nameHebrew: 'טאג\' מאהל',
    nameEnglish: 'Taj Mahal',
    country: 'India',
    countryHebrew: 'הודו',
    countryId: 'in',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/800px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
    difficulty: 'easy',
    funFact: 'טאג\' מאהל נבנה על ידי מלך שאהב את אשתו מאוד, ורצה לבנות לה מבנה מרהיב לזכרה. 20,000 פועלים עבדו במשך 22 שנה כדי לבנות אותו!',
    year: 'נבנה ב-1643'
  },
  {
    id: 'colosseum',
    nameHebrew: 'הקולוסיאום',
    nameEnglish: 'Colosseum',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg',
    difficulty: 'easy',
    funFact: 'הקולוסיאום הוא אצטדיון ענק מלפני 2,000 שנה שבו היו מתקיימים משחקים ברומא העתיקה. הוא יכול היה להכיל עד 80,000 צופים!',
    year: 'נבנה ב-70 לספירה'
  },
  {
    id: 'great-wall',
    nameHebrew: 'חומת סין',
    nameEnglish: 'Great Wall of China',
    country: 'China',
    countryHebrew: 'סין',
    countryId: 'cn',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    difficulty: 'easy',
    funFact: 'חומת סין ארוכה כמו המרחק מישראל לאמריקה ובחזרה! היא נבנתה כדי להגן על סין מפני פולשים לפני יותר מ-2,000 שנה.',
    year: 'נבנה לפני 2,000 שנה'
  },
  {
    id: 'machu-picchu',
    nameHebrew: 'מאצ\'ו פיצ\'ו',
    nameEnglish: 'Machu Picchu',
    country: 'Peru',
    countryHebrew: 'פרו',
    countryId: 'pe',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg',
    difficulty: 'easy',
    funFact: 'מאצ\'ו פיצ\'ו הוא עיר עתיקה שנבנתה בפסגת הרים גבוהים בדרום אמריקה. היא הייתה נסתרת מהעולם המודרני במשך מאות שנים עד שגילו אותה ב-1911!',
    year: 'נבנה ב-1450'
  },

  // ========== MEDIUM (7) ==========

  {
    id: 'big-ben',
    nameHebrew: 'ביג בן',
    nameEnglish: 'Big Ben',
    country: 'United Kingdom',
    countryHebrew: 'בריטניה',
    countryId: 'gb',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg/800px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006-2.jpg',
    difficulty: 'medium',
    funFact: 'ביג בן הוא השם של הפעמון הגדול שבתוך המגדל בלונדון, לא שם המגדל עצמו! הפעמון שוקל 14 טון – כמו שני פילים!',
    year: 'נבנה ב-1859'
  },
  {
    id: 'petra',
    nameHebrew: 'פטרה',
    nameEnglish: 'Petra',
    country: 'Jordan',
    countryHebrew: 'ירדן',
    countryId: 'jo',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Petra_Jordan_BW_21.JPG/800px-Petra_Jordan_BW_21.JPG',
    difficulty: 'medium',
    funFact: 'פטרה היא עיר עתיקה שנחצבה בתוך סלעים ורודים בירדן! האנשים שבנו אותה כיצבו בתים, מקדשים ורחובות שלמים ישירות בתוך הסלע.',
    year: 'נבנה ב-300 לפנה"ס'
  },
  {
    id: 'christ-the-redeemer',
    nameHebrew: 'ישו הגואל',
    nameEnglish: 'Christ the Redeemer',
    country: 'Brazil',
    countryHebrew: 'ברזיל',
    countryId: 'br',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/800px-Christ_the_Redeemer_-_Cristo_Redentor.jpg',
    difficulty: 'medium',
    funFact: 'פסל ישו הגואל עומד בפסגת הר גבוה מעל העיר ריו דה ז\'נרו בברזיל. הפסל גבוה כמו בניין של 10 קומות ואפשר לראות אותו ממרחקים רבים!',
    year: 'נבנה ב-1931'
  },
  {
    id: 'chichen-itza',
    nameHebrew: 'צ\'יצ\'ן איצה',
    nameEnglish: 'Chichen Itza',
    country: 'Mexico',
    countryHebrew: 'מקסיקו',
    countryId: 'mx',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/800px-Chichen_Itza_3.jpg',
    difficulty: 'medium',
    funFact: 'צ\'יצ\'ן איצה היא פירמידה שנבנתה על ידי עם המאיה במקסיקו לפני 1,000 שנה. פעמיים בשנה, ביום ובלילה שווים, נוצר בה צל בצורת נחש!',
    year: 'נבנה ב-600 לספירה'
  },
  {
    id: 'angkor-wat',
    nameHebrew: 'אנקורוואט',
    nameEnglish: 'Angkor Wat',
    country: 'Cambodia',
    countryHebrew: 'קמבודיה',
    countryId: 'kh',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Angkor_Wat_with_its_reflection_%28cropped%29.jpg/800px-Angkor_Wat_with_its_reflection_%28cropped%29.jpg',
    difficulty: 'medium',
    funFact: 'אנקורוואט הוא המקדש הגדול ביותר בעולם! הוא נבנה בקמבודיה לפני כ-900 שנה ויש בו כל כך הרבה חדרים שאפשר ללכת בו שעות.',
    year: 'נבנה ב-1150'
  },
  {
    id: 'sydney-opera-house',
    nameHebrew: 'אופרה סידני',
    nameEnglish: 'Sydney Opera House',
    country: 'Australia',
    countryHebrew: 'אוסטרליה',
    countryId: 'au',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/800px-Sydney_Australia._%2821339175489%29.jpg',
    difficulty: 'medium',
    funFact: 'בית האופרה של סידני נראה כמו מפרשים של ספינה! הוא נבנה ב-1973 ויש בו יותר מ-1,000 חדרים שונים.',
    year: 'נבנה ב-1973'
  },
  {
    id: 'acropolis',
    nameHebrew: 'האקרופוליס',
    nameEnglish: 'Acropolis of Athens',
    country: 'Greece',
    countryHebrew: 'יוון',
    countryId: 'gr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/800px-The_Parthenon_in_Athens.jpg',
    difficulty: 'medium',
    funFact: 'האקרופוליס הוא גבעה ביוון עם מקדשים עתיקים שנבנו לפני 2,500 שנה! המקדש הראשי שלו, הפרתנון, היה פעם מכוסה בצבעים עזים.',
    year: 'נבנה ב-447 לפנה"ס'
  },

  // ========== HARD (6) ==========

  {
    id: 'tower-bridge',
    nameHebrew: 'מגדל לונדון',
    nameEnglish: 'Tower Bridge',
    country: 'United Kingdom',
    countryHebrew: 'בריטניה',
    countryId: 'gb',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tower_bridge_London_Twilight_-_November_2006.jpg/800px-Tower_bridge_London_Twilight_-_November_2006.jpg',
    difficulty: 'hard',
    funFact: 'מגדל לונדון הוא גשר מיוחד שיכול להיפתח באמצע כדי לאפשר לספינות גדולות לעבור! הוא נפתח כ-800 פעמים בשנה.',
    year: 'נבנה ב-1894'
  },
  {
    id: 'leaning-tower-of-pisa',
    nameHebrew: 'מגדל פיזה',
    nameEnglish: 'Leaning Tower of Pisa',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Leaning_tower_of_pisa_2.jpg/800px-Leaning_tower_of_pisa_2.jpg',
    difficulty: 'hard',
    funFact: 'מגדל פיזה מטה לצד אחד כי הקרקע מתחתיו רכה מדי! ההטיה שלו מתחילה עוד בזמן הבנייה לפני 800 שנה, אבל הוא עדיין עומד בגאון.',
    year: 'נבנה ב-1173'
  },
  {
    id: 'burj-khalifa',
    nameHebrew: 'בורג\' ח\'ליפה',
    nameEnglish: 'Burj Khalifa',
    country: 'UAE',
    countryHebrew: 'איחוד האמירויות',
    countryId: 'ae',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Burj_Khalifa_%2816260269606%29.jpg/800px-Burj_Khalifa_%2816260269606%29.jpg',
    difficulty: 'hard',
    funFact: 'בורג\' ח\'ליפה בדובאי הוא הבניין הגבוה ביותר בעולם! הוא גבוה יותר מ-828 מטרים – כמו 200 קומות! מהפסגה שלו אפשר לראות עד 95 קילומטרים.',
    year: 'נבנה ב-2010'
  },
  {
    id: 'blue-mosque',
    nameHebrew: 'המסגד הכחול',
    nameEnglish: 'Blue Mosque',
    country: 'Turkey',
    countryHebrew: 'טורקיה',
    countryId: 'tr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg/800px-Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg',
    difficulty: 'hard',
    funFact: 'המסגד הכחול באיסטנבול קיבל את שמו בגלל האריחים הכחולים היפהפיים שמקשטים את הקירות שלו מבפנים. יש בו שישה מגדלים גבוהים שנקראים מינרטים!',
    year: 'נבנה ב-1616'
  },
  {
    id: 'western-wall',
    nameHebrew: 'הכותל המערבי',
    nameEnglish: 'Western Wall',
    country: 'Israel',
    countryHebrew: 'ישראל',
    countryId: 'il',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Western_wall_and_its_square%2C_jerusalem.jpg/800px-Western_wall_and_its_square%2C_jerusalem.jpg',
    difficulty: 'hard',
    funFact: 'הכותל המערבי הוא שריד מהמקדש של העם היהודי שנבנה לפני יותר מ-2,000 שנה! אנשים מכל העולם באים לכאן להתפלל ולשים פתקים בין אבניו.',
    year: 'נבנה ב-19 לפנה"ס'
  },
  {
    id: 'buckingham-palace',
    nameHebrew: 'ארמון הבאקינגהאם',
    nameEnglish: 'Buckingham Palace',
    country: 'United Kingdom',
    countryHebrew: 'בריטניה',
    countryId: 'gb',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg/800px-Buckingham_Palace%2C_London_-_April_2009.jpg',
    difficulty: 'hard',
    funFact: 'ארמון הבאקינגהאם הוא הבית הרשמי של משפחת המלוכה הבריטית. יש בו 775 חדרים ו-78 חדרי אמבטיה – האם אתם יכולים לדמיין בית כזה?',
    year: 'נבנה ב-1703'
  },
];

export const wondersCount = { easy: 7, medium: 14, hard: 20 };
