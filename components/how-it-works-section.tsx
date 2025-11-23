import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ClipboardList, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Paso 1: Inicio de conversación",
    description: "El paciente inicia un chat de WhatsApp desde la web o un código QR oficial de la institución.",
  },
  {
    icon: ClipboardList,
    title: "Paso 2: Preguntas cerradas",
    description:
      "PacienteX hace preguntas cerradas, validadas por médicos, para entender edad, síntomas y antecedentes relevantes.",
  },
  {
    icon: ArrowRight,
    title: "Paso 3: Orientación personalizada",
    description:
      "El médico ve las respuestas estructuradas y recomienda el siguiente paso: turno, teleconsulta, guardia o medidas de autocuidado.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            ¿Cómo funciona?
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Un proceso simple y validado médicamente en tres pasos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative overflow-hidden border-2 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-accent/50 p-8 text-center border-2 border-primary/20">
          <p className="text-lg font-medium text-foreground">
            <span className="font-bold">Importante:</span> PacienteX NO diagnostica ni indica tratamientos. La decisión
            final siempre es del equipo médico.
          </p>
        </div>
      </div>
    </section>
  )
}
