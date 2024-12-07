import Link from 'next/link'
import { PixelDecoration } from '../components/pixel-decoration'
import { GradientBorder } from '../components/gradient-border'

export default function Now() {
  return (
    <>
      <PixelDecoration />
      <GradientBorder />
      <div className="relative min-h-screen bg-gradient-to-b from-black/50 to-transparent text-[#f0f0f0] font-mono flex flex-col items-center justify-between p-4">
        <header className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">← back</Link>
        </header>
        
        <main className="flex flex-col items-center text-center max-w-2xl z-10">
          <h1 className="text-2xl mb-4 font-bold glow">now</h1>
          {/* Now content - customizable */}
          <div className="glass rounded-lg p-6 space-y-4">
            <p className="mb-4">
              [What you're currently working on or focused on]
            </p>
            <p className="mb-4">
              [Your current projects or interests]
            </p>
            <p className="mb-4">
              [Any other current information you want to share]
            </p>
          </div>
        </main>

        <footer className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          {/* Footer - customizable */}
          jeØ JYRwyuO hBR\n&apos;t ]ε1|NCR
        </footer>
      </div>
    </>
  )
}

