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
    jobTitle: 'FULLSTACK DEVELOPER',
    descES:
      'Actualmente trabajo en aquí, una excelente empresa de consultoría de software. Esta experiencia me ha permitido seguir creciendo tanto técnicamente como profesionalmente. He aprendido mucho de mis compañeros, y trabajar de cerca con ellos me ha ayudado a fortalecer mis habilidades de comunicación y resolución de problemas. Los proyectos en los que he participado han estado enfocados principalmente a plataformas CMS (Sistemas de Gestión de Contenidos), donde he contribuido a mejorar el rendimiento, optimizar la experiencia del usuario y ofrecer soluciones escalables adaptadas a las necesidades del cliente. Últimamente también he participado en el desarrollo del backend, creando REST API endpoints y asegurando una buena estructura de los datos utilizando, así como proporcionando documentación mediante Swagger.',
    descEn: `Currently working here, at an excellent software consulting company. This experience has allowed me to keep growing both technically and professionally. I've learned
      a lot from my teammates, and working closely with them has helped me strengthen my communication and problem-solving skills. The projects I've been involved in have mainly focused on CMS (Content Management System) platforms, where I've contributed to improving performance, enhancing user experience, and delivering scalable solutions tailored to the client needs. Lately I have also been involved in the backend development, creating REST API endpoints and ensuring a well-structured data model, as well as providing documentation using Swagger.`,
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
      {
        id: 8,
        taskDescES: 'Desarrollo de REST API endpoints.',
        taskDescEN: 'Develop REST API endpoints.',
      },
      {
        id: 9,
        taskDescES: 'Diseño de estructura de datos.',
        taskDescEN: 'Data model design.',
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
    endDate: '2024/10/28',
    jobTitle: 'FREELANCE SOFTWARE DEVELOPER',
    descES:
      'Este proyecto fue un trabajo como freelance, un gran reto, pero también una excelente experiencia. Tuve que apoyarme bastante en mis habilidades autodidactas, ya que no conocía el software que requerido por el cliente. Esto me llevó a profundizar en su documentación, a pesar de que estaba desactualizada y algunos pasos variaban entre versiones. Para superar estos obstáculos, investigué en foros y otras fuentes técnicas. A lo largo del proyecto también fortalecí mis habilidades de trabajo en equipo y gestión del tiempo, coordinándome con otras personas y asegurando que cumpliéramos con los tiempos establecidos. Utilizamos VMware para gestionar el entorno cuidadosamente antes de migrar todo a producción. Al final, logré entregar una solución funcional, superando las limitaciones técnicas e informativas, lo que ayudó al cliente a avanzar de manera más eficiente con sus operaciones.',
    descEn: `This project was a freelance job, a big challenge, but also a great learning experience. I had to rely heavily on my self-learning skills, as I was
      unfamiliar with the software required by the client. This pushed me to dive deep into its documentation, even though it was outdated and certain steps varied between versions. To overcome this, I had to explore external resources such as community forums and technical articles.
      Throughout the project, I also strengthened my teamwork and time management skills by coordinating with others and ensuring we stayed on schedule. We used VMware to manage the environment carefully before moving everything into production. In the end, I was able to deliver a functional solution, overcoming technical and informational limitations, which helped the client move forward with their operations more efficiently.`,
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
        taskDescEN: 'DNS, SSL and firewall configurations.',
      },
      {
        id: 4,
        taskDescES:
          'Desarrollo de scripts para la descarga, categorización y subida de libros.',
        taskDescEN:
          'Script development to download, upload and categorize books.',
      },
      {
        id: 5,
        taskDescES: 'Despliegue de la aplicación.',
        taskDescEN: 'App deployment.',
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
      'Participé en la actualización y migración del sistema para ayudar a mejorar las operaciones del área financiera. Mejoré mis conocimientos sobre Laravel y sus mejores prácticas, colaborando con el equipo mediante el uso de Bootstrap e implementando AdminLTE con una personalización adecuada para satisfacer las necesidades específicas del proyecto. A lo largo de este proceso, contribuí a agilizar las operaciones y mejorar la interfaz de usuario, lo que finalmente aumentó la eficiencia general y la satisfacción de los usuarios en el área financiera.',
    descEn: `I participated in the system upgrade and migration to help improve the financial area's operations. I enhanced my knowledge of Laravel and its best practices,
      collaborating with the team by using Bootstrap and implementing AdminLTE with proper customization to meet the specific needs of the project. Through this process, I contributed to streamlining operations and enhancing the user interface, which ultimately improved the overall efficiency and user satisfaction in the financial department.`,
    tasks: [
      {
        id: 1,
        taskDescES: 'Migración de la base de datos de Access a MySQL.',
        taskDescEN: 'Migrate the database from Access to MySQL.',
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
          'Define code standards across the project and participate in pull request reviews.',
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
      'Este proyecto fue mi primera experiencia en el ambiente laboral. Participé en el desarrollo de un CMS (Sistema de Gestión de Contenidos) para una empresa de servicios residenciales técnicos. El software se construyó desde cero, y realizamos varias reuniones para definir y analizar los requisitos del software, así como para revisar el progreso y entregar el producto final. Utilizamos Django para el backend y HTML en conjunto con JavaScript para el frontend. A través de este proyecto, adquirí experiencia práctica muy valiosa tanto en desarrollo backend como frontend, lo que fortaleció mis habilidades para resolver problemas y mi capacidad para trabajar de manera colaborativa con un equipo. La finalización exitosa de este proyecto ayudó a agilizar las operaciones del cliente y mejoró la entrega de sus servicios.',
    descEn: `This project was my first real-world experience. I participated in the development of a CMS (Content Management System) for a technical residential services 
      company. The software was built from scratch, and we held several meetings to define and analyze the software requirements, review progress, and deliver the final product. We used Django for the backend and HTML and JavaScript for the frontend. Through this project, I gained valuable hands-on experience with both backend and frontend development, which strengthened my problem-solving skills and ability to work collaboratively with a team. The successful completion of this project helped streamline the client's operations and improved their service delivery.`,
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
        taskDescEN: 'Participated in designing software interfaces.',
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
