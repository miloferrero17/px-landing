"use client"

import {
  MessageSquareOff,
  CreditCard,
  BrainCircuit,
  ClipboardCheck,
  Check,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { ElementType } from "react"

const iconMap: Record<string, ElementType> = {
  messageOff: MessageSquareOff,
  creditCard: CreditCard,
  brain: BrainCircuit,
  clipboard: ClipboardCheck,
}

const numbers = ["01", "02", "03", "04"]

export function ProcessFlow() {
  const { lang, t } = useLanguage()

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t.process.label[lang]}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {t.process.subtitle[lang]}
          </p>
        </div>

        {/* 4 scannable blocks */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.process.steps.map((step, idx) => {
            const Icon = iconMap[step.icon] ?? MessageSquareOff
            const num = numbers[idx]

            return (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg sm:p-8"
              >
                {/* Step number watermark */}
                <span className="absolute right-4 top-3 text-5xl font-black leading-none text-primary/[0.07] sm:text-6xl">
                  {num}
                </span>

                {/* Icon + Title */}
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-foreground">
                    {step.title[lang]}
                  </h3>
                </div>

                {/* Bullet points */}
                <ul className="relative mt-5 flex flex-col gap-2.5">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-snug text-muted-foreground">
                        {bullet[lang]}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Result highlight */}
                <div className="relative mt-5 flex items-center gap-2.5 rounded-lg border border-primary/15 bg-primary/[0.06] px-4 py-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm font-bold text-foreground">
                    {step.result[lang]}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
