import { motion } from "motion/react";
import { ExternalLink, Github, Figma, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ProjectLinks = {
  github?: string;
  demo?: string;
  figma?: string;
};

type Project = {
  title: string;
  tagline: string;
  role: string;
  description: string;
  highlights?: string[];
  tech: string[];
  achievement: string;
  links: ProjectLinks;
  category: string[];
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects: Project[] = [
    // ── Featured ──
    {
      title: "MOOVE",
      tagline: "Small Movements. Healthier Journeys.",
      role: "Founder & CEO | Full-Stack Engineer | Research Lead",
      description:
        "A full-stack wellness web application for Filipino drivers that converts sedentary driving time into guided micro-exercise breaks. Built end-to-end from scratch, featuring timed driving sessions with context-aware safety ratings, 10 embedded exercise videos, and a Groq AI endpoint for personalized wellness summaries with a deterministic fallback. Developed toward a TRL-4 prototype with real user feedback, admin dashboards, and research analytics.",
      highlights: [
        "Groq AI (llama-3.3-70b) wellness summaries via a Vercel serverless endpoint with deterministic fallback",
        "Supabase auth with PostgreSQL and Row Level Security across 13 database migrations",
        "Context-aware exercise prompting with popup, sound, vibration, and silent notification modes",
        "Admin and research dashboards for participant analytics, think-aloud sessions, and feedback validation",
        "Evaluated at 4.93/5 satisfaction and 93% task completion across usability testing participants",
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Groq AI", "Vercel", "Vite"],
      achievement: "4.93/5 Satisfaction · 93% Task Completion · TRL-4 Prototype",
      links: {
        github: "https://github.com/ACJ08/MOOVE",
        demo: "https://moove-lyart.vercel.app/",
      },
      category: ["Full-stack", "AI/ML"],
    },
    {
      title: "Tanglaw",
      tagline: "Trusted Information Within Reach, Anywhere.",
      role: "Founder & CEO | Full-Stack Engineer | Product Lead",
      description:
        "An offline-first Media and Information Literacy platform for Filipino communities, built for the UNESCO Youth Hackathon 2026. Designed for low-connectivity environments, Tanglaw features Liyab, a Groq-powered AI assistant for explainable claim verification with confidence-oriented results. Includes a Learning Center with progress tracking, a Truth Hub Network of community verification centers, and a Crisis Verification Mode for emergencies.",
      highlights: [
        "Liyab AI assistant (Groq) with explainable verification and confidence-scored results for citizens, teachers, students, and NGOs",
        "Express backend API proxy with Groq, URL analysis, and verification service modules",
        "Tesseract.js OCR for text extraction from uploaded images and documents",
        "Supabase authentication with verification history and user profiles",
        "localStorage-based progress tracking and offline caching for low-connectivity environments",
      ],
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Express", "Groq AI", "Supabase", "Tesseract.js", "Vite", "Vercel"],
      achievement: "UNESCO Youth Hackathon 2026 · Offline-First Architecture",
      links: {
        github: "https://github.com/ACJ08/Tanglaw",
        demo: "https://tanglaw-tau.vercel.app/",
      },
      category: ["Full-stack", "AI/ML"],
    },
    {
      title: "CIPHER",
      tagline: "Prove Participation. Protect Privacy.",
      role: "Frontend Engineer | Midnight Hackathon",
      description:
        "A decentralized clinical trial credential and verification app built on the Midnight Network. Engineered three role-based dashboards for Sponsors, Patients, and Verifiers implementing a complete zero-knowledge proof workflow: sponsors issue on-chain credentials, patients generate ZK proofs of participation, and verifiers receive only a valid or invalid result without accessing any sensitive data. Implemented a browser-based Demo Mode using WebCrypto that simulates the full ZK workflow locally without requiring live RPC nodes or external credentials.",
      highlights: [
        "Zero-knowledge proof workflow across Sponsor, Patient, and Verifier roles using the Midnight Network and Compact smart contracts",
        "WebCrypto-based Demo Mode for complete local ZK simulation with no live blockchain nodes or private keys required",
        "Custom cipher-bridge TypeScript layer connecting the frontend to Compact smart contract interfaces",
        "Modular frontend architecture with role-specific pages, reusable UI components, and a dedicated blockchain service layer",
        "Monorepo workspace structure separating contracts and frontend packages for clean development boundaries",
      ],
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Midnight Network", "WebCrypto", "Radix UI", "Vite", "Framer Motion"],
      achievement: "Midnight Hackathon · Privacy-Preserving ZK Credential System",
      links: {
        github: "https://github.com/KAwasthi2889/ZK-Participation",
      },
      category: ["Full-stack"],
    },
    {
      title: "VERSE",
      tagline: "Continuity Intelligence for Modern Film Production.",
      role: "Frontend Engineer | IBM July Challenge Hackathon",
      description:
        "An AI-powered continuity intelligence platform built during the IBM July Challenge. VERSE addresses the challenge of out-of-sequence film shooting by building a persistent semantic production memory. Screenplays are ingested via IBM Granite 3.1 for scene extraction, a knowledge graph is constructed with NetworkX, and LangChain orchestrates conflict detection with explainable recommendations and confidence scores. A human-in-the-loop dashboard lets production teams review and approve AI findings before any action is taken.",
      highlights: [
        "IBM Granite 3.1 screenplay ingestion with structured scene and entity extraction",
        "LangChain-orchestrated knowledge graph conflict detection using NetworkX with explainable confidence scores",
        "FastAPI microservices: continuity engine, script intelligence service, and a computer vision pipeline (YOLOv8 and MediaPipe)",
        "Human-in-the-loop dashboard built with React, Recharts, and Radix UI for production team review workflows",
        "Graceful degradation to rule-based fallback paths when LLM integrations are unavailable",
      ],
      tech: ["React 18", "TypeScript", "Tailwind CSS", "FastAPI", "IBM Granite", "LangChain", "NetworkX", "YOLOv8", "MediaPipe", "Vite"],
      achievement: "IBM July Challenge 2026 · AI Continuity Platform",
      links: {
        github: "https://github.com/ACJ08/VERSE",
      },
      category: ["AI/ML", "Full-stack"],
    },
    // ── Hackathon Projects ──
    {
      title: "FinSight AI",
      tagline: "AI-Powered Market Simulation for Philippine Banks.",
      role: "Team Lead | Project Manager | Fullstack Developer | Researcher",
      description:
        "AI-powered MSME market simulation platform enabling Philippine banks to prototype and evaluate financial products. Led a 4-member team end-to-end: React frontend, Node.js/Express backend, OpenAI API simulation engine, and MongoDB Atlas database with JWT authentication. Conducted research on MSME financing gaps to guide system design and feature prioritization.",
      highlights: [
        "OpenAI API integration for synthetic MSME behavioral simulation and product adoption modeling",
        "RESTful APIs with JWT-based authentication for secure user and simulation data handling",
        "Full system architecture design across frontend, backend, AI layer, and cloud database",
        "10+ financial product scenario simulations deployed on Render",
      ],
      tech: ["React.js", "Node.js", "Express", "OpenAI API", "MongoDB Atlas", "JWT", "Render"],
      achievement: "BPI DataWave Hackathon 2025 · Top 6 Finalist · 10+ Scenarios",
      links: {
        github: "https://github.com/ACJ08/finsightAI-fullstack",
        demo: "https://finsight-api-rvll.onrender.com",
      },
      category: ["AI/ML", "Full-stack"],
    },
    {
      title: "Verity System",
      tagline: "Budget Anomaly Detection and Secure Anonymous Reporting.",
      role: "Team Lead | Frontend Developer | System Analyst",
      description:
        "Corporate web system for automated budget anomaly detection and secure anonymous reporting with tracking codes. Led a 4-member team, designed full system architecture with role-based access control for HR, Finance, and Employee subsystems. Developed UML diagrams, sequence diagrams, ERD, and data flow documentation.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Shadcn UI"],
      achievement: "CSSprint December 2025 · Top 4 Finalist",
      links: { github: "https://github.com/zenpa1/verity" },
      category: ["Full-stack"],
    },
    // ── Full-Stack Projects ──
    {
      title: "Joyful Bakes: CakewJoy Order Management System",
      tagline: "Full-Stack Order Management for a Real Bakery Business.",
      role: "Project Manager | Full-Stack Project Lead",
      description:
        "Production-deployed order management system for a real bakery business with 6 user roles: Customer, Admin, Staff, Production, Baker, and Sales. Led an 8-member cross-functional team through requirements gathering, UAT, and client delivery. Achieved 100% client approval on final validation.",
      tech: ["React", "TypeScript", "Firebase Auth", "Firebase Realtime DB", "Vercel", "Figma"],
      achievement: "Live Production System · 8-Member Team · 100% Client Approval",
      links: {
        github: "https://github.com/Luis-Jay/Cakewithjoy",
        demo: "https://cakewjoy.vercel.app",
      },
      category: ["Full-stack"],
    },
    {
      title: "EduGrade",
      tagline: "Role-Based Academic Grading System.",
      role: "Project Lead | Full-Stack Developer",
      description:
        "Full-stack academic grading system with role-based access for students and professors. Implements MVC-style architecture, session management, secure authentication, grade computation, and custom error handling (403, 404, 500). Deployed on GlassFish Server.",
      tech: ["Java", "JSP", "Servlets", "HTML", "CSS", "GlassFish"],
      achievement: "MVC Architecture · Role-Based Authentication",
      links: { github: "https://github.com/ACJ08/ICS2608_Final-Project" },
      category: ["Full-stack"],
    },
    {
      title: "Split It",
      tagline: "Fair Expense Splitting for Groups.",
      role: "Backend Developer | Technical Contributor",
      description:
        "Flutter-based mobile expense splitting app with a fair-share computation algorithm, group management, multi-payer transactions, and expense history tracking. Integrated backend logic with Flutter UI using ChangeNotifier state management.",
      tech: ["Flutter", "Dart", "ChangeNotifier"],
      achievement: "Cross-Platform Mobile App",
      links: { github: "https://github.com/ACJ08/Split-It-Final-Project" },
      category: ["Mobile Development"],
    },
    // ── Data Science and ML ──
    {
      title: "NYC Yellow Taxi Trip Duration Prediction",
      tagline: "Geospatial ML Pipeline on 500K+ Taxi Trips.",
      role: "Data Engineer | ML Developer",
      description:
        "End-to-end geospatial data pipeline processing over 500K NYC Yellow Taxi trips from multi-source Parquet datasets. Engineered Haversine distance, CRS-based spatial features, and zone frequency metrics. Evaluated Ridge, Lasso, ElasticNet, and Huber regression models with bias-variance analysis and residual diagnostics.",
      tech: ["Python", "GeoPandas", "scikit-learn", "Pandas", "Feature Engineering", "CRS"],
      achievement: "500K+ Records · Geospatial ML Pipeline",
      links: { github: "https://github.com/ACJ08/GeoRide-Analytics-Geospatial-Taxi-Duration-Prediction-Pipeline" },
      category: ["Data Science", "Data Engineering"],
    },
    {
      title: "BankTerm Intelligence",
      tagline: "Customer Term Deposit Subscription Prediction.",
      role: "ML Developer | Data Scientist",
      description:
        "End-to-end classification pipeline predicting customer term deposit subscriptions from 45,000+ records. Addressed 11.7% class imbalance using Random Forest, Gradient Boosting, and Balanced Bagging. Performed threshold optimization targeting F1-optimal and 90% recall thresholds to balance acquisition cost and revenue outcomes.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      achievement: "45K+ Records · Imbalanced Classification · Threshold Optimization",
      links: { github: "https://github.com/ACJ08/BankTerm-Intelligence---Customer-Term-Deposit-Subscription-Prediction" },
      category: ["Data Science", "AI/ML"],
    },
    {
      title: "Sarcasm Detection (BERT Variants)",
      tagline: "Transformer NLP Benchmarking on 28,503 Headlines.",
      role: "Team Lead | ML Developer",
      description:
        "Fine-tuned and benchmarked 5 transformer architectures (BERT, RoBERTa, ALBERT, DistilBERT, ModernBERT) on 28,503 news headlines for sarcasm detection. Managed the full ML pipeline: preprocessing, tokenization, training, and evaluation. Achieved 93.51% accuracy and 93.24% F1-score.",
      tech: ["Python", "PyTorch", "HuggingFace Transformers", "scikit-learn", "Pandas", "Google Colab"],
      achievement: "28,503 Headlines · 93.51% Accuracy · 93.24% F1-score",
      links: { github: "https://github.com/ACJ08/DataSci7_3CSD_ML-Project" },
      category: ["AI/ML"],
    },
    {
      title: "Multi-Class Text Classification (20 Newsgroups)",
      tagline: "NLP Classification Across 18,000 News Documents.",
      role: "ML Developer",
      description:
        "Multi-class text classifier for 18,000+ news documents across 20 topic categories. Applied TF-IDF vectorization (n-gram 1 to 2, sublinear TF) combined with document metadata features. Conducted 20x20 confusion matrix analysis and improved performance through super-category consolidation into 6 broader groups.",
      tech: ["Python", "scikit-learn", "TF-IDF", "NumPy"],
      achievement: "18K+ Documents · 20-Class NLP · Confusion Matrix Analysis",
      links: { github: "https://github.com/ACJ08/Multi-Class-Text-Classification-using-20-Newsgroups-Dataset" },
      category: ["AI/ML", "Data Science"],
    },
    {
      title: "ShopZada Data Warehouse",
      tagline: "Kimball-Modeled E-Commerce Analytics Platform.",
      role: "Team Lead | Data Architect | ETL Lead | BI Analyst",
      description:
        "E-commerce Order-to-Delivery data warehouse using Kimball dimensional modeling with star schema architecture: 6 conformed dimensions, 4 fact tables, and SCD Type 2. Built ETL pipelines with Airflow and Docker. Delivered 3 Tableau dashboards covering campaign performance, order delivery, and product analytics.",
      tech: ["Airflow", "Docker", "SQL", "Python", "Pandas", "Kimball Modeling", "Tableau", "PostgreSQL"],
      achievement: "500K+ Orders · 2M+ Line Items · 3 Tableau Dashboards",
      links: {
        github: "https://github.com/GoldenSpectrum/dwh_finalproject_3CSD-E_group_5WORKS",
        demo: "https://public.tableau.com/app/profile/anne.carol.jonson/viz/TopCampaignsbyNumberofRedemptions/Dashboard2?publish=yes",
      },
      category: ["Data Engineering"],
    },
    // ── Design and Earlier Projects ──
    {
      title: "MyND Task",
      tagline: "Gamified Productivity App for Filipino Freelancers.",
      role: "UI/UX Designer | Researcher",
      description:
        "Gamified productivity app for Filipino freelancers featuring customizable quests, modular dashboards, mood tracking, and wellness tools to address burnout. Designed in Figma based on user research focused on early-career freelancer needs.",
      tech: ["Figma", "UI/UX Design", "User Research", "Prototyping"],
      achievement: "Certificate of Participation · 2025 · 20+ Figma Screens",
      links: { figma: "https://www.figma.com/design/R8qTByYcqovv6a7NzwpcvA/MYND?node-id=0-1&t=srh6pzBCGlCClUUs-1" },
      category: ["UI/UX"],
    },
    {
      title: "Rescute",
      tagline: "Connecting Stray Animals with Rescue Volunteers.",
      role: "Interactive Designer",
      description:
        "HCI web and mobile application connecting stray animals with rescue volunteers using location tracking and detailed animal profiles to reduce pet homelessness. Wireframed and prototyped in Figma and showcased on Wixsite.",
      tech: ["Figma", "Wixsite", "UI/UX Design", "Prototyping"],
      achievement: "HCI Design Project · 2024",
      links: { demo: "https://annecaroljonsoncic.wixsite.com/rescute" },
      category: ["UI/UX"],
    },
    {
      title: "Dijkstra's Algorithm Visualization",
      tagline: "Interactive Algorithm Visualization in Scratch.",
      role: "Developer | Contributor",
      description:
        "Educational Scratch project demonstrating Dijkstra's shortest path algorithm with conceptualized program flow, scripting, custom backdrops, and voiceovers for each section.",
      tech: ["Scratch", "Algorithms", "Data Structures"],
      achievement: "Algorithm Visualization · 2024",
      links: { demo: "https://scratch.mit.edu/projects/988386764/" },
      category: ["Other"],
    },
    {
      title: "Multimedia: Technology as a Weapon",
      tagline: "Interactive Scratch Game on Technology and Society.",
      role: "Lead Developer | Game Designer",
      description:
        "Interactive Scratch game exploring technology as a powerful modern tool through immersive gameplay and storytelling. Authored the script and programmed the entire game flow.",
      tech: ["Scratch", "Game Design", "Storytelling"],
      achievement: "Interactive Education Game · 2022",
      links: { demo: "https://scratch.mit.edu/projects/628876398/" },
      category: ["Other"],
    },
    {
      title: "DANGER_ALERT: EV3 Robotics",
      tagline: "Danger Alert Simulation with LEGO EV3.",
      role: "Robotics Developer",
      description:
        "EV3 On-Brick Programming project simulating danger alerts. Programmed the robot to emit a Blip 3 sound, display a warning sign, turn the EV3 brick buttons red, and rotate motors counterclockwise for two seconds, repeating the sequence three times.",
      tech: ["LEGO EV3", "On-Brick Programming", "Robotics"],
      achievement: "Robotics Alert Simulation · 2021",
      links: { demo: "https://drive.google.com/drive/folders/1qZXLgs-Lb3Yvc5szeq-AY7i0z6nBVwJ5" },
      category: ["Other"],
    },
  ];

  const filters = ["All", "AI/ML", "Full-stack", "Data Science", "Data Engineering", "Mobile Development", "UI/UX", "Other"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications, AI systems, ML research, data engineering, and product work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === filterOption
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card/80 backdrop-blur-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isExpanded = expanded === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg border border-border hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card header */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title + tagline */}
                  <div className="mb-3">
                    <h3 className="text-primary leading-tight mb-1">{project.title}</h3>
                    <p className="text-xs font-medium text-primary/70 uppercase tracking-wide">{project.tagline}</p>
                  </div>

                  {/* Role */}
                  <p className="text-xs text-muted-foreground italic mb-3">{project.role}</p>

                  {/* Achievement badge */}
                  <p className="text-xs font-semibold text-primary bg-primary/8 border border-primary/20 rounded-lg px-3 py-1.5 mb-4 leading-snug">
                    {project.achievement}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-foreground leading-relaxed mb-4">{project.description}</p>

                  {/* Key highlights (expandable) */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => setExpanded(isExpanded ? null : index)}
                        className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors mb-2"
                      >
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        {isExpanded ? "Hide highlights" : "Key highlights"}
                      </button>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-1.5"
                        >
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-accent/30 text-accent-foreground rounded text-xs border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links footer */}
                <div className="flex gap-3 px-6 py-4 border-t border-border bg-card/40">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      <Figma className="w-4 h-4" />
                      Design
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
