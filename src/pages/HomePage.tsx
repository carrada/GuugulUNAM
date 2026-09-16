import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { About } from "@/components/sections/About"
import { Community } from "@/components/sections/Community"
import { Features } from "@/components/sections/Features"
import { Hero } from "@/components/sections/Hero"

export default function HomePage() {
  return (
    <div id="inicio" className="relative min-h-svh bg-white">
      <div className="absolute inset-x-0 top-0 z-40">
        <ColorBar />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
