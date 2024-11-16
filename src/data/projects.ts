import texEncryptorBanner from '@/assets/images/textEncryptor.webp';
import forumBanner from '@/assets/images/forum.webp';
import react from '@/assets/icons/react.svg';
import springboot from '@/assets/icons/springboot.svg';
import javascript from '@/assets/icons/javascript.svg';
import git from '@/assets/icons/git.svg';
import typescript from '@/assets/icons/typescript.svg';
import mysql from '@/assets/icons/mysql.svg';
import sass from '@/assets/icons/sass.svg';
import mui from '@/assets/icons/mui.svg';

export const projects = [
  {
    id: 1,
    title: 'Forum',
    banner: forumBanner,
    descES:
      'Para este proyecto, decidí crear un sitio web totalmente responsivo utilizando sass y Material UI. Este foro te permite realizar todas las operaciones CRUD en usuarios, publicaciones y respuestas; además, todas las operaciones necesitan un token JWT. También hay una función genial para seleccionar una solución para tu publicación. La API REST está bien documentada gracias a Swagger.',
    descEN: `For this project I decided to do a full responsive website by using sass and Material UI. This forum allows you to do all CRUD operations on users, posts and answers, furthermore, all operations need a JWT token. Also there is a cool feature to select a solution for your post. The REST API is well documented thanks to swagger.`,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'TypeScript', icon: typescript },
      { id: 3, name: 'SpringBoot', icon: springboot },
      { id: 4, name: 'Git', icon: git },
      { id: 5, name: 'MySQL', icon: mysql },
      { id: 6, name: 'SASS', icon: sass },
      { id: 7, name: 'Material UI', icon: mui },
    ],
  },
  {
    id: 2,
    title: 'Text Encryptor',
    banner: texEncryptorBanner,
    descES:
      'Este proyecto se centra en proporcionar una entrada de usuario y cifrar el texto; este se muestra y se proporciona la opción de descifrado. El proyecto tiene 2 algoritmos de cifrado y estos se invocan a través de los puntos finales de la API REST. La interfaz de usuario implementa un componente de consola para brindar una mejor experiencia durante el cifrado.',
    descEN: `This project focuses on give an user input and encrypt the text, this one is displayed and the decrypt option is given. The project has 2 encryption algorithms and this ones are called through the REST API endpoints. The user interface implements a console component to bring a better experience while encrypting. `,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'JavaScript', icon: javascript },
      { id: 3, name: 'SpringBoot', icon: springboot },
      { id: 4, name: 'Git', icon: git },
    ],
  },
];
