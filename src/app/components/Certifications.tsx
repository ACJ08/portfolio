import { motion } from "motion/react";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certifications = [
    // ── Featured / Recent ──
    {
      title: "Claude 101",
      issuer: "Anthropic Education",
      year: "September 21, 2026",
      category: "AI & Technology",
      details: "Effective AI prompting, Claude Projects, Claude Artifacts, Claude Skills, AI-assisted research, tool integrations, and role-based AI workflows",
      featured: true,
    },
    {
      title: "AI Builders Challenge: Reimagine Creative Industries with AI",
      issuer: "IBM SkillsBuild",
      year: "August 2026",
      category: "AI & Technology",
      featured: true,
    },
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic Education",
      year: "July 2026",
      category: "AI & Technology",
      details: "AI Fluency Framework: Delegation, Description, Discernment, Diligence; prompt design, iterative AI interaction, output evaluation, responsible AI, automation, augmentation, and AI agents",
      featured: true,
    },
    {
      title: "IBM Granite Models for Software Development",
      issuer: "IBM SkillsBuild",
      year: "July 2026",
      category: "AI & Technology",
      featured: true,
    },
    {
      title: "AI in the Real World",
      issuer: "IBM SkillsBuild",
      year: "July 2026",
      category: "AI & Technology",
      featured: true,
    },
    {
      title: "Lab: Troubleshoot Your Code Using IBM Bob",
      issuer: "IBM SkillsBuild",
      year: "July 2026",
      category: "AI & Technology",
      featured: true,
    },
    {
      title: "Gemini Certified Student",
      issuer: "Google for Education",
      year: "January 6, 2026",
      category: "AI & Technology",
      valid: "Issued: January 6, 2026 | Valid through: January 6, 2029",
      featured: true,
    },
    {
      title: "UNLEASH Philippines Talent",
      issuer: "UNLEASH Philippines Innovation Lab",
      year: "2025",
      category: "Innovation & Development",
      details: "September 19–25, 2025 | Health Equity & Biomedical Innovation Track",
      featured: true,
    },
    // ── Additional ──
    {
      title: "Module 3: Performance Evaluation & Presentation Coaching",
      issuer: "BPI DataWave 2025",
      year: "2025",
      category: "Data Science",
    },
    {
      title: "Module 2: Solution Blueprint & AI Architecture",
      issuer: "BPI DataWave 2025",
      year: "2025",
      category: "AI & Technology",
    },
    {
      title: "Module 1: Human-Centered Market Research & Ideation",
      issuer: "BPI DataWave 2025 Learning Sprint",
      year: "2025",
      category: "Data Science",
    },
    {
      title: "Create & Conquer 2025 Hackathon",
      issuer: "Computer Engineering Organization, FEU Tech",
      year: "2025",
      category: "Hackathon",
    },
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      year: "2025",
      category: "Programming",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2024",
      category: "Web Development",
    },
    {
      title: "Google Analytics for Beginners",
      issuer: "Google Analytics Academy",
      year: "2024",
      category: "Data Analytics",
    },
    {
      title: "Introduction to Neural Network",
      issuer: "Great Learning Academy",
      year: "2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Great Learning Academy",
      year: "2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Canva for Graphic Design",
      issuer: "DICT",
      year: "2024",
      category: "Design",
    },
    {
      title: "Basic JavaScript for Web Development",
      issuer: "DICT",
      year: "2024",
      category: "Programming",
    },
    {
      title: "Service Team Award",
      issuer: "CFC-YFC Cavite Provincial General Assembly",
      year: "2022",
      category: "Community Service",
      details: "Relentless Assembly – CVSU-Silang Campus",
    },
  ];

  const categories = [
    ...new Set(certifications.map((cert) => cert.category)),
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              className={`bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border transition-all duration-300 hover:scale-105 ${"featured" in cert && cert.featured ? "border-primary/40 hover:shadow-primary/20 hover:border-primary/60 shadow-primary/5" : "border-border hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center border flex-shrink-0 ${"featured" in cert && cert.featured ? "bg-primary/20 text-primary border-primary/30" : "bg-primary/10 text-primary border-primary/20"}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-grow min-w-0">
                  {"featured" in cert && cert.featured && (
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 mb-1">Featured</span>
                  )}
                  <h3 className="text-primary mb-1 line-clamp-2 text-base">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-xs border border-accent/40">
                  {cert.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {cert.year}
                </span>
              </div>

              {cert.achievement && (
                <div className="mb-3 flex items-center gap-1 text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.achievement}</span>
                </div>
              )}

              {cert.valid && (
                <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded border border-primary/10">
                  {cert.valid}
                </div>
              )}

              {cert.details && !cert.valid && (
                <div className="text-xs text-muted-foreground">
                  {cert.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center">
            <h3 className="mb-4 text-primary">Key Highlights</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">4.93/5</p>
                <p className="text-sm text-muted-foreground">MOOVE User Satisfaction</p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">93.51%</p>
                <p className="text-sm text-muted-foreground">ML Model Accuracy (NLP)</p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">500K+</p>
                <p className="text-sm text-muted-foreground">Orders Processed (DWH)</p>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                <p className="text-3xl font-bold text-primary mb-2">{certifications.length}+</p>
                <p className="text-sm text-muted-foreground">Certifications & Awards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
