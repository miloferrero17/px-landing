"use client"

import { ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScKKNLUDILRSyn8HuHLs2DbZUuxB0-69t0eAbPOIrcWaggNaQ/viewform?usp=dialog"

export function PilotSection() {
  const { lang, t } = useLanguage()

  return (
    <section id="piloto" className="relative overflow-hidden bg-[#179468] py-24 lg:py-32">
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
          <Rocket className="h-4 w-4 text-white" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            {t.pilot.label[lang]}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t.pilot.title[lang]}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
          {t.pilot.subtitle[lang]}
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full bg-white px-8 text-base font-bold text-[#179468] shadow-lg hover:bg-white/90"
          >
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              {t.pilot.cta[lang]}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Microcopy */}
        <p className="mt-6 text-sm text-white/60">
          {lang === "es"
            ? "Sin tarjeta de cr\u00E9dito. Sin letra chica."
            : "Sem cart\u00E3o de cr\u00E9dito. Sem letras miudas."}
        </p>
      </div>
    </section>
  )
}
