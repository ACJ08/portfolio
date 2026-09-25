import { motion } from "motion/react";
import { Briefcase, Users, Trophy, Award, Star } from "lucide-react";

export default function Experience() {
  const experiences = [
    // ── PRESENT: July 2026 – Present (newest start first) ──
    {
      type: "internship",
      icon: <Star className="w-5 h-5" />,
      title: "Founder & Chief Executive Officer",
      organization: "Tanglaw | UNESCO Youth Hackathon 2026 · Philippines",
      period: "July 2026 – Present",
      achievement: "🌍 UNESCO Youth Hackathon 2026 · 12-Feature Civic Platform",
      description:
        "Founded and led Tanglaw, an offline-first, AI-powered Media and Information Literacy platform designed to expand access to trusted information for digitally marginalized Filipino communities. Built a 12-feature civic technology ecosystem across a 4-pillar product strategy covering information verification, MIL education, community-based verification, and offline resilience. Directed the design of Liyab, an explainable AI verification companion with confidence scores, manipulation indicators, and multilingual support. Designed offline-first verification architecture using Wi-Fi Direct, Bluetooth, and QR-based synchronization, and defined a 6-phase implementation roadmap from MVP to large-scale community deployment.",
      technologies: "Offline-First Architecture, Explainable AI, Community Reporting, Crisis Verification",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Vice President for Socio-Political Affairs",
      organization: "CFC-YFC UST | Philippines",
      period: "July 2026 – Present",
      achievement: "Values-Driven Catholic Leadership",
      description:
        "Lead community development initiatives for YFC UST, coordinating documentation and university-facing requirements to support the organization's engagement with UST community development programs. Drive advocacy initiatives focused on social responsibility, education, environmental awareness, and issues affecting the Thomasian community. Monitor and synthesize relevant local and global current events to inform community awareness campaigns and student-centered initiatives, while promoting a values-driven organizational culture grounded in integrity, accountability, and Catholic leadership.",
    },
    // ── PRESENT: September 2025 – Present ──
    {
      type: "internship",
      icon: <Star className="w-5 h-5" />,
      title: "Founder & CEO / Full-Stack Engineer / Research Lead",
      organization: "MOOVE | Philippines",
      period: "September 2025 – Present",
      achievement: "⭐ 4.93/5 Satisfaction · 93% Task Completion · 93% Recommendation Intent",
      description:
        "Founded and led MOOVE, a preventive wellness platform for Filipino drivers integrating driving-session tracking, context-aware micro-movement interventions, wellness analytics, and research-based usability validation, achieving 4.93/5 overall satisfaction and 93% task completion across 15 participant responses. Architected and developed the full-stack application using React 19, TypeScript, Tailwind CSS, Supabase/PostgreSQL with Row Level Security, and Vercel serverless functions. Implemented a safety-aware intervention framework classifying exercises by driving context, an AI wellness summary system using Groq (llama-3.3-70b) with a 9-second timeout and deterministic fallback, and a full research administration platform supporting TRL-4 documentation and 100% completion of 6 planned prototype iterations.",
      technologies: "React 19, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Row Level Security, Groq AI, Vercel",
    },
    // ── PRESENT: May 2017 – Present ──
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Torch Member",
      organization: "CFC-Youth For Christ | Philippines",
      period: "May 2017 – Present",
      achievement: "7+ Years · 100+ Youth Members",
      description:
        "Sustained 7+ years of continuous involvement in CFC-Youth For Christ, supporting the planning and execution of 10+ youth activities and outreach programs. Mentored and collaborated with 100+ youth members, fostering teamwork, leadership development, and personal growth through community-based activities and values-driven initiatives.",
    },
    // ── COMPLETED: July–September 2026 ──
    {
      type: "completed",
      icon: <Star className="w-5 h-5" />,
      title: "AI Fluency Intern",
      organization: "Flyrank AI | Skenderpašina, Sarajevo (Europe)",
      period: "July 2026 – September 2026",
      achievement: "Completed · 15 Practical Assignments · 1/1 Capstone Accepted · Certificate of Completion",
      description:
        "Completed the AI Fluency track at Flyrank AI, delivering 15 practical assignments across Mindset, Practice, Output, and Judgment pillars, covering AI-assisted workflows, output evaluation, documentation, and responsible AI use. Developed a repeatable personal AI workflow with defined tool handoffs and quality checks, shipped a public AI-assisted artifact, and completed the capstone \"Send the Link: Launch, Demo & Story.\" Received a Certificate of Completion from FlyRank Corp. recognizing technical competency, professional conduct, and collaborative contribution.",
      technologies: "AI-Assisted Workflows, Output Evaluation, Documentation, Responsible AI",
    },
    {
      type: "completed",
      icon: <Star className="w-5 h-5" />,
      title: "Frontend AI Engineering Intern",
      organization: "Flyrank AI | Skenderpašina, Sarajevo (Europe)",
      period: "July 2026 – September 2026",
      achievement: "Completed · 8/5 Assignments (60% Above Requirement) · 1/1 Capstone Accepted · September 21, 2026",
      description:
        "Completed the Front-end AI Engineering track at Flyrank AI, delivering 8 practical frontend assignments against a track requirement of 5 (60% above requirement). Built responsive interfaces using React, TypeScript, and Tailwind CSS, applied AI-assisted workflows to accelerate implementation, debugging, and iteration, and validated deliverables through browser QA, responsive testing, reusable component development, and visual-fidelity checks. Delivered accepted capstone \"Ship It: Your First Production AI Product\" and received Certificate of Completion on September 21, 2026.",
      technologies: "React, TypeScript, Tailwind CSS, AI-Assisted Dev, Browser QA",
    },
    // ── COMPLETED: June–July 2026 ──
    {
      type: "internship",
      icon: <Trophy className="w-5 h-5" />,
      title: "Frontend Engineer",
      organization: "IBM July Challenge Hackathon | Remote",
      period: "June 2026 – July 2026",
      achievement: "🏆 IBM July Challenge · 5 AI Workflow Components",
      description:
        "Built the frontend for VERSE (Visual and Explainable Reasoning for Semantic Evolution), an AI-powered film continuity platform using IBM Granite 3.1, LangChain, knowledge graphs, and Explainable AI. Designed and implemented a collaborative dashboard for directors, script supervisors, producers, and production teams, integrating 5 core AI workflow components: screenplay understanding, semantic production memory, knowledge graph retrieval, continuity reasoning, and explainable AI recommendations. Developed human-in-the-loop interfaces presenting continuity issues with confidence scores and corrective actions while preserving final decisions with human users.",
      technologies: "React, TypeScript, IBM Granite 3.1, LangChain, Knowledge Graphs, Explainable AI",
    },
    {
      type: "internship",
      icon: <Trophy className="w-5 h-5" />,
      title: "Frontend Engineer",
      organization: "Midnight Hackathon | Remote",
      period: "June 2026 – July 2026",
      achievement: "🌙 Midnight Hackathon · 3 Role-Based Dashboards · ZK Proofs",
      description:
        "Built a React and TypeScript dApp with 3 role-based dashboards for Sponsors, Patients, and Verifiers, enabling an end-to-end clinical trial credential and verification workflow on the Midnight Network. Developed 3 core privacy-preserving workflows (credential issuance, ZK proof generation, and proof verification) allowing users to prove participation without exposing sensitive data. Implemented a zero-configuration browser demo mode using a custom cryptographic bridge and WebCrypto, enabling the complete workflow locally without RPC nodes or private credentials.",
      technologies: "React, TypeScript, Tailwind CSS, Vite, Framer Motion, Midnight Network, WebCrypto, ZK Proofs",
    },
    // ── COMPLETED: January–May 2026 ──
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | ML Developer",
      organization: "Sarcasm Detection using BERT Variants | Machine Learning Course",
      period: "January 2026 – May 2026",
      achievement: "📊 93.51% Accuracy · 93.24% F1-score · 28,503 Headlines · 5 Models",
      description:
        "Led a 4-member team benchmarking 5 transformer architectures (BERT, RoBERTa, ALBERT, DistilBERT, ModernBERT) on 28,503 news headlines for sarcasm detection, achieving 93.51% accuracy (RoBERTa) and 93.24% F1-score (BERT). Managed the full pipeline from preprocessing and tokenization through GPU-accelerated training in Google Colab (Tesla T4) to evaluation, using a standardized accuracy, precision, recall, and F1-score framework for reproducible model comparison.",
      technologies: "Python, PyTorch, HuggingFace Transformers, Scikit-learn, Google Colab",
    },
    // ── COMPLETED: August 2025 – May 2026 ──
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Manager | Full-Stack Project Lead",
      organization: "Joyful Bakes: CakewJoy OMS | Software Engineering 1 & 2",
      period: "August 2025 – May 2026",
      achievement: "🚀 Production-Deployed · 100% Client Approval · 8-Member Team",
      description:
        "Led an 8-member cross-functional team through end-to-end planning, development, UAT, and production deployment of a full-stack order management system for a real bakery business, achieving 100% client approval. Directed the full project lifecycle using Waterfall methodology across 18 months, managing 6 user roles (Customer, Admin, Staff, Production, Baker, Sales), coordinating client-facing requirements elicitation and UAT sessions, and tracking milestones via Gantt charts. Deployed using Vercel with Firebase Authentication and Firebase Realtime Database, and produced comprehensive documentation including SPMP, SRS, SDD, and STP.",
      technologies: "React, TypeScript, Firebase Auth, Firebase Realtime DB, Vercel, Figma",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Growth Marketing Member – Market Analytics Department",
      organization: "UST Technovation Society",
      period: "August 2025 – May 2026",
      achievement: "Growth Marketing & Analytics",
      description:
        "Performed market and audience analyses to support data-driven growth marketing strategies for student-led technology initiatives. Collaborated with project teams to translate technical work into audience-focused campaigns across digital channels, and supported campaign planning, performance monitoring, and content optimization to improve project visibility and organizational outreach.",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Human Resources Staff",
      organization: "AWS Cloud Club UST",
      period: "August 2025 – May 2026",
      achievement: "Member Management & Development",
      description:
        "Organized technical workshops, seminars, and hackathons promoting AWS cloud technologies and professional development. Coordinated member engagement initiatives and event logistics, supported member onboarding and organizational communications, and contributed to operational planning that strengthened community efficiency and participant experience during technical events.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Secretary Officer of the Class (3rd Year)",
      organization: "University of Santo Tomas",
      period: "August 2025 – May 2026",
      achievement: "140+ Announcements · 200+ Deadlines Tracked",
      description:
        "Managed academic communications, disseminating 140+ official announcements for a class of 30+ CS students across 14 courses. Tracked 200+ assignment, examination, project, and presentation deadlines, maintained a centralized repository of academic materials, and served as the primary liaison between professors and class officers throughout the academic year.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Executive Staff of Human Resource",
      organization: "UST ICS Student Council",
      period: "August 2025 – May 2026",
      achievement: "40+ Members · 10+ Events Supported",
      description:
        "Provided HR and administrative support for 40+ student council members, coordinating with officers and 6+ committees to ensure smooth execution of council initiatives. Assisted in organizing 10+ council meetings and engagement activities, maintained HR records, facilitated officer-member communication, and supported member onboarding and professional development.",
    },
    // ── COMPLETED: November–December 2025 ──
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Frontend Developer & System Analyst",
      organization: "Verity – CSSprint Hackathon 2025 | Top 4 of 16 Teams",
      period: "November 2025 – December 2025",
      achievement: "🏆 Top 4 Finalist · 16 Competing Teams",
      description:
        "Led a 4-member team building Verity, a corporate web application for budget monitoring, automated anomaly detection, and secure anonymous employee reporting, earning Top 4 Finalist recognition among 16 teams. Designed ERDs, relational schemas, UML diagrams, and RBAC supporting 3 user roles. Built the frontend using Next.js, React, Tailwind CSS, and Shadcn UI with 5 integrated system modules, developed automated budget anomaly detection, engineered an anonymous reporting mechanism using unique tracking codes, and integrated Supabase Authentication with real-time database synchronization.",
      technologies: "Next.js, React, Supabase, Tailwind CSS, Shadcn UI",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Backend Developer & Technical Contributor",
      organization: "Split It – Mobile Programming Course",
      period: "November 2025 – December 2025",
      achievement: "📱 Flutter Mobile · Fair-Share Algorithm · 10+ Features",
      description:
        "Collaborated in a 3-member team developing Split It, a Flutter mobile application for shared expense management. Developed backend business logic and a custom fair-share algorithm for automated expense distribution across 10+ features including reusable groups, multi-payer transactions, and expense history. Integrated backend logic with Flutter's ChangeNotifier state management for responsive UI updates, and collaborated on system architecture covering authentication, group management, settlement computation, and transaction history.",
      technologies: "Flutter, Dart, ChangeNotifier, State Management",
    },
    // ── COMPLETED: October–December 2025 ──
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead | Data Architect | ETL Lead | BI Analyst",
      organization: "ShopZada Data Warehouse | Data Warehousing Course",
      period: "October 2025 – December 2025",
      achievement: "📦 500K+ Orders · 2M+ Line Items · 3 Tableau Dashboards",
      description:
        "Led end-to-end design of ShopZada, an enterprise Order-to-Delivery Data Warehouse unifying fragmented e-commerce data across 5 business departments. Designed Kimball dimensional models with 6 conformed dimensions and 4 fact tables, built automated ETL pipelines using Python, SQL, and Apache Airflow to process 500K+ orders and 2M+ line items from multiple source formats, implemented SCD Type 2 processing and deduplication, containerized the full platform with Docker and Docker Compose, and delivered 3 Tableau dashboards covering campaign performance, delivery, and product analytics.",
      technologies: "Airflow, Docker, PostgreSQL, Python, Pandas, SQL, Kimball Modeling, Tableau",
    },
    // ── COMPLETED: September 2025 ──
    {
      type: "project",
      icon: <Award className="w-5 h-5" />,
      title: "UNLEASH Philippines Talent 2025",
      organization: "UNLEASH Philippines Innovation Lab | Health Equity & Biomedical Innovation",
      period: "September 19–25, 2025",
      achievement: "🌟 1 of 150 Talents · Region IV-A Representative",
      description:
        "Selected as 1 of 150 Talents from across the Philippines to represent Region IV-A (CALABARZON) in UNLEASH, an international innovation initiative addressing global challenges. Applied the UNLEASH Innovation Methodology during a 7-day sprint, collaborating in a 5-member multidisciplinary team to research, validate, and prototype a digital health solution for hypertension prevention among Metro Manila drivers. Delivered a research-backed innovation pitch and advanced to the first stage of the LIF Launchpad, developed in collaboration with the Royal Academy of Engineering.",
    },
    // ── COMPLETED: July–August 2025 ──
    {
      type: "project",
      icon: <Trophy className="w-5 h-5" />,
      title: "Team Lead, Project Manager, Fullstack Developer & Researcher",
      organization: "FinSight AI – BPI DataWave Hackathon 2025",
      period: "July 2025 – August 2025",
      achievement: "🏆 Top 6 Finalist · 10+ Financial Product Scenarios",
      description:
        "Led a 4-member team building FinSight AI, an AI-powered MSME market simulation platform for Philippine banks, earning Top 6 Finalist recognition. Researched Philippine MSME financing gaps, developed the full-stack application using React.js, Node.js, Express.js, MongoDB Atlas, and OpenAI API, integrated the API to generate synthetic MSME behavioral responses simulating 10+ financial product scenarios, and built Recharts analytics dashboards for adoption likelihood and compliance performance. The platform demonstrated potential to reduce banking product prototyping cycles from 6–8 months to an estimated 3–4 months.",
      technologies: "React.js, Node.js, Express, OpenAI API, MongoDB Atlas, JWT, Vercel, Render, Recharts",
    },
    // ── COMPLETED: July 2025 ──
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Team Lead, UI/UX Designer & Researcher",
      organization: "Create & Conquer 2025 Hackathon | FEU Institute of Technology",
      period: "July 2025",
      achievement: "🎨 Create & Conquer 2025 · MyND Task",
      description:
        "Led a 5-member team designing MyND Task, a gamified productivity and wellness platform for Filipino freelancers addressing burnout and task management. Designed 20+ high-fidelity Figma screens and user flows covering authentication, dashboard, task management, rewards, profile, social, and settings modules. Conducted user and market research identifying productivity and mental health challenges across 1.5M+ Filipino freelancers, designed gamified UX features including XP systems, mood tracking, and wellness reminders, and developed a freemium product strategy supported by research and business analysis.",
      technologies: "Figma, UI/UX Design, User Research, Prototyping",
    },
    // ── COMPLETED: August 2024 – May 2025 ──
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Committee Director of Crisis Management",
      organization: "UST ICS Student Council",
      period: "August 2024 – May 2025",
      achievement: "1,000+ Students · 3 Preparedness Initiatives",
      description:
        "Led a 5-member Crisis Management Committee planning and coordinating 3 emergency preparedness initiatives supporting 1,000+ UST ICS students. Collaborated with the University Crisis Management Team and the Office of the Vice-Rector for Finance to align student council emergency response with institutional protocols, and coordinated the dissemination of emergency advisories and student support information during critical situations.",
    },
    {
      type: "organization",
      icon: <Users className="w-5 h-5" />,
      title: "Academic Committee Staff",
      organization: "UST Computer Science Society (CSS)",
      period: "August 2024 – May 2025",
      achievement: "6 Academic Initiatives · 150+ Students Engaged",
      description:
        "Supported the planning and execution of 6 academic initiatives engaging 150+ CS students, including 2 programming competitions, 2 quiz bees, and 3 technical tutorial sessions. Coordinated participant communications, event logistics, and evaluation activities, and assisted in preparing learning resources and assessing competition submissions to strengthen peer learning and technical skills.",
    },
    // ── COMPLETED: August 2024 – December 2024 ──
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Vice President of the Class (2nd Year)",
      organization: "University of Santo Tomas",
      period: "August 2024 – December 2024",
      achievement: "Class Leadership · 30+ Students · 8 Courses",
      description:
        "Represented and supported a class of 30+ CS students, collaborating with class officers and faculty to coordinate academic activities across 8 courses. Coordinated class communications and academic schedules, partnered with the Class President on academic and extracurricular initiatives, and mediated student concerns between classmates and faculty to support a productive learning environment.",
    },
    {
      type: "project",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Lead & Full-Stack Developer",
      organization: "EduGrade – Web Frontend Course",
      period: "August 2024 – December 2024",
      achievement: "🎓 Role-Based Grading System · MVC Architecture · 6+ Servlets",
      description:
        "Led a 2-person team delivering EduGrade, a role-based academic grading management system built with Java Servlets, JSP, HTML/CSS, and GlassFish Server using MVC architecture. Built interactive dashboards enabling professors to manage grades and students to view academic performance, designed backend services for grade processing and authentication using 6+ servlets, and implemented authorization controls with custom error pages (403, 404, 500) and session validation.",
      technologies: "Java Servlets, JSP, HTML, CSS, GlassFish Server, MVC",
    },
    // ── COMPLETED: August 2023 – May 2024 ──
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Academic Affairs Staff",
      organization: "UST ICS Student Council",
      period: "August 2023 – May 2024",
      achievement: "5+ Academic Programs · 150+ CICS Students",
      description:
        "Coordinated 5+ academic programs including tutorials, review sessions, and student development initiatives serving 150+ CICS students. Partnered with 3+ CICS student organizations to strengthen academic support services and expand participation in educational activities throughout the academic year.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Secretary Officer of the Class (1st Year, 2nd Term)",
      organization: "University of Santo Tomas",
      period: "January 2024 – May 2024",
      achievement: "100+ Announcements · 150+ Deadlines Tracked",
      description:
        "Managed academic communications, disseminating 100+ official announcements for a class of 30+ CS students across 10 courses. Tracked 150+ assignment, examination, project, and presentation deadlines, maintained centralized academic materials, and coordinated with professors and class officers for schedule updates and academic concerns.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Public Relations Officer of the Class (1st Year, 1st Term)",
      organization: "University of Santo Tomas",
      period: "August 2023 – December 2023",
      achievement: "100+ Announcements · Class Communication Lead",
      description:
        "Managed academic communications and disseminated 100+ official announcements for a class of 30+ CS students across 10 courses, ensuring timely delivery of updates from faculty, the Student Council, COMELEC, and university organizations. Served as the primary communication liaison between students, faculty, and campus organizations throughout the semester.",
    },
    // ── PRE-UNIVERSITY / HIGH SCHOOL ──
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Speaker of the Robotics Club",
      organization: "Cavite State University – Laboratory Science High School | Indang, Cavite",
      period: "September 2022 – June 2023",
      achievement: "40+ Members · 6+ Club Events",
      description:
        "Managed communications for a Robotics Club of 40+ members, coordinating meeting schedules, event announcements, and organizational updates across 6+ meetings and workshops. Collaborated with fellow club officers to plan and execute club initiatives, fostering an informed and engaged robotics community.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Sentinel of the Class and Barangay",
      organization: "Cavite State University – Laboratory Science High School | Indang, Cavite",
      period: "September 2021 – June 2022",
      achievement: "Class Safety & Organization · 30+ Students",
      description:
        "Supported safety and organizational activities for 30+ classmates, coordinated 10+ school and barangay activities, and maintained a safe and organized environment by monitoring classroom activities and supporting the implementation of school policies.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "President of the Class",
      organization: "Langkaan II National High School | Dasmariñas, Cavite",
      period: "October 2020 – July 2021",
      achievement: "40+ Student Class · Lead Representative",
      description:
        "Represented and coordinated a 40+ student class, acting as the main liaison between students and teachers to streamline communication, resolve concerns, and maintain classroom organization. Led class meetings and initiatives improving engagement and collaboration, and advocated for student concerns to support a productive and inclusive learning environment.",
    },
    {
      type: "leadership",
      icon: <Users className="w-5 h-5" />,
      title: "Auditor, Supreme Student Government",
      organization: "The First Uniting Christian School | Dasmariñas, Cavite",
      period: "June 2019 – March 2020",
      achievement: "₱20,000+ Audited · 100% Transactions Verified · 5 Activities",
      description:
        "Audited ₱20,000+ in student government funds across 5 activities, reviewing and verifying 100% of recorded transactions to ensure accurate financial records, transparent reporting, and responsible resource allocation. Prepared financial reports and budget summaries, and recommended improvements to financial tracking processes to promote ethical practices within the organization.",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "completed":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "internship":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "project":
        return "bg-primary/10 text-primary border-primary/20";
      case "organization":
        return "bg-accent/30 text-accent-foreground border-accent/40";
      case "leadership":
        return "bg-secondary/50 text-secondary-foreground border-secondary";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Internships, founded ventures, hackathons, technical projects, and leadership roles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10 -translate-x-1/2"></div>

                <div className="md:ml-20 bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0 ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-primary">{exp.title}</h3>
                          <p className="text-foreground font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">
                        {exp.achievement}
                      </p>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.split(", ").map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
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
