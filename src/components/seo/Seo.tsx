import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { applyDocumentSeo } from "@/seo/document"

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyDocumentSeo(pathname)
  }, [pathname])

  return null
}
