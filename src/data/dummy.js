export const groups = [
  {
    id: 'g1',
    name: 'San Benito — Colegio',
    color: 'yuhu-blue-400',
    sections: {
      resumen: [
        'Excursión confirmada',
        'Mensaje: Profesor indica tarea',
        'Estado: 120 mensajes, 12 académicos'
      ],
      tareas: [
        {title:'Matemáticas — pág 32', due:'2025-09-22'},
        {title:'Ciencias — Proyecto Plantas', due:'2025-09-25'},
        {title:'Inglés — Lectura “The Lost Key”', due:'2025-09-28'}
      ],
      recordatorios: [
        'Tutoría mañana 8:00 AM (Aula 2)',
        'Pago excursión vence 2025-09-30',
        'Reunión padres-profesores: confirmar'
      ],
      enlaces: [
        'Documento actividades (Drive)',
        'Formulario inscripción taller',
        'Material de apoyo (PDF)'
      ],
      bibliografia: [
        'Guía de estudio — Matemáticas',
        'Video tutorial: funciones',
        'Repositorio actividades'
      ]
    }
  },
  {
    id: 'g2',
    name: 'Andes Tech — Universidad',
    color: 'yuhu-green-500',
    sections: {
      resumen: [
        'Mensajes con fechas clave (exámenes)',
        'Entregas destacadas últimas 24h',
        'Conversaciones marcadas "academico"'
      ],
      tareas: [
        {title:'Programación — Sprint 3', due:'2025-09-24'},
        {title:'Algoritmos — Problema #4', due:'2025-09-26'},
        {title:'Proyecto de grupo — Reunión', due:'2025-09-29'}
      ],
      recordatorios: [
        'Sesión laboratorio (reservar equipo)',
        'Entrega parcial 2025-09-30',
        'Inscripción optativa finaliza'
      ],
      enlaces: [
        'Canvas curso',
        'Repo Git profesor',
        'Slides de clase'
      ],
      bibliografia: [
        'Paper recomendado',
        'Libro — Capítulo 4',
        'Lecturas complementarias PDF'
      ]
    }
  }
]

export const tasksOfDay = [
  { id: 't1', title:'Matemáticas — pág 32', group:'San Benito', due:'2025-09-22', status:'pending'},
  { id: 't2', title:'Programación — Sprint 3', group:'Andes Tech', due:'2025-09-24', status:'in-progress'},
  { id: 't3', title:'Ciencias — Proyecto Plantas', group:'San Benito', due:'2025-09-25', status:'pending'},
]

export const interactions = [
  { user:'Ana', group:'San Benito', interactions:48, academicShare:0.8 },
  { user:'Luis', group:'San Benito', interactions:20, academicShare:0.4 },
  { user:'María', group:'Andes Tech', interactions:64, academicShare:0.9 }
]
