import { motion } from "motion/react";
import { Award, Zap, Users, Code, Briefcase, FlaskConical, Database, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Dean's Lister",
      description: "GWA: 1.225 | Candidate for Magna Cum Laude",
      color: "from-primary to-accent",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Flyrank AI Interns",
      description: "Frontend AI Engineering + AI Fluency · Sarajevo · 2026",
      color: "from-accent to-primary",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Founder & CEO",
      description: "MOOVE · Tanglaw | Product & AI Startups",
      color: "from-primary to-secondary",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend / Full-Stack Engineer",
      description: "React · Next.js · TypeScript · Node.js · Supabase",
      color: "from-secondary to-primary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & ML Developer",
      description: "OpenAI · Groq · IBM Granite · HuggingFace · PyTorch",
      color: "from-accent to-secondary",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & Engineering",
      description: "Kimball DWH · Airflow · Tableau · scikit-learn",
      color: "from-primary to-accent",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Project Lead",
      description: "Top 6 BPI DataWave · Top 4 CSSprint · UNESCO Hackathon",
      color: "from-secondary to-accent",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "UNLEASH Philippines Talent",
      description: "Selected from all 18 Philippine Regions · 2025",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-lg leading-relaxed mb-6">
              I'm a <span className="text-primary font-medium">4th-year BS Computer Science student specializing in Data Science at the University of Santo Tomas</span> with hands-on internship and product experience. I recently completed two Flyrank AI internship programs (Sarajevo, Europe, July to September 2026): a{" "}
              <span className="text-primary font-medium">Frontend AI Engineering internship</span>, where I delivered 8 frontend assignments (60% above the 5-assignment track requirement) and an accepted capstone using React, TypeScript, and Tailwind CSS; and an{" "}
              <span className="text-primary font-medium">AI Fluency internship</span>, where I completed 15 structured assignments across AI workflow design, output evaluation, documentation, and responsible AI use.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beyond the internships, I founded two products:{" "}
              <span className="font-medium">MOOVE</span>, a full-stack preventive wellness platform for Filipino drivers (React 19, TypeScript, Supabase, Groq AI; validated at 4.93/5 satisfaction and 93% task completion across 15 participants), and{" "}
              <span className="font-medium">Tanglaw</span>, an offline-first AI platform for Media and Information Literacy built for the UNESCO Youth Hackathon 2026, featuring a 12-feature civic technology ecosystem and explainable AI verification.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My technical work spans{" "}
              <span className="text-primary font-medium">frontend and full-stack engineering, AI-assisted development, AI workflow design, machine learning, NLP research, data engineering, and product development</span>. I have fine-tuned transformer models (93.51% accuracy on 28,503 headlines), built Kimball-modeled data warehouses processing 500K+ orders, and led teams across hackathons and real-world software projects.
            </p>
            <p className="text-lg leading-relaxed">
              I'm looking for my next opportunity in{" "}
              <span className="text-primary font-medium">software engineering, frontend development, full-stack, AI/ML, or data roles</span>, where I can apply what I've built and continue growing as an engineer.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="mb-2 text-primary">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
