"use client"

import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#179468]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight text-white">
            {t.header.brand}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a
            href="#flujo"
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            {t.header.flujo[lang]}
          </a>
          <a
            href="#modelo"
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            {t.header.modelo[lang]}
          </a>

          {/* Language toggle with flags */}
          <div className="flex items-center gap-1 rounded-full border border-white/30 p-0.5">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                lang === "es"
                  ? "bg-white text-[#179468]"
                  : "text-white/80 hover:text-white"
              }`}
              aria-label="Español"
            >
              <span className="text-sm leading-none" role="img" aria-label="España">🇪🇸</span>
              <span>ES</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                lang === "pt"
                  ? "bg-white text-[#179468]"
                  : "text-white/80 hover:text-white"
              }`}
              aria-label="Português"
            >
              <span className="text-sm leading-none" role="img" aria-label="Brasil">🇧🇷</span>
              <span>PT</span>
            </button>
          </div>

          <Button asChild size="sm" className="gap-1.5 rounded-full bg-white text-[#179468] font-bold shadow-md hover:bg-white/90">
            <a href="#piloto">
              {t.header.cta[lang]}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </nav>

        {/* Mobile: flags + toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-0.5 rounded-full border border-white/30 p-0.5">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-all ${
                lang === "es" ? "bg-white text-[#179468]" : "text-white/80"
              }`}
              aria-label="Español"
            >
              <span className="text-sm leading-none" role="img" aria-label="España">🇪🇸</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-all ${
                lang === "pt" ? "bg-white text-[#179468]" : "text-white/80"
              }`}
              aria-label="Português"
            >
              <span className="text-sm leading-none" role="img" aria-label="Brasil">🇧🇷</span>
            </button>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-white hover:text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/20 bg-[#179468] px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            <a
              href="#flujo"
              className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {t.header.flujo[lang]}
            </a>
            <a
              href="#modelo"
              className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {t.header.modelo[lang]}
            </a>
            <Button asChild size="sm" className="mt-2 w-full gap-1.5 rounded-full bg-white text-[#179468] font-bold shadow-md hover:bg-white/90">
              <a href="#piloto" onClick={() => setMobileOpen(false)}>
                {t.header.cta[lang]}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
