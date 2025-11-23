import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, UserCheck, Ban, Bell, FileCheck } from "lucide-react"

const securityPoints = [
  {
    icon: UserCheck,
    text: "El paciente inicia la conversación y da su consentimiento para recibir mensajes relacionados con su atención.",
  },
  {
    icon: Ban,
    text: "Podés dejar de recibir mensajes en cualquier momento respondiendo con la palabra 'BAJA'.",
  },
  {
    icon: ShieldCheck,
    text: "No vendemos ni promocionamos medicamentos, dispositivos médicos ni tratamientos experimentales a través de WhatsApp.",
  },
  {
    icon: Bell,
    text: "Los mensajes se enfocan en recordatorios, orientación sobre el cuidado de la salud, información general y coordinación de turnos.",
  },
  {
    icon: FileCheck,
    text: "Respetamos las políticas de WhatsApp Business y las leyes de protección de datos aplicables en cada país.",
  },
]

export function SecuritySection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span>Certificado y seguro</span>
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Seguridad y cumplimiento primero
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Tu confianza es nuestra prioridad. Cumplimos con todas las regulaciones vigentes.
          </p>
        </div>

        <Card className="border-2 border-primary/20 bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              {securityPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <p className="pt-2 text-foreground leading-relaxed">{point.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 rounded-xl bg-muted/50 p-6 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Nota legal:</span> PacienteX está diseñado para cumplir
                con las políticas de Mensajería y Comercio de WhatsApp Business. No usamos WhatsApp para venta directa
                de productos médicos ni para marketing agresivo.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
