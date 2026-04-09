import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Smartphone, Zap } from "lucide-react";
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
      title: language === "es" ? "Código Escalable" : "Scalable Code",
      description:
        language === "es"
          ? "Desarrollo aplicaciones mantenibles y escalables utilizando buenas prácticas y arquitectura moderna."
          : "I build maintainable and scalable applications using modern architecture and best practices.",
    },
    {
      icon: <Smartphone size={24} />,
      title: language === "es" ? "Web & Mobile" : "Web & Mobile",
      description:
        language === "es"
          ? "Experiencia desarrollando aplicaciones web y móviles con React, Next.js y React Native."
          : "Experience building web and mobile applications using React, Next.js, and React Native.",
    },
    {
      icon: <Zap size={24} />,
      title: language === "es" ? "Impacto en Negocio" : "Business Impact",
      description:
        language === "es"
          ? "Optimizo rendimiento y automatizo procesos para mejorar la eficiencia y la experiencia del usuario."
          : "I optimize performance and automate processes to improve efficiency and user experience.",
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
                ? "Soy desarrollador Frontend & Mobile con experiencia construyendo aplicaciones web y mobiles modernas utilizando React, Next.js y React Native."
                : "I'm a Frontend & Mobile Developer with experience building modern web and mobile applications using React, Next.js, and React Native."}
            </motion.p>

            <motion.p className="mb-6" variants={itemVariants}>
              {language === "es"
                ? "He trabajado en plataformas administrativas, sistemas financieros y aplicaciones orientadas a la optimización de procesos, mejorando rendimiento, escalabilidad y experiencia de usuario."
                : "I have worked on administrative platforms, fintech systems, and applications focused on process optimization, improving performance, scalability, and user experience."}
            </motion.p>

            <motion.p className="mb-6" variants={itemVariants}>
              {language === "es"
                ? "Me enfoco en desarrollar interfaces eficientes y escalables, combinando buenas prácticas, manejo de estado y optimización de datos para lograr aplicaciones robustas."
                : "I focus on building efficient and scalable interfaces by combining best practices, state management, and data optimization to deliver robust applications."}
            </motion.p>

            <motion.p variants={itemVariants}>
              {language === "es"
                ? "Busco constantemente mejorar mis habilidades y aportar valor real al negocio mediante soluciones tecnológicas que optimicen procesos y mejoren la experiencia del usuario."
                : "I continuously improve my skills and aim to deliver real business value through technology solutions that enhance processes and user experience."}
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
