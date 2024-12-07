'use client'

import { useState, useEffect } from 'react'

export function AnimatedTitle({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i])
        i++
      } else {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [text])

  return <h1 className="text-4xl mb-2">{displayText}</h1>
}

