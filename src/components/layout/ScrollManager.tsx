import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname, hash])

  return null
}
