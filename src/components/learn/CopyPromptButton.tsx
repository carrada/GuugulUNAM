import { useState } from "react"
import { Check, Copy } from "lucide-react"

type CopyPromptButtonProps = {
  text: string
  label?: string
}

export function CopyPromptButton({
  text,
  label = "Copiar prompt",
}: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-slate-900"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copiado" : label}
    </button>
  )
}
