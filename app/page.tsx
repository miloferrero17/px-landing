"use client"

import { LanguageProvider } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProcessFlow } from "@/components/process-flow"
import { PricingSection } from "@/components/pricing-section"
import { PilotSection } from "@/components/pilot-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <div id="flujo">
            <ProcessFlow />
          </div>
          <div id="modelo">
            <PricingSection />
          </div>
          <PilotSection />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
