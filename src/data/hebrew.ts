export interface HebrewQuestion {
  id: string;
  category: 'דקדוק' | 'אוצר מילים' | 'חגים' | 'סיפורים' | 'אלף-בית';
  categoryEmoji: string;
  question: string;
  emoji: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const hebrewQuestions: HebrewQuestion[] = [

  // ══════════════════════════════════════════════════
  // דקדוק — הפכים (Opposites)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-01',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "גדול"?',
    emoji: '🔵',
    options: ['קטן', 'רחוק', 'מהיר', 'ישן'],
    correctIndex: 0,
    explanation: 'ההפך של גדול הוא קטן! גדול ↔ קטן.',
    difficulty: 'easy',
  },
  {
    id: 'heb-02',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "שמח"?',
    emoji: '😊',
    options: ['עצוב', 'כועס', 'עייף', 'חולה'],
    correctIndex: 0,
    explanation: 'ההפך של שמח הוא עצוב! שמח ↔ עצוב.',
    difficulty: 'easy',
  },
  {
    id: 'heb-03',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "חם"?',
    emoji: '🌡️',
    options: ['קר', 'לח', 'חשוך', 'מהיר'],
    correctIndex: 0,
    explanation: 'ההפך של חם הוא קר! חם ↔ קר.',
    difficulty: 'easy',
  },
  {
    id: 'heb-04',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "מהיר"?',
    emoji: '🐢',
    options: ['איטי', 'חלש', 'רך', 'ישן'],
    correctIndex: 0,
    explanation: 'ההפך של מהיר הוא איטי! מהיר ↔ איטי.',
    difficulty: 'easy',
  },
  {
    id: 'heb-05',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "גבוה"?',
    emoji: '📏',
    options: ['נמוך', 'קצר', 'רחוק', 'כבד'],
    correctIndex: 0,
    explanation: 'ההפך של גבוה הוא נמוך! גבוה ↔ נמוך.',
    difficulty: 'easy',
  },
  {
    id: 'heb-06',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "יום"?',
    emoji: '🌙',
    options: ['לילה', 'שמש', 'ירח', 'ענן'],
    correctIndex: 0,
    explanation: 'ההפך של יום הוא לילה! יום ↔ לילה.',
    difficulty: 'easy',
  },
  {
    id: 'heb-07',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "קל"?',
    emoji: '🏋️',
    options: ['כבד', 'ארוך', 'קשה', 'רחוק'],
    correctIndex: 0,
    explanation: 'ההפך של קל הוא כבד! קל ↔ כבד.',
    difficulty: 'easy',
  },
  {
    id: 'heb-08',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "ישן"?',
    emoji: '✨',
    options: ['חדש', 'נקי', 'שמח', 'גדול'],
    correctIndex: 0,
    explanation: 'ההפך של ישן הוא חדש! ישן ↔ חדש.',
    difficulty: 'easy',
  },
  {
    id: 'heb-09',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "אור"?',
    emoji: '🌑',
    options: ['חושך', 'גשם', 'שמש', 'רוח'],
    correctIndex: 0,
    explanation: 'ההפך של אור הוא חושך! אור ↔ חושך.',
    difficulty: 'easy',
  },
  {
    id: 'heb-10',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה ההפך של "קצר"?',
    emoji: '↔️',
    options: ['ארוך', 'גבוה', 'רחב', 'כבד'],
    correctIndex: 0,
    explanation: 'ההפך של קצר הוא ארוך! קצר ↔ ארוך.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // דקדוק — יחיד ורבים (Singular & Plural)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-11',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה הרבים של "ילד"?',
    emoji: '👦',
    options: ['ילדים', 'ילדות', 'ילדין', 'ילדנים'],
    correctIndex: 0,
    explanation: 'הרבים של ילד הוא ילדים! ילד ← ילדים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-12',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה הרבים של "חציל"?',
    emoji: '🍆',
    options: ['חצילים', 'חציליות', 'חצלים', 'חצילות'],
    correctIndex: 0,
    explanation: 'הרבים של חציל הוא חצילים! חציל ← חצילים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-13',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה הרבים של "כדור"?',
    emoji: '⚽',
    options: ['כדורים', 'כדורות', 'כדורין', 'כדוריות'],
    correctIndex: 0,
    explanation: 'הרבים של כדור הוא כדורים! כדור ← כדורים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-14',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה הרבים של "ספר"?',
    emoji: '📚',
    options: ['ספרים', 'ספרות', 'ספרין', 'ספרנים'],
    correctIndex: 0,
    explanation: 'הרבים של ספר הוא ספרים! ספר ← ספרים.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // דקדוק — זכר ונקבה (Gender)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-15',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה מין המילה "ילדה"?',
    emoji: '👧',
    options: ['נקבה', 'זכר', 'ניטרלי', 'כפול'],
    correctIndex: 0,
    explanation: 'ילדה היא מין נקבה! מילות נקבה לרוב מסתיימות ב-ה.',
    difficulty: 'easy',
  },
  {
    id: 'heb-16',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה מין המילה "ארון"?',
    emoji: '🪵',
    options: ['זכר', 'נקבה', 'שניהם', 'ניטרלי'],
    correctIndex: 0,
    explanation: 'ארון הוא מין זכר! הארון הגדול (לא הגדולה).',
    difficulty: 'medium',
  },
  {
    id: 'heb-17',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'מה מין המילה "מחברת"?',
    emoji: '📓',
    options: ['נקבה', 'זכר', 'שניהם', 'ניטרלי'],
    correctIndex: 0,
    explanation: 'מחברת היא מין נקבה! המחברת הגדולה (לא הגדול).',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // דקדוק — שמות עצם ושמות תואר
  // ══════════════════════════════════════════════════
  {
    id: 'heb-18',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'שם עצם מתאר דברים שאפשר לקלוט ב...?',
    emoji: '👃',
    options: ['חושים', 'שיניים', 'מחברת', 'מחשב'],
    correctIndex: 0,
    explanation: 'שם עצם מתאר דברים שאפשר לקלוט בחושים (לראות, לשמוע, לטעום, למשמש, להריח) וגם דברים שמרגישים כמו "אושר".',
    difficulty: 'medium',
  },
  {
    id: 'heb-19',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'איזו מילה היא שם עצם?',
    emoji: '🏷️',
    options: ['שמחה', 'רץ', 'גדול', 'מהר'],
    correctIndex: 0,
    explanation: 'שמחה היא שם עצם — היא מתארת רגש שאפשר להרגיש. "רץ" הוא פועל, "גדול" שם תואר, "מהר" תואר הפועל.',
    difficulty: 'medium',
  },
  {
    id: 'heb-20',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: 'איזו מילה היא שם תואר?',
    emoji: '🎨',
    options: ['גדול', 'שמחה', 'ריצה', 'מהר'],
    correctIndex: 0,
    explanation: 'גדול הוא שם תואר — הוא מתאר איך דבר נראה או מרגיש.',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // דקדוק — מילות שאלה
  // ══════════════════════════════════════════════════
  {
    id: 'heb-21',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: '"למה?" שואלים כשרוצים לדעת...',
    emoji: '❓',
    options: ['סיבה', 'מקום', 'זמן', 'מספר'],
    correctIndex: 0,
    explanation: '"למה?" שואלים לגלות את הסיבה! למשל: למה אתה בוכה?',
    difficulty: 'easy',
  },
  {
    id: 'heb-22',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: '"איפה?" שואלים כשרוצים לדעת...',
    emoji: '📍',
    options: ['מקום', 'זמן', 'סיבה', 'מספר'],
    correctIndex: 0,
    explanation: '"איפה?" שואלים לגלות את המקום! למשל: איפה המשקפיים שלי?',
    difficulty: 'easy',
  },
  {
    id: 'heb-23',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: '"מתי?" שואלים כשרוצים לדעת...',
    emoji: '⏰',
    options: ['זמן', 'מקום', 'סיבה', 'מספר'],
    correctIndex: 0,
    explanation: '"מתי?" שואלים לגלות את הזמן! למשל: מתי מתחיל הסרט?',
    difficulty: 'easy',
  },
  {
    id: 'heb-24',
    category: 'דקדוק',
    categoryEmoji: '📖',
    question: '"מי?" שואלים כשרוצים לדעת...',
    emoji: '🙋',
    options: ['אדם', 'מקום', 'זמן', 'חפץ'],
    correctIndex: 0,
    explanation: '"מי?" שואלים לגלות על אדם! למשל: מי הוא הילד הכי גבוה בכיתה?',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // אוצר מילים — מילים נרדפות (Synonyms)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-25',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה נרדפת ל"שמח"?',
    emoji: '😄',
    options: ['עליז', 'עצוב', 'כועס', 'עייף'],
    correctIndex: 0,
    explanation: 'עליז היא מילה נרדפת לשמח! שתי המילות אומרות אותו דבר.',
    difficulty: 'easy',
  },
  {
    id: 'heb-26',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה נרדפת ל"מהיר"?',
    emoji: '⚡',
    options: ['זריז', 'איטי', 'חלש', 'עייף'],
    correctIndex: 0,
    explanation: 'זריז היא מילה נרדפת למהיר! שתי המילות אומרות אותו דבר.',
    difficulty: 'easy',
  },
  {
    id: 'heb-27',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה נרדפת ל"יפה"?',
    emoji: '🌸',
    options: ['נאה', 'מכוער', 'קטן', 'ישן'],
    correctIndex: 0,
    explanation: 'נאה היא מילה נרדפת ליפה! שתי המילות אומרות אותו דבר.',
    difficulty: 'medium',
  },
  {
    id: 'heb-28',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה נרדפת ל"הלך"?',
    emoji: '🚶',
    options: ['צעד', 'ישב', 'ישן', 'אכל'],
    correctIndex: 0,
    explanation: 'צעד היא מילה נרדפת להלך! שתי המילות מתארות תנועה ברגל.',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // אוצר מילים — משפחות מילים (Word Families)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-29',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה שייכת למשפחת המילה "ספר"?',
    emoji: '📚',
    options: ['ספרייה', 'בית', 'עיפרון', 'כיסא'],
    correctIndex: 0,
    explanation: 'ספרייה שייכת למשפחת המילה ספר! גם "לספר", "מספר", "ספרן" שייכים לאותה משפחה.',
    difficulty: 'medium',
  },
  {
    id: 'heb-30',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה שייכת למשפחת המילה "בישול"?',
    emoji: '🍳',
    options: ['לבשל', 'לשתות', 'לקרוא', 'לרוץ'],
    correctIndex: 0,
    explanation: 'לבשל שייכת למשפחת המילה בישול! גם "מבשל", "מטבח", "מתכון" שייכים למשפחה.',
    difficulty: 'medium',
  },
  {
    id: 'heb-31',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה מילה שייכת למשפחת המילה "לימוד"?',
    emoji: '🎓',
    options: ['ללמוד', 'לאכול', 'לשחק', 'לישון'],
    correctIndex: 0,
    explanation: 'ללמוד שייכת למשפחת המילה לימוד! גם "ילמד", "למדן", "לומד" שייכים.',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // אלף-בית (Alphabet)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-32',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'מה האות שאחרי "ג"?',
    emoji: '🔤',
    options: ['ד', 'ה', 'ו', 'ב'],
    correctIndex: 0,
    explanation: 'סדר האלף-בית: א, ב, ג, ד, ה... האות אחרי ג היא ד!',
    difficulty: 'easy',
  },
  {
    id: 'heb-33',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'מה האות שאחרי "ל"?',
    emoji: '🔤',
    options: ['מ', 'נ', 'כ', 'ס'],
    correctIndex: 0,
    explanation: 'סדר האלף-בית: ...כ, ל, מ, נ... האות אחרי ל היא מ!',
    difficulty: 'easy',
  },
  {
    id: 'heb-34',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'כמה אותיות יש באלף-בית העברי?',
    emoji: '🔢',
    options: ['22', '20', '26', '24'],
    correctIndex: 0,
    explanation: 'באלף-בית העברי יש 22 אותיות, מ-א ועד ת!',
    difficulty: 'medium',
  },
  {
    id: 'heb-35',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'איזו מילה באה ראשונה בסדר האלף-בית?',
    emoji: '🅰️',
    options: ['אבא', 'בית', 'גג', 'דלת'],
    correctIndex: 0,
    explanation: 'אבא מתחילה ב-א, שהיא האות הראשונה באלף-בית!',
    difficulty: 'easy',
  },
  {
    id: 'heb-36',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'איזו מילה באה אחרונה בסדר האלף-בית?',
    emoji: '🔡',
    options: ['תפוח', 'שמש', 'רוח', 'קשת'],
    correctIndex: 0,
    explanation: 'תפוח מתחילה ב-ת, שהיא האות האחרונה באלף-בית!',
    difficulty: 'easy',
  },
  {
    id: 'heb-37',
    category: 'אלף-בית',
    categoryEmoji: '🔤',
    question: 'מה שם האות הראשונה באלף-בית?',
    emoji: '✡️',
    options: ['אלף', 'בית', 'גימל', 'דלת'],
    correctIndex: 0,
    explanation: 'האות הראשונה היא א, ושמה "אלף"! מכאן השם "אלף-בית".',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — ראש השנה
  // ══════════════════════════════════════════════════
  {
    id: 'heb-38',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה אוכלים בראש השנה כדי שהשנה תהיה מתוקה?',
    emoji: '🍎',
    options: ['תפוח בדבש', 'עוגת שוקולד', 'גלידה', 'פיצה'],
    correctIndex: 0,
    explanation: 'בראש השנה אוכלים תפוח בדבש כדי שהשנה החדשה תהיה מתוקה!',
    difficulty: 'easy',
  },
  {
    id: 'heb-39',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה תוקעים בראש השנה?',
    emoji: '🎺',
    options: ['שופר', 'חצוצרה', 'תוף', 'גיטרה'],
    correctIndex: 0,
    explanation: 'בראש השנה תוקעים בשופר! השופר עשוי מקרן של איל.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — סוכות
  // ══════════════════════════════════════════════════
  {
    id: 'heb-40',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה בונים בחג סוכות?',
    emoji: '🌿',
    options: ['סוכה', 'ביתן', 'אוהל', 'מגדל'],
    correctIndex: 0,
    explanation: 'בסוכות בונים סוכה! יושבים ואוכלים בה כל שבעת ימי החג.',
    difficulty: 'easy',
  },
  {
    id: 'heb-41',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה אחד מארבעת המינים בחג סוכות?',
    emoji: '🌴',
    options: ['לולב', 'שופר', 'חמצה', 'מנורה'],
    correctIndex: 0,
    explanation: 'הלולב הוא אחד מארבעת המינים! ארבעת המינים: לולב, הדס, ערבה ואתרוג.',
    difficulty: 'medium',
  },
  {
    id: 'heb-42',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'כמה מינים יש ב"ארבעת המינים"?',
    emoji: '🌱',
    options: ['4', '3', '5', '7'],
    correctIndex: 0,
    explanation: 'ארבעת המינים הם: לולב, הדס, ערבה ואתרוג — בסך הכל 4!',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — חנוכה
  // ══════════════════════════════════════════════════
  {
    id: 'heb-43',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'כמה ימים נמשך חג חנוכה?',
    emoji: '🕎',
    options: ['8 ימים', '7 ימים', '5 ימים', '10 ימים'],
    correctIndex: 0,
    explanation: 'חנוכה נמשכת 8 ימים! מדליקים נר אחד יותר בכל לילה.',
    difficulty: 'easy',
  },
  {
    id: 'heb-44',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה אוכלים בחנוכה?',
    emoji: '🍩',
    options: ['לביבות וסופגניות', 'מצות', 'חלה', 'אוזני המן'],
    correctIndex: 0,
    explanation: 'בחנוכה אוכלים לביבות וסופגניות שמכינים בשמן, לזכר נס שמן המנורה!',
    difficulty: 'easy',
  },
  {
    id: 'heb-45',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה מסמלות האותיות על הסביבון בחנוכה?',
    emoji: '🌀',
    options: ['נס גדול היה פה', 'נס גדול הופיע פתאום', 'נחנוך גדול הופיע פה', 'נצחנו גדולים הפעם'],
    correctIndex: 0,
    explanation: 'האותיות נ.ג.ה.פ על הסביבון = "נס גדול היה פה"!',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // חגים — פורים
  // ══════════════════════════════════════════════════
  {
    id: 'heb-46',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה לובשים בפורים?',
    emoji: '🎭',
    options: ['תחפושות', 'מדים', 'בגדי שבת', 'בגדי ים'],
    correctIndex: 0,
    explanation: 'בפורים לובשים תחפושות! זה חלק מהשמחה של החג.',
    difficulty: 'easy',
  },
  {
    id: 'heb-47',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה קוראים בחג פורים?',
    emoji: '📜',
    options: ['מגילת אסתר', 'ספר תורה', 'תהילים', 'הגדה'],
    correctIndex: 0,
    explanation: 'בפורים קוראים את מגילת אסתר — שמספרת את סיפור ניצחון היהודים!',
    difficulty: 'easy',
  },
  {
    id: 'heb-48',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה אוכלים בפורים?',
    emoji: '🥠',
    options: ['אוזני המן', 'מצות', 'סופגניות', 'תפוח בדבש'],
    correctIndex: 0,
    explanation: 'בפורים אוכלים "אוזני המן" — עוגיות בצורת משולש ממולאות!',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — פסח
  // ══════════════════════════════════════════════════
  {
    id: 'heb-49',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה לא אוכלים בחג הפסח?',
    emoji: '🍞',
    options: ['חמץ', 'ירקות', 'פירות', 'בשר'],
    correctIndex: 0,
    explanation: 'בפסח לא אוכלים חמץ (לחם רגיל)! במקום אוכלים מצה.',
    difficulty: 'easy',
  },
  {
    id: 'heb-50',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה אוכלים במקום לחם בחג הפסח?',
    emoji: '🫓',
    options: ['מצה', 'פיתה', 'לחם שיפון', 'בייגל'],
    correctIndex: 0,
    explanation: 'בפסח אוכלים מצה! מצה היא לחם שטוח שנאפה בלי שמרים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-51',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה קוראים בליל הסדר?',
    emoji: '📖',
    options: ['הגדה', 'מגילה', 'תורה', 'תהילים'],
    correctIndex: 0,
    explanation: 'בליל הסדר קוראים את ההגדה! ההגדה מספרת את סיפור יציאת מצרים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-52',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מי יוצא ממצרים בחג הפסח?',
    emoji: '🏜️',
    options: ['עם ישראל', 'הפרעה', 'המצרים', 'הנחשים'],
    correctIndex: 0,
    explanation: 'בפסח חוגגים את יציאת עם ישראל ממצרים! זה קרה לפני יותר מ-3,000 שנה.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — ל"ג בעומר
  // ══════════════════════════════════════════════════
  {
    id: 'heb-53',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה מדליקים בחג ל"ג בעומר?',
    emoji: '🔥',
    options: ['מדורות', 'נרות', 'חנוכייה', 'אבוקות'],
    correctIndex: 0,
    explanation: 'בל"ג בעומר מדליקים מדורות! ילדים מתכנסים סביב האש ושרים.',
    difficulty: 'easy',
  },
  {
    id: 'heb-54',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'ל"ג בעומר קשור לרבי...',
    emoji: '⭐',
    options: ['שמעון בר יוחאי', 'עקיבא בן יוסף', 'יהודה הנשיא', 'הלל הזקן'],
    correctIndex: 0,
    explanation: 'ל"ג בעומר קשור לרבי שמעון בר יוחאי, שחי בזמן הרומאים!',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // חגים — יום כיפור
  // ══════════════════════════════════════════════════
  {
    id: 'heb-55',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה עושים ביום כיפור?',
    emoji: '🙏',
    options: ['מתפללים ומתצומים', 'מדליקים נרות', 'אוכלים מצות', 'לובשים תחפושות'],
    correctIndex: 0,
    explanation: 'ביום כיפור מתפללים ומתצומים (לא אוכלים ולא שותים)! זה יום של סליחה וכפרה.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // חגים — חג הסיגד ויום העצמאות
  // ══════════════════════════════════════════════════
  {
    id: 'heb-56',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'חג הסיגד הוא חג של יהודי...',
    emoji: '🌍',
    options: ['אתיופיה', 'מרוקו', 'תימן', 'ספרד'],
    correctIndex: 0,
    explanation: 'חג הסיגד הוא חג של יהודי אתיופיה (ביתא ישראל)! הוא חל 50 יום אחרי יום כיפור.',
    difficulty: 'hard',
  },
  {
    id: 'heb-57',
    category: 'חגים',
    categoryEmoji: '🎉',
    question: 'מה חוגגים ביום העצמאות?',
    emoji: '🇮🇱',
    options: ['יום הולדת מדינת ישראל', 'ניצחון על הרומאים', 'יציאת מצרים', 'בניית המקדש'],
    correctIndex: 0,
    explanation: 'ביום העצמאות חוגגים את הקמת מדינת ישראל! ב-5 באייר 1948 הוכרזה המדינה.',
    difficulty: 'easy',
  },

  // ══════════════════════════════════════════════════
  // סיפורים ואגדות (Stories & Fables)
  // ══════════════════════════════════════════════════
  {
    id: 'heb-58',
    category: 'סיפורים',
    categoryEmoji: '📚',
    question: 'בסיפור "האריה והעכבר", מי עוזר לאריה?',
    emoji: '🦁',
    options: ['העכבר', 'הנמר', 'האיש', 'הדב'],
    correctIndex: 0,
    explanation: 'העכבר עוזר לאריה על ידי כך שמכרסם את הרשת! המוסר: גם הקטן יכול לעזור לגדול.',
    difficulty: 'easy',
  },
  {
    id: 'heb-59',
    category: 'סיפורים',
    categoryEmoji: '📚',
    question: 'מה המוסר של "האריה והעכבר"?',
    emoji: '🐭',
    options: ['גם החלש יכול לעזור לחזק', 'תמיד תנוח אחרי ארוחה', 'אל תישן ביער', 'חזק תמיד מנצח'],
    correctIndex: 0,
    explanation: 'המוסר: גם החלש יכול לעזור לחזק! אף פעם אל תגיד "אני קטן מדי לעזור".',
    difficulty: 'medium',
  },
  {
    id: 'heb-60',
    category: 'סיפורים',
    categoryEmoji: '📚',
    question: 'בסיפור "ג\'וחא שואל קדרה" — מה ג\'וחא שואל מהשכן?',
    emoji: '🫕',
    options: ['סיר (קדרה)', 'ספר', 'כסף', 'בגד'],
    correctIndex: 0,
    explanation: 'ג\'וחא שואל סיר (קדרה) מהשכן! בסוף הוא מחזיר קדרה גדולה וטוען שהקדרה "ילדה ילד".',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════
  // אוצר מילים — ידע כללי על שפה
  // ══════════════════════════════════════════════════
  {
    id: 'heb-61',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: '"גזר אפשר לראות, לטעום ולמשמש" — גזר הוא...',
    emoji: '🥕',
    options: ['שם עצם', 'שם תואר', 'פועל', 'מילת שאלה'],
    correctIndex: 0,
    explanation: 'גזר הוא שם עצם! הוא דבר שאפשר לקלוט בחושים (לראות, לטעום, למשמש).',
    difficulty: 'medium',
  },
  {
    id: 'heb-62',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: '"אושר" הוא שם עצם שמתאר...',
    emoji: '💛',
    options: ['רגש שמרגישים', 'דבר שרואים', 'צמח שאוכלים', 'בעל חיים'],
    correctIndex: 0,
    explanation: '"אושר" הוא שם עצם של רגש שמרגישים! גם "שמחה", "עצב" ו"אהבה" הם שמות עצם של רגשות.',
    difficulty: 'medium',
  },
  {
    id: 'heb-63',
    category: 'אוצר מילים',
    categoryEmoji: '📝',
    question: 'מה ההבדל בין "ענק" ל"גדול"?',
    emoji: '🔍',
    options: ['ענק גדול יותר מגדול', 'הן אותה מילה בדיוק', 'גדול גדול יותר מענק', 'אין הבדל כלל'],
    correctIndex: 0,
    explanation: 'ענק גדול יותר מגדול! ענק ◁ גדול ◁ קטן. הן מילות דרגה שונות של גודל.',
    difficulty: 'hard',
  },
];

// Helper: filter by category
export function getQuestionsByCategory(category: HebrewQuestion['category']): HebrewQuestion[] {
  return hebrewQuestions.filter(q => q.category === category);
}

// Helper: filter by difficulty
export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard' | 'all'): HebrewQuestion[] {
  if (difficulty === 'all') return hebrewQuestions;
  if (difficulty === 'easy') return hebrewQuestions.filter(q => q.difficulty === 'easy');
  if (difficulty === 'medium') return hebrewQuestions.filter(q => q.difficulty !== 'hard');
  return hebrewQuestions;
}

export const CATEGORIES: { id: HebrewQuestion['category']; emoji: string; color: string; description: string }[] = [
  { id: 'דקדוק', emoji: '📖', color: 'blue', description: 'הפכים, יחיד ורבים, זכר ונקבה, שאלות' },
  { id: 'אוצר מילים', emoji: '📝', color: 'green', description: 'מילים נרדפות, משפחות מילים' },
  { id: 'חגים', emoji: '🎉', color: 'purple', description: 'חגים, מנהגים וסמלים' },
  { id: 'אלף-בית', emoji: '🔤', color: 'orange', description: 'סדר אלף-בית, שמות אותיות' },
  { id: 'סיפורים', emoji: '📚', color: 'pink', description: 'אגדות וסיפורים ידועים' },
];
