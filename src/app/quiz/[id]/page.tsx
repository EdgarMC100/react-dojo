import { notFound } from "next/navigation"
import { quizIndex, allQuizzes } from "@/content/quiz"
import { QuizPage } from "@/components/QuizPage"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return allQuizzes.map((q) => ({ id: q.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const quiz = quizIndex[id]
  if (!quiz) return {}
  return { title: quiz.label }
}

export default async function QuizRoute({ params }: Props) {
  const { id } = await params
  const quiz = quizIndex[id]
  if (!quiz) notFound()

  return <QuizPage quiz={quiz} />
}
