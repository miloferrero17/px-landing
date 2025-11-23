import { Card, CardContent } from "@/components/ui/card"
import { Hospital, Building, Users } from "lucide-react"

const useCases = [
  {
    icon: Hospital,
    title: "Clínica ambulatoria",
    description: "Triage previo para turnos clínicos y pediátricos, organizando la demanda según urgencia.",
    features: ["Clasificación de casos", "Asignación de turnos", "Reducción de esperas"],
  },
  {
    icon: Building,
    title: "Centro de salud municipal",
    description: "Organizar demanda en horarios pico, priorizando casos urgentes sobre consultas rutinarias.",
    features: ["Gestión de flujo", "Priorización inteligente", "Atención equitativa"],
  },
  {
    icon: Users,
    title: "Red de consultorios privados",
    description: "Canal único de entrada para pacientes por WhatsApp, centralizando la comunicación.",
    features: ["Punto de contacto único", "Coordinación simple", "Mejor experiencia"],
  },
]

export function UseCasesSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Casos de uso</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            PacienteX se adapta a diferentes tipos de instituciones de salud
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{useCase.title}</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            En todos los casos, se trata de comunicación informativa y de coordinación,{" "}
            <span className="font-semibold text-foreground">no venta de productos médicos</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
