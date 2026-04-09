import brucken from "../assets/brucken.png";
import proteccion from "../assets/proteccion.png";
import highlands from "../assets/highlands.png";
import terrazas from "../assets/terrazas.png";
import { getYearsOfExperience } from "../utils/getYearsExperience";

export const personalInfo = {
  name: "Felipe Aviani",
  title: "Frontend & Mobile Developer",
  titleEn: "Frontend & Mobile Developer",
  email: "felipeaviani@gmail.com",
  location: "Córdoba, Argentina",
  profileImage: "https://avatars.githubusercontent.com/u/98073203?v=4",
  bio: `Desarrollador Frontend & Mobile con más de ${getYearsOfExperience()} años de experiencia desarrollando aplicaciones web y móviles. Especializado en React, Next.js, React Native y TypeScript. Experiencia en plataformas de gestión, sistemas financieros y aplicaciones enfocadas en optimización de procesos, rendimiento y experiencia de usuario.`,
  bioEn: `
    Frontend & Mobile Developer with ${getYearsOfExperience()}+ years of experience building web and mobile applications. Specialized in React, Next.js, React Native, and TypeScript. Experienced in management platforms, fintech systems, and applications focused on process optimization, performance, and user experience.`,
  linkedin: "https://www.linkedin.com/in/felipeaviani/",
  github: "https://github.com/Felipao22",
};

export const experience = [
  {
    id: 1,
    company: "PayFun",
    url: "https://www.payfun.com.ar/",
    position: "Front End Developer",
    positionEn: "Frontend Developer",
    period: "Ago 2024 - Presente",
    periodEn: "Aug 2024 - Present",
    description:
      "Participo en el desarrollo del panel administrativo interno y del portal de clientes, que gestionan operaciones financieras como débitos automáticos, órdenes de pago y transferencias. Optimicé el rendimiento del sistema en un 30% mediante mejoras en renderizado, manejo de estado global y carga de datos. Además, incrementé un 40% la eficiencia operativa automatizando procesos como generación de reportes, control de accesos y buscadores inteligentes. También desarrollé un módulo de analítica transaccional con gráficos interactivos para la toma de decisiones.",
    descriptionEn:
      "Contribute to the development of internal admin panels and client-facing platforms handling financial operations such as automatic debits, payment orders, and bank transfers. Improved system performance by 30% through optimized rendering, global state management, and data loading strategies. Increased operational efficiency by 40% by automating key processes such as report generation, role-based access control, and advanced search. Also developed a transactional analytics module with interactive charts for data-driven decision-making.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "Chart.js",
      "React-PDF",
    ],
  },
  {
    id: 2,
    company: "Protección Laboral",
    url: "https://github.com/Felipao22/app-native-proteccion",
    position: "React Native Developer",
    positionEn: "React Native Developer",
    period: "Ene 2026 - Presente",
    periodEn: "Jan 2026 - Present",
    description:
      "Desarrollo una aplicación móvil para la gestión de constancias y documentación en campo, optimizando el acceso y registro de información. Implemento autenticación con persistencia de sesión, dashboard operativo y formularios con captura de imágenes y firma digital. Además, desarrollé un módulo de gestión documental con búsqueda, filtros, paginación, descarga y eliminación de archivos, enfocado en usabilidad y rendimiento en entornos móviles.",
    descriptionEn:
      "Developing a mobile application for field data collection and document management, improving accessibility and operational efficiency. Implemented authentication with persistent sessions, operational dashboards, and advanced forms including image capture and digital signature. Built a document management module with search, filters, pagination, download, and deletion features, focused on usability and performance in mobile environments.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "AsyncStorage",
      "React Navigation",
      "Axios",
    ],
  },
  {
    id: 3,
    company: "Protección Laboral",
    url: "https://proteccionlaboral.com.ar/",
    position: "Full Stack Developer",
    positionEn: "Full Stack Developer",
    period: "Ene 2023 - Dic 2023",
    periodEn: "Jan 2023 - Dec 2023",
    description:
      "Lideré el desarrollo de una plataforma documental personalizada, optimizando en un 50% el proceso de creación de usuarios y en un 60% la eficiencia en la carga y descarga de archivos. Estas mejoras facilitaron la digitalización de procesos y la incorporación de nuevos clientes.",
    descriptionEn:
      "Led the development of a custom document management platform, improving user creation performance by 50% and file upload/download efficiency by 60%. These improvements supported process digitalization and helped attract new clients.",
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "Ant Design",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
  },
];

