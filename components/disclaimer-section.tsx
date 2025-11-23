import { AlertTriangle } from "lucide-react"

export function DisclaimerSection() {
  return (
    <section className="bg-destructive/5 px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border-2 border-destructive/30 bg-card p-8 md:p-12 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Aviso importante</h2>
          </div>
          <p className="text-lg text-foreground leading-relaxed">
            PacienteX brinda orientación general y nunca reemplaza la consulta con un profesional de la salud. En caso
            de síntomas graves o de urgencia, no uses WhatsApp:{" "}
            <span className="font-bold">
              llamá a los servicios de emergencia de tu localidad (por ejemplo, 107 o 911)
            </span>{" "}
            o acudí al centro de salud más cercano.
          </p>
        </div>
      </div>
    </section>
  )
}
