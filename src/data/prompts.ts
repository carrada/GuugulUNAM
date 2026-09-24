export type PromptItem = {
  id: string
  title: string
  when: string
  where: string
  prompt: string
}

export type PromptCategory = {
  title: string
  intro: string
  color: string
  onColor: string
  surface: string
  prompts: PromptItem[]
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    title: "Dominio académico y Study Notebooks",
    intro:
      "Para pasar del aprendizaje pasivo al estudio activo, con tus apuntes o documentos cargados.",
    color: "#4285F4",
    onColor: "#ffffff",
    surface: "#e8f0fe",
    prompts: [
      {
        id: "tutor-socratico",
        title: "El tutor socrático estricto",
        when: "Cuando quieres entender el «por qué» y no te sirve un resumen ni una respuesta fácil.",
        where: "Google Gemini o Study Notebooks, con tus apuntes o el tema ya indicado en el chat.",
        prompt:
          "Actúa como un tutor socrático estricto a nivel universitario. Mi objetivo es dominar los conceptos de estos documentos o del tema que te indique. NO me des resúmenes, explicaciones ni respuestas directas bajo ninguna circunstancia. Inicia haciéndome una pregunta analítica a la vez para evaluar mi razonamiento. Si me equivoco, no me corrijas; hazme una nueva pregunta de seguimiento que me obligue a notar mi error lógico utilizando únicamente la información de mis apuntes o la teoría fundamental. Espera mi respuesta antes de continuar.",
      },
      {
        id: "simulador-examenes",
        title: "El simulador de exámenes clínico/técnico",
        when: "Antes de un examen o para practicar cómo aplicar la teoría a un caso real.",
        where: "Google Gemini, con el material de la materia adjunto o pegado en el contexto.",
        prompt:
          "Actúa como un examinador experto en la materia. Analiza el material proporcionado y diseña un 'Caso de Estudio' complejo y realista donde un sistema, proyecto o situación ha fallado o requiere una solución estratégica. Exígeme que resuelva el problema paso a paso aplicando EXCLUSIVAMENTE las teorías detalladas en mis apuntes. Evalúa mi respuesta final como lo haría un jurado académico: penaliza cualquier respuesta basada en intuición que no tenga base teórica, y exígeme que cite el principio exacto que justifica cada una de mis decisiones.",
      },
      {
        id: "matriz-literatura",
        title: "Matriz de revisión de literatura",
        when: "Al comparar autores, armar un estado del arte o buscar brechas para un ensayo o tesis.",
        where: "Google Gemini, con las fuentes (PDF o texto) identificadas como Fuente A, Fuente B, etc.",
        prompt:
          "Actúa como un investigador académico sénior. Analiza las fuentes proporcionadas [Fuente A, Fuente B, etc.] y compáralas en una matriz estructurada en Markdown. Utiliza las siguientes columnas: [Metodología], [Premisas Teóricas], [Limitaciones Empíricas] y [Conclusiones Principales]. Debajo de la tabla, crea una sección de 'Mapeo de Divergencias' destacando exactamente dónde se contradicen los autores y cita la página o sección exacta de cada afirmación. Restricción estricta: Limítate a la información de los documentos; no alucines datos externos.",
      },
      {
        id: "metodo-feynman",
        title: "El evaluador del método Feynman",
        when: "Antes de un examen o una exposición, para comprobar si de verdad dominas el tema.",
        where: "Google Gemini. Tú escribes la explicación con tus palabras; el modelo solo evalúa.",
        prompt:
          "Actúa como un evaluador implacable y experto en comunicación científica. Te voy a explicar un concepto complejo con mis propias palabras, como si se lo estuviera enseñando a un estudiante de primer semestre. Analiza mi explicación contrastándola estrictamente con el rigor académico. Identifica mis lagunas de conocimiento, detecta si usé términos técnicos de forma incorrecta o superficial, y dime exactamente qué partes del concepto no logré explicar con claridad. Proponme una analogía mejor si la mía falla.",
      },
    ],
  },
  {
    title: "Desarrollo de software y arquitectura",
    intro:
      "Para código limpio, arquitecturas escalables y revisiones rigurosas, antes o durante el desarrollo.",
    color: "#EA4335",
    onColor: "#ffffff",
    surface: "#fce8e6",
    prompts: [
      {
        id: "arquitecto-senior",
        title: "Arquitecto de software senior (stack moderno)",
        when: "Al arrancar un proyecto, antes de escribir la primera línea de código.",
        where: "Google Gemini. Sustituye [Insertar descripción del proyecto] por tu idea.",
        prompt:
          "Asume el rol de un Arquitecto de Software Senior experto en arquitecturas serverless y desarrollo full-stack moderno (específicamente TypeScript, Next.js 15, React, Tailwind CSS, Supabase y AWS). Quiero construir [Insertar descripción del proyecto]. Antes de generar código, entrégame un documento de diseño de arquitectura técnico que incluya: 1. Elección y justificación de patrones de renderizado (SSR, SSG, ISR). 2. Esquema relacional de la base de datos (PostgreSQL). 3. Estrategia de autenticación y manejo de estado. 4. Posibles cuellos de botella de rendimiento y cómo mitigarlos.",
      },
      {
        id: "code-reviewer",
        title: "Code reviewer implacable («abogado del diablo»)",
        when: "Antes de un pull request o cuando quieres auditar un bloque que «ya funciona».",
        where: "Google Gemini, con el código pegado o abierto en el contexto del editor.",
        prompt:
          "Actúa como un Lead Engineer ultra-exigente (\"Abogado del Diablo\") realizando una revisión de código. Te proporcionaré un bloque de código. Tu objetivo NO es decirme que está bien. Tu objetivo es buscar activamente vulnerabilidades de seguridad, ineficiencias asintóticas (Big O), violaciones de principios SOLID y problemas de mantenibilidad. Entrégame un reporte estructurado criticando el código, seguido de una refactorización optimizada, documentada y lista para producción.",
      },
      {
        id: "debugging-causal",
        title: "Asistente de «vibe coding» y debugging causal",
        when: "Cuando hay un error y no te basta con el parche: quieres la causa raíz.",
        where: "Google Gemini. Pega el error, el log o el stack trace en [Insertar error o log].",
        prompt:
          "Actúa como un experto en debugging causal. Tengo el siguiente error en mi aplicación: [Insertar error o log]. En lugar de solo darme el código corregido, realiza un análisis de causa raíz (Root Cause Analysis). Explícame: 1. Por qué ocurre este error a nivel de memoria, compilación o red. 2. Qué falló en mi lógica original. 3. Tres enfoques diferentes para solucionarlo (desde un hotfix rápido hasta una refactorización estructural). Luego, dame el código de la solución más óptima y escalable.",
      },
    ],
  },
  {
    title: "Diseño UI/UX y generación creativa",
    intro:
      "Para extraer estilos visuales, armar diagramas con carácter y auditar interfaces.",
    color: "#FBBC05",
    onColor: "#202124",
    surface: "#fef7e0",
    prompts: [
      {
        id: "ingenieria-inversa-visual",
        title: "Ingeniería inversa de prompts visuales",
        when: "Cuando viste una imagen (Pinterest, Behance) y quieres replicar su estética sin que se vea genérica.",
        where: "Google Gemini con visión: sube la imagen y pega este prompt en el mismo chat.",
        prompt:
          "Actúa como un experto Prompt Engineer y Director de Arte. Analiza la imagen adjunta y realiza ingeniería inversa para extraer su \"código fuente visual\". Dame una lista detallada de palabras clave técnicas sobre su estilo visual, paleta de colores, técnica de renderizado, tipo de iluminación, texturas de la superficie (ej. impasto, grabado, render 3D) y atmósfera general. Redacta el prompt exacto, con pesos y parámetros, que debo usar en un generador de imágenes de IA para replicar esta estética exacta sin que se vea genérico.",
      },
      {
        id: "diagramas-tactiles",
        title: "Generador de diagramas y mapas de impacto táctiles",
        when: "Cuando necesitas un esquema o mapa conceptual que no se vea como un diagrama corporativo.",
        where: "Google Gemini para redactar el prompt; luego un generador de imágenes con el texto que te entregue.",
        prompt:
          "Actúa como un ilustrador científico y artista de texturas. Crea la descripción visual altamente detallada de un diagrama/mapa conceptual sobre [Insertar Tema]. El estilo debe rechazar cualquier estética corporativa genérica 3D. Utiliza el siguiente medio físico: 'aplicación de impasto grueso con espátula' y 'grabado intrincado en placa de cobre industrial'. Detalla cómo la información técnica, los nodos y las conexiones se integran orgánicamente en estas texturas analógicas. Entrégame el prompt definitivo para generar esta obra.",
      },
      {
        id: "consultor-accesibilidad",
        title: "Consultor de accesibilidad y heurísticas UX",
        when: "Al revisar una interfaz: fricción, contraste, lectores de pantalla o microinteracciones.",
        where: "Google Gemini. Describe la UI o adjunta capturas de pantalla.",
        prompt:
          "Asume el rol de un Investigador de UX y Consultor de Accesibilidad (WCAG 2.2). Te describiré (o mostraré) una interfaz de usuario. Audita la interfaz basándote en las 10 Heurísticas de Jakob Nielsen y en estándares de contraste, legibilidad y accesibilidad para lectores de pantalla. Señala los puntos de fricción cognitivos que podrían frustrar a un usuario final y proponme micro-interacciones (ej. usando Framer Motion) para mejorar la retroalimentación del sistema.",
      },
    ],
  },
  {
    title: "Videos en Gemini Omni",
    intro:
      "Para dirigir clips en Gemini Omni: un plano claro, cámara, luz, audio y edición conversacional. Omni recorta por defecto; si quieres un solo take, hay que pedirlo.",
    color: "#174ea6",
    onColor: "#ffffff",
    surface: "#d2e3fc",
    prompts: [
      {
        id: "omni-ingeniero-prompt",
        title: "Ingeniero de prompts para Gemini Omni",
        when: "Tienes una idea vaga («un video de mi prototipo») y necesitas el brief que Omni sí puede filmar.",
        where: "Google Gemini en texto (no hace falta modo video todavía). Luego pega la salida en Gemini Omni o en Google AI Studio con gemini-omni-1.1-flash.",
        prompt:
          "Actúa como director de fotografía y prompt engineer de Gemini Omni (video nativo, no Veo). Voy a darte una idea cruda; tú NO generes el video: redacta UN solo prompt listo para pegar en Omni.\n\nMi idea: [DESCRIBE EL CLIP EN 1–3 FRASES].\nDuración objetivo: [3–10 s]. Formato: [16:9 o 9:16].\nIdioma on-screen / voz: [español u otro / ninguno].\nReferencias que subiré: [ninguna / foto de personaje / still de producto / storyboard].\n\nEl prompt final DEBE incluir, en este orden, frases concretas (no listas con viñetas):\n1. Toma y movimiento de cámara (wide-angle, medium, close-up; static / locked off / push in / punch in / dolly zoom / handheld / oner).\n2. Sujeto, vestuario y acción física (qué se mueve, con qué ritmo).\n3. Lugar, hora y luz (de dónde viene la luz y qué efecto crea).\n4. Estilo (photoreal, cinematic, anime, claymation, smartphone, etc.).\n5. Audio (música, ambiente, diálogo o «No dialogue»).\n6. Cortes: o «In a single continuous shot. No scene cuts.» o una timeline [0-3s] / [3-6s] / [6-10s].\n7. Texto en pantalla, si aplica, entre comillas y legible.\n\nRestricciones: no pidas 4K ni parámetros de API. No inventes marcas de lente. Si mi idea es ambigua, asume el escenario más cinematográfico y márcalo al final en una línea «Supuestos:». Entrega SOLO el prompt en inglés técnico de dirección (Omni responde mejor así), más una línea en español con qué archivos debo adjuntar.",
      },
      {
        id: "omni-brief-direccion",
        title: "Brief de dirección (texto a video)",
        when: "Vas a generar el primer clip desde cero y quieres control de encuadre, luz y clima, no un video genérico.",
        where: "Gemini Omni en gemini.google.com (modo video) o Google AI Studio, modelo Gemini Omni Flash. Sustituye los corchetes y genera; no regeneres a ciegas: edita en el mismo hilo.",
        prompt:
          "A [SHOT: wide-angle / medium / close-up] [CAMERA: static locked-off / slow push in / handheld / drone] of [SUBJECT AND WARDROBE], [ACTION WITH PACE AND PHYSICS], in [LOCATION, TIME OF DAY]. Lit by [LIGHT SOURCE AND QUALITY: crisp sun / warm practicals / ethereal overcast / neon off-screen]. Mood: [realistic / cinematic / grounded / majestic]. Style: [photoreal live-action / film camera / natural smartphone / editorial].\n\nIn a single continuous shot. No scene cuts.\nDuration: about [6] seconds. Aspect: [16:9].\nSound design: [ambient + optional music]. No dialogue. No extra sound effects. No embellishments.\nMicro-detail: natural expression, believable timing, rich but unforced background.\n\nSubject to film: [QUÉ DEBE VERSE, en español o inglés]. Keep the world physically coherent.",
      },
      {
        id: "omni-plano-secuencia",
        title: "Plano secuencia (oner, sin cortes)",
        when: "Omni te arma un montaje con varios shots y tú querías un solo take continuo.",
        where: "Gemini Omni, en el mismo chat del clip o al generar de nuevo. Si ya tienes el video, pide el cambio y añade «Keep everything else the same».",
        prompt:
          "Reshoot this as one continuous shot / oner. No scene cuts. No jump cuts. No coverage. Camera: [static locked-off / slow lateral track / handheld following the subject]. Start on [FIRST BEAT], hold through [MIDDLE ACTION], end on [LAST BEAT] without cutting away.\n\nKeep the same subject, wardrobe, location and lighting. Keep everything else the same.\nSound design stays continuous (no music stingers on imaginary cuts). No dialogue unless the subject already speaks.",
      },
      {
        id: "omni-imagen-a-video",
        title: "De foto o still a video (consistencia)",
        when: "Tienes un still (foto real, producto o imagen de Nano Banana) y quieres que se mueva sin cambiar al personaje u objeto.",
        where: "Gemini Omni. Adjunta la imagen ANTES de pegar el prompt. Si hay varias, nómbralas en orden de adjunto (primera = personaje, segunda = estilo, etc.).",
        prompt:
          "Use the given image(s) as references for video generation. The images should not be used as literal initial frames unless I say so.\n\n<IMAGE_REF_0> is the hero (face, body, clothes, colors). Keep likeness, proportions and wardrobe identical in every frame.\nOptional: <IMAGE_REF_1> is style and palette only.\nIf I also attached a starting frame: <FIRST_FRAME> begin exactly on that composition.\n\nAction: [DESCRIBE MOTION — camera + subject + environment; avoid «make it move»].\nIn a single continuous shot. No scene cuts.\nLighting matches the reference. Photoreal unless the still is illustrated.\nSound design: [ambiente]. No dialogue.\nKeep everything not named here the same as the reference.",
      },
      {
        id: "omni-edicion-iterativa",
        title: "Edición conversacional (sin regenerar)",
        when: "El clip ya está al ~80 %: quieres un cambio puntual (fondo, objeto, cámara, estilo) y conservar el resto.",
        where: "El mismo hilo de Gemini Omni donde salió el video. Prompts cortos; si escribes una novela, Omni cambia de más.",
        prompt:
          "Keep everything else the same.\nChange ONLY this: [UN CAMBIO: p. ej. «Change the camera angle to over the shoulder» / «Make this video claymation» / «Add a cat that jumps onto the lap» / «Make the phone invisible» / «Change the text on the sign to say \"…\"»].\nDo not restage the scene. Do not recast. Do not change lighting, wardrobe, location or audio unless that is the one change.\nNo extra sound effects. No embellishments.",
      },
      {
        id: "omni-audio-texto-tiempo",
        title: "Audio, texto en pantalla y timings",
        when: "El video se ve bien pero el sonido, el copy o el ritmo de cortes están mal (o quieres un sizzle con palabras a tiempo).",
        where: "Gemini Omni, al generar o en una edición del mismo chat. Si solo cambias audio/texto, termina con «Keep everything else the same».",
        prompt:
          "Keep everything else the same unless a beat below needs a cut.\n\nAudio: [silence / no dialogue / include calm background music / high-energy techno beat / low tinny radio in the background]. No extra sound effects unless listed.\nOn-screen text (readable, correct spelling): [ninguno / una frase entre comillas / word-by-word].\nIf word-by-word: one word on screen at a time: \"[palabra1, palabra2, …]\". Each word ~1s, different animated style, paced to the rhythm. No dialogue.\n\nTimeline (0s = start of this clip or of the extension):\n[0-3s] [BEAT]\n[3-6s] [BEAT]\n[6-10s] [BEAT]\nAt [5s] [audio o acción, p. ej. the chorus starts].\nIf I asked for a single shot, ignore new cuts and keep one continuous shot.",
      },
      {
        id: "omni-extender-storyboard",
        title: "Extender escena, storyboard y primer/último frame",
        when: "El clip de ~10 s funciona y quieres continuar hasta 40 s, o ya tienes storyboard / frame inicial y final.",
        where: "Gemini Omni 1.1 en el mismo hilo («Extend this video») o con imágenes: storyboard, first frame y last frame adjuntos en ese orden.",
        prompt:
          "Extend this video. The scene continues. One continuous movement unless I request a cut.\nWhat happens next: [ACCIÓN, CÁMARA Y EMOCIÓN]. Audio: [the music continues into the chorus / ambiente igual / cambio concreto]. Same characters, wardrobe and space.\nIf using timestamps, 0s is the START of the extension, not the original clip. After [2s], [qué ocurre].\n\nIf I attached a storyboard image: Follow the story exactly in order, starting top left. Entire story in 10 seconds. Cinematic.\nIf I attached start/end stills: <FIRST_FRAME> <LAST_FRAME> interpolate a continuous shot, no jump cuts. Camera path: [whip-pan / orbit / push in / zoom]. Final frame must match the last image.\nFor a loop: use the same image as first frame and last frame.\nKeep everything else the same.",
      },
    ],
  },
  {
    title: "Bienestar y carga mental en la universidad",
    intro:
      "Para bajar la sobrecarga cognitiva: priorizar, cerrar bucles mentales y organizar el semestre sin que Gemini se haga pasar por terapeuta. Si hay crisis, ideación suicida o no puedes funcionar, busca ayuda humana (servicios de psicología de tu universidad o líneas de emergencia locales); estos prompts no diagnostican ni tratan.",
    color: "#00897B",
    onColor: "#ffffff",
    surface: "#e0f2f1",
    prompts: [
      {
        id: "vaciado-cabeza",
        title: "Vaciado de cabeza (externalizar la carga)",
        when: "Cuando tienes mil frentes abiertos, no sabes por dónde empezar y la ansiedad viene de la lista invisible en tu mente.",
        where: "Google Gemini. Escribe libremente o pega un dump de pendientes; no hace falta que esté ordenado.",
        prompt:
          "Actúa como un coach de carga cognitiva para estudiantes universitarios (NO eres terapeuta ni das diagnóstico clínico). Voy a vaciar todo lo que tengo en la cabeza: materias, entregas, trabajo, trámites, temas personales y lo que me preocupa sin forma.\n\nMi dump:\n[PEGA AQUÍ TODO, SIN FILTRAR]\n\nHaz esto, en este orden:\n1. Reorganiza en cuatro columnas Markdown: Académico urgente | Académico importante no urgente | Logística/vida | Ruido (preocupaciones sin acción clara).\n2. Para cada ítem académico, estima esfuerzo (S/M/L) y fecha real o «sin fecha».\n3. Señala bucles abiertos (cosas que solo ocupan RAM mental) y proponme el siguiente paso físico mínimo (menos de 15 min) para cerrarlos o aparcarlos.\n4. Elige SOLO tres prioridades para las próximas 48 horas y explica por qué el resto puede esperar.\n5. Termina con una frase de permiso explícito para no hacer el resto hoy.\n\nRestricciones: no moralices, no digas «solo relájate», no minimices. Si detectas señales de crisis o riesgo (autolesión, ideación suicida, violencia), interrumpe el plan y dime con claridad que necesito ayuda humana inmediata y a dónde acudir en mi contexto universitario.",
      },
      {
        id: "triage-semana",
        title: "Triage de la semana sobrecargada",
        when: "Al inicio de una semana imposible: parciales, entregas y actividades al mismo tiempo.",
        where: "Google Gemini. Sustituye los corchetes con tu calendario real.",
        prompt:
          "Actúa como un estratega académico de semestres reales (NO coach motivacional vacío). Esta es mi semana:\n\nMaterias y pesos: [LISTA CON % O IMPORTANCIA]\nEntregas y exámenes (con fechas y horas): [LISTA]\nHoras reales disponibles (sueño, transporte, trabajo): [NÚMERO Y BLOQUES]\nEnergía subjetiva hoy (1–10): [N]\nRestricciones no negociables: [ej. trabajo 4h, cuidado familiar]\n\nDiseña un plan de triage:\n1. Matriz impacto × urgencia: qué proteger, qué reducir al mínimo viable, qué negociar o dejar caer con el menor daño.\n2. «Definición de hecho» mínima por entrega (qué cuenta como entregable aceptable, no perfecto).\n3. Bloques de calendario para 5 días, con buffers y una franja de recuperación obligatoria.\n4. Una regla anti-perfeccionismo por materia.\n5. Señales de que debo parar y dormir aunque quede trabajo.\n\nSi el plan no cabe en mis horas, dilo con claridad y propon cortes concretos. No inventes horas que no tengo.",
      },
      {
        id: "ansiedad-examen",
        title: "Contenedor de ansiedad pre-examen",
        when: "Antes de un parcial o final, cuando el miedo a fallar te impide estudiar o te hace sobreestudiar sin método.",
        where: "Google Gemini, en un chat corto la noche o la mañana del examen.",
        prompt:
          "Actúa como un acompañante de regulación cognitivo-conductual breve para estudiantes (NO eres psicólogo clínico ni sustituyes terapia). Tengo un examen de [MATERIA] el [FECHA/HORA]. Me siento así: [DESCRIBE SÍNTOMAS: rumiación, taquicardia, bloqueo, procrastinación]. Tiempo que me queda: [HORAS]. Lo que ya sé vs. lo que me asusta: [TEXTO].\n\nHaz esto:\n1. Separa hechos de catástrofes imaginarias en dos listas.\n2. Dame un plan de estudio de [X] horas con ciclos cortos (qué practicar, qué NO releer).\n3. Un guion de 60 segundos para cuando me bloquee en el examen (respiración + reencuadre + próximo paso).\n4. Tres límites: cuándo dejo de estudiar, qué sacrifico y qué no revisaré.\n5. Pregúntame UNA sola cosa si te falta dato crítico; si no, no interrogues.\n\nProhibido: prometer que «todo saldrá bien», patologizar o recetar. Si describo crisis o riesgo, prioriza derivarme a ayuda humana.",
      },
      {
        id: "minimo-viable-academico",
        title: "Mínimo viable académico (anti-perfeccionismo)",
        when: "Cuando una tarea o proyecto te paraliza porque «tiene que quedar perfecto» y se te come la semana.",
        where: "Google Gemini. Describe la rúbrica o lo que pide el profesor.",
        prompt:
          "Actúa como un editor académico brutalmente pragmático. La tarea es: [DESCRIPCIÓN]. Rúbrica o criterios del profesor: [PEGA O RESUME]. Tiempo real que puedo dedicar: [HORAS]. Nivel que necesito (aprobar / bien / sobresaliente): [ELIGE UNO].\n\nEntrégame:\n1. La versión Mínimo Viable que cumple la rúbrica (estructura, secciones, extensión).\n2. Qué es «nice to have» y debe ir a una lista B que solo abro si sobra tiempo.\n3. Checklist de 30 minutos finales antes de entregar.\n4. Frases que me estoy diciendo que alimentan el perfeccionismo y un contraargumento concreto por cada una.\n5. Un criterio explícito de «cerrar y enviar» (condiciones observables).\n\nNo reescribas el trabajo completo a menos que te lo pida. Tu objetivo es que yo entregue a tiempo sin destruirme.",
      },
      {
        id: "senales-agotamiento",
        title: "Radar de agotamiento y límites del semestre",
        when: "Cuando llevas semanas al límite y no sabes si es «normal de la carrera» o estás quemándote.",
        where: "Google Gemini. Responde con honestidad; puedes iterar en el mismo chat.",
        prompt:
          "Actúa como un orientador de bienestar estudiantil basado en evidencia de carga y burnout académico (NO diagnostiques trastornos ni digas «tienes depresión/ansiedad»). Voy a describir cómo estoy funcionando.\n\nSueño: [ ]\nÁnimo y motivación: [ ]\nRendimiento vs. esfuerzo: [ ]\nCuerpo (dolor, enfermedad, apetito): [ ]\nVínculos y aislamiento: [ ]\nUso de estimulantes/cafeína/all-nighters: [ ]\nLo que «debería» estar haciendo vs. lo que puedo: [ ]\n\nResponde con:\n1. Un semáforo (verde/ámbar/rojo) de sobrecarga con criterios observables, no juicios.\n2. Tres ajustes de carga para las próximas 72 horas (académicos y de recuperación).\n3. Conversaciones concretas que podría tener (profesor, tutor, familia) con un borrador de mensaje corto.\n4. Señales de que debo escalar a apoyo profesional o servicios de psicología de mi universidad.\n5. Un plan B académico si bajo el ritmo (qué materias proteger).\n\nTono: directo, respetuoso, sin romanticizar el sufrimiento universitario. Si hay riesgo de daño, prioriza la derivación.",
      },
      {
        id: "despues-del-golpe",
        title: "Después del golpe (reprobación o mala nota)",
        when: "Justo después de un resultado malo, cuando la vergüenza o la rumiación no te dejan planear el siguiente paso.",
        where: "Google Gemini, el mismo día o al día siguiente del resultado.",
        prompt:
          "Actúa como un mentor académico que ha visto reprobaciones reales (NO eres terapeuta). Acabo de obtener este resultado: [NOTA / REPROBÉ / NO ENTREGUÉ] en [MATERIA]. Contexto: [oportunidades, peso del examen, lo que pasó]. Lo que me estoy diciendo a mí: [TEXTO].\n\nHaz esto:\n1. Valida la emoción en 2–3 líneas sin endulzar.\n2. Separa identidad («soy un fracaso») de evento («este resultado ocurrió»).\n3. Análisis causal útil: controlable vs. no controlable; sin culpar de más ni exculpar de más.\n4. Plan de 7 días: trámites (si aplica), conversación con profesor, plan de estudio del siguiente corte, y un día sin «arreglarlo todo».\n5. Una micro-victoria académica para mañana que no dependa de motivación alta.\n\nProhibido: toxic positivity, compararme con genios, o decir que «el fracaso es un regalo» sin plan. Si expreso desesperanza profunda o riesgo, deriva a ayuda humana.",
      },
      {
        id: "limites-digitales-estudio",
        title: "Límites digitales y foco sin culpa",
        when: "Cuando el celular, las redes o el multitasking te roban las horas de estudio y luego te castigas.",
        where: "Google Gemini. Sé concreto con tus apps y horarios.",
        prompt:
          "Actúa como un diseñador de sistemas de atención para estudiantes (estilo «environment design», no fuerza de voluntad mágica). Mi realidad: estudio [DÓNDE], me distraigo con [APPS/SITIOS], mis bloques posibles son [HORARIOS], y mi meta de hoy/semana es [META].\n\nDiseña:\n1. Un protocolo de foco de 90 minutos (antes / durante / después) realista para mi contexto.\n2. Reglas if-then para cuando abra el teléfono («si abro X, entonces…»).\n3. Qué eliminar, qué posponer y qué permitir sin culpa (incluyendo ocio programado).\n4. Cómo recuperar una tarde perdida sin castigarme hasta la madrugada.\n5. Un cierre de día de 5 minutos para no cargar pendientes a la cama.\n\nNo me pidas disciplina heroica. Prefiero fricción ambiental y planes cortos. Si mi meta es inhumana, redúcela.",
      },
    ],
  },
  {
    title: "Empleabilidad y desarrollo profesional",
    intro:
      "Para destacar en vacantes tech: CV, entrevistas y desglose de un producto en tareas.",
    color: "#34A853",
    onColor: "#ffffff",
    surface: "#e6f4ea",
    prompts: [
      {
        id: "cv-ats",
        title: "Optimizador de CV basado en métricas (ATS)",
        when: "Cuando vas a postular y necesitas alinear tu CV con una vacante concreta.",
        where: "Google Gemini. Pega tu currículum y la descripción del puesto en el mismo chat.",
        prompt:
          "Actúa como un Technical Recruiter Senior para empresas FAANG. Aquí está mi currículum actual y la descripción de la vacante a la que aspiro. Primero, evalúa la \"tasa de coincidencia\" entre mi perfil y la vacante basándote en palabras clave y requisitos (ATS). Luego, reescribe mis viñetas de experiencia utilizando el formato XYZ de Google (Logré [X] medido por [Y], haciendo [Z]). Cuantifica mis logros e infiere métricas realistas si mis descripciones son demasiado vagas, para que yo pueda validarlas.",
      },
      {
        id: "entrevista-tecnica",
        title: "Simulador de entrevista técnica y conductual",
        when: "En los días previos a una entrevista, para entrenar en tiempo real.",
        where: "Google Gemini en un chat largo; responde una pregunta a la vez.",
        prompt:
          "Actúa como un Engineering Manager entrevistándome para una posición de Full-Stack Developer. Llevaremos a cabo una entrevista técnica simulada. Hazme una pregunta a la vez, alternando entre diseño de sistemas, algoritmos/estructuras de datos y preguntas conductuales (metodología STAR). Espera mi respuesta. Sé crítico: si mi respuesta técnica es subóptima o mi respuesta conductual divaga, indícalo, hazme preguntas para llevarme al límite de mi conocimiento y luego proporciona la respuesta ideal de un candidato de alto nivel.",
      },
      {
        id: "sprints-requisitos",
        title: "Planificador de sprints y desglose de requisitos",
        when: "Tienes una idea grande y necesitas épicas, historias de usuario y un MVP realista.",
        where: "Google Gemini. Sustituye [Insertar descripción] por tu producto o plataforma.",
        prompt:
          "Actúa como un Scrum Master y Technical Product Manager. Tengo la siguiente idea para una plataforma o producto: [Insertar descripción]. Desglosa este proyecto en Épicas e Historias de Usuario claras y accionables. Para cada Historia de Usuario, redacta los Criterios de Aceptación precisos, los requisitos técnicos, las dependencias y una estimación de complejidad (Story Points). Ayúdame a definir qué constituye exactamente el Producto Mínimo Viable (MVP) para la primera fase de desarrollo.",
      },
    ],
  },
]
