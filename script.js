const ramos = [
  // Año 1 - Semestre I
  { id: "historia", nombre: "Historia de la Psicología", requisitos: [], desbloquea: ["introduccion"] },
  { id: "psicoGeneral", nombre: "Psicología General", requisitos: [], desbloquea: [] },
  { id: "biologicos", nombre: "Fundamentos Biológicos del Comportamiento", requisitos: [], desbloquea: ["saludMental"] },
  { id: "genero", nombre: "Sociedad, Sexualidades y Géneros", requisitos: [], desbloquea: [] },
  { id: "filosofia", nombre: "Filosofía y Psicología", requisitos: [], desbloquea: [] },
  { id: "ingles1", nombre: "Inglés General I", requisitos: [], desbloquea: ["ingles2"] },

  // Año 1 - Semestre II
  { id: "introduccion", nombre: "Introducción a la Ciencia de Datos", requisitos: ["historia"], desbloquea: ["investigacion1"] },
  { id: "procesos", nombre: "Procesos Psicológicos", requisitos: [], desbloquea: [] },
  { id: "saludMental", nombre: "Sociedad, Políticas Públicas y Salud Mental", requisitos: ["biologicos"], desbloquea: ["neuro"] },
  { id: "sociocultural", nombre: "Transformaciones Socioculturales", requisitos: [], desbloquea: [] },
  { id: "ingles2", nombre: "Inglés General II", requisitos: ["ingles1"], desbloquea: ["ingles3"] },
  { id: "general2", nombre: "Curso de Formación General II", requisitos: [], desbloquea: [] },

  // Año 2 - Semestre III
  { id: "investigacion1", nombre: "Investigación I", requisitos: ["introduccion"], desbloquea: ["investigacion2"] },
  { id: "comunicacion", nombre: "Psicología de la Comunicación", requisitos: [], desbloquea: [] },
  { id: "neuro", nombre: "Neurociencia y Neuropsicología", requisitos: ["saludMental"], desbloquea: [] },
  { id: "ciclo1", nombre: "Ciclo Vital I: Infancia, Adolescencia y Juventud", requisitos: [], desbloquea: ["ciclo2"] },
  { id: "social1", nombre: "Psicología Social I", requisitos: [], desbloquea: ["social2"] },
  { id: "ingles3", nombre: "Inglés General III", requisitos: ["ingles2"], desbloquea: [] },
  { id: "carrera1", nombre: "Desarrollo de Carrera I", requisitos: [], desbloquea: ["carrera2"] },

  // Año 2 - Semestre IV
  { id: "investigacion2", nombre: "Investigación II", requisitos: ["investigacion1"], desbloquea: ["investigacion3"] },
  { id: "personalidad", nombre: "Psicología de la Personalidad", requisitos: [], desbloquea: ["psicopatInf", "psicopatAdulto"] },
  { id: "psicoanalisis", nombre: "Corrientes Principales: Psicoanálisis", requisitos: [], desbloquea: [] },
  { id: "ciclo2", nombre: "Ciclo Vital II: Adultez y Vejez", requisitos: ["ciclo1"], desbloquea: [] },
  { id: "social2", nombre: "Psicología Social II", requisitos: ["social1"], desbloquea: [] },
  { id: "cognitivo", nombre: "Corrientes Principales: Cognitivo", requisitos: [], desbloquea: [] },
  { id: "carrera2", nombre: "Desarrollo de Carrera II", requisitos: ["carrera1"], desbloquea: ["carrera3"] },
  { id: "general4", nombre: "Curso de Formación General IV", requisitos: [], desbloquea: [] },

  // Año 3 - Semestre V
  { id: "investigacion3", nombre: "Investigación III", requisitos: ["investigacion2"], desbloquea: ["investigacion4"] },
  { id: "psicopatInf", nombre: "Psicopatología y Psiquiatría: Infancia y Adolescencia", requisitos: [], desbloquea: [] },
  { id: "sistemica", nombre: "Corrientes Principales: Sistémica", requisitos: [], desbloquea: [] },
  { id: "psicodiagInf", nombre: "Psicodiagnóstico Infantojuvenil", requisitos: [], desbloquea: ["psicodiagAdulto"] },
  { id: "salud2", nombre: "Psicologia de la Salud", requisitos: [], desbloquea: [] },
  { id: "humanismo", nombre: "Corrientes Principales: Humanismo", requisitos: [], desbloquea: [] },
  { id: "carrera3", nombre: "Desarrollo de Carrera III", requisitos: ["carrera2"], desbloquea: ["carrera4"] },
  { id: "general5", nombre: "Curso de Formación General V", requisitos: [], desbloquea: [] },

  // Año 3 - Semestre VI
  { id: "investigacion4", nombre: "Investigación IV", requisitos: ["investigacion3"], desbloquea: [] },
  { id: "psicopatAdulto", nombre: "Psicopatología y Psiquiatría: Adultez y Vejez", requisitos: ["personalidad"], desbloquea: [] },
  { id: "socialCom", nombre: "Psicología Social Comunitaria", requisitos: [], desbloquea: [] },
  { id: "psicodiagAdulto", nombre: "Psicodiagnóstico en Adultez y Vejez", requisitos: ["psicodiagInf"], desbloquea: [] },
  { id: "trabajo", nombre: "Psicología del Trabajo", requisitos: [], desbloquea: ["organizaciones"] },
  { id: "carrera4", nombre: "Desarrollo de Carrera IV", requisitos: ["carrera3"], desbloquea: ["carrera5"] },
  { id: "general6", nombre: "Curso de Formación General VI", requisitos: [], desbloquea: [] },

  // Año 4 - Semestre VII
  { id: "educacional", nombre: "Psicología Educacional", requisitos: [], desbloquea: [] },
  { id: "juridica", nombre: "Psicología Jurídica", requisitos: [], desbloquea: [] },
  { id: "clinica", nombre: "Psicología Clínica", requisitos: [], desbloquea: [] },
  { id: "proyectos", nombre: "Diseño y Evaluación de Proyectos", requisitos: [], desbloquea: [] },
  { id: "organizaciones", nombre: "Psicología de las Organizaciones y RRHH", requisitos: ["trabajo"], desbloquea: [] },
  { id: "carrera5", nombre: "Desarrollo de Carrera V", requisitos: ["carrera4"], desbloquea: [] },
  { id: "general7", nombre: "Curso de Formación General VII", requisitos: [], desbloquea: [] },

  // Año 4 - Semestre VIII
  { id: "tallerClin1", nombre: "Taller de Investigación Clínica I", requisitos: [], desbloquea: ["tallerClin2"] },
  { id: "tallerPsico1", nombre: "Taller de Intervención Campos Psicosociales I", requisitos: [], desbloquea: ["tallerPsico2"] },
  { id: "grupal", nombre: "Estrategia de Trabajo Grupal", requisitos: [], desbloquea: [] },
  { id: "elect1", nombre: "Electivo de Profundización I", requisitos: [], desbloquea: [] },
  { id: "general8", nombre: "Curso de Formación General VIII", requisitos: [], desbloquea: [] },

  // Año 5 - Semestre IX
  { id: "tallerPsico2", nombre: "Taller de Intervención Campos Psicosociales II", requisitos: ["tallerPsico1"], desbloquea: [] },
  { id: "tallerClin2", nombre: "Taller de Intervención Clínica II", requisitos: ["tallerClin1"], desbloquea: [] },
  { id: "elect2", nombre: "Electivo de Profundización II", requisitos: [], desbloquea: [] },

  // Año 5 - Semestre X
  { id: "practica", nombre: "Práctica Profesional", requisitos: [], desbloquea: [] },
  { id: "elect3", nombre: "Electivo de Profundización III", requisitos: [], desbloquea: [] },
];

const mallaDiv = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  if (ramo.requisitos.length > 0) div.classList.add("bloqueado");
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  div.addEventListener("click", () => aprobar(ramo.id));
  mallaDiv.appendChild(div);
});

function aprobar(id) {
  const ramo = ramos.find(r => r.id === id);
  const div = document.getElementById(id);
  if (div.classList.contains("bloqueado") || div.classList.contains("aprobado")) return;
  div.classList.add("aprobado");
  // desbloquear los que dependen de este
  ramos.forEach(r => {
    if (r.requisitos.includes(id)) {
      document.getElementById(r.id).classList.remove("bloqueado");
    }
  });
}
