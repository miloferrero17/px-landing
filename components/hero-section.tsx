"use client"

import { Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { HeroTransformation } from "./hero-transformation"

export function HeroSection() {
  const { lang, t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Top: Text + CTA centered */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.hero.headline[lang]}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subheadline[lang]}
          </p>

          {/* CTA - primary action, immediately after subheadline */}
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-[#179468] px-8 py-6 text-base font-bold text-white shadow-lg shadow-[#179468]/25 transition-all hover:scale-105 hover:bg-[#148a5f] hover:shadow-xl active:scale-95 sm:px-10 sm:py-7 sm:text-lg"
            >
              <a href="#piloto">
                {t.hero.cta[lang]}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              {t.hero.ctaMicrocopy[lang]}
            </p>
          </div>

          {/* Bullet points - below CTA, supporting info */}
          <div className="mx-auto mt-8 flex w-fit flex-col items-start gap-2.5">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" />
              <span className="text-sm">{t.hero.bullet1[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" />
              <span className="text-sm">{t.hero.bullet2[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" />
              <span className="text-sm">{t.hero.bullet3[lang]}</span>
            </div>
          </div>
        </div>

        {/* Phone mockup transformation: Before → After */}
        <div className="mt-14 lg:mt-16">
          <HeroTransformation />
        </div>

        {/* Sovereignty box - below mockups, visually quiet */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
            <div>
              <p className="text-xs font-semibold text-foreground/80">
                {t.hero.sovereigntyTitle[lang]}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {t.hero.sovereigntyText[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
