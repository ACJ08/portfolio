import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML",
        "CSS",
        "SQL",
        "Dart",
      ],
    },
    {
      category: "Frameworks & Full-Stack Development",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Flutter",
        "Tailwind CSS",
        "Shadcn UI",
        "JSP",
        "Servlets",
        "REST APIs",
      ],
    },
    {
      category: "Databases & Data Engineering",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Supabase",
        "SQLite",
        "Data Warehousing",
        "ETL Pipelines",
        "Kimball Dimensional Modeling",
      ],
    },
    {
      category: "Data Science & Artificial Intelligence",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
        "HuggingFace Transformers",
        "OpenAI API",
        "Groq API",
        "IBM Granite",
        "LangChain",
        "BERT Models",
        "NLP",
        "Machine Learning",
        "Deep Learning",
        "Data Visualization",
      ],
    },
    {
      category: "Business Intelligence & Analytics",
      skills: [
        "Tableau",
        "Recharts",
        "Dashboard Design",
        "Data Analytics",
        "BI Reporting",
        "Apache Airflow",
      ],
    },
    {
      category: "Design & Multimedia",
      skills: [
        "Figma",
        "Canva",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Adobe Photoshop",
        "Adobe Premiere Pro",
        "CapCut",
      ],
    },
    {
      category: "Developer & Productivity Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Docker",
        "Vercel",
        "Render",
        "n8n",
        "Google Workspace",
        "Microsoft Office",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },
    {
      category: "Software Engineering & Architecture",
      skills: [
        "System Design",
        "UML Diagrams",
        "ERD Design",
        "SDLC (Waterfall, Agile)",
        "Software Documentation",
        "Technical Writing",
        "Version Control",
        "CI/CD",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Leadership",
        "Team Collaboration",
        "Project Management",
        "Problem-Solving",
        "Communication",
        "Time Management",
        "Adaptability",
        "Organization",
        "Empathy",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical and professional skills demonstrated across projects and leadership experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/30"
            >
              <h3 className="mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
