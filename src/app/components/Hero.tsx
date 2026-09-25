import { motion, AnimatePresence } from "motion/react";
import { Download, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import formalCarolLight from "../../imports/formal_carol_light_mode.jpg";
import formalCarolDark from "../../imports/formal_Carol_dark_mode-1.jpg";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [typingText, setTypingText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeHighlight, setResumeHighlight] = useState(false);

  const phrases = [
    "Frontend AI Intern · Flyrank · 2026",
    "Full-Stack Engineer & Founder",
    "Open to Software Engineering Roles",
    "AI & ML Developer",
    "Data Science Practitioner",
    "Frontend & Full-Stack Developer",
    "Open to Internship Opportunities",
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (typingText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypingText(currentPhrase.slice(0, typingText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentPhraseIndex]);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1BaeBDMOh05QdhMNl94B_a7ApqCQBQRvk?usp=sharing",
      "_blank"
    );
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowClick = () => {
    // Flash the Resume button to draw attention
    setResumeHighlight(true);
    setTimeout(() => setResumeHighlight(false), 1500);
    // Smooth scroll to resume CTA area
    const el = document.querySelector("#hero-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/25 to-accent/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Content (left on desktop, bottom on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center lg:text-left order-2 lg:order-1 flex flex-col gap-4"
          >
            {/* Hook line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center justify-center lg:justify-start"
            >
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm tracking-wide">
                ✦ &nbsp;Codes with purpose. Leads with clarity.
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="leading-tight"
            >
              Anne Carol G. Jonson
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              Computer Science Student · Data Science Specialization · Frontend · Full-Stack · AI & Data
            </motion.p>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-10 flex items-center justify-center lg:justify-start"
            >
              <p className="text-xl text-primary font-medium">
                {typingText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse align-middle" />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-muted-foreground italic border-l-4 border-primary/40 pl-4 text-left max-w-lg mx-auto lg:mx-0"
            >
              "Building intelligent, scalable, and human-centered systems through
              software engineering, data science, and artificial intelligence."
            </motion.p>

            {/* CTAs */}
            <motion.div
              id="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                onClick={handleDownloadResume}
                animate={
                  resumeHighlight
                    ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0 0px rgba(139,92,246,0)", "0 0 0 8px rgba(139,92,246,0.3)", "0 0 0 0px rgba(139,92,246,0)"] }
                    : {}
                }
                transition={{ duration: 0.6 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <button
                onClick={scrollToContact}
                className="px-8 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* ── Profile Picture (right on desktop, top on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Outer gradient ring */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-[3px] shadow-2xl shadow-primary/30">
                {/* Inner white gap */}
                <div className="w-full h-full rounded-full bg-background p-[3px]">
                  {/* Photo container */}
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Light mode image */}
                    <motion.img
                      key="light"
                      src={formalCarolLight}
                      alt="Anne Carol G. Jonson"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "center 15%" }}
                      initial={false}
                      animate={{
                        opacity: darkMode ? 0 : 1,
                        scale: darkMode ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    {/* Dark mode image */}
                    <motion.img
                      key="dark"
                      src={formalCarolDark}
                      alt="Anne Carol G. Jonson"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "center 15%" }}
                      initial={false}
                      animate={{
                        opacity: darkMode ? 1 : 0,
                        scale: darkMode ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-2xl px-3 py-2 shadow-lg text-xs font-semibold tracking-wide"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Open to Internships
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated arrow — scrolls to Resume CTA and highlights it */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 pb-8 flex flex-col items-center cursor-pointer group"
        onClick={handleArrowClick}
        title="Go to Download Resume"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.9)] transition-all duration-300"
        >
          <ChevronDown className="w-7 h-7" strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
