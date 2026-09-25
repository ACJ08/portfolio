import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "BS Computer Science - Data Science Specialization",
      institution: "University of Santo Tomas",
      period: "2023 - Present",
      status: "Currently Enrolled",
      gwa: "Current GWA: 1.225 | Consistent Dean's Lister | Candidate for Magna Cum Laude",
      awards: ["Consistent Dean's Lister", "Candidate for Magna Cum Laude"],
      description:
        "Specializing in data science with extensive coursework in machine learning, AI, full-stack development, and data engineering.",
      technologies: "Java, Python, JavaScript, TypeScript, SQL, HTML, CSS, React, Node.js, Flutter, PyTorch, Scikit-learn, Pandas, Firebase, MongoDB, MySQL, PostgreSQL, Docker, Tableau, Git, OpenAI API, HuggingFace Transformers",
    },
    {
      degree: "Senior High School - STEM",
      institution: "Cavite State University – Laboratory Science High School, Bancod, Indang, Cavite",
      period: "2021 - 2023",
      status: "Graduate",
      gwa: "97",
      awards: ["With High Honor"],
      description:
        "Science, Technology, Engineering, and Mathematics track with advanced coursework in programming, mathematics, and laboratory sciences.",
    },
    {
      degree: "Junior High School",
      institution: "Langkaan II National High School, Chrv. R5, Langkaan 2, City of Dasmariñas, Cavite",
      period: "2020 - 2021",
      status: "Graduate",
      gwa: "98",
      awards: ["With Highest Honor"],
      description:
        "Graduated with highest honors demonstrating exceptional academic performance and leadership.",
    },
    {
      degree: "Elementary Education",
      institution: "The First Uniting Christian School, Langkaan 2, Dasmariñas City, Cavite",
      period: "2015 - 2016",
      status: "Graduate",
      gwa: "96",
      awards: ["With High Honor"],
      description:
        "Foundation years with strong academic performance and early demonstration of leadership capabilities.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Academic journey marked by consistent excellence and dedication.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline circle - positioned relative to the timeline line, not the card */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10 -translate-x-1/2"></div>

                <div className="md:ml-20 bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-primary">{edu.degree}</h3>
                          <p className="text-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {edu.period}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            {edu.status}
                          </p>
                        </div>
                      </div>

                      {edu.gwa && (
                        <div className="mb-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg border border-primary/20">
                          <span className="font-medium">
                            {edu.gwa.includes("GWA") || edu.gwa.includes("Dean") ? edu.gwa : `GWA: ${edu.gwa}`}
                          </span>
                        </div>
                      )}

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>

                      {edu.technologies && (
                        <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                          <p className="text-sm font-medium text-accent-foreground mb-2">
                            Technologies & Languages:
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {edu.technologies}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {edu.awards.map((award, awardIndex) => (
                          <div
                            key={awardIndex}
                            className="flex items-center gap-1 px-3 py-1 bg-accent/30 text-accent-foreground rounded-lg text-sm border border-accent/40"
                          >
                            <Award className="w-4 h-4" />
                            <span>{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
