import { Button } from "@/components/ui/button"
import { MessageCircle, Building2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MessageCircle className="h-4 w-4" />
            <span>PacienteX</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Orientación médica rápida por WhatsApp
          </h1>

          {/* Subheading */}
          <p className="mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Ayudamos a tu institución a ordenar la demanda y priorizar la atención, sin reemplazar al médico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-lg">
              <Building2 className="h-5 w-5" />
              Quiero PacienteX en mi institución
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 text-lg bg-[#25D366] text-white hover:bg-[#20BA5A]">
              <MessageCircle className="h-5 w-5" />
              Escribime por WhatsApp
            </Button>
          </div>

          {/* Consent Text */}
          <p className="mt-8 max-w-2xl text-balance text-sm text-muted-foreground">
            Al iniciar una conversación, aceptás recibir mensajes relacionados con tu atención de salud. Podés darte de
            baja en cualquier momento.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  )
}
