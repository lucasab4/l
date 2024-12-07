import Link from 'next/link'
import { PixelDecoration } from '../components/pixel-decoration'
import { GradientBorder } from '../components/gradient-border'

export default function About() {
  return (
    <>
      <PixelDecoration />
      <GradientBorder />
      <div className="relative min-h-screen bg-gradient-to-b from-black/50 to-transparent text-[#f0f0f0] font-mono flex flex-col items-center justify-between p-4">
        <header className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">← back</Link>
        </header>
        
        <main className="flex flex-col items-center text-center max-w-2xl z-10">
          <h1 className="text-2xl mb-4 font-bold glow">about</h1>
          {/* About content - customizable */}
          <div className="glass rounded-lg p-6 space-y-4">
            <p className="mb-4">
              Hola, soy [Tu Nombre]. Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales.
            </p>
            <p className="mb-4">
              Con experiencia en React, Next.js y diseño UI/UX, me enfoco en construir aplicaciones web modernas y eficientes.
            </p>
          </div>
        </main>

        <footer className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          {/* Footer - customizable */}
          jeØ JYRwyuO hBR
&apos;t ]ε1|NCR
        </footer>
      </div>
    </>
  )
}

