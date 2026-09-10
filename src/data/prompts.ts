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
