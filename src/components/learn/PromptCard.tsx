import { useState } from "react"
import { Check, Copy } from "lucide-react"
import type { PromptItem } from "@/data/prompts"

type PromptCardProps = {
  prompt: PromptItem
  color: string
  onColor: string
  surface: string
}

export function PromptCard({ prompt, color, onColor, surface }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt.prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl" style={{ backgroundColor: surface }}>
      <div
        className="flex items-start justify-between gap-3 px-5 py-3"
        style={{ backgroundColor: color, color: onColor }}
      >
        <h3 className="font-heading text-lg font-bold">{prompt.title}</h3>
        <button
          type="button"
          onClick={copyPrompt}
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-slate-900"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <div className="space-y-4 px-5 py-5">
        <dl className="space-y-3 font-sans text-sm leading-relaxed text-slate-800">
          <div>
            <dt className="font-medium text-slate-900">Cuándo usarlo</dt>
            <dd className="mt-1">{prompt.when}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Dónde usarlo</dt>
            <dd className="mt-1">{prompt.where}</dd>
          </div>
        </dl>
        <pre className="overflow-x-auto rounded-xl bg-white p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-slate-800">
          {prompt.prompt}
        </pre>
      </div>
    </article>
  )
}
