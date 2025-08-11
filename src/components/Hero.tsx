import React from "react";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { Language } from "../types";

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const getElementContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <span className="text-white text-2xl font-bold">👋</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                {language === "es" ? "Hola, soy" : "Hi, I'm"}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl lg:text-3xl text-gray-600 font-medium mb-6"
                variants={itemVariants}
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl"
                variants={itemVariants}
              >
                {language === "es" ? personalInfo.bio : personalInfo.bioEn}
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-6 text-gray-600 sm:col-span-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>

                <motion.button
                  onClick={getElementContact}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "es" ? "Contactar" : "Contact Me"}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
