"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { WhatsAppChaosMockup } from "./whatsapp-chaos-mockup"
import { DashboardMockup } from "./dashboard-mockup"
import { useLanguage } from "@/lib/language-context"

function PhoneFrame({ children, label, sublabel }: { children: React.ReactNode; label: string; sublabel: string }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative w-full max-w-[260px]">
        {/* Phone bezel */}
        <div className="rounded-[2rem] border-[6px] border-[#1A1A1A] bg-[#1A1A1A] p-1 shadow-xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1A1A1A]" />
          {/* Screen - aspect ratio for consistent sizing */}
          <div className="relative overflow-hidden rounded-[1.4rem] aspect-[9/17.5]">
            {children}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  )
}

export function HeroTransformation() {
  const { lang } = useLanguage()

  const labels = {
    before: {
      es: "Antes",
      pt: "Antes",
    },
    beforeSub: {
      es: "WhatsApp caos a las 6 AM",
      pt: "WhatsApp caos \u00E0s 6 AM",
    },
    after: {
      es: "Despu\u00E9s con PX",
      pt: "Depois com PX",
    },
    afterSub: {
      es: "Dashboard estructurado y listo",
      pt: "Dashboard estruturado e pronto",
    },
  }

  return (
    <>
      {/* Mobile: vertical stack */}
      <div className="flex flex-col items-center gap-4 sm:hidden">
        <div className="w-full max-w-[220px]">
          <PhoneFrame
            label={labels.before[lang]}
            sublabel={labels.beforeSub[lang]}
          >
            <WhatsAppChaosMockup />
          </PhoneFrame>
        </div>

        {/* Arrow down */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg">
          <ArrowDown className="h-5 w-5 text-primary-foreground" />
        </div>

        <div className="w-full max-w-[220px]">
          <PhoneFrame
            label={labels.after[lang]}
            sublabel={labels.afterSub[lang]}
          >
            <DashboardMockup />
          </PhoneFrame>
        </div>
      </div>

      {/* Tablet+: side by side */}
      <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10">
        <div className="w-full max-w-[240px] lg:max-w-[260px]">
          <PhoneFrame
            label={labels.before[lang]}
            sublabel={labels.beforeSub[lang]}
          >
            <WhatsAppChaosMockup />
          </PhoneFrame>
        </div>

        {/* Arrow right */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary shadow-lg">
          <ArrowRight className="h-6 w-6 text-primary-foreground" />
        </div>

        <div className="w-full max-w-[240px] lg:max-w-[260px]">
          <PhoneFrame
            label={labels.after[lang]}
            sublabel={labels.afterSub[lang]}
          >
            <DashboardMockup />
          </PhoneFrame>
        </div>
      </div>
    </>
  )
}
