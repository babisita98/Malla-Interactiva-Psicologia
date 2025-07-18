const ramos = [
  {
    nombre: "Historia de la Psicología",
    id: "historia",
    desbloquea: ["datos"]
  },
  {
    nombre: "Psicología General",
    id: "general",
    desbloquea: []
  },
  {
    nombre: "Fundamentos Biológicos del Comportamiento",
    id: "fundamentos",
    desbloquea: ["salud"]
  },
  {
    nombre: "Sociedad, Sexualidades y Géneros",
    id: "genero",
    desbloquea: []
  },
  {
    nombre: "Filosofía y Psicología",
    id: "filosofia",
    desbloquea: []
  },
  {
    nombre: "Inglés General I",
    id: "ingles1",
    desbloquea: ["ingles2"]
  },
  {
    nombre: "Introducción a la Ciencia de Datos",
    id: "datos",
    desbloquea: ["investigacion1"],
    requiere: ["historia"]
  },
  {
    nombre: "Procesos Psicológicos",
    id: "procesos",
    desbloquea: []
  },
  {
    nombre: "Sociedad, Políticas Públicas y Salud Mental",
    id: "salud",
    desbloquea: ["neuro"],
    requiere: ["fundamentos"]
  },
  {
    nombre: "Transformaciones Socioculturales",
    id: "transformaciones",
    desbloquea: []
  },
  {
    nombre: "Inglés General II",
    id: "ingles2",
    desbloquea: ["ingles3"],
    requiere: ["ingles1"]
  },
  {
    nombre: "Investigación I",
    id: "investigacion1",
    desbloquea: ["investigacion2"],
    requiere: ["datos"]
  }
  // sigue agregando los demás ramos siguiendo este mismo formato
];

function crearMalla() {
  const contenedor = document.getElementById("malla");

  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    if (ramo.requiere && ramo.requiere.length > 0) {
      div.classList.add("bloqueado");
    }
    div.addEventListener("click", () => aprobarRamo(ramo.id));
    contenedor.appendChild(div);
  });
}

function aprobarRamo(id) {
  const ramo = document.getElementById(id);
  if (ramo.classList.contains("bloqueado")) return;
  if (ramo.classList.contains("aprobado")) return;

  ramo.classList.add("aprobado");

  const infoRamo = ramos.find((r) => r.id === id);
  if (infoRamo && infoRamo.desbloquea) {
    infoRamo.desbloquea.forEach((idr) => {
      const desbloquear = document.getElementById(idr);
      if (desbloquear) desbloquear.classList.remove("bloqueado");
    });
  }
}

window.onload = crearMalla;
