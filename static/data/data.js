// // MODIFICADO: datos extraídos desde index.html (<script id="datos-historia" type="application/json">).
// // Antes estaban embebidos en el HTML y se leían con JSON.parse(document.getElementById('datos-historia').textContent).
// // Ahora se exportan como módulo ES para importarlos desde script/main.js con: import { HISTORIA } from '../data/data.js'.

// // MODIFICADO: se exporta la constante HISTORIA (antes era solo JSON inline sin export).
// export const HISTORIA = {
//   "introduccion": [
//     "Cuentan los abuelos que todo comenzó una tarde de febrero de 1956, cuando un puñado de compadres y comadres del barrio, armados con acordeón, charango y harina, decidieron que la tristeza no pasaría ese año por su puerta. Salieron a la plaza entre coplas y flores, y sin saberlo, encendieron una llama que ya no se apagaría.",
//     "Con cada década, el convite creció: llegaron las bandas de bronces del altiplano, las fraternidades de danza, los talleres de máscaras y las reinas de papel brillante. Hoy, setenta años después, el Carnaval de Colores es la memoria viva de un pueblo que eligió celebrar junto, y cada febrero renueva la promesa de volver a encontrarse bailando."
//   ],
//   "lineaTiempo": [
//     { "anio": "1956", "etapa": "El origen", "emoji": "🥁", "color": "#FF3D8A", "titulo": "El primer convite de barrio", "descripcion": "Compadres y comadres salen a la plaza con acordeón, charango y harina. Nace el carnaval como fiesta de vecinos y familia." },
//     { "anio": "1962", "etapa": "La coronación", "emoji": "👑", "color": "#FF7A00", "titulo": "Nace la Reina del Carnaval", "descripcion": "Se corona a la primera reina en la plaza mayor, con corona de papel plateado y una sonrisa que salió en todas las fotos." },
//     { "anio": "1974", "etapa": "Los bronces", "emoji": "🎺", "color": "#FFB703", "titulo": "Llegan las bandas del altiplano", "descripcion": "Las bandas de bronces marcan un antes y un después: el carnaval ahora se siente vibrar en el pecho de todo el pueblo." },
//     { "anio": "1988", "etapa": "La Gran Entrada", "emoji": "💃", "color": "#00C2A8", "titulo": "Primera Entrada Folklórica", "descripcion": "Las fraternidades ordenan el recorrido y entran en fila la diablada, la morenada y los caporales. Nace la ruta oficial de la Entrada." },
//     { "anio": "1997", "etapa": "Los talleres", "emoji": "🎭", "color": "#7B2FF2", "titulo": "Época dorada de los mascareros", "descripcion": "Los talleres de caretas iluminan los barrios con cuernos, lentejuelas y plumas; cada máscara guarda desde entonces un secreto." },
//     { "anio": "2009", "etapa": "Patrimonio", "emoji": "🏛️", "color": "#FF3D8A", "titulo": "Declaratoria de patrimonio", "descripcion": "El carnaval es reconocido como Patrimonio Cultural e Intangible de la región, protegiendo sus danzas, música y rituales." },
//     { "anio": "2015", "etapa": "Nueva generación", "emoji": "📱", "color": "#FF7A00", "titulo": "Comparsas juveniles y redes", "descripcion": "Los nietos entran a la danza y la fiesta se comparte con el mundo: el carnaval trending topic por primera vez." },
//     { "anio": "2027", "etapa": "Los 70 años", "emoji": "🎉", "color": "#00C2A8", "titulo": "La fiesta más grande", "descripcion": "48 comparsas y 12 mil bailarines celebran siete décadas de memoria ininterrumpida. La historia continúa contigo." }
//   ],
//   "personajes": [
//     { "nombre": "Moreno", "apodo": "Moreno", "rol": "Fundadora de la primera comparsa", "color": "#FF3D8A",
//       "descripcion": "Compuso más de 3000000 coplas picarescas y abrió el primer convite de 1956. Dicen que jamás perdió un baile en las verbenas.",
//       "imagen": "./assets/moreno.jpg" },
//     { "nombre": "Maestro Filemón Quispe", "apodo": "El Director de Bronces", "rol": "Dirigió la banda municipal por 40 años", "color": "#FF7A00",
//       "descripcion": "Enseñó a tocar a tres generaciones enteras. Su trompeta dorada sigue abriendo el alba carnavalera cada sábado de fiesta.",
//       "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/1b28c6d49-a4ea-4eef-be25-07e4775b6863.png" },
//     { "nombre": "Tía Rosa Choque", "apodo": "La Guardiana de la Ch'alla", "rol": "Celadora de los rituales de agradecimiento", "color": "#00C2A8",
//       "descripcion": "Prepara cada año la primera ofrenda de flores y confeti para que al carnaval nunca le falte alegría, cosecha ni memoria.",
//       "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/19a764d43-4e5e-49a0-bc58-770e9dd7a516.png" }
//   ],
//   "curiosidades": [
//     { "emoji": "🥒", "titulo": "El Ño Pepino", "texto": "Personaje travieso que corteja, lanza harina y reparte alegría. Su testamento se lee entre lágrimas fingidas el Miércoles de Ceniza." },
//     { "emoji": "🎭", "titulo": "Máscaras con alma", "texto": "Los mascareros esconden un secreto en cada careta: quien la hereda, hereda también la historia de quien la bailó antes." },
//     { "emoji": "🌸", "titulo": "La ch'alla", "texto": "Antes de bailar se rocían flores, confeti y serpentinas a la tierra, en agradecimiento por lo recibido y lo por venir." },
//     { "emoji": "💧", "titulo": "Lunes de agüita", "texto": "Antes se lanzaban globos de agua entre compadres. Decían que quien salía empapado ese lunes, se casaba antes de un año." },
//     { "emoji": "🕯️", "titulo": "El entierro del carnaval", "texto": "El miércoles se despide al Ño Carnavalón con velorio fingido, viudas de luto cómico y promesas de volver el próximo año." },
//     { "emoji": "🌅", "titulo": "El alba a las seis", "texto": "Las bandas despiertan al barrio a las 6 de la mañana. Cuenta la tradición que quien no se levanta… igual termina bailando." }
//   ],
//   "archivo": [
//     { "anio": "1956", "titulo": "El primer convite en la plaza", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/1c2360060-7ca0-45c7-a198-8879cb2e99c0.png" },
//     { "anio": "1974", "titulo": "Los bronces toman la calle", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/131ebb590-26c1-4c2c-aacd-f9dd6b12c9a3.png" },
//     { "anio": "1988", "titulo": "La diablada abre la Entrada", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/1081b4d40-435b-4da7-b400-0df86269cba2.png" },
//     { "anio": "1992", "titulo": "Morenada señorial", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/155faac60-b748-4f34-ba45-ca850a89ee81.png" },
//     { "anio": "2001", "titulo": "El tinku llega del norte", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/129eb800e-8869-47bc-959b-1f58b40c2aeb.png" },
//     { "anio": "2026", "titulo": "La fiesta de la edición 69", "imagen": "https://image.qwenlm.ai/public_source/f73381d6-d1ef-4323-93d7-c5a6ce3ae378/123250eb9-52b5-417f-b5a1-d8e1780975a7.png" }
//   ]
// };
