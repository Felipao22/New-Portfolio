import brucken from "../assets/brucken.png";
import proteccion from "../assets/proteccion.png";
import highlands from "../assets/highlands.png";
import terrazas from "../assets/terrazas.png";

export const personalInfo = {
  name: "Felipe Aviani",
  title: "Desarrollador Front End",
  titleEn: "Front End Developer",
  email: "felipeaviani@email.com",
  location: "Córdoba, Argentina",
  profileImage: "https://avatars.githubusercontent.com/u/98073203?v=4",
  bio: "Desarrollador Front End apasionado con más de 3 años de experiencia creando interfaces web y móviles modernas y responsivas. Especializado en  React, Next.js, React Native, JavaScript, TypeScript, Redux Toolkit y diseño UX/UI.",
  bioEn:
    "Passionate Front End Developer with over 3 years of experience creating modern and responsive web and mobile interfaces. Specialized in React, Next.js, React Native, JavaScript, TypeScript, Redux Toolkit and UX/UI design.",
  linkedin: "https://www.linkedin.com/in/felipeaviani/",
  github: "https://github.com/Felipao22",
};

export const experience = [
  {
    id: 1,
    company: "PayFun",
    url: "https://www.payfun.com.ar/",
    position: "Front End Developer",
    positionEn: "Front End Developer",
    period: "Ago 2024 - Presente",
    periodEn: "Aug 2024 - Present",
    description:
      "Formé parte del equipo de desarrollo del panel administrativo interno y de clientes, mejorando un 30% el rendimiento del sitio mediante optimización de renderizado y estados con Redux Toolkit. Incrementé un 40% la eficiencia en la gestión administrativa automatizando procesos clave como generación de reportes y control de accesos. Además, desarrollé un módulo de analítica transaccional con gráficos interactivos para facilitar la visualización de operaciones.",
    descriptionEn:
      "I was part of the development team for the internal and customer administration panel, improving site performance by 30% through rendering and state optimization with Redux Toolkit. I increased administrative management efficiency by 40% by automating key processes such as report generation and access control. In addition, I developed a transactional analytics module with interactive graphics to facilitate the visualization of operations.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Chart.js",
      "React-pdf",
    ],
  },
  {
    id: 2,
    company: "Protección Laboral",
    url: "https://proteccionlaboral.com.ar/",
    position: "Full Stack Developer",
    positionEn: "Full Stack Developer",
    period: "Ene 2023 - Dic 2023",
    periodEn: "Jan 2023 - Dec 2023",
    description:
      "Lideré el desarrollo de una plataforma documental personalizada que mejoró en un 50% el rendimiento del proceso de creación de usuarios y en un 60% la eficiencia en carga y descarga de archivos. Gracias a estas mejoras se logró atraer nuevos clientes interesados en digitalizar su gestión documental.",
    descriptionEn:
      "I led the development of a customized document management platform that improved the performance of the user creation process by 50% and the efficiency of file uploading and downloading by 60%. Thanks to these improvements, we were able to attract new customers interested in digitizing their document management.",
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
