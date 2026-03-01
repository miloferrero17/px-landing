"use client"

import { Settings, Stethoscope, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const planIcons = [Settings, Stethoscope]

export function PricingSection() {
  const { lang, t } = useLanguage()

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t.pricing.label[lang]}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.pricing.title[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {t.pricing.subtitle[lang]}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {t.pricing.plans.map((plan, idx) => {
            const Icon = planIcons[idx]
            const isVariable = idx === 1
            return (
              <div
                key={idx}
                className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                  isVariable
                    ? "border-primary bg-primary/[0.03] shadow-md"
                    : "border-border bg-card shadow-sm"
                }`}
              >
                {/* Tag */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isVariable ? "bg-primary/15" : "bg-primary/10"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {plan.name[lang]}
                      </h3>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {plan.tag[lang]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {plan.price[lang]}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {plan.priceUnit[lang]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.focus[lang]}
                  </p>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-border" />

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">
                        {feature[lang]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
