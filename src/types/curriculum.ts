export type Board = "WAEC" | "NECO" | "JAMB";

export interface CurriculumUnit {
  id: string;
  title: string;
  objectives: string[];
  topics: string[];
  pastQuestions?: PastQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  category: SubjectCategory;
  boards: Board[];
  units: CurriculumUnit[];
  formulaSheet?: string[];
}

export type SubjectCategory =
  | "Sciences & Tech"
  | "Commercial & Business"
  | "Arts & Humanities"
  | "General / Compulsory"
  | "Vocational & Technical";

export interface PastQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  year: number;
  board: Board;
}

export interface UserExamProfile {
  board: Board;
  candidateId: string;
  registrationNumber: string;
  savedTopics: string[];
  testScores: TestScore[];
  syllabusCoverage: Record<string, number>;
}

export interface TestScore {
  subjectId: string;
  score: number;
  total: number;
  date: string;
  timeTaken: number;
}

export interface CBTSession {
  subjectId: string;
  questions: PastQuestion[];
  currentIndex: number;
  answers: Record<number, number>;
  startTime: number;
  timerRunning: boolean;
  isComplete: boolean;
}
