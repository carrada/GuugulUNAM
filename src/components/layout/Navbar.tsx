import { Link } from "react-router-dom"
import { Wordmark } from "@/components/brand/Wordmark"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/aprender", label: "Aprender" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border border-black/8",
          "bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl",
        )}
      >
        <Link to="/" className="flex items-center gap-2" aria-label="Guugul">
          <Wordmark className="text-xl font-bold" />
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to="/unete"
          className="rounded-full bg-google-blue px-3.5 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Únete
        </Link>
      </nav>
    </header>
  )
}
