export type Lang = "es" | "pt"

export const translations = {
  header: {
    brand: "Paciente X",
    flujo: { es: "C\u00F3mo funciona", pt: "Como funciona" },
    modelo: { es: "Lanzamiento", pt: "Lan\u00E7amento" },
    cta: { es: "Empezar", pt: "Começar" },
  },
  hero: {
    headline: {
      es: "Recuper\u00E1 tu tiempo y el control de tu consultorio.",
      pt: "Recupere seu tempo e o controle de su consultorio.",
    },
    subheadline: {
      es: "PX ordena el caos de WhatsApp. Triage inteligente, trazabilidad legal y cobro autom\u00E1tico para que vuelvas a ejercer la medicina con calma.",
      pt: "PX organiza o caos do WhatsApp. Triagem inteligente, rastreabilidade legal e cobran\u00E7a autom\u00E1tica para voc\u00EA voltar a exercer a medicina com calma.",
    },
    bullet1: {
      es: "Cobr\u00E1 tus consultas: Monetiz\u00E1 de forma autom\u00E1tica lo que hoy atend\u00E9s gratis.",
      pt: "Cobre suas consultas: Monetize automaticamente o que hoje voc\u00EA atende de gra\u00E7a.",
    },
    bullet2: {
      es: "Liber\u00E1 tu WhatsApp: Separa tu vida personal del flujo de trabajo profesional.",
      pt: "Liberte seu WhatsApp: Separe sua vida pessoal do fluxo de trabalho profissional.",
    },
    bullet3: {
      es: "Chau audios interminables: Recib\u00ED res\u00FAmenes estructurados y listos para decidir.",
      pt: "Tchau \u00E1udios intermin\u00E1veis: Receba resumos estruturados e prontos para decidir.",
    },
    cta: {
      es: "Recuperar mi tiempo ahora",
      pt: "Recuperar meu tempo agora",
    },
    ctaMicrocopy: {
      es: "Prueba gratuita por 90 d\u00EDas. Registro en 5 minutos.",
      pt: "Teste gratuito por 90 dias. Cadastro em 5 minutos.",
    },
    sovereigntyTitle: {
      es: "Tu soberan\u00EDa m\u00E9dica es intocable.",
      pt: "Sua soberania m\u00E9dica \u00E9 intoc\u00E1vel.",
    },
    sovereigntyText: {
      es: "El sistema asiste, ordena y prioriza, pero vos manten\u00E9s el mando absoluto. PX es tu infraestructura de soporte para una pr\u00E1ctica segura.",
      pt: "O sistema auxilia, organiza e prioriza, mas voc\u00EA mant\u00E9m o comando absoluto. PX \u00E9 sua infraestrutura de suporte para uma pr\u00E1tica segura.",
    },
  },
  process: {
    label: { es: "Tu Nuevo Flujo de Trabajo", pt: "Seu Novo Fluxo de Trabalho" },
    title: {
      es: "La medicina que vuelve a ser medicina",
      pt: "A medicina que volta a ser medicina",
    },
    subtitle: {
      es: "Escane\u00E1 en segundos. Decid\u00ED con calma.",
      pt: "Escaneie em segundos. Decida com calma.",
    },
    steps: [
      {
        title: { es: "Adi\u00F3s al desorden de WhatsApp", pt: "Adeus \u00E0 desordem do WhatsApp" },
        icon: "messageOff",
        bullets: [
          { es: "Audios y textos convertidos en resumen cl\u00EDnico.", pt: "\u00C1udios e textos convertidos em resumo cl\u00EDnico." },
          { es: "S\u00EDntomas identificados y priorizados autom\u00E1ticamente.", pt: "Sintomas identificados e priorizados automaticamente." },
          { es: "Tu WhatsApp personal vuelve a ser tuyo.", pt: "Seu WhatsApp pessoal volta a ser seu." },
        ],
        result: {
          es: "Decidis en segundos, no en minutos.",
          pt: "Decide em segundos, n\u00E3o em minutos.",
        },
      },
      {
        title: { es: "Cobranza autom\u00E1tica sin fricci\u00F3n", pt: "Cobran\u00E7a autom\u00E1tica sem fric\u00E7\u00E3o" },
        icon: "creditCard",
        bullets: [
          { es: "Pago gestionado antes de que abras el chat.", pt: "Pagamento gerenciado antes de voc\u00EA abrir o chat." },
          { es: "Compatible con particulares y obras sociales.", pt: "Compat\u00EDvel com particulares e conv\u00EAnios." },
          { es: "Sin pedidos inc\u00F3modos ni conversaciones de plata.", pt: "Sem pedidos inc\u00F4modos ou conversas sobre dinheiro." },
        ],
        result: {
          es: "Tu tiempo profesional deja de ser un favor.",
          pt: "Seu tempo profissional deixa de ser um favor.",
        },
      },
      {
        title: { es: "Decisi\u00F3n cl\u00EDnica potenciada", pt: "Decis\u00E3o cl\u00EDnica potencializada" },
        icon: "brain",
        bullets: [
          { es: "Sugerencias basadas en protocolos actualizados.", pt: "Sugest\u00F5es baseadas em protocolos atualizados." },
          { es: "Informaci\u00F3n cr\u00EDtica resumida y sin ruido.", pt: "Informa\u00E7\u00E3o cr\u00EDtica resumida e sem ru\u00EDdo." },
          { es: "Vos decid\u00EDs siempre, con la mejor evidencia.", pt: "Voc\u00EA decide sempre, com a melhor evid\u00EAncia." },
        ],
        result: {
          es: "Soberan\u00EDa total sobre tu criterio m\u00E9dico.",
          pt: "Soberania total sobre seu crit\u00E9rio m\u00E9dico.",
        },
      },
      {
        title: { es: "Trazabilidad legal completa", pt: "Rastreabilidade legal completa" },
        icon: "clipboard",
        bullets: [
          { es: "Registro inalterable de cada consulta.", pt: "Registro inalter\u00E1vel de cada consulta." },
          { es: "Log de auditor\u00EDa: pregunta, respuesta, decisi\u00F3n.", pt: "Log de auditoria: pergunta, resposta, decis\u00E3o." },
          { es: "Cumplimiento de Ley 25.326 de Protecci\u00F3n de Datos Personales.", pt: "Cumprimento da LGPD (Lei Geral de Prote\u00E7\u00E3o de Dados)." },
          { es: "Protecci\u00F3n de tu matr\u00EDcula ante cualquier escenario.", pt: "Prote\u00E7\u00E3o do seu registro em qualquer cen\u00E1rio." },
        ],
        result: {
          es: "Seguridad jur\u00EDdica en cada interacci\u00F3n.",
          pt: "Seguran\u00E7a jur\u00EDdica em cada intera\u00E7\u00E3o.",
        },
      },
    ],
  },
  pricing: {
    label: { es: "Inversi\u00F3n en Calidad de Vida", pt: "Investimento em Qualidade de Vida" },
    title: { es: "Ganamos cuando te generamos valor.", pt: "Ganhamos quando geramos valor para voc\u00EA." },
    subtitle: {
      es: "Sin barreras de entrada. PX es tu socio estrat\u00E9gico para un consultorio sustentable.",
      pt: "Sem barreiras de entrada. PX \u00E9 seu parceiro estrat\u00E9gico para um consult\u00F3rio sustent\u00E1vel.",
    },
    plans: [
      {
        name: { es: "Plan Base", pt: "Plano Base" },
        tag: { es: "Administrativo", pt: "Administrativo" },
        price: { es: "$38,000", pt: "R$38.000" },
        priceUnit: { es: "/ mes (Final)", pt: "/ m\u00EAs (Final)" },
        focus: {
          es: "Administrativo",
          pt: "Administrativo",
        },
        features: [
          { es: "WhatsApp administrativo automatizado", pt: "WhatsApp administrativo automatizado" },
          { es: "Plataforma de respuesta b\u00E1sica", pt: "Plataforma de resposta b\u00E1sica" },
          { es: "Turnero digital inteligente", pt: "Agenda digital inteligente" },
        ],
      },
      {
        name: { es: "Plan Variable", pt: "Plano Vari\u00E1vel" },
        tag: { es: "Cl\u00EDnico", pt: "Cl\u00EDnico" },
        price: { es: "8,5%", pt: "8,5%" },
        priceUnit: { es: "por consulta", pt: "por consulta" },
        focus: {
          es: "Automatizaci\u00F3n M\u00E9dica y Cobros.",
          pt: "Automa\u00E7\u00E3o M\u00E9dica e Cobran\u00E7as.",
        },
        features: [
          { es: "WhatsApp de seguimiento cl\u00EDnico", pt: "WhatsApp de acompanhamento cl\u00EDnico" },
          { es: "Cobrador autom\u00E1tico integrado", pt: "Cobrador autom\u00E1tico integrado" },
          { es: "Resumen m\u00E9dico con IA (autom\u00E1tico)", pt: "Resumo m\u00E9dico com IA (autom\u00E1tico)" },
          { es: "Generador de prescripciones digitales", pt: "Gerador de prescri\u00E7\u00F5es digitais" },
        ],
      },
    ],
  },
  pilot: {
    label: { es: "Prueba Piloto", pt: "Teste Piloto" },
    title: {
      es: "Sumate a nuestra prueba piloto.",
      pt: "Participe do nosso teste piloto.",
    },
    subtitle: {
      es: "Buscamos profesionales que quieran recuperar el control de su consulta. Los cupos son limitados.",
      pt: "Buscamos profissionais que queiram recuperar o controle de sua consulta. As vagas s\u00E3o limitadas.",
    },
    cta: {
      es: "Quiero participar gratis",
      pt: "Quero participar de gra\u00E7a",
    },
  },
  footer: {
    brand: "Paciente X",
    description: {
      es: "Infraestructura cognitiva para una medicina humana, segura y eficiente. Tu copiloto en la relaci\u00F3n m\u00E9dico-paciente.",
      pt: "Infraestrutura cognitiva para uma medicina humana, segura e eficiente. Seu copiloto na rela\u00E7\u00E3o m\u00E9dico-paciente.",
    },
    complianceTitle: {
      es: "Soberan\u00EDa y Seguridad",
      pt: "Soberania e Seguran\u00E7a",
    },
    complianceText: {
      es: "PX cumple con la Ley 25.326. Somos un Software de Soporte a la Decisi\u00F3n Cl\u00EDnica (CDS) dise\u00F1ado para potenciar, no reemplazar, el criterio profesional. La decisi\u00F3n final es siempre tuya.",
      pt: "PX cumpre a LGPD. Somos um Software de Suporte \u00E0 Decis\u00E3o Cl\u00EDnica (CDS) projetado para potenciar, n\u00E3o substituir, o crit\u00E9rio profissional. A decis\u00E3o final \u00E9 sempre sua.",
    },
    copyright: {
      es: "Paciente X 2026. Protegiendo el tiempo de quienes cuidan.",
      pt: "Paciente X 2026. Protegendo o tempo de quem cuida.",
    },
  },
} as const
