export interface WorldFood {
  id: string;
  nameHebrew: string;
  nameEnglish: string;
  country: string;       // country name in English
  countryHebrew: string; // country name in Hebrew
  countryId: string;     // ISO 2-letter code for flag
  photoUrl: string;      // Wikipedia Commons URL
  difficulty: 'easy' | 'medium' | 'hard';
  funFact: string;       // Hebrew, child-friendly 1-2 sentences
}

export const worldFoods: WorldFood[] = [

  // ========== EASY (10) ==========

  {
    id: 'pizza',
    nameHebrew: 'פיצה',
    nameEnglish: 'Pizza',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    difficulty: 'easy',
    funFact: 'הפיצה הומצאה בנאפולי שבאיטליה לפני כ-200 שנה. כיום נאכלות ברחבי העולם יותר מ-5 מיליארד פיצות בשנה!'
  },
  {
    id: 'sushi',
    nameHebrew: 'סושי',
    nameEnglish: 'Sushi',
    country: 'Japan',
    countryHebrew: 'יפן',
    countryId: 'jp',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg',
    difficulty: 'easy',
    funFact: 'הסושי ביפן הוא אמנות אמיתית - שפי סושי לומדים לפחות 10 שנים כדי לשלוט בהכנתו! האורז בסושי מתובל בחומץ מיוחד.'
  },
  {
    id: 'hamburger',
    nameHebrew: 'המבורגר',
    nameEnglish: 'Hamburger',
    country: 'USA',
    countryHebrew: 'ארצות הברית',
    countryId: 'us',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hamburger_with_grilled_onions%2C_Jack%27s_restaurant%2C_Fort_Lauderdale%2C_Florida.jpg/800px-Hamburger_with_grilled_onions%2C_Jack%27s_restaurant%2C_Fort_Lauderdale%2C_Florida.jpg',
    difficulty: 'easy',
    funFact: 'ההמבורגר קיבל את שמו מהעיר המבורג שבגרמניה, אך הפך לאחד המאכלים הפופולריים ביותר בארצות הברית. האמריקאים אוכלים כ-50 מיליארד המבורגרים בשנה!'
  },
  {
    id: 'croissant',
    nameHebrew: 'קרואסון',
    nameEnglish: 'Croissant',
    country: 'France',
    countryHebrew: 'צרפת',
    countryId: 'fr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Croissants_au_beurre_%2818953292873%29.jpg/800px-Croissants_au_beurre_%2818953292873%29.jpg',
    difficulty: 'easy',
    funFact: 'הקרואסון צורתו המיוחדת דמויית הסהר קיבלה השראה מדגל האימפריה העות\'מאנית. בצרפת אוכלים קרואסון טרי כל בוקר עם קפה!'
  },
  {
    id: 'taco',
    nameHebrew: 'טאקו',
    nameEnglish: 'Taco',
    country: 'Mexico',
    countryHebrew: 'מקסיקו',
    countryId: 'mx',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
    difficulty: 'easy',
    funFact: 'הטאקו הוא מזון הרחוב הפופולרי ביותר במקסיקו! ב-4 באוקטובר חוגגים את "יום הטאקו הבינלאומי" ואוכלים טאקו בכל העולם.'
  },
  {
    id: 'pasta',
    nameHebrew: 'פסטה',
    nameEnglish: 'Pasta',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Party_food_dish_5_pasta_salad.jpg/800px-Party_food_dish_5_pasta_salad.jpg',
    difficulty: 'easy',
    funFact: 'באיטליה יש יותר מ-600 סוגים שונים של פסטה! כל אזור באיטליה ממציא את הצורה המיוחדת שלו, כמו ספגטי, פנה, פרפרים ועוד.'
  },
  {
    id: 'shawarma',
    nameHebrew: 'שוורמה',
    nameEnglish: 'Shawarma',
    country: 'Turkey',
    countryHebrew: 'טורקיה',
    countryId: 'tr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Shawarma-sandwich-01.jpg/800px-Shawarma-sandwich-01.jpg',
    difficulty: 'easy',
    funFact: 'השוורמה הומצאה בטורקיה לפני מאות שנים. הבשר מתבשל על שיפוד מסתובב ענקי - לפעמים לוקח שעות שלמות עד שהוא מוכן!'
  },
  {
    id: 'falafel',
    nameHebrew: 'פלאפל',
    nameEnglish: 'Falafel',
    country: 'Israel',
    countryHebrew: 'ישראל',
    countryId: 'il',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Falafels.jpg/800px-Falafels.jpg',
    difficulty: 'easy',
    funFact: 'הפלאפל עשוי מחומוס ותבלינים ומטוגן בשמן. בישראל הוא נחשב ל"מנת הלאום" ואוכלים אותו בפיתה עם חומוס וירקות.'
  },
  {
    id: 'waffle',
    nameHebrew: 'ואפל',
    nameEnglish: 'Waffle',
    country: 'Belgium',
    countryHebrew: 'בלגיה',
    countryId: 'be',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/800px-Waffles_with_Strawberries.jpg',
    difficulty: 'easy',
    funFact: 'הוואפל הבלגי הוא אחד הדברים הכי מפורסמים שיצאו מבלגיה! הוא גדול ורך יותר מוואפל רגיל ואוכלים אותו עם שוקולד ופירות.'
  },
  {
    id: 'spaghetti',
    nameHebrew: 'ספגטי',
    nameEnglish: 'Spaghetti',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Liat_Portal_for_Foodie_Disorder_-_Spaghetti_bolognese_with_peas.jpg/800px-Liat_Portal_for_Foodie_Disorder_-_Spaghetti_bolognese_with_peas.jpg',
    difficulty: 'easy',
    funFact: 'המילה "ספגטי" באיטלקית פירושה "חוטים קטנים". אוכלים ספגטי בולונייזה עם רוטב בשר, וזה מאכל האהוב על ילדים בכל העולם!'
  },

  // ========== MEDIUM (10) ==========

  {
    id: 'paella',
    nameHebrew: 'פאייה',
    nameEnglish: 'Paella',
    country: 'Spain',
    countryHebrew: 'ספרד',
    countryId: 'es',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Paella_Valenciana.jpg/800px-Paella_Valenciana.jpg',
    difficulty: 'medium',
    funFact: 'הפאייה היא מנה ספרדית מסורתית מאורז עם ים-טוב או עוף. מבשלים אותה במחבת עגולה וגדולה מאוד שנקראת גם "פאייה"!'
  },
  {
    id: 'curry',
    nameHebrew: 'קארי',
    nameEnglish: 'Curry',
    country: 'India',
    countryHebrew: 'הודו',
    countryId: 'in',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Yellow_curry_and_green_curry_-_Nok_Nok_Kitchen_at_The_Cow_2025-09-30.jpg/800px-Yellow_curry_and_green_curry_-_Nok_Nok_Kitchen_at_The_Cow_2025-09-30.jpg',
    difficulty: 'medium',
    funFact: 'הקארי הוא תבשיל עם תבלינים חריפים שמגיע מהודו. יש מאות מתכוני קארי שונים - כל משפחה הודית מכינה אותו בדרכה המיוחדת!'
  },
  {
    id: 'dimsum',
    nameHebrew: 'דים סאם',
    nameEnglish: 'Dim Sum',
    country: 'China',
    countryHebrew: 'סין',
    countryId: 'cn',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Dimsum.jpg/800px-Dimsum.jpg',
    difficulty: 'medium',
    funFact: 'דים סאם בסינית פירושו "נגיעה בלב". זה אוסף של מנות קטנות ומגוונות שמוגשות בסלים של במבוק. אוכלים אותו בארוחת בוקר מיוחדת!'
  },
  {
    id: 'gazpacho',
    nameHebrew: "גזפאצ'ו",
    nameEnglish: 'Gazpacho',
    country: 'Spain',
    countryHebrew: 'ספרד',
    countryId: 'es',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gazpacho_Cazuela_Barro.jpg/800px-Gazpacho_Cazuela_Barro.jpg',
    difficulty: 'medium',
    funFact: "הגזפאצ'ו הוא מרק עגבניות קר שנאכל בקיץ בספרד. אין מבשלים אותו בכלל - מועכים את הירקות ושומרים במקרר! מרק קר - מה רעיון מיוחד!"
  },
  {
    id: 'pho',
    nameHebrew: 'פו',
    nameEnglish: 'Pho',
    country: 'Vietnam',
    countryHebrew: 'וייטנאם',
    countryId: 'vn',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pho_Vietnamese_noodle_soup_in_Ho_Chi_Minh_City%2C_Vietnam.jpg/800px-Pho_Vietnamese_noodle_soup_in_Ho_Chi_Minh_City%2C_Vietnam.jpg',
    difficulty: 'medium',
    funFact: 'פו הוא מרק אטריות וייטנאמי שמבשלים אותו לפעמים יותר מ-12 שעות! הריח המיוחד שלו מגיע מתבלינים כמו ציפורן קינמון וכוכב אניס.'
  },
  {
    id: 'goulash',
    nameHebrew: 'גולאש',
    nameEnglish: 'Goulash',
    country: 'Hungary',
    countryHebrew: 'הונגריה',
    countryId: 'hu',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hungarian_Goulash_Recipe.png/800px-Hungarian_Goulash_Recipe.png',
    difficulty: 'medium',
    funFact: 'הגולאש הוא תבשיל בשר ומרק הונגרי חריף ואדום מפפריקה. הוא היה מאכל הרועים ההונגריים שנסעו עם עדריהם ברחבי הערבה!'
  },
  {
    id: 'borscht',
    nameHebrew: 'בורשט',
    nameEnglish: 'Borscht',
    country: 'Russia',
    countryHebrew: 'רוסיה',
    countryId: 'ru',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Borscht_with_bread.jpg/800px-Borscht_with_bread.jpg',
    difficulty: 'medium',
    funFact: 'הבורשט הוא מרק סלק סגול-אדמוני שמגיע מרוסיה ואוקראינה. הצבע המיוחד שלו מגיע מהסלק! אוכלים אותו עם כף שמנת חמוצה לבנה.'
  },
  {
    id: 'moussaka',
    nameHebrew: 'מוסקה',
    nameEnglish: 'Moussaka',
    country: 'Greece',
    countryHebrew: 'יוון',
    countryId: 'gr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mousakas.jpg/800px-Mousakas.jpg',
    difficulty: 'medium',
    funFact: 'המוסקה היא מנה יוונית עם שכבות של חצילים, בשר טחון ורוטב לבן. אופים אותה בתנור עד שהיא מוזהבת ומבעבעת - ריח נפלא!'
  },
  {
    id: 'tempura',
    nameHebrew: 'טמפורה',
    nameEnglish: 'Tempura',
    country: 'Japan',
    countryHebrew: 'יפן',
    countryId: 'jp',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Shrimp_and_vegetables_tempura_-_Massachusetts.jpg/800px-Shrimp_and_vegetables_tempura_-_Massachusetts.jpg',
    difficulty: 'medium',
    funFact: 'הטמפורה היא שיטת טיגון יפנית שהגיעה מפורטוגל לפני 400 שנה! מטבלים ירקות וים-טוב בבלילה קלה ומטגנים בשמן רותח - מוכן תוך שניות!'
  },
  {
    id: 'fishandchips',
    nameHebrew: "פיש אנד צ'יפס",
    nameEnglish: 'Fish and Chips',
    country: 'UK',
    countryHebrew: 'בריטניה',
    countryId: 'gb',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/800px-Fish_and_chips_blackpool.jpg',
    difficulty: 'medium',
    funFact: "פיש אנד צ'יפס הוא המאכל הלאומי הבריטי! בבריטניה יש יותר מ-10,000 חנויות פיש אנד צ'יפס. אוכלים אותו עם מלח וחומץ ועוטפים אותו בנייר!"
  },

  // ========== HARD (10) ==========

  {
    id: 'peking-duck',
    nameHebrew: 'ברווז פקין',
    nameEnglish: 'Peking Duck',
    country: 'China',
    countryHebrew: 'סין',
    countryId: 'cn',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Peking_duck_by_Mr_Wabu_in_Beijing.jpg/800px-Peking_duck_by_Mr_Wabu_in_Beijing.jpg',
    difficulty: 'hard',
    funFact: 'ברווז פקין הוא מנה מפורסמת מסין שמכינים אותה כבר 600 שנה! הברווז נצלה בתנור מיוחד עד שהעור שלו נעשה פריך וזהוב כמו שוקולד!'
  },
  {
    id: 'samosa',
    nameHebrew: 'סמוסה',
    nameEnglish: 'Samosa',
    country: 'India',
    countryHebrew: 'הודו',
    countryId: 'in',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/800px-Samosachutney.jpg',
    difficulty: 'hard',
    funFact: 'הסמוסה היא מאפה משולש הודי שמתמלא בתפוחי אדמה ותבלינים. מוכרים אותה ברחובות הודו לכל אורך היום ואוכלים אותה עם רטבים חריפים!'
  },
  {
    id: 'risotto',
    nameHebrew: 'ריזוטו',
    nameEnglish: 'Risotto',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Risotto_de_gambas%2C_restaurant_Danieli_%28Vienne%2C_Autriche%29.jpg/800px-Risotto_de_gambas%2C_restaurant_Danieli_%28Vienne%2C_Autriche%29.jpg',
    difficulty: 'hard',
    funFact: 'הריזוטו הוא אורז איטלקי קרמי שמבשלים אותו לאט-לאט תוך ערבוב מתמיד. לוקח כ-20 דקות לבשל ריזוטו טוב - מחייב הרבה סבלנות!'
  },
  {
    id: 'bibimbap',
    nameHebrew: 'ביבימבאפ',
    nameEnglish: 'Bibimbap',
    country: 'South Korea',
    countryHebrew: 'קוריאה הדרומית',
    countryId: 'kr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg',
    difficulty: 'hard',
    funFact: 'ביבימבאפ פירושו בקוריאנית "לערבב אורז". זה קערה עם אורז, ירקות, ביצה ורוטב חריף שמערבבים הכל יחד לפני האכילה!'
  },
  {
    id: 'couscous',
    nameHebrew: 'קוסקוס',
    nameEnglish: 'Couscous',
    country: 'Morocco',
    countryHebrew: 'מרוקו',
    countryId: 'ma',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Couscous_%2874111%29.jpg/800px-Couscous_%2874111%29.jpg',
    difficulty: 'hard',
    funFact: 'הקוסקוס עשוי מגרגירי סולת קטנטנים ונפוץ מאוד בצפון אפריקה. במרוקו נוהגים לאכול קוסקוס בערב שישי עם כל המשפחה!'
  },
  {
    id: 'padthai',
    nameHebrew: 'פאד תאי',
    nameEnglish: 'Pad Thai',
    country: 'Thailand',
    countryHebrew: 'תאילנד',
    countryId: 'th',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pad_Thai_Noodles_-_Little_Thai%2C_Brighton_2024-03-21.jpg/800px-Pad_Thai_Noodles_-_Little_Thai%2C_Brighton_2024-03-21.jpg',
    difficulty: 'hard',
    funFact: 'פאד תאי הוא מנת אטריות מוקפצות תאילנדית עם ביצה, בוטנים ואוכמניות. זה אחד המאכלים הפופולריים ביותר ברחובות תאילנד!'
  },
  {
    id: 'chimichanga',
    nameHebrew: "צ'ימיצ'אנגה",
    nameEnglish: 'Chimichanga',
    country: 'Mexico',
    countryHebrew: 'מקסיקו',
    countryId: 'mx',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chimichanga.jpg/800px-Chimichanga.jpg',
    difficulty: 'hard',
    funFact: "הצ'ימיצ'אנגה היא בוריטו מטוגן מקסיקני עם בשר, גבינה ואורז בפנים. המילה 'צ'ימיצ'אנגה' היא צליל מצחיק ללא משמעות ברורה!"
  },
  {
    id: 'parmigiana',
    nameHebrew: 'פרמג\'אנה',
    nameEnglish: 'Parmigiana',
    country: 'Italy',
    countryHebrew: 'איטליה',
    countryId: 'it',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Melanzane_alla_parmigiana.jpg/800px-Melanzane_alla_parmigiana.jpg',
    difficulty: 'hard',
    funFact: 'הפרמג\'אנה היא מנה איטלקית עם שכבות חצילים, רוטב עגבניות וגבינה. אופים אותה בתנור עד שהגבינה נמסה ומוזהבת - פינוק אמיתי!'
  },
  {
    id: 'eggs-benedict',
    nameHebrew: 'ביצים בנדיקט',
    nameEnglish: 'Eggs Benedict',
    country: 'USA',
    countryHebrew: 'ארצות הברית',
    countryId: 'us',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eggs_Benedict.jpg/800px-Eggs_Benedict.jpg',
    difficulty: 'hard',
    funFact: 'ביצים בנדיקט הן מנת בוקר אמריקאית יוקרתית עם ביצה פושטת, חזה עגל ורוטב הולנדייז צהוב. ממציאים לגביה יש מחלוקת - כולם רוצים את הקרדיט!'
  },
  {
    id: 'schnitzel',
    nameHebrew: 'שניצל',
    nameEnglish: 'Schnitzel',
    country: 'Austria',
    countryHebrew: 'אוסטריה',
    countryId: 'at',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Wiener_Schnitzel_2012.jpg/800px-Wiener_Schnitzel_2012.jpg',
    difficulty: 'hard',
    funFact: 'השניצל הווינאי המקורי עשוי מחזה עגל מוקצף ומטוגן. הוא כל כך פופולרי בישראל שבישראל מכינים אותו מעוף - ויש אותו כמעט בכל מסעדה!'
  },

];

export const foodsCount = { easy: 10, medium: 20, hard: 30 };
