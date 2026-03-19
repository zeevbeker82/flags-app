export interface CountryAnimal {
  countryId: string;   // ISO 2-letter code matching countries.ts (e.g. 'fr', 'de', 'us')
  countryHebrew: string;
  animal: string;      // Hebrew name of the animal
  animalEnglish: string;
  emoji: string;       // best matching emoji
  photoUrl: string;    // Wikipedia Commons real photo URL
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Forester_kangaroo_%28Macropus_giganteus_tasmaniensis%29_juvenile_hopping_Esk_Valley.jpg/500px-Forester_kangaroo_%28Macropus_giganteus_tasmaniensis%29_juvenile_hopping_Esk_Valley.jpg',
    difficulty: 'easy',
    funFact: 'לנקבת הקנגורו יש כיס בבטן שבו היא נושאת את הגור הקטן שלה. הגור נשאר בכיס עד שהוא גדול מספיק!'
  },
  {
    countryId: 'cn',
    countryHebrew: 'סין',
    animal: 'פנדה ענקית',
    animalEnglish: 'Giant Panda',
    emoji: '🐼',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/500px-Grosser_Panda.JPG',
    difficulty: 'easy',
    funFact: 'הפנדה הענקית אוכלת במשך 12 עד 16 שעות ביום! המאכל האהוב עליה הוא במבוק.'
  },
  {
    countryId: 'in',
    countryHebrew: 'הודו',
    animal: 'נמר בנגל',
    animalEnglish: 'Bengal Tiger',
    emoji: '🐯',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/500px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg',
    difficulty: 'easy',
    funFact: 'לכל נמר יש פסים מיוחדים שרק לו יש – ממש כמו טביעת אצבע שונה לכל אדם!'
  },
  {
    countryId: 'us',
    countryHebrew: 'ארצות הברית',
    animal: 'נשר קרחת',
    animalEnglish: 'Bald Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/500px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg',
    difficulty: 'easy',
    funFact: 'הנשר הקרחת אינו קרח באמת – הראש שלו מכוסה נוצות לבנות! הוא יכול לטוס במהירות של יותר מ-60 קמ"ש.'
  },
  {
    countryId: 'ca',
    countryHebrew: 'קנדה',
    animal: 'ביבר',
    animalEnglish: 'Beaver',
    emoji: '🦫',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/500px-American_Beaver.jpg',
    difficulty: 'easy',
    funFact: 'הביבר בונה סכרים מענפים וטיט בנהרות. הוא אחד החיות הבנאיות החרוצות ביותר בטבע!'
  },
  {
    countryId: 'ru',
    countryHebrew: 'רוסיה',
    animal: 'דוב חום',
    animalEnglish: 'Brown Bear',
    emoji: '🐻',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/500px-2010-kodiak-bear-1.jpg',
    difficulty: 'easy',
    funFact: 'הדוב החום ישן כמעט כל החורף! זה נקרא תרדמת חורף, ובמהלכה הוא כמעט לא אוכל ולא שותה.'
  },
  {
    countryId: 'gb',
    countryHebrew: 'בריטניה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'האריה נקרא "מלך החיות". הרעם שלו יכול להישמע ממרחק של 8 קילומטרים!'
  },
  {
    countryId: 'nz',
    countryHebrew: 'ניו זילנד',
    animal: 'קיווי',
    animalEnglish: 'Kiwi Bird',
    emoji: '🥝',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/TeTuatahianui.jpg/500px-TeTuatahianui.jpg',
    difficulty: 'easy',
    funFact: 'ציפור הקיווי לא יכולה לעוף, אבל היא ריצה מהירה מאוד! היא גם ישנה ביום ויוצאת רק בלילה.'
  },
  {
    countryId: 'za',
    countryHebrew: 'דרום אפריקה',
    animal: 'ספרינגבוק',
    animalEnglish: 'Springbok',
    emoji: '🦌',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/174_Male_Springbok_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg/500px-174_Male_Springbok_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'הספרינגבוק יכול לקפוץ לגובה של 3 מטרים! הוא עושה זאת כשהוא שמח או כדי לבהל טורפים.'
  },
  {
    countryId: 'il',
    countryHebrew: 'ישראל',
    animal: 'דוכיפת',
    animalEnglish: 'Hoopoe Bird',
    emoji: '🐦',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Upupa_epops_Madrid_01.jpg/500px-Upupa_epops_Madrid_01.jpg',
    difficulty: 'easy',
    funFact: 'הדוכיפת היא ציפור הלאום של ישראל! על ראשה יש ציצת נוצות יפהפייה שהיא פותחת כמו מניפה.'
  },
  {
    countryId: 'de',
    countryHebrew: 'גרמניה',
    animal: 'נשר שחור',
    animalEnglish: 'Black Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'הנשר השחור מופיע על סמל גרמניה כבר מאות שנים. הוא מסמל כוח ואומץ.'
  },
  {
    countryId: 'fr',
    countryHebrew: 'צרפת',
    animal: 'תרנגול גאלי',
    animalEnglish: 'Gallic Rooster',
    emoji: '🐓',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/500px-Male_and_female_chicken_sitting_together.jpg',
    difficulty: 'easy',
    funFact: 'התרנגול הגאלי הוא סמל של צרפת כבר מאות שנים. הוא מסמל גאווה וערנות – בדיוק כמו קריאת "קוקוריקו" בבוקר!'
  },
  {
    countryId: 'br',
    countryHebrew: 'ברזיל',
    animal: 'יגואר',
    animalEnglish: 'Jaguar',
    emoji: '🐆',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/500px-Standing_jaguar.jpg',
    difficulty: 'easy',
    funFact: 'היגואר הוא החתול הגדול ביותר באמריקה! הוא שחיין מעולה ואוהב מים.'
  },
  {
    countryId: 'mx',
    countryHebrew: 'מקסיקו',
    animal: 'נשר זהב',
    animalEnglish: 'Golden Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'הנשר הזהב מופיע על דגל מקסיקו! הוא נראה שם אוחז נחש בפיו ועומד על קקטוס.'
  },
  {
    countryId: 'jp',
    countryHebrew: 'יפן',
    animal: 'פסיון ירוק',
    animalEnglish: 'Green Pheasant',
    emoji: '🦚',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Phasianus_versicolor_in_Japan.JPG/500px-Phasianus_versicolor_in_Japan.JPG',
    difficulty: 'easy',
    funFact: 'הפסיון הירוק הוא ציפור יפהפייה עם צבעים של ירוק וכחול. הוא חי רק ביפן!'
  },
  {
    countryId: 'ar',
    countryHebrew: 'ארגנטינה',
    animal: 'פומה',
    animalEnglish: 'Puma',
    emoji: '🐱',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/500px-Mountain_Lion_in_Glacier_National_Park.jpg',
    difficulty: 'easy',
    funFact: 'הפומה יכולה לקפוץ לגובה של 5 מטרים ולמרחק של 12 מטרים! היא ממש קפצנית.'
  },
  {
    countryId: 'no',
    countryHebrew: 'נורווגיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'אריה מופיע על סמל המלוכה של נורווגיה כבר מהמאה ה-13. הוא מסמל את אומץ לבם של הנורווגים.'
  },
  {
    countryId: 'th',
    countryHebrew: 'תאילנד',
    animal: 'פיל',
    animalEnglish: 'Elephant',
    emoji: '🐘',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Elephas_maximus_%28Bandipur%29.jpg/500px-Elephas_maximus_%28Bandipur%29.jpg',
    difficulty: 'easy',
    funFact: 'הפיל הוא החיה הקדושה של תאילנד! פילים לבנים נחשבים מיוחדים במיוחד ושייכים למלך.'
  },
  {
    countryId: 'ke',
    countryHebrew: 'קניה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'easy',
    funFact: 'קניה היא אחד המקומות הטובים בעולם לראות אריות בטבע! בסוואנה חיים אלפי אריות.'
  },
  {
    countryId: 'nl',
    countryHebrew: 'הולנד',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/TORO_BRAVO.jpg/500px-TORO_BRAVO.jpg',
    difficulty: 'medium',
    funFact: 'השור הוא סמל של ספרד. בספרד יש מסורת של מלחמות שוורים הנקראות "קוֹרִידָה", אם כי ימינו רבים מתנגדים לה.'
  },
  {
    countryId: 'it',
    countryHebrew: 'איטליה',
    animal: 'זאב',
    animalEnglish: 'Wolf',
    emoji: '🐺',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/500px-Eurasian_wolf_2.jpg',
    difficulty: 'medium',
    funFact: 'לפי האגדה, רומא נוסדה על ידי שני תאומים – רומולוס ורמוס – שגדלו וינקו מזאבה!'
  },
  {
    countryId: 'se',
    countryHebrew: 'שוודיה',
    animal: 'אייל',
    animalEnglish: 'Elk / Moose',
    emoji: '🦌',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alaska_moose.jpg/500px-Alaska_moose.jpg',
    difficulty: 'medium',
    funFact: 'האייל הוא החיה הגדולה ביותר בשוודיה! הזכר יכול לשקול יותר מחצי טון ולשאת קרניים רחבות.'
  },
  {
    countryId: 'fi',
    countryHebrew: 'פינלנד',
    animal: 'דוב חום',
    animalEnglish: 'Brown Bear',
    emoji: '🐻',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/500px-2010-kodiak-bear-1.jpg',
    difficulty: 'medium',
    funFact: 'בפינלנד חיים יותר מ-2,000 דובים חומים! הדוב נחשב לסמל כוח וחוסן של העם הפיני.'
  },
  {
    countryId: 'pl',
    countryHebrew: 'פולין',
    animal: 'נשר לבן',
    animalEnglish: 'White Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/NZ7_5265_%2852812350718%29.jpg/500px-NZ7_5265_%2852812350718%29.jpg',
    difficulty: 'medium',
    funFact: 'הנשר הלבן על רקע אדום הוא סמל פולין מזה מאות שנים. הוא מופיע על הדגל ועל כל מטבע פולני.'
  },
  {
    countryId: 'tr',
    countryHebrew: 'טורקיה',
    animal: 'זאב אפור',
    animalEnglish: 'Grey Wolf',
    emoji: '🐺',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/500px-Eurasian_wolf_2.jpg',
    difficulty: 'medium',
    funFact: 'לפי האגדה הטורקית, הזאב האפור הוביל את העם הטורקי ממרכז אסיה לאנטוליה. לכן הוא נחשב לסמל לאומי חשוב.'
  },
  {
    countryId: 'ir',
    countryHebrew: 'איראן',
    animal: 'ציפרד אסייתי',
    animalEnglish: 'Asiatic Cheetah',
    emoji: '🐆',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Delbar_%28Iranian_Cheetah%29_01_%28cropped%29.jpg/250px-Delbar_%28Iranian_Cheetah%29_01_%28cropped%29.jpg',
    difficulty: 'medium',
    funFact: 'הציפרד האסייתי הוא מהחיות הנדירות ביותר בעולם! נותרו פחות מ-50 מהם, וכולם חיים באיראן.'
  },
  {
    countryId: 'pk',
    countryHebrew: 'פקיסטן',
    animal: 'מרחור',
    animalEnglish: 'Markhor',
    emoji: '🐐',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/500px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg',
    difficulty: 'medium',
    funFact: 'למרחור יש קרניים ספירליות ארוכות ומפותלות בצורה מרהיבה! הוא מטפס על הרים תלולים בקלות רבה.'
  },
  {
    countryId: 'bd',
    countryHebrew: "בנגלדש",
    animal: 'נמר בנגל המלכותי',
    animalEnglish: 'Royal Bengal Tiger',
    emoji: '🐯',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/500px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg',
    difficulty: 'medium',
    funFact: 'נמר הבנגל המלכותי הוא שחיין נפלא ואוהב מים! יערות המנגרובים בבנגלדש הם ביתם של מאות נמרים.'
  },
  {
    countryId: 'lk',
    countryHebrew: 'סרי לנקה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'medium',
    funFact: 'האריה מופיע על דגל סרי לנקה אוחז חרב. הוא מסמל את האומץ ואת ההיסטוריה הגאה של המדינה.'
  },
  {
    countryId: 'np',
    countryHebrew: 'נפאל',
    animal: 'פרה',
    animalEnglish: 'Cow',
    emoji: '🐄',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Holstein_Cow_in_Mont%C3%A9r%C3%A9gie%2C_Quebec.jpg/500px-Holstein_Cow_in_Mont%C3%A9r%C3%A9gie%2C_Quebec.jpg',
    difficulty: 'medium',
    funFact: 'בנפאל הפרה היא חיה קדושה! היא מסמלת אמהות, עושר ואדמה. אסור לפגוע בפרות בנפאל.'
  },
  {
    countryId: 'eg',
    countryHebrew: 'מצרים',
    animal: 'נשר מצרי',
    animalEnglish: 'Steppe Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Steppe_Eagle_Portrait.jpg/500px-Steppe_Eagle_Portrait.jpg',
    difficulty: 'medium',
    funFact: 'הנשר מופיע על דגל מצרים ונקרא "נשר צלאח אל-דין" על שם הגיבור הערבי הגדול. הוא מסמל כוח ורוממות.'
  },
  {
    countryId: 'ma',
    countryHebrew: 'מרוקו',
    animal: 'אריה ברברי',
    animalEnglish: 'Barbary Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Barbary_lion.jpg/500px-Barbary_lion.jpg',
    difficulty: 'medium',
    funFact: 'האריה הברברי היה הגדול ביותר בין תת-המינים של האריות! לצערנו הוא נכחד בטבע, אך חי בגני חיות ברחבי העולם.'
  },
  {
    countryId: 'et',
    countryHebrew: 'אתיופיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'medium',
    funFact: 'קיסרי אתיופיה לשעבר נקראו "אריה יהודה" – תואר שמסמל כוח ומלכות מקראית.'
  },
  {
    countryId: 'ng',
    countryHebrew: 'ניגריה',
    animal: 'נשר',
    animalEnglish: 'Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'medium',
    funFact: 'הנשר על סמל ניגריה מסמל כוח ורצון לפרוח קדימה. ניגריה היא המדינה המאוכלסת ביותר באפריקה!'
  },
  {
    countryId: 'co',
    countryHebrew: 'קולומביה',
    animal: 'קונדור',
    animalEnglish: 'Condor',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/500px-AndeanCondorMale.jpg',
    difficulty: 'medium',
    funFact: 'הקונדור הוא אחד מהציפורות הגדולות ביותר בעולם! כנפיו פרושות יכולות להגיע לרוחב של 3 מטרים.'
  },
  {
    countryId: 'pe',
    countryHebrew: 'פרו',
    animal: 'ביקוניה',
    animalEnglish: 'Vicuña',
    emoji: '🦙',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vicuna_%2889163948%29_%28cropped%29.jpg/500px-Vicuna_%2889163948%29_%28cropped%29.jpg',
    difficulty: 'medium',
    funFact: 'לביקוניה יש את הצמר הרך ביותר בעולם! בימי קדם רק מלכי האינקה הורשו ללבוש בגדים מצמרה.'
  },
  {
    countryId: 'cl',
    countryHebrew: 'צ\'ילה',
    animal: 'קונדור',
    animalEnglish: 'Condor',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/500px-AndeanCondorMale.jpg',
    difficulty: 'medium',
    funFact: 'הקונדור מסמל את חופש ורוח ההרים של האנדים. הוא יכול לעוף בגבהים של יותר מ-5,000 מטר!'
  },
  {
    countryId: 'id',
    countryHebrew: 'אינדונזיה',
    animal: 'דרקון קומודו',
    animalEnglish: 'Komodo Dragon',
    emoji: '🦎',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/202306_Varanus_komodoensis.jpg/500px-202306_Varanus_komodoensis.jpg',
    difficulty: 'medium',
    funFact: 'דרקון קומודו הוא הלטאה הגדולה ביותר בעולם! הוא יכול להגיע לאורך של 3 מטרים ולשקול 70 קילוגרם.'
  },
  {
    countryId: 'ph',
    countryHebrew: 'הפיליפינים',
    animal: 'נשר פיליפיני',
    animalEnglish: 'Philippine Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pamarayeg_IIIx2_%28cropped%29.jpg/500px-Pamarayeg_IIIx2_%28cropped%29.jpg',
    difficulty: 'medium',
    funFact: 'הנשר הפיליפיני הוא אחד הנשרים הגדולים ביותר בעולם! ראשו מעוטר בנוצות חומות כמו רעמה של אריה.'
  },
  {
    countryId: 'sg',
    countryHebrew: 'סינגפור',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'medium',
    funFact: 'שמה של סינגפור מגיע מהמילה הסנסקריטית "סינגה-פורה" שפירושה "עיר האריות"! על הסמל שלה יש יצור חצי אריה חצי דג.'
  },
  {
    countryId: 'kr',
    countryHebrew: 'דרום קוריאה',
    animal: 'נמר סיבירי',
    animalEnglish: 'Siberian Tiger',
    emoji: '🐯',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/500px-P.t.altaica_Tomak_Male.jpg',
    difficulty: 'medium',
    funFact: 'הנמר הסיבירי הופיע בסיפורים ובאגדות קוריאניות מזה אלפי שנים. בקוריאה הוא מסמל אומץ ועוצמה.'
  },
  {
    countryId: 'dk',
    countryHebrew: 'דנמרק',
    animal: 'ברבור אילם',
    animalEnglish: 'Mute Swan',
    emoji: '🦢',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/CygneVaires.jpg/500px-CygneVaires.jpg',
    difficulty: 'medium',
    funFact: 'הברבור האילם הוא אחת הציפורות הגדולות באירופה! הסופר הנס כריסטיאן אנדרסן, שהיה דני, כתב את הסיפור "אפרוח הברבור המכוער".'
  },
  {
    countryId: 'ch',
    countryHebrew: 'שווייץ',
    animal: 'פרה',
    animalEnglish: 'Cow',
    emoji: '🐄',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Holstein_Cow_in_Mont%C3%A9r%C3%A9gie%2C_Quebec.jpg/500px-Holstein_Cow_in_Mont%C3%A9r%C3%A9gie%2C_Quebec.jpg',
    difficulty: 'medium',
    funFact: 'בשווייץ יש יותר פרות מאנשים בכמה קנטונים! הפרות השווייצריות מפורסמות בחלב הטעים שלהן, ממנו מכינים שוקולד ושוויצרי.'
  },
  {
    countryId: 'ua',
    countryHebrew: 'אוקראינה',
    animal: 'זמיר',
    animalEnglish: 'Nightingale',
    emoji: '🐦',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Luscinia_megarhynchos_-_Common_nightingale_-_Nachtegaal.jpg/500px-Luscinia_megarhynchos_-_Common_nightingale_-_Nachtegaal.jpg',
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: 'על דגל אלבניה יש נשר שחור עם שתי ראשים! זה סמל עתיק מאוד שמסמל את מבט אלבניה גם מזרחה וגם מערבה.'
  },
  {
    countryId: 'be',
    countryHebrew: 'בלגיה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: 'סמל בלגיה הוא "האריה הבלגי" – אריה שחור על רקע זהב. הוא מופיע על שיריון לוחמי בלגיה כבר מהמאה ה-12.'
  },
  {
    countryId: 'bg',
    countryHebrew: 'בולגריה',
    animal: 'אריה',
    animalEnglish: 'Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: 'הסמל הלאומי של בולגריה הוא אריה זהוב על מגן כחול-אדום. האריה מסמל את עוצמת האומה הבולגרית.'
  },
  {
    countryId: 'hr',
    countryHebrew: 'קרואטיה',
    animal: 'מרטן',
    animalEnglish: 'Marten',
    emoji: '🦦',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pine_Marten_%2848173751702%29.jpg/500px-Pine_Marten_%2848173751702%29.jpg',
    difficulty: 'hard',
    funFact: 'המרטן הוא חיה זריזה ומהירה שחיה ביערות קרואטיה. שמה של מטבע קרואטיה – "קונה" – פירושו "מרטן" בקרואטית!'
  },
  {
    countryId: 'cz',
    countryHebrew: "צ'כיה",
    animal: 'אריה דו-זנבי',
    animalEnglish: 'Double-tailed Lion',
    emoji: '🦁',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: "על סמל צ'כיה יש אריה לבן מיוחד עם שני זנבות! הוא מופיע על הסמל מהמאה ה-12 ומסמל את גבורת המדינה."
  },
  {
    countryId: 'hu',
    countryHebrew: 'הונגריה',
    animal: 'תורול',
    animalEnglish: 'Turul Bird',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: 'הטורול הוא ציפור מיתולוגית הדומה לנשר גדול. לפי האגדה ההונגרית, הוא הוביל את עם הונגריה לארצם החדשה לפני יותר מאלף שנה.'
  },
  {
    countryId: 'ro',
    countryHebrew: 'רומניה',
    animal: 'לינקס',
    animalEnglish: 'Lynx',
    emoji: '🐱',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lynx_Nationalpark_Bayerischer_Wald_01.jpg/500px-Lynx_Nationalpark_Bayerischer_Wald_01.jpg',
    difficulty: 'hard',
    funFact: 'הלינקס הוא חתול בר בינוני עם אוזניים עם ציצות פרווה בקצותיהן! הוא חי ביערות הקרפטים ברומניה.'
  },
  {
    countryId: 'rs',
    countryHebrew: 'סרביה',
    animal: 'נשר לבן דו-ראשי',
    animalEnglish: 'White Double-headed Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/NZ7_5265_%2852812350718%29.jpg/500px-NZ7_5265_%2852812350718%29.jpg',
    difficulty: 'hard',
    funFact: 'על סמל סרביה יש נשר לבן עם שתי ראשות. זהו סמל עתיק שמופיע באמנות סרבית מהמאה ה-13.'
  },
  {
    countryId: 'sk',
    countryHebrew: 'סלובקיה',
    animal: 'נשר סמל לאומי',
    animalEnglish: 'Double Cross Eagle',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/500px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg',
    difficulty: 'hard',
    funFact: 'על דגל סלובקיה יש נשר לבן ועליו צלב כפול על הרים כחולים. הצלב הכפול מסמל את האמונה הנוצרית העמוקה של העם.'
  },
  {
    countryId: 'si',
    countryHebrew: 'סלובניה',
    animal: 'לינקס',
    animalEnglish: 'Lynx',
    emoji: '🐱',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lynx_Nationalpark_Bayerischer_Wald_01.jpg/500px-Lynx_Nationalpark_Bayerischer_Wald_01.jpg',
    difficulty: 'hard',
    funFact: 'הלינקס כמעט נכחד בסלובניה, אך תוכנית שימור מיוחדת הצליחה להשיבו! ימינו חיים שם עשרות לינקסים ביערות.'
  },
  {
    countryId: 'pt',
    countryHebrew: 'פורטוגל',
    animal: 'תרנגול ברסלוס',
    animalEnglish: 'Rooster of Barcelos',
    emoji: '🐓',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/PA2900302_galo_emiliarocha_medio.jpg/500px-PA2900302_galo_emiliarocha_medio.jpg',
    difficulty: 'hard',
    funFact: 'התרנגול של ברסלוס הוא הסמל המפורסם ביותר של פורטוגל! לפי האגדה, תרנגול מת קם לתחייה כדי להוכיח חפותו של אדם תמים.'
  },
  {
    countryId: 'gr',
    countryHebrew: 'יוון',
    animal: 'דולפין',
    animalEnglish: 'Dolphin',
    emoji: '🐬',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/500px-Tursiops_truncatus_01.jpg',
    difficulty: 'hard',
    funFact: 'ביוון העתיקה הדולפין היה חיה קדושה לאל אפולו! מטבעות יווניות עתיקות מלפני 2,500 שנה כבר נשאו תמונות של דולפינים.'
  },
  {
    countryId: 'is',
    countryHebrew: 'איסלנד',
    animal: 'ג\'ירפלקון',
    animalEnglish: 'Gyrfalcon',
    emoji: '🦅',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falco_rusticolus_white_cropped.jpg/500px-Falco_rusticolus_white_cropped.jpg',
    difficulty: 'hard',
    funFact: "הג'ירפלקון הוא הנץ הגדול ביותר בעולם! הוא גר בצפון הקפוא של איסלנד ויכול לטוס במהירות של 200 קמ\"ש."
  },
  {
    countryId: 'ie',
    countryHebrew: 'אירלנד',
    animal: 'צבי אדום',
    animalEnglish: 'Red Deer',
    emoji: '🦌',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/500px-Cervus_elaphus_Luc_Viatour_6.jpg',
    difficulty: 'hard',
    funFact: 'הצבי האדום הוא הממלה הגדולה ביותר באירלנד! הזכר מגדל קרניים ענקיות שהוא משיל ומחדש בכל שנה.'
  },
  {
    countryId: 'gb-sct',
    countryHebrew: 'סקוטלנד',
    animal: 'חד-קרן',
    animalEnglish: 'Unicorn',
    emoji: '🦄',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Unicorn_Outside_the_Scottish_National_War_Memorial_%286271810448%29.jpg/500px-Unicorn_Outside_the_Scottish_National_War_Memorial_%286271810448%29.jpg',
    difficulty: 'hard',
    funFact: 'החד-קרן הוא חיה מיתולוגית – הסמל הלאומי של סקוטלנד! הסקוטים האמינו שהחד-קרן הוא היצור החזק ביותר בעולם, אפילו יותר מהאריה.'
  },
  {
    countryId: 'jo',
    countryHebrew: 'ירדן',
    animal: 'אוריקס ערבי',
    animalEnglish: 'Arabian Oryx',
    emoji: '🦌',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/500px-Arabian_oryx_%28oryx_leucoryx%29.jpg',
    difficulty: 'hard',
    funFact: 'האוריקס הערבי כמעט נכחד לגמרי! הודות לתוכניות שימור בירדן ובמדינות שכנות הוא הוחזר לטבע. ייתכן שהוא מקור האגדה על החד-קרן!'
  },
  {
    countryId: 'sa',
    countryHebrew: 'ערב הסעודית',
    animal: 'גמל ערבי',
    animalEnglish: 'Arabian Camel',
    emoji: '🐪',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Camelus_dromedarius_in_Nuweiba.jpg/500px-Camelus_dromedarius_in_Nuweiba.jpg',
    difficulty: 'hard',
    funFact: 'הגמל הערבי יכול לשתות 130 ליטר מים בבת אחת! הוא שומר שומן בדבשת שלו – לא מים כפי שרבים חושבים.'
  },
  {
    countryId: 'vn',
    countryHebrew: 'וייטנאם',
    animal: 'בופלו מים',
    animalEnglish: 'Water Buffalo',
    emoji: '🐃',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Water_buffalo_at_Rinca.jpg/500px-Water_buffalo_at_Rinca.jpg',
    difficulty: 'hard',
    funFact: 'בופלו המים עזר לחקלאים הווייטנאמים לעבד שדות אורז כבר אלפי שנים! הוא נחשב לחיה חיונית ולסמל עבודה קשה.'
  },
  {
    countryId: 'mm',
    countryHebrew: 'מיאנמר',
    animal: 'נמר',
    animalEnglish: 'Tiger',
    emoji: '🐯',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/500px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg',
    difficulty: 'hard',
    funFact: 'הנמר מופיע על סמל מיאנמר ומסמל אומץ וכוח! ביערות מיאנמר חיים עדיין נמרי בנגל בטבע, אם כי מספרם הולך ופוחת.'
  },
  {
    countryId: 'bo',
    countryHebrew: 'בוליביה',
    animal: 'ליאמה',
    animalEnglish: 'Llama',
    emoji: '🦙',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Llamas%2C_Vernagt-Stausee%2C_Italy.jpg/500px-Llamas%2C_Vernagt-Stausee%2C_Italy.jpg',
    difficulty: 'hard',
    funFact: 'הליאמה חיה בהרי האנדים הגבוהים ומשמשת בני אדם כבר 5,000 שנה! היא נושאת עומסים, נותנת צמר ולא צריכה הרבה מים.'
  },
];
