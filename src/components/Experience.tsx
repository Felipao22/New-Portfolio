import React from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../data/portfolio";
import { Language } from "../types";

interface ExperienceProps {
  language: Language;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          animate={
            typeof window !== "undefined" && window.innerWidth < 768
              ? "visible"
              : undefined
          }
          viewport={{ once: true, amount: 0 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === "es"
                ? "Experiencia Profesional"
                : "Professional Experience"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "es"
                ? "Desarrollando aplicaciones web y mobile que optimizan procesos y generan impacto real en el negocio"
                : "Building web and mobile applications that optimize processes and deliver real business impact"}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="md:ml-20">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {language === "es" ? exp.position : exp.positionEn}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            <Briefcase className="w-5 h-5" />
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>{exp.company}</span>
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                          <Calendar className="w-5 h-5" />
                          <span>
                            {language === "es" ? exp.period : exp.periodEn}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        {language === "es"
                          ? exp.description
                          : exp.descriptionEn}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: index * 0.1 + techIndex * 0.05,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
