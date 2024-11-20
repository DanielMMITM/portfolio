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
      'Empecé como practicante frontend en Febrero del 2024 y terminé en Agosto del 2024, afortunadamente tengo actualmente la oportunidad de seguir colaborando con ellos. Sin duda, ha sido una experiencia de mucho aprendizaje para mi perfil como desarrollador, aprendí mucho de mis compañeros de equipo y ha sido una experiencia muy grata el poder aportar valor a proyectos en el ambiente laboral.',
    descEn: `I started as a frontend intern in Februrary 2024 and finished in August 2024. Fortunately I had the opportunity to keep working with Cantera Digital. It has been a great experience with many learnings, I learned a lot of things from my team and I'm glad about getting hands on in a real environment.`,
    tasks: [
      {
        id: 1,
        taskDescES: 'Desarrollo de interfaces responsivas.',
        taskDescEN: 'Develop responsive software interfaces.',
      },
      {
        id: 2,
        taskDescES: 'Consumo de REST APIS.',
        taskDescEN: 'Consume REST APIS.',
      },
      {
        id: 3,
        taskDescES:
          'Uso de librerías para la administración de datos como zustand/redux, tanstack query, etc.',
        taskDescEN:
          'Usage of libraries for data management such as zustand/redux, tanstack query, etc.',
      },
      {
        id: 4,
        taskDescES:
          'Trabajé con la metodología SCRUM y control de versiones (GIT).',
        taskDescEN: 'Work with SCRUM methodology and versioning systems (GIT).',
      },
      {
        id: 5,
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
    startDate: '2024/07/15',
    endDate: '2024/08/28',
    jobTitle: 'FREELANCE',
    descES:
      'Este proyecto fue un desafío, ya que, no contaba con la experiencia ni los conocimientos necesarios, aún así fue posible realizarlo junto con otros 2 compañeros. Sin duda la parte más dificil fue buscar y encontrar soluciones a los problemas ya que en ocasiones la documentación no estaba actualizada, además de que tuve que investigar como hacer ciertas tareas para la correcta configuración del entorno para producción.',
    descEn: `This project was a challenge for me due I didn't have the experience neither the knowledge, however it was possible to do it together with 2 other colleagues. The hardest part of this project was to search solutions for some problems because sometimes the documentation was outdated, also I had to do a research on how to get done some tasks, most of them about how to configure the server properly before the deployment.`,
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
          'Customization of the styles and information based on the school branding.',
      },
      {
        id: 3,
        taskDescES: 'Despliegue del repositorio digital.',
        taskDescEN: 'Deployment of the digital repository.',
      },
      {
        id: 4,
        taskDescES:
          'Desarrollo de scripts para la obtención de libros, categorización y subida de los mismos.',
        taskDescEN:
          'Scripts development to download, upload and categorize books.',
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
