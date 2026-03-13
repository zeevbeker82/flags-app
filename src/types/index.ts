export type Continent = 'europe' | 'asia' | 'africa' | 'north-america' | 'south-america' | 'oceania';

export interface Country {
  id: string;
  nameHebrew: string;
  nameEnglish: string;
  capital: string;
  continent: Continent;
  flagUrl: string;
  population?: number;
  funFact?: string;
}

export interface Progress {
  learnedCountries: string[];
  quizScores: Record<string, number>;
  totalPoints: number;
  level: string;
  achievements: string[];
  streakDays: number;
  lastPlayed: string;
  starredCountries: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (progress: Progress) => boolean;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  country: Country;
  options: Country[];
  type: 'flag-to-name' | 'name-to-flag' | 'capital' | 'continent';
}

export interface MemoryCard {
  id: string;
  countryId: string;
  type: 'flag' | 'name';
  country: Country;
  isFlipped: boolean;
  isMatched: boolean;
}
