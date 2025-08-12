import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import { Language } from "../types";

interface AboutProps {
  language: Language;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About: React.FC<AboutProps> = ({ language }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: language === "es" ? "Código Limpio" : "Clean Code",
      description:
        language === "es"
          ? "Escribo código mantenible, escalable y eficiente siguiendo las mejores prácticas del sector."
          : "Writing maintainable, scalable, and efficient code following industry best practices.",
    },
    {
      icon: <Palette size={24} />,
      title: language === "es" ? "Enfoque UI/UX" : "UI/UX Focus",
      description:
        language === "es"
          ? "Diseño interfaces intuitivas y atractivas que garantizan una experiencia fluida y agradable."
          : "I design intuitive and attractive interfaces that guarantee a smooth and enjoyable experience.",
    },
    {
      icon: <Zap size={24} />,
      title: language === "es" ? "Rendimiento" : "Performance",
      description:
        language === "es"
          ? "Optimizando aplicaciones para velocidad, accesibilidad y SEO."
          : "Optimizing applications for speed, accessibility, and search engine optimization.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {language === "es" ? "Sobre Mí" : "About Me"}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="prose prose-lg text-gray-600"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="mb-6" variants={itemVariants}>
              {language === "es"
                ? "Soy un desarrollador Frontend con experiencia en construir aplicaciones web modernas, accesibles y altamente performantes."
                : "I'm a Frontend Developer with experience in building modern, accessible, and high-performance web applications."}
            </motion.p>
            <motion.p className="mb-6" variants={itemVariants}>
              {language === "es"
                ? "Me especializo en crear interfaces limpias y responsivas que priorizan la experiencia del usuario sin sacrificar la eficiencia ni la mantenibilidad del código."
                : "I specialize in creating clean, responsive interfaces that prioritize user experience without sacrificing code efficiency or maintainability."}
            </motion.p>
            <motion.p className="mb-6" variants={itemVariants}>
              {language === "es"
                ? "Mi enfoque combina buenas prácticas de desarrollo, diseño centrado en el usuario y optimización continua, asegurando que cada proyecto entregue valor real y se adapte a las necesidades del negocio."
                : "My approach combines best practices in development, user-centered design, and continuous optimization, ensuring that each project delivers real value and adapts to business needs."}
            </motion.p>
            <motion.p variants={itemVariants}>
              {language === "es"
                ? "Estoy comprometido con la mejora constante, aprendiendo nuevas tecnologías y metodologías para ofrecer soluciones innovadoras que destacan por su calidad y rendimiento."
                : "I'm committed to continuous improvement, learning new technologies and methodologies to offer innovative solutions that stand out for their quality and performance."}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
