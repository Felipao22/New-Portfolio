import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Language, CVFiles } from "../src/types";
import About from "./components/About";

const App = () => {
  const [language, setLanguage] = useState<Language>("es");

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleDownloadCV = (lang: Language) => {
    const cvFiles: CVFiles = {
      es: "/CV Felipe Aviani.pdf",
      en: "/Resume Felipe Aviani.pdf",
    };
    const link = document.createElement("a");
    link.href = cvFiles[lang];
    link.download = `${
      lang === "es" ? "CV-Felipe-Aviani.pdf" : "Resume-Felipe-Aviani.pdf"
    }`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onDownloadCV={handleDownloadCV}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </motion.main>

      <Footer language={language} />
    </div>
  );
};

export default App;
