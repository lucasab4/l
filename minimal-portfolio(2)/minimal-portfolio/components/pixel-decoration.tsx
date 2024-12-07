'use client'

import { useEffect, useRef } from 'react'

export function PixelDecoration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Pixel colors
    const colors = ['#FFFFFF', '#E0E0E0', '#BDBDBD', '#9E9E9E']
    
    // Create pixels
    const pixels = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.1
    }))

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      pixels.forEach(pixel => {
        ctx.fillStyle = pixel.color
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
        
        pixel.y += pixel.speed
        if (pixel.y > canvas.height) {
          pixel.y = -pixel.size
          pixel.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      aria-hidden="true"
    />
  )
}

