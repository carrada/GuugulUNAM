import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import "./bounce-cards.css"

type BounceCardsProps = {
  className?: string
  images?: string[]
  alts?: string[]
  animationDelay?: number
  animationStagger?: number
  easeType?: string
  enableHover?: boolean
}

function fanTransforms(spread: number) {
  const inner = Math.round(spread * 0.47)
  return [
    `rotate(5deg) translateX(${-spread}px)`,
    `rotate(0deg) translateX(${-inner}px)`,
    "rotate(-5deg)",
    `rotate(5deg) translateX(${inner}px)`,
    `rotate(-5deg) translateX(${spread}px)`,
  ]
}

function composeTransform(style: string) {
  return `translate(-50%, -50%) ${style}`
}

export default function BounceCards({
  className = "",
  images = [],
  alts = [],
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  enableHover = true,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => setWidth(el.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const compact = width > 0 && width < 520
  const cardSize = width
    ? Math.round(Math.min(200, Math.max(112, width * 0.36)))
    : 160
  const spread = width
    ? Math.round(Math.min(150, Math.max(44, width * 0.26)))
    : 90
  const hoverPush = compact ? Math.round(spread * 0.55) : 160
  const height = cardSize + 28
  const transformStyles = useMemo(() => fanTransforms(spread), [spread])

  useEffect(() => {
    if (width === 0) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      )
    }, containerRef)
    return () => ctx.revert()
  }, [animationStagger, easeType, animationDelay, width])

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr)
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)")
    }
    if (transformStr === "none") {
      return "rotate(0deg)"
    }
    return `${transformStr} rotate(0deg)`
  }

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translateX\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const currentX = Number.parseFloat(match[1])
      return baseTransform.replace(
        translateRegex,
        `translateX(${currentX + offsetX}px)`,
      )
    }
    return `${baseTransform} translateX(${offsetX}px)`
  }

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return

    const q = gsap.utils.selector(containerRef)

    images.forEach((_, i) => {
      const target = q(`.card-${i}`)
      gsap.killTweensOf(target)
      const baseTransform = transformStyles[i] || "none"

      if (i === hoveredIdx) {
        gsap.to(target, {
          transform: composeTransform(getNoRotationTransform(baseTransform)),
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        })
        return
      }

      const offsetX = i < hoveredIdx ? -hoverPush : hoverPush
      gsap.to(target, {
        transform: composeTransform(getPushedTransform(baseTransform, offsetX)),
        duration: 0.4,
        ease: "back.out(1.4)",
        delay: Math.abs(hoveredIdx - i) * 0.05,
        overwrite: "auto",
      })
    })
  }

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return

    const q = gsap.utils.selector(containerRef)

    images.forEach((_, i) => {
      const target = q(`.card-${i}`)
      gsap.killTweensOf(target)
      gsap.to(target, {
        transform: composeTransform(transformStyles[i] || "none"),
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      })
    })
  }

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        height,
        ["--bounce-card-size" as string]: `${cardSize}px`,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={src}
          className={`card card-${idx}`}
          style={{
            transform: composeTransform(transformStyles[idx] ?? "none"),
          }}
          onPointerEnter={() => pushSiblings(idx)}
          onPointerLeave={resetSiblings}
        >
          <img
            className="image"
            src={src}
            alt={alts[idx] ?? `Foto ${idx + 1} de la comunidad`}
          />
        </div>
      ))}
    </div>
  )
}
