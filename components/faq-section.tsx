import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Es un servicio de emergencias?",
    answer:
      "No. PacienteX no atiende emergencias. Si tenés síntomas graves, dolor intenso, dificultad para respirar o cualquier urgencia, llamá a los servicios de emergencia (por ejemplo, 107 o 911).",
  },
  {
    question: "¿PacienteX reemplaza a mi médico?",
    answer:
      "No. PacienteX solo ordena la información y sugiere el mejor canal de atención. El diagnóstico y tratamiento siempre quedan en manos de profesionales de la salud.",
  },
  {
    question: "¿Qué tipo de mensajes voy a recibir?",
    answer:
      "Mensajes sobre tu consulta, recordatorios de turnos, indicaciones generales de cuidado y encuestas de satisfacción. No enviamos spam ni promociones de medicamentos.",
  },
  {
    question: "¿Cómo dejo de recibir mensajes?",
    answer:
      "Podés responder 'BAJA' en cualquier momento, o pedir a tu institución que elimine tu número de su lista de contactos.",
  },
  {
    question: "¿Mis datos están protegidos?",
    answer:
      "Sí. Cumplimos con las leyes de protección de datos personales y las políticas de privacidad de WhatsApp Business. Tu información médica es confidencial.",
  },
  {
    question: "¿Cuánto cuesta para el paciente?",
    answer:
      "El servicio es gratuito para los pacientes. Es tu institución de salud la que lo implementa como parte de su atención.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-accent/30 px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Resolvemos tus dudas sobre PacienteX
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border-2 bg-card px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
