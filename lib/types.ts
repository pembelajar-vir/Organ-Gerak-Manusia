export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Menantang';

export interface Question {
  id: number;
  levelId: 1 | 2 | 3 | 4;
  levelTitle: string;
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  hint: string;
  category: string;
  funFact?: string;
}

export interface LevelConfig {
  id: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  difficulty: DifficultyLevel;
  badge: string;
  color: string;
  bgLight: string;
  borderLight: string;
  textColor: string;
  iconName: string;
  range: [number, number]; // e.g. [1, 25]
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  accuracy: number;
  levelId: number | 'all';
  levelName: string;
  badge: string;
  date: string;
  streak: number;
}

export interface DeveloperInfo {
  name: string;
  nip: string;
  unitKerja: string;
  email: string;
  photoUrl: string;
  role: string;
}
