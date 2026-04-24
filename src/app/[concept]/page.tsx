import { notFound } from "next/navigation"
import { conceptIndex, allConcepts } from "@/content/concepts"
import { ConceptPage } from "@/components/ConceptPage"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ concept: string }>
}

export async function generateStaticParams() {
  return allConcepts.map((c) => ({ concept: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { concept: id } = await params
  const concept = conceptIndex[id]
  if (!concept) return {}
  return { title: concept.label }
}

export default async function ConceptRoute({ params }: Props) {
  const { concept: id } = await params
  const concept = conceptIndex[id]
  if (!concept) notFound()

  const idx = allConcepts.findIndex((c) => c.id === id)
  const prev = idx > 0 ? allConcepts[idx - 1] : undefined
  const next = idx < allConcepts.length - 1 ? allConcepts[idx + 1] : undefined

  return <ConceptPage concept={concept} prev={prev} next={next} />
}
