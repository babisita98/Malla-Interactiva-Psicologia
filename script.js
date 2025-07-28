// 1. Estructura de la malla con requisitos y descripciones
const malla = [
    {
        año: 1,
        semestres: [
            {
                nombre: "Semestre I",
                ramos: [
                    {
                        nombre: "Historia de la Psicología",
                        descripcion: "Estudio de la evolución histórica de la psicología.",
                        desbloquea: ["Introducción a la Ciencia de Datos"]
                    },
                    {
                        nombre: "Psicología General",
                        descripcion: "Fundamentos básicos de la psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Fundamentos Biológicos del Comportamiento",
                        descripcion: "Bases biológicas del comportamiento humano.",
                        desbloquea: ["Sociedad, Políticas Públicas y Salud Mental"]
                    },
                    {
                        nombre: "Sociedad, Sexualidades y Géneros",
                        descripcion: "Análisis de la sociedad y géneros.",
                        desbloquea: []
                    },
                    {
                        nombre: "Filosofía y Psicología",
                        descripcion: "Relación entre la filosofía y la psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Inglés General I",
                        descripcion: "Nivel inicial de inglés.",
                        desbloquea: ["Inglés General II"]
                    }
                ]
            },
            {
                nombre: "Semestre II",
                ramos: [
                    {
                        nombre: "Introducción a la Ciencia de Datos",
                        descripcion: "Herramientas básicas para el análisis de datos.",
                        desbloquea: ["Investigación I"]
                    },
                    {
                        nombre: "Procesos Psicológicos",
                        descripcion: "Procesos cognitivos y emocionales.",
                        desbloquea: []
                    },
                    {
                        nombre: "Sociedad, Políticas Públicas y Salud Mental",
                        descripcion: "Relación entre salud mental y políticas públicas.",
                        desbloquea: ["Neurociencia y Neuropsicología"]
                    },
                    {
                        nombre: "Transformaciones Socioculturales",
                        descripcion: "Cambios sociales y culturales.",
                        desbloquea: []
                    },
                    {
                        nombre: "Inglés General II",
                        descripcion: "Nivel intermedio de inglés.",
                        desbloquea: ["Inglés General III"]
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            }
        ]
    },
    {
        año: 2,
        semestres: [
            {
                nombre: "Semestre III",
                ramos: [
                    {
                        nombre: "Investigación I",
                        descripcion: "Fundamentos de la investigación científica.",
                        desbloquea: ["Investigación II"]
                    },
                    {
                        nombre: "Psicología de la Comunicación",
                        descripcion: "Comunicación humana desde la psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Neurociencia y Neuropsicología",
                        descripcion: "Estudio del sistema nervioso y procesos neuropsicológicos.",
                        desbloquea: []
                    },
                    {
                        nombre: "Ciclo Vital I: Infancia, Adolescencia y Juventud",
                        descripcion: "Desarrollo humano en etapas tempranas.",
                        desbloquea: ["Ciclo Vital II: Adultez y Vejez"]
                    },
                    {
                        nombre: "Psicología Social I",
                        descripcion: "Bases de la psicología social.",
                        desbloquea: ["Psicología Social II"]
                    },
                    {
                        nombre: "Inglés General III",
                        descripcion: "Nivel avanzado de inglés.",
                        desbloquea: []
                    },
                    {
                        nombre: "Desarrollo de Carrera I",
                        descripcion: "Introducción al desarrollo profesional.",
                        desbloquea: ["Desarrollo de Carrera II"]
                    }
                ]
            },
            {
                nombre: "Semestre IV",
                ramos: [
                    {
                        nombre: "Investigación II",
                        descripcion: "Metodología avanzada de investigación.",
                        desbloquea: ["Investigación III"]
                    },
                    {
                        nombre: "Psicología de la Personalidad",
                        descripcion: "Teorías y modelos de la personalidad.",
                        desbloquea: [
                            "Psicopatología y Psiquiatría: Infancia y Adolescencia",
                            "Psicopatología y Psiquiatría: Adultez y Vejez"
                        ]
                    },
                    {
                        nombre: "Corrientes Principales de la Psicología Psicoanálisis",
                        descripcion: "Psicoanálisis como corriente principal.",
                        desbloquea: []
                    },
                    {
                        nombre: "Ciclo Vital II: Adultez y Vejez",
                        descripcion: "Desarrollo humano en etapas adultas.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología Social II",
                        descripcion: "Procesos grupales y comunitarios.",
                        desbloquea: []
                    },
                    {
                        nombre: "Corrientes Principales de la Psicología: Cognitivo",
                        descripcion: "Corriente cognitiva en psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Desarrollo de Carrera II",
                        descripcion: "Desarrollo profesional intermedio.",
                        desbloquea: ["Desarrollo de Carrera III"]
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            }
        ]
    },
    {
        año: 3,
        semestres: [
            {
                nombre: "Semestre V",
                ramos: [
                    {
                        nombre: "Investigación III",
                        descripcion: "Investigación aplicada en psicología.",
                        desbloquea: ["Investigación IV"]
                    },
                    {
                        nombre: "Psicopatología y Psiquiatría: Infancia y Adolescencia",
                        descripcion: "Trastornos psiquiátricos en infancia y adolescencia.",
                        desbloquea: []
                    },
                    {
                        nombre: "Corrientes Principales de la Psicología: Sistémica",
                        descripcion: "Enfoque sistémico en psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicodiagnóstico Infantojuvenil",
                        descripcion: "Evaluación psicológica en niños y jóvenes.",
                        desbloquea: ["Psicodiagnóstico en Adultez y Vejez"]
                    },
                    {
                        nombre: "Psicología de la Salud",
                        descripcion: "Relación entre la psicología y la salud.",
                        desbloquea: []
                    },
                    {
                        nombre: "Corrientes Principales de la Psicología: Humanismo",
                        descripcion: "Enfoque humanista en psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Desarrollo de Carrera III",
                        descripcion: "Desarrollo profesional avanzado.",
                        desbloquea: ["Desarrollo de Carrera IV"]
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            },
            {
                nombre: "Semestre VI",
                ramos: [
                    {
                        nombre: "Investigación IV",
                        descripcion: "Investigación avanzada.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicopatología y Psiquiatría: Adultez y Vejez",
                        descripcion: "Trastornos psiquiátricos en adultos.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología Social Comunitaria",
                        descripcion: "Intervención comunitaria desde la psicología.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicodiagnóstico en Adultez y Vejez",
                        descripcion: "Evaluación psicológica en adultos.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología del Trabajo",
                        descripcion: "Psicología organizacional y del trabajo.",
                        desbloquea: ["Psicología de las Organizaciones y Recursos Humanos"]
                    },
                    {
                        nombre: "Desarrollo de Carrera IV",
                        descripcion: "Desarrollo profesional experto.",
                        desbloquea: ["Desarrollo de Carrera V"]
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            }
        ]
    },
    {
        año: 4,
        semestres: [
            {
                nombre: "Semestre VII",
                ramos: [
                    {
                        nombre: "Psicología Educacional",
                        descripcion: "Intervención en contextos educativos.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología Jurídica",
                        descripcion: "Aplicación de la psicología en el ámbito legal.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología Clínica",
                        descripcion: "Evaluación y tratamiento psicológico.",
                        desbloquea: []
                    },
                    {
                        nombre: "Diseño y Evaluación de Proyectos",
                        descripcion: "Creación y evaluación de proyectos psicológicos.",
                        desbloquea: []
                    },
                    {
                        nombre: "Psicología de las Organizaciones y Recursos Humanos",
                        descripcion: "Gestión de personas y organizaciones.",
                        desbloquea: []
                    },
                    {
                        nombre: "Desarrollo de Carrera V",
                        descripcion: "Desarrollo profesional final.",
                        desbloquea: []
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            },
            {
                nombre: "Semestre VIII",
                ramos: [
                    {
                        nombre: "Taller de Investigación Clínica I",
                        descripcion: "Investigación clínica inicial.",
                        desbloquea: ["Taller de Investigación Clínica II"]
                    },
                    {
                        nombre: "Taller de Intervención Campos Psicosociales I",
                        descripcion: "Intervención psicosocial inicial.",
                        desbloquea: ["Taller de Intervención Campos Psicosociales II"]
                    },
                    {
                        nombre: "Estrategia de Trabajo Grupal",
                        descripcion: "Dinámicas de trabajo grupal.",
                        desbloquea: []
                    },
                    {
                        nombre: "Electivo de Profundización I",
                        descripcion: "Electivo para profundizar en un área.",
                        desbloquea: []
                    },
                    {
                        nombre: "Curso de Formación General",
                        descripcion: "Curso transversal de formación general.",
                        desbloquea: []
                    }
                ]
            }
        ]
    },
    {
        año: 5,
        semestres: [
            {
                nombre: "Semestre IX",
                ramos: [
                    {
                        nombre: "Taller de Investigación Clínica II",
                        descripcion: "Investigación clínica avanzada.",
                        desbloquea: []
                    },
                    {
                        nombre: "Taller de Intervención Campos Psicosociales II",
                        descripcion: "Intervención psicosocial avanzada.",
                        desbloquea: []
                    },
                    {
                        nombre: "Electivo de Profundización II",
                        descripcion: "Electivo avanzado.",
                        desbloquea: []
                    }
                ]
            },
            {
                nombre: "Semestre X",
                ramos: [
                    {
                        nombre: "Práctica Profesional",
                        descripcion: "Práctica profesional supervisada.",
                        desbloquea: []
                    },
                    {
                        nombre: "Electico de profundización III",
                        descripcion: "Último electivo avanzado.",
                        desbloquea: []
                    }
                ]
            }
        ]
    }
];

const estadoRamos = {}; // Para guardar si cada ramo está aprobado o desbloqueado

// Inicializa estado de todos los ramos
function inicializarEstado() {
    malla.forEach(año => {
        año.semestres.forEach(semestre => {
            semestre.ramos.forEach(ramo => {
                estadoRamos[ramo.nombre] = {
                    aprobado: false,
                    desbloqueado: false
                };
            });
        });
    });

    // Desbloquear los ramos del primer semestre
    malla[0].semestres[0].ramos.forEach(ramo => {
        estadoRamos[ramo.nombre].desbloqueado = true;
    });
}

// Renderiza la malla en el HTML
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = "";

    malla.forEach(año => {
        const añoDiv = document.createElement('div');
        añoDiv.className = "año";

        const añoTitulo = document.createElement('h2');
        añoTitulo.textContent = `Año ${año.año}`;
        añoTitulo.style.color = "#7c4dff";
        añoDiv.appendChild(añoTitulo);

        año.semestres.forEach(semestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = "semestre-group";

            const semestreTitulo = document.createElement('div');
            semestreTitulo.className = "semestre-title";
            semestreTitulo.textContent = semestre.nombre;
            semestreDiv.appendChild(semestreTitulo);

            const ramosDiv = document.createElement('div');
            ramosDiv.className = "semestre";

            semestre.ramos.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = "ramo";
                if (estadoRamos[ramo.nombre].aprobado) {
                    ramoDiv.classList.add("aprobado");
                }
                if (estadoRamos[ramo.nombre].desbloqueado) {
                    ramoDiv.classList.add("desbloqueado");
                }
                if (!estadoRamos[ramo.nombre].desbloqueado) {
                    ramoDiv.classList.add("bloqueado");
                }

                ramoDiv.onclick = function() {
                    aprobarRamo(ramo.nombre, ramo.desbloquea);
                };

                const nombreDiv = document.createElement('div');
                nombreDiv.className = "nombre";
                nombreDiv.textContent = ramo.nombre;
                ramoDiv.appendChild(nombreDiv);

                const descDiv = document.createElement('div');
                descDiv.className = "descripcion";
                descDiv.textContent = ramo.descripcion;
                ramoDiv.appendChild(descDiv);

                ramosDiv.appendChild(ramoDiv);
            });

            semestreDiv.appendChild(ramosDiv);
            añoDiv.appendChild(semestreDiv);
        });

        container.appendChild(añoDiv);
    });
}

// Aprueba el ramo y desbloquea los siguientes
function aprobarRamo(nombre, desbloqueaArr) {
    if (!estadoRamos[nombre].desbloqueado || estadoRamos[nombre].aprobado) return;

    estadoRamos[nombre].aprobado = true;

    // Desbloquea los ramos que dependían de este
    if (desbloqueaArr) {
        desbloqueaArr.forEach(siguiente => {
            estadoRamos[siguiente].desbloqueado = true;
        });
    }

    renderMalla();
}

// Inicialización
inicializarEstado();
renderMalla();
