const malla = document.getElementById('malla');

const ramos = [
  // === AÑO 1 ===
  { anio: 'Año 1', semestre: 'Semestre I', nombre: 'Historia de la Psicología', id: 'historia', desbloquea: ['introduccion'] },
  { anio: '', semestre: '', nombre: 'Psicología General', id: 'psico_general', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Fundamentos Biológicos del Comportamiento', id: 'fund_bio', desbloquea: ['sociedad_salud'] },
  { anio: '', semestre: '', nombre: 'Sociedad, Sexualidades y Géneros', id: 'sociedad_gen', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Filosofía y Psicología', id: 'filosofia', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Inglés General I', id: 'ingles1', desbloquea: ['ingles2'] },

  { anio: '', semestre: 'Semestre II', nombre: 'Introducción a la Ciencia de Datos', id: 'introduccion', desbloquea: ['investigacion1'] },
  { anio: '', semestre: '', nombre: 'Procesos Psicológicos', id: 'procesos', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Sociedad, Políticas Públicas y Salud Mental', id: 'sociedad_salud', desbloquea: ['neuro'] },
  { anio: '', semestre: '', nombre: 'Transformaciones Socioculturales', id: 'transformaciones', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Inglés General II', id: 'ingles2', desbloquea: ['ingles3'] },
  { anio: '', semestre: '', nombre: 'Curso de Formación General', id: 'cfg1', desbloquea: [] },

  // === AÑO 2 ===
  { anio: 'Año 2', semestre: 'Semestre III', nombre: 'Investigación I', id: 'investigacion1', desbloquea: ['investigacion2'] },
  { anio: '', semestre: '', nombre: 'Psicología de la Comunicación', id: 'comunicacion', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Neurociencia y Neuropsicología', id: 'neuro', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Ciclo Vital I: Infancia, Adolescencia y Juventud', id: 'ciclo1', desbloquea: ['ciclo2'] },
  { anio: '', semestre: '', nombre: 'Psicología Social I', id: 'social1', desbloquea: ['social2'] },
  { anio: '', semestre: '', nombre: 'Inglés General III', id: 'ingles3', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Desarrollo de Carrera I', id: 'carrera1', desbloquea: ['carrera2'] },

  { anio: '', semestre: 'Semestre IV', nombre: 'Investigación II', id: 'investigacion2', desbloquea: ['investigacion3'] },
  { anio: '', semestre: '', nombre: 'Psicología de la Personalidad', id: 'personalidad', desbloquea: ['psicopatologia1', 'psicopatologia2'] },
  { anio: '', semestre: '', nombre: 'Corrientes Psicología: Psicoanálisis', id: 'psicoanalisis', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Ciclo Vital II: Adultez y Vejez', id: 'ciclo2', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Psicología Social II', id: 'social2', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Corrientes Psicología: Cognitivo', id: 'cognitivo', desbloquea: [] },
  { anio: '', semestre: '', nombre: 'Desarrollo de Carrera II', id: 'carrera2', desbloquea: ['carrera3'] },
  { anio: '', semestre: '', nombre: 'Curso de Formación General', id: 'cfg2', desbloquea: [] },

  // Agrega el resto de los años y semestres aquí (puedo seguir si me das el OK)
];

// Estados de aprobación
const estado = {};

function crearRamo(ramo) {
  const div = document.createElement('div');

  if (ramo.anio) {
    const anioDiv = document.createElement('div');
    anioDiv.className = 'anio';
    anioDiv.innerText = ramo.anio;
    malla.appendChild(anioDiv);
  }

  if (ramo.semestre) {
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';
    semDiv.innerText = ramo.semestre;
    malla.appendChild(semDiv);
  }

  div.className = 'ramo bloqueado';
  div.innerText = ramo.nombre;
  div.id = ramo.id;
  estado[ramo.id] = false;

  div.addEventListener('click', () => {
    div.classList.add('aprobado');
    div.classList.remove('bloqueado');
    estado[ramo.id] = true;

    // desbloquear los que dependían de este
    ramo.desbloquea.forEach(id => {
      const desbloqueado = document.getElementById(id);
      if (desbloqueado) desbloqueado.classList.remove('bloqueado');
    });
  });

  malla.appendChild(div);
}

ramos.forEach(r => crearRamo(r));
