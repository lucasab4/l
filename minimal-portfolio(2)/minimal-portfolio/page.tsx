import Link from 'next/link'
import { PixelDecoration } from './components/pixel-decoration'
import { GradientBorder } from './components/gradient-border'

export default function Page() {
  return (
    <>
      <PixelDecoration />
      <GradientBorder />
      <div className="relative min-h-screen bg-gradient-to-b from-black/50 to-transparent text-[#f0f0f0] font-mono flex flex-col items-center justify-between p-4">
        <header className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          {/* Header - customizable */}
          {'<CF>'}` JF`` eGi3N{'{q'} JEK{'}'}j9
        </header>
        
        <main className="flex flex-col items-center text-center z-10">
          {/* Main heading - customizable */}
          <h1 className="text-4xl mb-2 font-bold glow">
            yJTOLLx
          </h1>
          
          {/* Subheading - customizable */}
          <div className="text-sm text-[#a0a0a0] mb-8">
            JLQf2cb
          </div>
          
          {/* Navigation links - customizable */}
          <nav className="flex space-x-4 text-sm glass rounded-lg p-4">
            <Link href="/about" className="hover:text-white transition-colors">about</Link>
            <Link href="/now" className="hover:text-white transition-colors">now</Link>
            <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
            <Link href="/blog" className="hover:text-white transition-colors">blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">contact</Link>
          </nav>
        </main>

        <footer className="w-full text-sm text-[#a0a0a0] text-center glass rounded-lg p-2">
          {/* Footer - customizable */}
          jeØ JYRwyuO hBR\n&apos;t ]ε1|NCR
        </footer>
      </div>
    </>
  )
}