export const technologies = [
  {
    category: "Front End",
    categoryEn: "Front End",
    skills: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "HTML5", level: 95, icon: "🟧" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 88, icon: "💨" },
      { name: "React", level: 95, icon: "⚛️" },
    ],
  },
  {
    category: "Frameworks",
    categoryEn: "Frameworks",
    skills: [
      { name: "Next.js", level: 85, icon: "⚡" },
      { name: "React Native", level: 85, icon: "⚛️" },
      { name: "Redux", level: 80, icon: "🌀" },
      { name: "Zustand", level: 70, icon: "🐻" },
      { name: "React Router", level: 75, icon: "🔀" },
    ],
  },
  {
    category: "Front End Libraries",
    categoryEn: "Front End Libraries",
    skills: [
      { name: "Bootstrap", level: 80, icon: "💜" },
      { name: "Ant Design", level: 75, icon: "🛠️" },
      { name: "Material UI", level: 80, icon: "Ⓜ️" },
      { name: "Chart.js", level: 75, icon: "📊" },
      { name: "react-pdf", level: 70, icon: "📄" },
    ],
  },
  {
    category: "Back End",
    categoryEn: "Back End",
    skills: [
      { name: "Node.js", level: 95, icon: "🟩" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Express", level: 95, icon: "🚂" },
      { name: "Sequelize", level: 90, icon: "🐘" },
      { name: "REST API", level: 88, icon: "🌐" },
      { name: "NodeMailer", level: 80, icon: "✉️" },
    ],
  },
  {
    category: "Base de Datos",
    categoryEn: "Database",
    skills: [
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MySQL", level: 75, icon: "🐬" },
      { name: "MongoDB", level: 70, icon: "🍃" },
    ],
  },
  {
    category: "Herramientas",
    categoryEn: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "Webpack", level: 75, icon: "📦" },
      { name: "Figma", level: 80, icon: "🎯" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
  {
    category: "CMS / Plataformas Web",
    categoryEn: "CMS / Web Platforms",
    skills: [
      { name: "WordPress", level: 80, icon: "🌐" },
      { name: "WooCommerce", level: 75, icon: "🛒" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Protección Laboral",
    titleEn: "Protección Laboral",
    description:
      "Plataforma para administrar usuarios y documentos, con acceso para que clientes descarguen sus archivos.",
    descriptionEn:
      "Platform to manage users and documents, allowing clients to access and download their files.",
    image: proteccion,
    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Ant Design",
      "Node.js",
      "Express",
      "PostgresSQL",
      "Sequelize",
    ],
    liveUrl: "https://proteccionlaboral.com.ar/",
    githubUrl: "https://github.com/Felipao22/proteccion-app",
  },
  {
    id: 2,
    title: "Brücken Solutions Corp.",
    titleEn: "Brücken Solutions Corp.",
    description:
      "Sitio web corporativo responsive con animaciones y optimización SEO",
    descriptionEn:
      "Responsive corporate website with animations and SEO optimization",
    image: brucken,
    technologies: ["WordPress"],
    liveUrl: "https://bruckencorp.com/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Terrazas del Alba",
    titleEn: "Terrazas del Alba",
    description:
      "Sitio web corporativo para una villa residencial, con diseño responsive y optimización SEO.",
    descriptionEn:
      "Corporate website for a residential villa, featuring responsive design and SEO optimization.",
    image: terrazas,
    technologies: ["Wordpress"],
    liveUrl: "https://terrazasdelalba.com/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "HighLands",
    titleEn: "HighLands",
    description:
      "Sitio web para empresa de turismo corporativo, con diseño responsive y optimización SEO.",
    descriptionEn:
      "Website for a corporate tourism company, featuring responsive design and SEO optimization.",
    image: highlands,
    technologies: ["Wordpress"],
    liveUrl: "https://highlands.tur.ar/",
    githubUrl: "",
  },
];
