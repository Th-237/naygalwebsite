export type StudyDomain = 'it' | 'engineering' | 'business' | 'creative' | 'other'

export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
}

export type StoredQuizQuestion = QuizQuestion & {
  answer: number
}
