import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Globe } from "lucide-react";
import { Language } from "../types";

interface HeaderProps {
  language: Language;
  onLanguageChange: (newLanguage: Language) => void;
  onDownloadCV: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onDownloadCV,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const menuItems = [
    {
      id: "about",
      label: language === "es" ? "Sobre mí" : "About",
      labelEn: "About",
    },
    {
      id: "experience",
      label: language === "es" ? "Experiencia" : "Experience",
      labelEn: "Experience",
    },
    {
      id: "skills",
      label: language === "es" ? "Habilidades" : "Skills",
      labelEn: "Skills",
    },
    {
      id: "projects",
      label: language === "es" ? "Proyectos" : "Projects",
      labelEn: "Projects",
    },
    {
      id: "contact",
      label: language === "es" ? "Contacto" : "Contact",
      labelEn: "Contact",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      setIsMenuOpen(false);
      return;
    }
    const wasOpen = isMenuOpen;

    if (wasOpen) setIsMenuOpen(false);

    const doScroll = () => {
      const headerEl = headerRef.current ?? document.querySelector("header");
      const headerHeight = headerEl
        ? (headerEl as HTMLElement).offsetHeight
        : 0;

      const viewportOffset = window.visualViewport?.offsetTop ?? 0;

      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;

      const top = rect.top + scrollTop - headerHeight - viewportOffset - 16;

      window.scrollTo({
        top: Math.max(0, Math.floor(top)),
        behavior: "smooth",
      });
    };
    if (wasOpen) {
      window.setTimeout(doScroll, 350);
    } else {
      doScroll();
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* Logo */}
          <motion.div
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Felipe.dev
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center flex-wrap gap-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center flex-wrap gap-2">
            <motion.button
              onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
              className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">
                {language === "es" ? "EN" : "ES"}
              </span>
            </motion.button>

            <motion.button
              onClick={() => onDownloadCV(language)}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              {language === "es" ? "Descargar CV" : "Download Resume"}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <motion.button
                onClick={() =>
                  onLanguageChange(language === "es" ? "en" : "es")
                }
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === "es" ? "English" : "Español"}
                </span>
              </motion.button>

              <motion.button
                onClick={() => onDownloadCV(language)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                {language === "es" ? "CV" : "Resume"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
