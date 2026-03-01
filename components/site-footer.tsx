"use client"

import { ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SiteFooter() {
  const { lang, t } = useLanguage()

  return (
    <footer className="border-t border-border bg-[#179468] text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-tight">{t.footer.brand}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {t.footer.description[lang]}
            </p>
          </div>

          {/* Legal compliance */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-white/70" />
              <p className="text-sm font-semibold text-white/90">
                {t.footer.complianceTitle[lang]}
              </p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              {t.footer.complianceText[lang]}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-xs text-white/50">
            {`\u00A9 ${new Date().getFullYear()} ${t.footer.copyright[lang]}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
