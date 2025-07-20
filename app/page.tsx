"use client"
import {
  QrCode,
  MessageCircle,
  Brain,
  Stethoscope,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Zap,
  Heart,
  Shield,
} from "lucide-react"

export default function HomePage() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura aproximada del header sticky
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "#D6FE70" }}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/px-logo.png" alt="PX Logo" className="w-16 h-16 drop-shadow-lg" />
          </div>
          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("contact-form")}
              className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section gradient-bg text-white relative overflow-hidden" style={{ padding: "80px 20px" }}>
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 bg-white bg-opacity-20 backdrop-blur-sm">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Revolucionando la Atención de Emergencias</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Las Experiencias en
                <br />
                <span className="text-white drop-shadow-lg">Guardias Médicas</span>
                <br />
                Pueden Ser Mejores
              </h1>
              <p className="text-xl mb-12 leading-relaxed font-light opacity-90">
                Ir al hospital no debería significar esperar horas, sentirse perdido o no saber si alguien está
                revisando tu caso. <strong>Modernizamos la atención médica</strong> combinando tecnología, información
                organizada y supervisión clínica confiable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button
                  className="btn-primary text-xl px-12 py-4 pulse-effect shadow-xl"
                  onClick={() => scrollToSection("contact-form")}
                >
                  <Heart className="w-6 h-6 mr-2 inline" />
                  Conocer Más
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/doctor-tablet.png"
                  alt="Doctora usando PX en tablet"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Demo Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/qr-scanning.png"
                  alt="Paciente escaneando código QR de PX"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 gradient-bg text-white font-semibold shadow-lg">
                <QrCode className="w-5 h-5 mr-2" />
                Proceso Instantáneo
              </div>
              <h2 className="text-4xl font-black mb-6 gradient-text">Escanea y Comienza tu Atención</h2>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                Con solo escanear un código QR, los pacientes acceden inmediatamente a nuestro sistema de triaje
                inteligente.
                <strong>Sin descargas, sin registros complicados</strong> - solo una experiencia fluida desde el primer
                momento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Acceso inmediato vía WhatsApp</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Sin necesidad de apps adicionales</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Funciona en cualquier smartphone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6 gradient-text">Cómo Funciona PX</h2>
            <p className="text-xl max-w-3xl mx-auto font-light text-gray-700">
              Un proceso simple de cuatro pasos que <strong>transforma la experiencia</strong> en guardias médicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 gradient-bg shadow-lg group-hover:shadow-xl transition-shadow">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">1. Escanear Código QR</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Los pacientes llegan al hospital y escanean un código QR para comenzar el proceso de manera{" "}
                <strong>instantánea</strong>
              </p>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 gradient-bg shadow-lg group-hover:shadow-xl transition-shadow">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">2. Chat WhatsApp</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                En <strong>menos de 5 minutos</strong>, responden preguntas simples sobre sus síntomas de forma familiar
              </p>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 gradient-bg shadow-lg group-hover:shadow-xl transition-shadow">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">3. Análisis IA</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Nuestro motor entrenado con <strong>ESI</strong> genera pre-diagnóstico y niveles de urgencia precisos
              </p>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 gradient-bg shadow-lg group-hover:shadow-xl transition-shadow">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">4. Revisión Médica</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Un médico revisa y llama al <strong>100% de pacientes</strong> con información clínica organizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 gradient-bg text-white font-semibold shadow-lg">
                <Brain className="w-5 h-5 mr-2" />
                Tecnología Entrenada con ESI
              </div>
              <h2 className="text-4xl font-black mb-6 gradient-text">Basado en Estándares Internacionales</h2>
              <p className="text-xl mb-10 leading-relaxed text-gray-700">
                Nuestro motor de IA está entrenado usando el <strong>Índice de Severidad de Emergencias (ESI)</strong>,
                un estándar internacional para triaje basado en riesgo. Esto asegura pre-diagnósticos precisos y
                confiables manteniendo los más altos estándares médicos.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    <strong>100%</strong> supervisión médica en cada caso
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    Aprendizaje <strong>continuo</strong> de retroalimentación médica
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    Niveles de confianza <strong>controlados</strong> por institución
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/doctor-patient.png"
                  alt="Doctora PX consultando con paciente"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-green-500">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-5xl font-black mb-2 gradient-text">4.5</div>
                    <div className="text-sm font-semibold text-gray-600 mb-1">minutos con PX</div>
                    <div className="text-xs text-green-600 font-medium">✓ 85% más rápido</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-gray-400 line-through mb-1">20-30</div>
                    <div className="text-xs text-gray-500">min tradicional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="section gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6 text-white">Beneficios para Todos</h2>
            <p className="text-xl max-w-3xl mx-auto text-white font-light opacity-90">
              PX transforma la experiencia en guardias médicas tanto para <strong>pacientes</strong> como para{" "}
              <strong>proveedores de salud</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Patient Benefits */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mr-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Para Pacientes</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Menos Tiempo de Espera</h4>
                    <p className="text-lg text-gray-600">
                      Esperas <strong>reducidas</strong> con triaje eficiente e información organizada
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Comunicación Más Clara</h4>
                    <p className="text-lg text-gray-600">
                      Comunicación <strong>directa</strong> a través de la interfaz familiar de WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Tranquilidad Total</h4>
                    <p className="text-lg text-gray-600">
                      Saber que un médico <strong>revisó tu caso</strong> de principio a fin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Benefits */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mr-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Para Hospitales</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Menos Congestión en Guardias</h4>
                    <p className="text-lg text-gray-600">
                      Flujo de pacientes <strong>más eficiente</strong> y mejor asignación de recursos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Mayor Eficiencia</h4>
                    <p className="text-lg text-gray-600">
                      <strong>Más pacientes</strong> atendidos en menos tiempo con menos estrés del personal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Experiencia Mejorada</h4>
                    <p className="text-lg text-gray-600">
                      Mayor <strong>satisfacción del paciente</strong> y mejores resultados clínicos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 gradient-text">
            ¿Listo para Transformar tu Servicio de Guardias?
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto font-light text-gray-700">
            Únete a hospitales de todo el mundo para hacer que cada paciente se sienta{" "}
            <strong>verdaderamente cuidado</strong> con la solución innovadora de triaje de PX.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="btn-outline text-xl px-12 py-4 shadow-lg hover:shadow-xl transition-shadow"
              onClick={scrollToForm}
            >
              <MessageCircle className="w-6 h-6 mr-2 inline" />
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section id="contact-form" className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6 gradient-text">Contáctanos</h2>
            <p className="text-xl text-gray-700">Completa el formulario y nos pondremos en contacto contigo</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc3jDUMYWouYq0hv6diU1e6ZS0DysOqKkWBwjz8E4k8bHgd3A/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-2xl shadow-2xl"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img src="/px-logo.png" alt="PX Logo" className="w-12 h-12 drop-shadow-lg" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl text-green-300 mb-3 font-medium">
                Haciendo que cada paciente se sienta verdaderamente cuidado
              </p>
              <p className="text-green-200">
                © 2024 PX Health SRL - Teléfono: +5491133585362. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
