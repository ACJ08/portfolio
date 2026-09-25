import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation darkMode={darkMode} />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <main>
        <Hero darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-secondary py-8 text-center">
        <p className="text-muted-foreground">
          © 2026 Anne Carol G. Jonson. All rights reserved.
        </p>
        <p className="text-muted-foreground mt-2">
          Built with React, Tailwind CSS, and Motion
        </p>
      </footer>
    </div>
  );
}
