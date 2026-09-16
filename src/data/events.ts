import type { LearnProgram } from "./learn.ts"

export const EVENTS: LearnProgram[] = [
  {
    title: "Google Cloud Summit 2026",
    org: "Google Cloud",
    when: "30 de septiembre de 2026",
    where: "Expo Santa Fe, Ciudad de México",
    href: "https://www.linkedin.com/company/bsigeonet/",
    cta: "Pedir código en LinkedIn",
    themes: ["Google Cloud", "AI", "Cloud", "Networking"],
    description:
      "Una oportunidad para conectar con la industria, aprender de expertos y representar a la comunidad. El acceso con beneficios requiere un código especial de invitación.",
    steps: {
      heading: "Pasos para tu registro",
      intro:
        "Para obtener el acceso con estos beneficios, necesitas un código especial. Sigue estas instrucciones al pie de la letra:",
      items: [
        {
          title: "Visita el perfil del Partner",
          body: "Entra al perfil oficial de LinkedIn de BSI (Bufete de Soluciones Integrales) y usa el enlace oficial.",
          href: "https://www.linkedin.com/company/bsigeonet/",
          hrefLabel: "Perfil de BSI en LinkedIn",
        },
        {
          title: "Solicita tu acceso",
          body: "Envíales un mensaje directo (DM) mencionando que estás interesado en asistir y pidiendo tu código de invitación para el registro.",
        },
        {
          title: "Completa el formulario",
          body: "Cuando el equipo de BSI te responda con el código y las instrucciones, entra al portal del evento y llena tus datos.",
          href: "https://cloudonair.withgoogle.com/events/google-cloud-summit-mexico-2026-cdmx",
          hrefLabel: "Portal del evento",
        },
        {
          title: "Espera tu correo oficial",
          body: "Completar el formulario con el código no te da la entrada automática. La participación final está sujeta a revisión y confirmación oficial directamente por parte de Google. Revisa tu bandeja de entrada los días siguientes.",
        },
      ],
      warning:
        "Completar el formulario con el código no garantiza tu lugar. Google confirma la participación por correo.",
      closing:
        "No dejes pasar esta oportunidad de conectar con la industria, aprender de los expertos y representar a la comunidad.",
    },
  },
  {
    title: "DevFest 2026: Ciudad de México",
    org: "Google Developers Group CDMX",
    when: "7 de diciembre de 2026, 08:00–21:00 (CST)",
    where:
      "Tecnológico de Monterrey, Campus Ciudad de México, Prolongación Canal de Miramontes, Ciudad de México, CDMX 14380",
    href: "https://gdg.community.dev/events/details/google-gdg-cdmx-presents-devfest-2026-ciudad-de-mexico/cohost-gdg-cdmx/",
    cta: "RSVP en GDG CDMX",
    themes: [
      "AI",
      "Community Building",
      "DevFest",
      "Google Cloud",
      "Google Workspace",
      "Web",
    ],
    description:
      "DevFest 2026 en la Ciudad de México es el evento para desarrolladores, entusiastas de la tecnología e innovadores. Es un espacio para explorar nuevas fronteras tecnológicas, conectar con otras personas de la comunidad y descubrir las propuestas del programa. Reserva tu lugar para no perderte esta edición.",
    organizers: [
      { name: "Malinali Becerril", role: "Scopely · GDG Organizer" },
      { name: "Enrique Diaz", role: "Codeflux AI" },
      { name: "Israel Silva", role: "Lifter Studio · GDG Organizer" },
    ],
  },
]
