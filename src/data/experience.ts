import canteraLogo from '@/assets/images/cantera.webp';
import prestigeLogo from '@/assets/images/prestige.webp';
import sfaLogo from '@/assets/images/finanzas.webp';
import grupoLiasLogo from '@/assets/images/grupoLias.webp';

export const experience = [
  {
    id: 1,
    branding: {
      logo: canteraLogo,
      alt: 'Logo de cantera digital',
      link: 'https://canteradigital.io/',
      lightModeHelp: true,
    },
    employer: 'CANTERA DIGITAL',
    startDate: '2024/02/01',
    endDate: '',
    jobTitle: 'FRONTEND DEVELOPER',
    descES:
      'Actualmente trabajo en aquí, una excelente empresa de consultoría de software. Esta experiencia me ha permitido seguir creciendo tanto técnicamente como profesionalmente. He aprendido mucho de mis compañeros, y trabajar de cerca con ellos me ha ayudado a fortalecer mis habilidades de comunicación y resolución de problemas. Los proyectos en los que he participado han estado enfocados principalmente a plataformas CMS (Sistemas de Gestión de Contenidos), donde he contribuido a mejorar el rendimiento, optimizar la experiencia del usuario y ofrecer soluciones escalables adaptadas a las necesidades del cliente.',
    descEn: `Currently working here, at an excellent software consulting company. This experience has allowed me to keep growing both technically and professionally. I've learned
      a lot from my teammates, and working closely with them has helped me strengthen my communication and problem-solving skills. The projects I've been involved in have mainly focused on CMS (Content Management System) platforms, where I've contributed to improving performance, enhancing user experience, and delivering scalable solutions tailored to the client needs.`,
    tasks: [
      {
        id: 1,
        taskDescES: 'Desarrollo de interfaces responsivas.',
        taskDescEN: 'Develop responsive software interfaces.',
      },
      {
        id: 2,
        taskDescES: 'Consumo de REST APIS.',
        taskDescEN: 'Consume REST API endpoints.',
      },
      {
        id: 3,
        taskDescES:
          'Uso de librerías para la administración de datos, formularios y estados como zustand/redux, tanstack query, context api, etc.',
        taskDescEN:
          'Usage of libraries for data, form handling and state management such as zustand/redux, tanstack query, context api, etc.',
      },
      {
        id: 4,
        taskDescES: 'Trabajé con la metodología SCRUM.',
        taskDescEN: 'Work with SCRUM methodology.',
      },
      {
        id: 5,
        taskDescES: 'Manejo de control de versiones (GIT).',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
      {
        id: 6,
        taskDescES: 'Integración de servicios de terceros.',
        taskDescEN: 'Third-party services integration.',
      },
      {
        id: 7,
        taskDescES: 'Elaboración de documentación técnica del proyecto.',
        taskDescEN: 'Write technical documentation.',
      },
    ],
  },
  {
    id: 2,
    branding: {
      logo: prestigeLogo,
      alt: 'Logo de prestige english school',
      link: 'https://prestige-english.com/',
      lightModeHelp: false,
    },
    employer: 'PRESTIGE ENGLISH SCHOOL',
    startDate: '2024/06/15',
    endDate: '2024/08/28',
    jobTitle: 'FREELANCE SOFTWARE DEVELOPER',
    descES:
      'Este proyecto fue un trabajo freelance, sin duda fue un desafío y una gran experiencia. Puse en práctica mis habilidades autodidactas, ya que desconocía el software que se requería, así que tuve que profundizar en la documentación del software aunque estaba desactualizada y algunas partes del proceso variaban según la versión, por lo que tuve que investigar en otras fuentes como foros. Además, también me permitió practicar mi administración del tiempo y el trabajo en equipo. Durante este proceso se utilizó VMWare para trabajar de manera cuidadosa y entender el funcionamiento para posteriormente pasar al entorno productivo,',
    descEn: `This project was a freelance job, a big challenge but also a great experience. I had to rely on my self-learning skills because I was unfamiliar with the required software. This meant diving deep into its documentation, even though it was outdated and some steps of the process varyied between versions. As a result, I had to research in forums and other sources. It also helped me to practice my teamwork and time management skills. During this process we used VMWare to carefully manage the project before moving it to a production environment.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Instalación y configuración del backend y frontend de DSpace.',
        taskDescEN: `Install and configure DSpace backend and frontend for its proper operation.`,
      },
      {
        id: 2,
        taskDescES:
          'Personalización de estilos e información en base a la escuela.',
        taskDescEN:
          'Customization of styles and content based on the school branding.',
      },
      {
        id: 3,
        taskDescES: 'Configuración de DNS, SSL y despliegue.',
        taskDescEN: 'DNS, SSL configurations and deployment.',
      },
      {
        id: 4,
        taskDescES: 'Configuración de Firewall.',
        taskDescEN: 'Firewall configuration.',
      },
      {
        id: 5,
        taskDescES:
          'Desarrollo de scripts para la descarga, categorización y subida de libros.',
        taskDescEN:
          'Script development to download, upload and categorize books.',
      },
    ],
  },
  {
    id: 3,
    branding: {
      logo: sfaLogo,
      alt: 'Logo de secretaria de finanzas y administración de michoacán',
      link: 'https://secfinanzas.michoacan.gob.mx/',
      lightModeHelp: false,
    },
    employer: 'SECRETARÍA DE FINANZAS Y ADMINISTRACIÓN',
    startDate: '2023/01/05',
    endDate: '2023/06/05',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES:
      'Participé en la migración y mejora del sistema para apoyar al área financiera en la consulta de información y procesos realizados para diversos trámites. Fue muy buena experiencia desde mi integración hasta la finalización del proyecto. Aprendí más acerca de Laravel y sus buenas prácticas colaborando en el equipo, también tuve la posibilidad de trabajar con Bootstrap y templates como AdminLTE customizándolo y mostrando los datos correspondientes.',
    descEn:
      'I participated on the system upgrading and migration to help improve the finantial area operations. It was a great experience from the beginning to the end. I learned more about Laravel and its good pracitces, colaborating with the team by using Bootstrap and implementing AdminLTE with a proper customization.',
    tasks: [
      {
        id: 1,
        taskDescES: 'Migración de la base de datos de Access a MySQL.',
        taskDescEN: 'Migrate database from Access to MySQL.',
      },
      {
        id: 2,
        taskDescES: 'Desarrollo de frontend y backend utilizando Laravel.',
        taskDescEN:
          'Participate in the development of the website using Laravel.',
      },
      {
        id: 3,
        taskDescES:
          'Definición de estándares de código dentro del proyecto y participación en revisión de pull requests.',
        taskDescEN:
          'Define code standards across the project and participate in pull requests reviews.',
      },
      {
        id: 4,
        taskDescES: 'Uso de Jira.',
        taskDescEN: 'Work with Jira.',
      },
      {
        id: 5,
        taskDescES: 'Manejo de control de versiones (GIT).',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
      {
        id: 6,
        taskDescES: 'Consumo de REST API endpoints de terceros.',
        taskDescEN: 'Consume third-party REST API endpoints.',
      },
    ],
  },
  {
    id: 4,
    branding: {
      logo: grupoLiasLogo,
      alt: 'Logo de grupo lias',
      link: 'https://www.facebook.com/GRUPOLIAS/',
      lightModeHelp: true,
    },
    employer: 'GRUPO LIAS',
    startDate: '2022/01/03',
    endDate: '2022/06/03',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES:
      'Este proyecto fue mi primer acercamiento al mundo laboral. Se desarrolló un CMS (Content Management System) para una empresa de servicios residenciales técnicos. El proyecto fue construido desde 0, teniendo sesiones presenciales con el cliente para la obtención de los requerimientos, visualización de avances y entrega del mismo. Para backend se utilzó Django y en el frontend HTML con JavaScript.',
    descEn: `This project was my first approach to the real world. I participated in the development of a CMS (Content Management System) for a technical residential services company. This software was built from scratch, we held several meetings to define and analyze the software requirements, review progress and deliver the final product. We used Django for the backend and HTML and JavaScript for the frontend.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Definición de especificaciones de software de acuerdo a los requerimientos del cliente.',
        taskDescEN:
          'Define software specifications according to the client requirements.',
      },
      {
        id: 2,
        taskDescES: 'Diseño de interfaces de la plataforma.',
        taskDescEN: 'Participated in the software interfaces designs.',
      },
      {
        id: 3,
        taskDescES: 'Desarrollo de frontend y backend con Django.',
        taskDescEN:
          'Participate in the development of backend and frontend with Django.',
      },
      {
        id: 4,
        taskDescES:
          'Diseño de la base de datos utilizando SQLite de acuerdo a las especificaciones de software.',
        taskDescEN: 'Designed SQL database based on software specifications.',
      },
      {
        id: 5,
        taskDescES: 'Trabajé con la metodología SCRUM.',
        taskDescEN: 'Work with SCRUM methodology.',
      },
      {
        id: 6,
        taskDescES: 'Manejo de control de versiones (GIT).',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
    ],
  },
];
