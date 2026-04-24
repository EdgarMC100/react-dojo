import { notFound } from "next/navigation"
import { exerciseIndex, allExercises } from "@/content/exercises"
import { ExercisePage } from "@/components/ExercisePage"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ exercise: string }>
}

export async function generateStaticParams() {
  return allExercises.map((e) => ({ exercise: e.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exercise: id } = await params
  const exercise = exerciseIndex[id]
  if (!exercise) return {}
  return { title: exercise.label }
}

export default async function ExerciseRoute({ params }: Props) {
  const { exercise: id } = await params
  const exercise = exerciseIndex[id]
  if (!exercise) notFound()

  const idx = allExercises.findIndex((e) => e.id === id)
  const prev = idx > 0 ? allExercises[idx - 1] : undefined
  const next = idx < allExercises.length - 1 ? allExercises[idx + 1] : undefined

  return <ExercisePage exercise={exercise} prev={prev} next={next} />
}
