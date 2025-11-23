import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SecuritySection } from "@/components/security-section"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SecuritySection />
      <DisclaimerSection />
      <UseCasesSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}
