import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Wrench, Layers } from "lucide-react";
import { technologies } from "../data/portfolio";
import { Language } from "../types";

interface SkillsProps {
  language: Language;
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("frontend")) return Code;
    if (
      category.toLowerCase().includes("herramientas") ||
      category.toLowerCase().includes("tools")
    )
      return Wrench;
    return Layers;
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === "es" ? "Habilidades Técnicas" : "Technical Skills"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "es"
                ? "Tecnologías y herramientas que domino para crear experiencias web excepcionales"
                : "Technologies and tools I master to create exceptional web experiences"}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {technologies.map((category, categoryIndex) => {
              const IconComponent = getCategoryIcon(category.category);

              return (
                <motion.div
                  key={categoryIndex}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === "es"
                        ? category.category
                        : category.categoryEn}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-semibold text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-600">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
