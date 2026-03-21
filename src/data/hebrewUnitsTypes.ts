// ============================================================
// Types for Hebrew Practice Units (תרגול עברית)
// Based on Ofek/CET platform 2nd grade Hebrew curriculum
// ============================================================

export type UnitCategory =
  | 'דקדוק'
  | 'אוצר מילים'
  | 'חגים ומועדים'
  | 'קריאה והבנה'
  | 'שטף קריאה'
  | 'כתיבה'
  | 'ספרות ואגדות'
  | 'ערכים חברתיים'
  | 'הבנת הנשמע';

export interface LearnCard {
  emoji: string;
  title: string;       // short heading (2-5 words)
  content: string;     // main explanation (1-3 sentences)
  example?: string;    // optional example sentence/word
}

export interface UnitQuestion {
  question: string;
  options: string[];   // exactly 4 options
  correctIndex: number;
  explanation: string; // shown after answering
}

export interface HebrewUnit {
  id: string;           // e.g. 'unit-01'
  number: number;       // 1-78
  title: string;        // Hebrew title (with nikud if needed)
  emoji: string;        // representative emoji
  category: UnitCategory;
  duration: number;     // minutes (from Ofek catalog)
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;  // 1-2 sentences about what this unit covers
  learnCards: LearnCard[];   // 3-5 cards
  questions: UnitQuestion[]; // 3-5 questions
}

// Category metadata
export const UNIT_CATEGORIES: Record<UnitCategory, { emoji: string; color: string; bg: string; border: string; description: string }> = {
  'דקדוק':            { emoji: '📖', color: 'text-blue-700',   bg: 'bg-blue-100',   border: 'border-blue-300',  description: 'חוקי שפה, מילות שאלה, זכר ונקבה' },
  'אוצר מילים':       { emoji: '📝', color: 'text-green-700',  bg: 'bg-green-100',  border: 'border-green-300', description: 'מילים נרדפות, הפכים, משפחות מילים' },
  'חגים ומועדים':     { emoji: '🎉', color: 'text-purple-700', bg: 'bg-purple-100', border: 'border-purple-300',description: 'חגים, מנהגים וסמלים' },
  'קריאה והבנה':      { emoji: '📰', color: 'text-amber-700',  bg: 'bg-amber-100',  border: 'border-amber-300', description: 'הבנת טקסטים מגוונים' },
  'שטף קריאה':        { emoji: '⚡', color: 'text-cyan-700',   bg: 'bg-cyan-100',   border: 'border-cyan-300',  description: 'תרגול קריאה שוטפת' },
  'כתיבה':            { emoji: '✏️', color: 'text-orange-700', bg: 'bg-orange-100', border: 'border-orange-300',description: 'כתיבה יוצרת ותפקודית' },
  'ספרות ואגדות':     { emoji: '📚', color: 'text-rose-700',   bg: 'bg-rose-100',   border: 'border-rose-300',  description: 'סיפורים, אגדות ומשלים' },
  'ערכים חברתיים':    { emoji: '🌟', color: 'text-teal-700',   bg: 'bg-teal-100',   border: 'border-teal-300',  description: 'ערכים, חברות ואחריות' },
  'הבנת הנשמע':       { emoji: '👂', color: 'text-indigo-700', bg: 'bg-indigo-100', border: 'border-indigo-300',description: 'הקשבה והבנה' },
};
