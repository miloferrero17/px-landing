import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, Clock, FileText, Shield } from "lucide-react"

const benefits = [
  {
    icon: HeartPulse,
    title: "Menos saturación de guardia",
    description: "Orientar casos leves a turnos programados u otros canales, reduciendo la sobrecarga en emergencias.",
  },
  {
    icon: Clock,
    title: "Mejor experiencia del paciente",
    description: "Respuestas claras, disponibles 24/7, sin esperas telefónicas ni demoras innecesarias.",
  },
  {
    icon: FileText,
    title: "Datos ordenados para el equipo médico",
    description: "El profesional recibe un resumen estructurado del motivo de consulta y antecedentes relevantes.",
  },
  {
    icon: Shield,
    title: "Cumplimiento y trazabilidad",
    description: "Mensajes trazables y registro completo de todas las interacciones con los pacientes.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-accent/30 px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Beneficios para tu institución
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Optimizá la atención y mejorá la experiencia de tus pacientes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="flex gap-6 p-8">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
