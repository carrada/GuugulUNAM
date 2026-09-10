import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import Ballpit from "@/components/ui/ballpit"
import { Wordmark } from "@/components/brand/Wordmark"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GOOGLE_COLORS = [0x4285f4, 0xea4335, 0xfbbc05, 0x34a853]
const MOBILE_QUERY = "(max-width: 767px)"

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MOBILE_QUERY).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(media.matches)
    onChange()
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

export function Hero() {
  const isMobile = useIsMobile()

  return (
    <section className="relative flex h-svh flex-col items-center justify-center overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-0 h-full w-full">
        <Ballpit
          className="h-full w-full"
          count={isMobile ? 70 : 200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor
          colors={GOOGLE_COLORS}
          ambientColor={0xffffff}
          ambientIntensity={1.15}
          lightIntensity={180}
        />
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pointer-events-none relative z-10 flex max-w-4xl flex-col items-center justify-center gap-6 px-6"
      >
        <Wordmark className="text-5xl font-bold tracking-tight md:text-7xl" />
        <p className="max-w-3xl text-center font-sans text-lg font-medium text-slate-700 md:text-2xl">
          Comunidad Oficial Estudiantil del Programa Google Ambassadors
        </p>
        <div className="flex max-w-2xl flex-col gap-3 text-center font-sans text-base text-slate-600 md:text-lg">
          <p>Hecho por estudiantes, para estudiantes.</p>
          <p>
            Cerramos la brecha entre la formación académica y el mercado
            laboral global.
          </p>
        </div>
        <div className="pointer-events-auto mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/unete"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Únete a la comunidad
          </Link>
          <a
            href="#nosotros"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full bg-white px-6",
            )}
          >
            Conoce más
          </a>
        </div>
      </motion.div>
    </section>
  )
}
