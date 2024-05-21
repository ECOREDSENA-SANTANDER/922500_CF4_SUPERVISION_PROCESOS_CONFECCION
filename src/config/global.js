export default {
  global: {
    componenteFormativo: 'Patronaje digital de prendas de vestir',
    descripcionCurso:
      'La comprensión de la elaboración de patrones y el escalado digital implica entender el manejo de  <i> software </i> especializado. Por ello, en este texto se explorará todo el proceso de digitalización, desde el reconocimiento de la interfaz hasta el trazo automático. Se analizarán en detalle dos programas clave: Audaces 360 y <i>OptiTex</i>. Además, se proporcionará una visión general del <i> software </i> Gerber.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Audaces 360',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funciones básicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Patronaje en Audaces de prendas inferiores y superiores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Escalado de patrones en “Audaces Patrones”',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: '<i>OptiTex</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones básicas de <i>PDS</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Patronaje en <i>OptiTex</i> de prendas inferiores y superiores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Escalado de patrones en Marker <i>OptiTex</i>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Gerber',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Interpretación de pantys – Elaboración de ropa interior para dama tipo tanga y brasilera.',
      referencia:
        'SENA.  (2020).  Interpretación de pantys, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9geZEB4JOtQ',
    },
    {
      tema:
        'Interpretación hípsters - Elaboración de ropa interior para dama tipo hípster.',
      referencia:
        'SENA.  (2021).  Interpretación hípsters, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-GlhLbiF6dY',
    },
    {
      tema:
        'Pantaloncillo masculino - Elaboración de ropa interior para caballero tipo pantaloncillo.',
      referencia:
        'SENA.  (2021).  Pantaloncillo masculino, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v9mOfjGAG3Y',
    },
    {
      tema:
        'Herramienta de Software – Denominada Optitex utilizada para el diseño automatizado del patrón en confección.',
      referencia: 'Fernando Jaramillo - Soluciones automatizadas.',
      tipo: 'Manual',
      descarga: '/downloads/0.COMPLEMENTARIO 1 - MANUAL  VERSION 11.pdf',
    },
    {
      tema: 'Herramienta digital Denominada Audaces Tizada.',
      referencia:
        'Herramientas digitales Moda, 13 de junio 2018, AUDACES TIZADA Trazo.',
      tipo: 'Video',
      link: 'https://youtu.be/C0O6derJC2s',
    },
    {
      tema:
        'Herramienta de Software – Denominada Optitex utilizada para trazo de patrón en confección',
      referencia:
        'Herramientas digitales Moda, 15 de marzo 2018, <i>OPTITEX - MARKER</i> Trazo de patrones.',
      tipo: 'Video',
      link: 'https://youtu.be/fscxWYsenLE',
    },
    {
      tema: 'Tutorial Modaris de Lectra – Corte de manga para camisa ',
      referencia:
        'Goméz, M.  (2017).  Tutorial Modaris Lectra, reucperado el 28 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qRMjHPIRPiQ',
    },
  ],
  glosario: [
    {
      termino: '<i>CAD</i>',
      significado: 'Diseño Asistido por Computador.',
    },
    {
      termino: '<i>CAM</i>',
      significado: 'Manufacturas Asistidas por Computador.',
    },
    {
      termino: 'Digitalizadora	',
      significado:
        'Es un periférico que permite al usuario introducir gráficos o dibujos a mano, tal como lo haría con lápiz y papel.',
    },
    {
      termino: 'Interfaz',
      significado: 'Zona de comunicación o acción de un sistema sobre otro.',
    },
    {
      termino: '<i>PDS</i>',
      significado: 'Sistema de Diseño de Patrones.',
    },
    {
      termino: 'Piquetes',
      significado:
        'Líneas cortas (0,3 máximo 0,5 cm) en dirección perpendicular al molde, señaladas en el patrón con el fin de facilitar la operación de confección, se hacen para indicar ubicaciones y guiar la unión de cortes.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso.',
    },
    {
      termino: '<i>Plotter</i>',
      significado:
        'Es una impresora de gran formato que se utiliza para imprimir gráficos y planos.',
    },
    {
      termino: 'Proceso',
      significado:
        'Descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Segmento',
      significado:
        'Es un fragmento de la recta que está comprendido entre dos puntos, llamados puntos extremos o finales.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'Se conoce como <i>software</i>, logicial o soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hacen posible la realización de tareas específicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Audaces 360 - The most complete solution in systems for the fashion industry. (2021). Retrieved 27 May 2021, from',
      link: 'https://audaces.com/audaces-360/',
    },
    {
      referencia:
        '<i>OptiTex</i> - Soluciones Digitales de Principio a Fin para la industria de Moda y Vestuario. (2021), Retrieved 27 May 2021, from',
      link: 'https://optitex.com/es/',
    },
    {
      referencia:
        'Gerber - convierta sus diseños en productos acabados. (2021), Retrieved 27 May 2021, from',
      link: 'https://www.lectra.com/es',
    },
    {
      referencia:
        'SENA.  (2020).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2020.',
    },
    {
      referencia:
        'SENA.  (2021).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Elaboración de Prendas de Vestir Sobre Medidas, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2021.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda ',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda ',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz ',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Regional Santander - Centro Agroturístico ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora Web',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora Full-Stack',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
