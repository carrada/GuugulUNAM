export type RoadmapModule = {
  id: string
  title: string
  goal: string
  instructions: string
  prompt: string
}

export type StudyRoadmap = {
  slug: string
  title: string
  tag: string
  color: string
  onColor: string
  surface: string
  body: string
  howTo: string
  duration: string
  modules: RoadmapModule[]
}

export const STUDY_ROADMAPS: StudyRoadmap[] = [
  {
    slug: "examen-por-practica",
    title: "Estudiar para un examen que exige práctica de ejercicios",
    tag: "Práctica deliberada",
    color: "#4285F4",
    onColor: "#ffffff",
    surface: "#e8f0fe",
    duration: "7 módulos en secuencia · Gemini como entrenador de problemas",
    body: "Ruta para materias donde el examen se gana resolviendo, no releyendo: cálculo, álgebra lineal, probabilidad, física, estructuras de datos o cualquier curso de ejercicios. Gemini no te suelta la solución de entrada: te pone un problema, espera tu intento y corrige el método.",
    howTo:
      "Abre un chat nuevo en Gemini al empezar el roadmap. Copia el prompt del módulo 1, sustituye los corchetes y trabaja ahí. Cuando el módulo te pida pasar al siguiente, copia el prompt del módulo 2 en el mismo chat (o en uno nuevo si se saturó el contexto) y sigue la secuencia. No saltes módulos: cada uno asume el anterior.",
    modules: [
      {
        id: "diagnostico",
        title: "Módulo 1 · Diagnóstico del temario",
        goal: "Que Gemini arme el mapa del examen y detecte en qué tipos de ejercicio sueles fallar, antes de practicar a ciegas.",
        instructions:
          "Pega este prompt y adjunta temario, guía, exámenes pasados o apuntes. Si no tienes archivo, escribe la materia, el profesor y los temas. Responde con honestidad las preguntas de diagnóstico. No pidas ejercicios todavía.",
        prompt: `Actúa como un entrenador de exámenes de nivel universitario, experto en práctica deliberada. Mi materia es [MATERIA] y el examen es el [FECHA APROXIMADA / PARCIAL O FINAL]. Nivel esperado: [LICENCIATURA / SEMESTRE].

Adjunto o describo el temario, la guía y, si los hay, exámenes anteriores.

NO me des una clase ni una lista de fórmulas. Haz esto, en este orden:
1. Divide el temario en tipos de ejercicio (no en "temas de libro"): qué me van a pedir hacer en el examen.
2. Para cada tipo, indica dificultad típica, tiempo estimado en examen y qué habilidad se evalúa (cálculo, modelado, casos borde, demostración corta, etc.).
3. Hazme 8 preguntas de diagnóstico de opción breve para estimar mi nivel actual. Espera mis respuestas.
4. Con mis respuestas, clasifícame cada tipo de ejercicio en: débil / intermedio / sólido.
5. Propón un plan de 6 sesiones de práctica, de la más débil a la más sólida, sin adelantar problemas todavía.

Restricción: no resuelvas ejercicios en este módulo. Si me pides datos que no di, asume el escenario más exigente de un examen de ciencias e indícalo.`,
      },
      {
        id: "catalogo",
        title: "Módulo 2 · Catálogo de patrones de problema",
        goal: "Reconocer el patrón de un ejercicio en 20 segundos: qué piden, qué datos sobran y qué técnica usar.",
        instructions:
          "Copia este prompt después del diagnóstico. Si Gemini ya tiene el mapa, diles que continúe con esos tipos de ejercicio. Si empiezas chat nuevo, pega un resumen del módulo 1.",
        prompt: `Continuamos el entrenamiento para el examen de [MATERIA]. Ya tienes (o te resumo) los tipos de ejercicio y mis zonas débiles: [PEGA EL RESUMEN DEL MÓDULO 1 O DILE QUE USE EL CONTEXTO PREVIO].

Ahora construye un CATÁLOGO DE PATRONES. Para cada tipo de ejercicio débil o intermedio:
1. Nombre del patrón (corto).
2. Cómo se reconoce en el enunciado (palabras clave, datos típicos, dibujo o tabla).
3. Primera decisión que debo tomar (qué ecuación, qué cambio de variable, qué caso).
4. Un error clásico en este patrón.
5. La plantilla de ataque en 4 pasos, sin números todavía.

Al final, dame 6 enunciados NUEVOS (solo el enunciado, sin solución) mezclados, y para cada uno pregúntame: "¿Qué patrón es y cuál es tu primer paso?". Espera mi respuesta uno por uno. Si me equivoco de patrón, no me des la solución del problema: corrige solo la clasificación y pide que reintente el primer paso.

No resuelvas los ejercicios completos en este módulo.`,
      },
      {
        id: "practica-guiada",
        title: "Módulo 3 · Práctica guiada (un problema a la vez)",
        goal: "Resolver con método, en voz alta, mientras Gemini solo interviene si te atoras o si el camino es inválido.",
        instructions:
          "Este es el núcleo del roadmap. Trabaja 45–90 minutos. Pide problemas de un solo tipo débil. No copies la solución: escribe tu intento. Cuando completes 5 problemas bien razonados, pasa al módulo 4.",
        prompt: `Actúa como tutor de práctica deliberada para [MATERIA]. Enfócate SOLO en este tipo de ejercicio: [TIPO O PATRÓN DÉBIL DEL MÓDULO 1].

Reglas estrictas:
- Dame UN problema a la vez, de dificultad de examen, original (no copies problemas famosos palabra por palabra).
- NO me des la solución, la respuesta numérica ni el siguiente paso a menos que yo me atasque o te lo pida con la frase "estoy atascado".
- Espera mi intento completo o mi primer bloque de trabajo.
- Al revisar, evalúa el MÉTODO: hipótesis, notación, pasos, casos borde y unidades. Señala el primer error y detente ahí para que yo lo corrija.
- Si mi solución es correcta, pide una justificación de 2 líneas de por qué el método funciona. Luego sube un poco la dificultad.
- Si pido la respuesta directo, niégate y formula una pregunta socrática.

Empieza con un problema de calentamiento (nivel examen, no trivial) y espera.`,
      },
      {
        id: "errores",
        title: "Módulo 4 · Clínica de errores típicos",
        goal: "Convertir tus fallos en una lista corta de alarmas que puedas revisar en 30 segundos durante el examen.",
        instructions:
          "Pega copias de tus intentos, fotos de ejercicios o describe en qué te equivocaste en el módulo 3. Si no guardaste nada, dile a Gemini que reconstruya los errores más frecuentes de esa materia.",
        prompt: `Eres un revisor de exámenes. Materia: [MATERIA]. Aquí están mis intentos, errores o notas del módulo de práctica: [PEGA ERRORES, CAPTURAS DESCRITAS O DILE QUE USE EL CHAT PREVIO].

Haz una CLÍNICA DE ERRORES, no un resumen del tema:
1. Agrupa mis fallos en máximo 7 categorías (álgebra, hipótesis, casos, notación, interpretación, tiempo, etc.).
2. Para cada categoría: un nombre memorable, un ejemplo de cómo se ve en un examen, y una pregunta de 5 segundos que debo hacerme antes de seguir.
3. Diseña una checklist de revisión de 8 casillas para los últimos 5 minutos del examen.
4. Dame 4 mini-ejercicios (enunciado breve) diseñados para PROVOCAR exactamente esos errores. Uno a la vez. Espera mi intento. Si caigo en el error, nómbralo y pide rehacer solo el paso fallido.

No me des un formulario general. Todo debe salir de MIS fallos o, si faltan datos, de los errores más penalizados en exámenes de esta materia, y debes marcarlo como supuesto.`,
      },
      {
        id: "mixtos",
        title: "Módulo 5 · Set mixto sin pistas",
        goal: "Entrenar la decisión de qué técnica usar cuando los problemas vienen revueltos, como en el examen real.",
        instructions:
          "Pide un set de 6 problemas mezclados. No preguntes de qué tema es cada uno. Cronometra si puedes. Al terminar el set, pide el veredicto y pasa al simulacro.",
        prompt: `Simula un bloque de examen de [MATERIA] de 50 minutos. Dame un SET de 6 problemas mezclados de los tipos del temario, en un solo mensaje, numerados, SIN etiquetar el tema.

Condiciones:
- Dificultad realista de [PARCIAL / FINAL].
- Al menos uno debe combinar dos temas.
- Al menos uno debe tener un dato irrelevante.
- No incluyas soluciones.
- Al final del set, dime solo: "Cuando termines, pega tus respuestas y el tiempo que te tomó. No me pidas pistas intermedias."

Cuando yo entregue mis soluciones:
1. Califica como profesor: correcto / parcialmente correcto / incorrecto, con puntos.
2. Para cada error, indica si fue de patrón, de cálculo o de lectura.
3. Ordena los 6 por "prioridad de repráctica".
4. No reescribas todo el temario; cierra con las 3 acciones de práctica de mañana.`,
      },
      {
        id: "simulacro",
        title: "Módulo 6 · Simulacro cronometrado",
        goal: "Hacer un examen completo con las mismas reglas de tiempo, sin consultar el chat a mitad.",
        instructions:
          "Copia el prompt, recibe el examen, cierra o ignora Gemini, resuelve en papel o en un documento, y al terminar pega todo de una vez. Trata este módulo como el examen verdadero.",
        prompt: `Eres el profesor que aplica el examen de [MATERIA]. Genera un EXAMEN COMPLETO de [N] problemas (sugiere 5 a 8 si no indico N), para resolverse en [MINUTOS, p. ej. 90].

Formato:
- Portada: instrucciones, puntaje por problema, qué se permite (calculadora sí/no).
- Problemas en orden de dificultad creciente, con subincisos si es típico de la materia.
- Un problema debe exigir explicación breve, no solo el número.
- NO incluyas soluciones, rúbrica ni pistas.

Cuando yo pegue mi examen resuelto:
- Califica con rúbrica (método 60%, resultado 30%, claridad 10%) salvo que el estilo de mi curso sea otro.
- Escribe la solución modelo SOLO de los que fallé, paso a paso, señalando dónde se rompió mi argumento.
- Dame una nota estimada y tres problemas "espejo" (mismo patrón, números distintos) para rehacer mañana, sin solución.`,
      },
      {
        id: "cierre",
        title: "Módulo 7 · Cierre: plan de las 48 horas previas",
        goal: "Salir del ciclo infinito de 'un ejercicio más' y llegar al examen con una rutina corta y realista.",
        instructions:
          "Úsalo 1 o 2 días antes. Pega tus calificaciones del simulacro. No empieces un tema nuevo aquí.",
        prompt: `Con base en mi simulacro y errores de [MATERIA] [PEGA NOTA, TEMAS FALLIDOS O DILE QUE USE EL CONTEXTO], arma el plan de las 48 horas previas al examen.

Quiero:
1. Qué NO estudiar (temas sólidos: solo checklist de 2 minutos).
2. Tres bloques de práctica de 40 minutos máximo, cada uno con un patrón específico y un criterio de "ya está".
3. Una rutina de 12 minutos la mañana del examen (qué revisar y qué no abrir).
4. Un prompt de 5 líneas que yo pueda pegar en Gemini el día del examen SOLO si me bloqueo en un tipo de problema mientras estudio, no durante el examen.

Tono: concreto, sin motivación vacía, sin decirme que "confíe en mí". Si mi simulacro fue bajo, prioriza los 2 patrones que más puntos recuperan.`,
      },
    ],
  },
  {
    slug: "memorizar-conceptos",
    title: "Memorizar conceptos con recuperación activa",
    tag: "Memoria a largo plazo",
    color: "#FBBC05",
    onColor: "#202124",
    surface: "#fef7e0",
    duration: "7 módulos en secuencia · Gemini como examinador de memoria",
    body: "Ruta para cuando el curso exige retener definiciones, taxonomías, teoremas con nombre, protocolos, artículos de ley o arquitectura de un sistema. No es releer: es recuperar, espaciar y conectar. Gemini te pregunta; tú contestas sin mirar apuntes.",
    howTo:
      "Usa un chat de Gemini por materia. Copia los prompts en orden. En los módulos de fichas, responde de memoria. Si miras el apunte, dilo: el sistema cambia el intervalo. Sustituye [TEMA] por el capítulo exacto, no por 'toda la materia' de un golpe.",
    modules: [
      {
        id: "inventario",
        title: "Módulo 1 · Inventario de lo que sí hay que memorizar",
        goal: "Separar lo que se memoriza de lo que se entiende o se deduce, para no gastar memoria en basura.",
        instructions:
          "Adjunta temario o apuntes. Pide a Gemini que clasifique, no que resuma el libro. Revisa la lista: tú decides qué entra al mazo.",
        prompt: `Actúa como un diseñador de sistemas de memoria para estudiantes universitarios. Tema: [TEMA / MATERIA / CAPÍTULO].

Adjunto temario o apuntes. Clasifica TODO el contenido en tres cubetas:
A) Hay que memorizar (definiciones, nombres, criterios, excepciones, valores, pasos de un protocolo).
B) Hay que entender (se reconstruye con razonamiento; memorizarlo es ineficiente).
C) Hay que saber hacer (ejercicio o procedimiento; va a otro tipo de estudio).

Para la cubeta A, genera un inventario numerado. Cada ítem debe tener:
- enunciado preciso de lo que debo poder recitar o reconocer
- por qué aparece en examen (reconocer / comparar / aplicar)
- una pregunta de recuperación (no de opción múltiple todavía)

Límite: máximo 40 ítems. Si el capítulo es enorme, prioriza lo examinable y di qué dejaste fuera. No me des un resumen narrativo.`,
      },
      {
        id: "fichas",
        title: "Módulo 2 · Fichas de recuperación activa",
        goal: "Convertir el inventario en preguntas que te obliguen a producir la respuesta, no a reconocerla.",
        instructions:
          "Trabaja de 20 a 25 fichas por sesión. Responde tú primero. Gemini califica 'correcto / incompleto / incorrecto' y reformula la ficha si estaba mal hecha.",
        prompt: `Eres un sistema de fichas (active recall) para [TEMA]. Aquí está el inventario de ítems a memorizar: [PEGA LA LISTA DEL MÓDULO 1 O USA EL CONTEXTO].

Genera fichas con este formato estricto:
FRENTE: una pregunta que exija producir (definir, listar, contrastar, dar el criterio).
REVERSO: la respuesta en 3 a 8 líneas, con una frase "trampa" de lo que la gente confunde.

Reglas:
- Nada de "¿qué es X?" flojo si X se puede preguntar por uso, excepción o contraste.
- Incluye fichas de CONFUSIÓN: "¿En qué se diferencia X de Y?"
- Dame las fichas de 1 en 1: solo el FRENTE. Espera mi respuesta. Luego muestra el REVERSO y califica.
- Si mi respuesta es incompleta, no la completes tú de inmediato: haz una pregunta de seguimiento para que yo llene el hueco.
- Lleva un marcador interno: fácil / media / difícil según mis respuestas.

Empieza con la ficha 1.`,
      },
      {
        id: "espaciado",
        title: "Módulo 3 · Repetición espaciada",
        goal: "Volver a las fichas difíciles justo cuando estás a punto de olvidarlas, no cuando aún las tienes calientes.",
        instructions:
          "Haz este módulo en un chat distinto al día siguiente o 48 h después. Dile a Gemini qué fichas fallaste. Si es el mismo día, pide intervalos cortos (10 min / 1 h / 1 día).",
        prompt: `Implementa repetición espaciada para [TEMA]. Estas son las fichas y cómo me fue: [PEGA FÁCILES / MEDIAS / DIFÍCILES O DILE QUE USE EL HISTORIAL].

Hoy NO me enseñes material nuevo. Programa esta sesión:
1. Cola de hoy: primero las difíciles, luego medias, 1 fácil de control.
2. Para cada ficha, solo el frente. Espera. Califica más duro que ayer: si dude o miré apuntes, es "difícil".
3. Si acierto una difícil dos veces seguidas, bájala a media y dime el próximo intervalo (1 día, 3 días, 7 días).
4. Si fallo una fácil, explota el ítem: 2 preguntas hermanas (ejemplo y contraejemplo) antes de seguir.
5. Al cerrar, dame SOLO: lista de ítems para la próxima sesión y la fecha sugerida. Nada de reexplicar el capítulo.

Empieza por la ficha más débil.`,
      },
      {
        id: "analogias",
        title: "Módulo 4 · Anclajes: analogías y palacios mínimos",
        goal: "Pegar los conceptos resbalosos a una imagen, historia o contraste, sin convertir el estudio en un cuento inútil.",
        instructions:
          "Úsalo solo para los 8–12 ítems que siguen fallando. Una analogía mala se corrige: Gemini debe anclarla al enunciado formal, no sustituirlo.",
        prompt: `Los conceptos de [TEMA] que no se me quedan son: [LISTA DE ÍTEMS DIFÍCILES].

Para cada uno:
1. Enunciado formal (el que debo recitar en examen).
2. Una analogía o imagen de 2 frases, precisa, sin infantilizar.
3. Dónde se rompe la analogía (para no memorizar el error).
4. Un "gancho de examen": la palabra del enunciado que debe disparar este concepto.
5. Una pregunta capciosa que un profesor usaría para ver si solo memoricé la analogía.

Luego examíname: mezcla analogía y enunciado formal. Si recito solo la analogía, califica incompleto. Espera respuesta por ítem.

No inventes historias largas. Si un concepto es una definición legal o matemática, la analogía es opcional y el enunciado es obligatorio.`,
      },
      {
        id: "conexiones",
        title: "Módulo 5 · Red de conceptos",
        goal: "Memorizar relaciones: qué implica qué, qué se contradice, qué es caso especial de qué.",
        instructions:
          "Pide un mapa en Markdown o una tabla. Luego Gemini te pregunta por aristas, no por nodos sueltos. Eso es lo que cae en ensayos y orales.",
        prompt: `Construye la RED de conceptos de [TEMA] a partir de lo que ya memorizo: [INVENTARIO O CONTEXTO].

Entrégame:
1. Una tabla: Concepto | Depende de | Se opone a | Caso especial de | Se aplica cuando.
2. 10 preguntas de RELACIÓN (si P entonces ¿Q?, ¿por qué no confundir A con B?, ¿qué falla si quito la hipótesis H?).
3. Hazme las 10 de una en una, sin mostrar la tabla otra vez. Debo responder de memoria.
4. Cada error se convierte en una ficha nueva de relación, que me examinas al final.

Si el tema es biológico, jurídico o de sistemas, incluye excepciones. Si es matemático, incluye hipótesis necesarias. No hagas un mapa mental decorativo.`,
      },
      {
        id: "oral",
        title: "Módulo 6 · Autoexamen oral (Feynman estricto)",
        goal: "Recitar el bloque como si lo explicaras en 4 minutos, sin el chat de apoyo a mitad de frase.",
        instructions:
          "Graba o escribe tu explicación de un solo aliento. Pégala. Gemini busca huecos, términos vacíos y orden lógico. Repite el mismo bloque hasta que la crítica sea menor.",
        prompt: `Actúa como evaluador del método Feynman, estricto, para [TEMA / BLOQUE]. Voy a explicar el bloque de memoria, como a un compañero inteligente que no ha leído el capítulo.

Cuando pegue mi explicación:
1. Subraya (citando mis frases) dónde fui vago, circular o incorrecto.
2. Lista los conceptos del inventario que NO aparecieron y debían aparecer.
3. Pregunta 5 orales de seguimiento, una por una, sin pistas.
4. Al final, dame una versión "esqueleto" de 10 viñetas que debo poder recitar mañana, no un ensayo largo.

Si mi texto es un dump de definiciones sin orden, dímelo y pídeme rehacer la explicación con esta estructura: definición → por qué importa → ejemplo → excepción → conexión con el tema anterior.

Espera mi explicación. No empieces tú a explicar el tema.`,
      },
      {
        id: "examen-memoria",
        title: "Módulo 7 · Examen de memoria y mantenimiento",
        goal: "Medir retención sin pistas y salir con un calendario de repaso, no con más apuntes.",
        instructions:
          "Hazlo con apuntes cerrados. Al terminar, guarda la lista de ítems que fallaron: esa es tu cola del módulo 3 para la próxima semana.",
        prompt: `Aplica un EXAMEN DE MEMORIA de [TEMA], 15 a 20 preguntas, mezclando: definiciones, contrastes, excepciones, orden de pasos y "verdadero/falso con corrección".

Reglas:
- Todas las preguntas de una vez.
- Sin banco de opciones de 4 (máximo 4 V/F; el resto producción).
- Cuando entregue respuestas, califica duro.
- Devuélveme: porcentaje, ítems a reinsertar en repetición espaciada (con intervalo), e ítems que ya puedo dejar 7 días.
- Un único párrafo de "si el examen fuera mañana, estudia solo esto" (máximo 8 líneas).

No ofrezcas material extra. El objetivo es medir y programar, no enseñar de nuevo.`,
      },
    ],
  },
  {
    slug: "demostracion-formal",
    title: "Demostrar matemáticas de forma formal",
    tag: "Rigor y escritura",
    color: "#34A853",
    onColor: "#ffffff",
    surface: "#e6f4ea",
    duration: "8 módulos en secuencia · Gemini como jurado de demostraciones",
    body: "Ruta para análisis, álgebra abstracta, teoría de números, probabilidad formal o cualquier curso que califique la demostración, no el número. Gemini actúa como jurado: rechaza saltos, cuantificadores mal puestos y 'se ve que es obvio'. Tú escribes; el modelo no demuestra por ti salvo para mostrar un modelo después de tu intento.",
    howTo:
      "Ten papel o un editor. Cada módulo es un tipo de argumento. Copia el prompt, escribe la demostración completa y pégala. No pidas 'demuéstralo tú' hasta haber entregado un intento. Si Gemini rellena un paso, exige que lo marque como 'relleno' y reescríbelo con tus palabras.",
    modules: [
      {
        id: "lenguaje",
        title: "Módulo 1 · Lenguaje: cuantificadores, hipótesis y tesis",
        goal: "Traducir un enunciado a 'para todo / existe', identificar hipótesis y escribir qué habría que concluir, antes de demostrar nada.",
        instructions:
          "Empieza con los teoremas de tu curso, no con problemas de cálculo numérico. Si no tienes lista, usa [CURSO] y Gemini propone enunciados típicos.",
        prompt: `Eres un profesor de matemáticas que enseña a ESCRIBIR enunciados, no a calcular. Curso: [ANÁLISIS / ÁLGEBRA / TEORÍA DE NÚMEROS / OTRO].

Dame 6 enunciados (teoremas o proposiciones de examen). Para cada uno, yo debo entregar:
- hipótesis (qué asumo)
- tesis (qué concluyo)
- cuantificadores en orden (∀, ∃) y el universo
- la negación lógica de la tesis (útil para contradicción)

NO demuestres. Espera mi traducción. Corrige con rigor: si cambio el orden de los cuantificadores, explica con un contraejemplo concreto por qué el enunciado ya es otro.

Si mi negación es incorrecta, no des la negación completa de inmediato: señala el primer cuantificador mal negado y pide que yo termine.

Empieza con el enunciado 1.`,
      },
      {
        id: "definiciones",
        title: "Módulo 2 · Definiciones como herramientas",
        goal: "Empezar toda demostración desplegando definiciones, no con intuición geométrica suelta.",
        instructions:
          "Elige 4 definiciones centrales del curso (límite, subespacio, grupo, continuidad, independencia lineal...). El módulo termina cuando puedes desplegarlas sin mirar.",
        prompt: `Curso: [CURSO]. Definiciones que debo manejar: [LISTA, p. ej. continuidad en un punto, conjunto compacto, homomorfismo].

Para cada definición:
1. Pídeme que la escriba con cuantificadores.
2. Pídeme un ejemplo que la cumple y un contraejemplo mínimo que falla una sola hipótesis.
3. Pídeme: "¿Qué línea de una demostración es simplemente desplegar esta definición?"

Evalúa notación (ε, N, ∀x∈, etc.). Si uso prosa donde hace falta símbolo, o símbolo donde hace falta una frase, corrige el estilo de un examen escrito a mano.

Prohibido demostrar teoremas grandes en este módulo. Solo definiciones, ejemplos y la primera línea típica de una prueba.`,
      },
      {
        id: "directa",
        title: "Módulo 3 · Demostración directa",
        goal: "Escribir una cadena hipótesis → definiciones → implicaciones → tesis, sin saltos.",
        instructions:
          "Pide proposiciones cortas (la suma de pares es par, unicidad, inclusión de conjuntos, monotonía). Entrega la prueba completa. Gemini marca cada salto.",
        prompt: `Entréname en DEMOSTRACIÓN DIRECTA. Curso: [CURSO].

Dame una proposición adecuada para prueba directa (no un teorema de 2 páginas). Yo escribiré la demostración completa.

Cuando la reciba:
1. Numera mis frases.
2. Marca cada línea como: definición / hipótesis / inferencia válida / salto / error.
3. En el primer salto, detente y pídeme que rellene YO el hueco. No lo rellenes tú salvo que escriba "estoy atascado".
4. Exige que cada "por tanto" cite la hipótesis o el lema usado.
5. Si la tesis se alcanza, pide una segunda versión 20% más corta, sin perder rigor.

Luego da otra proposición, un poco más dura. Siempre espera mi prueba antes de la tuya.

Estilo: como se entrega en un examen en México, a mano: claro, con "Demostración." y "QED" o cuadrado.`,
      },
      {
        id: "contrapositiva",
        title: "Módulo 4 · Contrapositiva y contradicción",
        goal: "Elegir bien la estrategia: directa, contrapositiva o reducción al absurdo, y ejecutarla sin mezclarlas.",
        instructions:
          "Si Gemini empieza a demostrar, córtalo. Tú eliges la estrategia en una línea y luego escribes. El error típico es negar mal o usar la tesis como si ya fuera cierta.",
        prompt: `Entréname en CONTRAPOSITIVA y CONTRADICCIÓN. Curso: [CURSO].

Para cada enunciado que me des:
1. Yo elijo estrategia en una frase: "voy por contrapositiva porque..." o "voy por absurdo porque...".
2. Yo escribo la prueba.
3. Tú atacas: ¿negué bien?, ¿asumí la tesis?, ¿el absurdo contradice una hipótesis o solo mi gusto?, ¿pude haber ido directo más corto?

Reglas:
- Si elijo mal la estrategia, no demuestres tú: explica con 4 líneas por qué la otra es más natural y pídeme reintentar.
- En contradicción, exige que el absurdo sea explícito (contradicción con hipótesis H, o con un teorema nombrado).
- Dame 5 enunciados en total, uno a uno. Incluye al menos uno donde la directa es mejor, para que yo no abuse del absurdo.

Empieza.`,
      },
      {
        id: "induccion",
        title: "Módulo 5 · Inducción y recaída bien fundada",
        goal: "Escribir base, hipótesis de inducción y paso, sin esconder el uso de HI ni falsear el dominio (n≥n0).",
        instructions:
          "Útil en discreta, álgebra y análisis (desigualdades). Pide que Gemini varíe: inducción simple, fuerte, y un caso donde n0 ≠ 0.",
        prompt: `Entréname en INDUCCIÓN MATEMÁTICA formal. Curso: [CURSO].

Cada problema:
- Yo debo escribir: enunciado P(n), dominio (n ≥ n0), base, hipótesis de inducción (simple o fuerte, y por qué), paso, conclusión.
- Tú rechazas si: la base está mal calculada pero "se ve", si uso P(n+1) como si ya fuera HI, si no uso HI, o si n0 está mal.

Dame primero una desigualdad o identidad, luego una suma, luego un resultado de divisibilidad o combinatoria. Uno a uno.

Si pido la prueba modelo, dámela SOLO después de un intento mío, y en dos columnas: "lo que escribiste" vs "lo que exige rigor".

No uses inducción donde un argumento directo de 3 líneas basta; si lo hago, dímelo.`,
      },
      {
        id: "epsilons",
        title: "Módulo 6 · ε-N / ε-δ y cuantificadores anidados",
        goal: "Manejar el juego de 'me das ε, yo doy δ o N' sin prosa mágica. Si tu curso no es análisis, pide el análogo: 'me das ε, yo doy una vecindad'.",
        instructions:
          "Si tu materia es álgebra, pide a Gemini el equivalente (pruebas con definiciones de grupo o de base). El módulo sigue siendo cuantificadores anidados.",
        prompt: `Entréname en pruebas con cuantificadores anidados. Por defecto: límites y continuidad (ε-N o ε-δ) en [CURSO]. Si el curso no es análisis, usa el análogo formal del curso (p. ej. vecindades, normas, o "para todo entorno existe...").

Método:
1. Dame un enunciado (límite de sucesión, límite de función, continuidad en un punto, o el análogo).
2. Yo escribo la prueba completa, incluyendo cómo elijo N o δ en función de ε.
3. Tú verificas: dependencia correcta de ε, desigualdades en el sentido útil, y que no fijé ε. Señala la primera desigualdad injustificada.

Prohibido: "es claro que para N grande". Hay que exhibir N o δ (aunque sea sucio).

Haz 4 enunciados, de más mecánico a más delicado (suma de límites o composición). Espera cada prueba.`,
      },
      {
        id: "escritura",
        title: "Módulo 7 · Escritura de una demostración de examen",
        goal: "Pasar de 'tengo la idea' a una hoja que un ayudante puede calificar en 90 segundos.",
        instructions:
          "Pide un teorema de dificultad de examen. Escribe como si entregaras. Gemini puntúa claridad, no solo corrección.",
        prompt: `Actúa como ayudante de un curso de [CURSO] calificando una pregunta de demostración de 10 puntos.

Dame UN enunciado de dificultad de examen (no olímpica). Yo entregaré la demostración como en hoja de examen.

Rúbrica al calificar:
- 2 pts: enunciado bien interpretado (hipótesis/tesis)
- 3 pts: estrategia explícita y válida
- 3 pts: pasos justificados (sin saltos)
- 2 pts: claridad y notación

Devuelve: nota, anotaciones al margen (como en rojo), y una versión modelo de longitud realista para 15–20 minutos. Si saqué menos de 8, dame el mismo enunciado con un dato numérico o un caso extra para rehacer, no un teorema nuevo.

Espera mi escritura. No empieces tú la prueba.`,
      },
      {
        id: "revision",
        title: "Módulo 8 · Revisión de rigor (abogado del diablo)",
        goal: "Atacar tu propia prueba como lo haría un profesor pesimista, y sacar una versión publicable a escala de apuntes.",
        instructions:
          "Pega una demostración tuya (tarea, examen o del módulo 7). Este es el cierre: una prueba atacada y reescrita. Luego vuelve a un módulo anterior si un tipo de argumento sigue débil.",
        prompt: `Eres un matemático que busca agujeros. Aquí está MI demostración de [ENUNCIADO]: [PEGA LA PRUEBA].

Haz:
1. Lista de objeciones numeradas (salto, cuantificador, caso no cubierto, uso implícito de un teorema no citado, dominio).
2. Para cada objeción, una pregunta que yo debo responder para tapar el agujero. Espera mis parches, uno por uno.
3. Cuando los agujeros estén cerrados, reescribe la demostración en limpio en mi voz (formal, concisa).
4. Añade una nota de 5 líneas: "cómo atacaría esto un profesor en el oral".

Si la prueba es irrecuperable, dímelo y propón una estrategia distinta; no la reescribas mágicamente como si yo la hubiera pensado.

No suavices. El objetivo es rigor, no ánimo.`,
      },
    ],
  },
]

export function getStudyRoadmap(slug: string) {
  return STUDY_ROADMAPS.find((roadmap) => roadmap.slug === slug)
}
