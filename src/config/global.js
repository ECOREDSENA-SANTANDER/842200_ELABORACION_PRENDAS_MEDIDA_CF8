export default {
  global: {
    componenteFormativo: 'Modificación de prendas',
    descripcionCurso:
      'Este componente permitirá generar una integración entre la anatomía, la prenda y el cliente, desde el análisis del cuerpo hasta la adaptación de piezas según los requerimientos de ajuste, el desarmado y procesos de adaptación manuales como en máquinas de coser, se hará a partir de la comunicación con el cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: '',
        numero: '1',
        titulo: 'Atención al cliente y recepción de la prenda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '1.1',
            titulo: 'Análisis ergonómico del cliente',
            hash: 't_1_1',
          },
          {
            icono: '',
            numero: '1.2',
            titulo: 'Medición y señalizado de la prenda',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: 'Técnicas y proceso para arreglos de prendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: '',
        numero: '3',
        titulo: 'Modificación y arreglos en las prendas de vestir',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: '',
        numero: '4',
        titulo: 'Supraciclaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: '',
        numero: '5',
        titulo: 'Acabados y terminados',
        desarrolloContenidos: true,
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
        download: 'downloads/CF8_842200_DU.zip',
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
      tema: 'Adaptaciones y modificaciones de prendas de vestir',
      referencia:
        'Durán, D. (2013). Adaptaciones en prendas de vestir: arreglos y adaptaciones de prendas y artículos en textil y piel (UF1032). IC Editorial.',
      tipo: 'Libro',
      link:
        'https://studylib.es/doc/9277926/adaptaciones-en-prendas-de-vestir.',
    },
  ],
  glosario: [
    {
      termino: 'Piquetes',
      significado:
        'línea corta (0,3 máximo 0, 5 cm) en dirección perpendicular al molde, señaladas en el patrón con el fin de facilitar la operación de confección, al indicar ubicaciones, y guiar al unir cortes.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'Descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Talla',
      significado:
        'Expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Hilvanar',
      significado:
        'Coser a mano con la implementación de diversas puntadas, esto lo define su finalidad.',
    },
    {
      termino: 'Forro',
      significado:
        'Tela que está integrada a una prenda, comparten patrón y molde pero estas difieren en largo, por ejemplo en chaquetas.',
    },
    {
      termino: 'Bies',
      significado:
        'Término sinónimo de sesgo, quiere decir que fue cortado a un ángulo de 45°.',
    },
    {
      termino: 'Entretela',
      significado:
        'base que estabiliza una pieza que servirá de refuerzo en vistas o partes que necesiten dar soporte a una estructura de la prenda.',
    },
    {
      termino: 'Guata',
      significado:
        'Grupo de filamentos que sirven para acolchar y suele ser usado en hombreras.',
    },
    {
      termino: 'Fibra textil',
      significado:
        'Grupo de filamentos que pueden ser de origen natural, sintéticas o artificial.',
    },
  ],
  referencias: [
    {
      referencia: '1.000 cursos gratis (2019). Costura y sastrería.',
      link:
        'https://1000cursosgratis.com/curso-profesional-de-costura-y-sastreria/',
    },
    {
      referencia: '123rf (2021). Imagen.',
      link:
        'https://es.123rf.com/photo_89500746_agujas-y-alfileres-sobre-fondo-blanco-dibujo-colorido-ilustraci%C3%B3n-de-accesorios-para-artesan%C3%ADas-vector.html',
    },
    {
      referencia: '123rf. (2021). Imagen.',
      link:
        'https://es.123rf.com/photo_74730255_tipos-constituci%C3%B3n-del-cuerpo-femenino-peso-normal-y-delgada-figura-de-la-grasa-de-una-mujer-ectomorfo-.html',
    },
    {
      referencia:
        'De Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3 [Ebook]. Servicio Nacional de Aprendizaje SENA.',
      link: 'https://hdl.handle.net/11404/1432.',
    },
    {
      referencia:
        'García, A. (2018). Sistema de reciclaje de textiles post-consumo para el desarrollo de productos de economía circular en la ciudad de Bogotá, D.C. [Tesis de maestría]. Universidad Distrital, Bogotá, Colombia.',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/13550/Garc%EDaAcostaM%F3nicaViviana2018.pdf;jsessionid=B3275F3F4782A5F7AF1F12BF67314DD5?sequence=1',
    },
    {
      referencia: 'Herramientas. (2021). Herramientas para taller de costura.',
      link: 'https://herramientas.tv/herramientas-para-taller-de-costura/',
    },
    {
      referencia:
        'Inexmoda. (s.f.). Fashion Snoops. Sistema de Bibliotecas SENA.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },
    {
      referencia: 'Istock. (2021). Imagen',
      link: 'https://www.istockphoto.com/es/fotos/sastre',
    },
    {
      referencia:
        'Knight, L. (2012). Secretos de una buena costurera. Editorial Océano Ámbar.',
      link: '',
    },
    {
      referencia: 'Luisa Pagnoli. (2021). Luisa Pagnoli.',
      link: 'https://www.luisaspagnoli.it/it_it/',
    },
    {
      referencia: 'Naii. (2015). 3 maneras de descoser.',
      link:
        'https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/',
    },
    {
      referencia:
        'Plásticamente bilingüe. (2021). El cuerpo humano: mi versión.',
      link:
        'https://plasticamentebilingue.blogspot.com/2020/05/el-cuerpo-humano-mi-version-de-keith.html',
    },
    {
      referencia: 'Sea. (2021). Upcycling.',
      link: 'http://sea.com.uy/upcycling-una-alternativa-de-reciclaje-textil/',
    },
    {
      referencia: 'Skarlet Costura. (2021). Cómo descoser.',
      link: 'https://skarlett.es/como-descoser/',
    },
    {
      referencia: 'Vestuario. (s.f.). Tiza de sastre herramienta de costura.',
      link:
        'http://www.vestuariocr.com/costura-general/tecnicas-de-costura/181-tiza-de-sastre-herramientas-de-costura-para-que-sirve-como-funciona-aprende-a-coser.html',
    },
    {
      referencia: 'Zicla. (2019). Residuos textiles.',
      link: 'https://www.zicla.com/blog/residuos-textiles-reciclaje-ropa/',
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
          nombre: 'Ledy Johana Velásquez Hernández',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Diseño, confección y moda',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia - Diseño, confección y moda',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional distrito capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validadora para Contenidos Inclusivos y Accesibles',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
