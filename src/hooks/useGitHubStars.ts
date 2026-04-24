"use client"

import { useEffect, useState } from "react"

export function useGitHubStars(repo: string) {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    const cached = sessionStorage.getItem(`gh-stars:${repo}`)
    if (cached) { setStars(Number(cached)); return }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.stargazers_count === "number") {
          setStars(d.stargazers_count)
          sessionStorage.setItem(`gh-stars:${repo}`, String(d.stargazers_count))
        }
      })
      .catch(() => {})
  }, [repo])

  return stars
}
