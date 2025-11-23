import { MessageCircle, Globe } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Footer Content */}
        <div className="grid gap-12 border-t border-background/20 pt-12 md:grid-cols-2">
          {/* Company Info */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xl font-bold">
              <MessageCircle className="h-6 w-6" />
              <span>PacienteX</span>
            </div>
            <p className="mb-4 text-sm text-background/80 leading-relaxed">
              Orientación médica inteligente por WhatsApp para instituciones de salud en Argentina.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>www.pacientex.com.ar</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div>
            <h3 className="mb-4 font-semibold">Aviso legal</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Esta página describe un servicio de orientación y coordinación de atención de salud. No constituye
              publicidad de medicamentos ni dispositivos médicos.
            </p>
            <p className="mt-4 text-xs text-background/60">© 2025 PacienteX. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
