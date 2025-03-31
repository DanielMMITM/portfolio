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
      'Actualmente trabajo en Cantera Digital, una excelente consultora en el desarrollo de software. Trabajar aquí me ha permitido mejorar tanto mis habilidades técnicas como blandas, comunicándome y colaborando de manera eficiente con mi equipo de trabajo, así como también aprender nuevas cosas. En general, los proyectos en los que he estado involucrando son CMS (Content Management System), por lo que tengo experiencia en este tipo de plataformas.',
    descEn: `Currently I'm working here, an excellent software consultant company. Work in here allowed me to keep improving my technical skills as well as the soft ones. I've also learned a lot of from my teammates. The projects I've been involved in are mainly CMS(Content Management System) platforms.`,
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
        taskDescEN: 'Third party services integration.',
      },
      {
        id: 7,
        taskDescES: 'Elaboración de documentación técnica del proyecto.',
        taskDescEN: 'Elaborate technical documentation.',
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
        taskDescEN: `Install and configure DSpace backend and frontend for it's proper operation.`,
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
      'Realicé mi servicio social en esta dependencia y los aprendizajes fueron muy buenos. Participé en la migración y mejora del sistema para apoyar al área financiera en la consulta de información y procesos para los trámites. Fue una buena experiencia ya que aprendí un nuevo framework el cual fue laravel, además de que siempre fui apoyado por mi supervisor y el solía compartir muchos tips conmigo.',
    descEn:
      'I did my social service/internship on this company and I learned a lot of things. I participated on the system upgrading and migration to help improve the finantial area operations. It was a grateful experience since I learned a new framework which was laravel and I always was guided by my supervisor and he used to tell me some tips.',
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
          'Define code standards among the project and participate in pull requests reviews.',
      },
      {
        id: 4,
        taskDescES: 'Manejo de Jira y control de versiones (GIT).',
        taskDescEN: 'Work with Jira and versioning systems (GIT).',
      },
      {
        id: 5,
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
      'Este proyecto fue llevado a cabo por un equipo de 5 personas, el cual se desarrollo un CMS (Sistema de Gestión de Contenidos) para una empresa de servicios técnicos residenciales. Este cliente fue conseguido por una maestra, la cual nos brindó el apoyo para tener nuestro primer acercamiento en el mundo laboral, de tal manera que pudieramos aprender, trabajar y desarrollar el proyecto para un cliente real.',
    descEn: `This project was developed by me and 4 more persons. We developed a CMS (Content Management System) to allow the user manage the information displayed on the website. This software was about a website for technical residential services and this project was my first aproach into the real world, thanks to a teacher who reach a real client to bring us this challenge..`,
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
        taskDescES: 'Desarrollo de frontend y backend con Django.',
        taskDescEN:
          'Participate in the development of backend and frontend with Django.',
      },
      {
        id: 3,
        taskDescES:
          'Diseño de la base de datos utilizando SQLite de acuerdo a las especificaciones de software.',
        taskDescEN: 'Designed SQL database based on software specifications.',
      },
      {
        id: 4,
        taskDescES:
          'Trabajé con la metodología SCRUM y control de versiones (GIT).',
        taskDescEN: 'Work with SCRUM methodology and versioning systems(GIT).',
      },
    ],
  },
];
