import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { Language } from "../types";

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Felipe.dev
              </h3>
              <p className="text-gray-400">
                {language === "es"
                  ? "Desarrollador Front End apasionado por crear experiencias web excepcionales."
                  : "Front End Developer passionate about creating exceptional web experiences."}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">
                {language === "es" ? "Enlaces Rápidos" : "Quick Links"}
              </h4>
              <div className="space-y-2">
                {[
                  {
                    id: "about",
                    label: language === "es" ? "Sobre mí" : "About",
                  },
                  {
                    id: "experience",
                    label: language === "es" ? "Experiencia" : "Experience",
                  },
                  {
                    id: "skills",
                    label: language === "es" ? "Habilidades" : "Skills",
                  },
                  {
                    id: "projects",
                    label: language === "es" ? "Proyectos" : "Projects",
                  },
                  {
                    id: "contact",
                    label: language === "es" ? "Contacto" : "Contact",
                  },
                ].map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">
                {language === "es" ? "Conecta Conmigo" : "Connect With Me"}
              </h4>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm">{personalInfo.email}</p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-gray-800 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Felipe Aviani.
              {language === "es" ? " Hecho con" : " Made with"}
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              {language === "es" ? "y mucho café" : "and lots of coffee"} ☕
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
