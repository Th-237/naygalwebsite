export type StudyDomain = 'it' | 'engineering' | 'business' | 'creative' | 'other'

export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
}

export type StoredQuizQuestion = QuizQuestion & {
  answer: number
}

export type AttemptRecord = {
  at: number
  score: number
  passed: boolean
}

export type PassAcadMember = {
  email: string | null
  failedAttempts: number
  lockedUntil: number | null
  passed: boolean
  lastScore: number | null
  lastAttemptAt: number | null
  attemptHistory: AttemptRecord[]
  activeQuiz: {
    id: string
    domain: StudyDomain
    expiresAt: number
    questions: StoredQuizQuestion[]
  } | null
  updatedAt: number
}
