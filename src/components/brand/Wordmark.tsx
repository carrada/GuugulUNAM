import { cn } from "@/lib/utils"

const LETTERS = [
  { char: "G", color: "text-google-blue" },
  { char: "u", color: "text-google-red" },
  { char: "u", color: "text-google-yellow" },
  { char: "g", color: "text-google-blue" },
  { char: "u", color: "text-google-green" },
  { char: "l", color: "text-google-red" },
] as const

type WordmarkProps = {
  className?: string
  letterClassName?: string
}

export function Wordmark({ className, letterClassName }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-baseline font-heading", className)}>
      {LETTERS.map((letter, index) => (
        <span
          key={`${letter.char}-${index}`}
          className={cn(letter.color, letterClassName)}
        >
          {letter.char}
        </span>
      ))}
    </span>
  )
}
