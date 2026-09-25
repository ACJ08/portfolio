# Anne Carol G. Jonson — Personal Portfolio

A personal portfolio website built with React and TypeScript, showcasing my professional experience, technical projects, skills, and academic background. Designed to communicate a clear professional identity to recruiters and hiring managers in software engineering, AI, data science, and related fields.

**Live Site:** [your-deployed-url-here] <!-- Replace with your actual deployed URL -->

---

## About

This portfolio belongs to **Anne Carol G. Jonson**, a 4th-year BS Computer Science student specializing in Data Science at the University of Santo Tomas (UST). I recently completed a **Frontend AI Engineering internship at Flyrank (Sarajevo, Europe)**, where I built responsive interfaces, applied AI-assisted development workflows, and delivered a full internship track including 10 assignments and an accepted capstone project.

Beyond the internship, I have built and founded real products: MOOVE (a full-stack wellness platform for Filipino drivers, validated at 4.93/5 satisfaction) and Tanglaw (an offline-first AI platform for Media and Information Literacy, built for UNESCO Youth Hackathon 2026). My technical work spans frontend engineering, full-stack development, AI integration, machine learning, NLP research, and data engineering.

I am actively seeking engineering opportunities in software, AI, frontend, full-stack, and data-related roles.

---

## Features

- **Hero section** with a typing animation cycling through role phrases and a dynamic light/dark profile photo
- **About Me** with a professional bio and highlight cards summarizing key credentials
- **Experience section** presenting completed internship, founding roles, hackathon projects, and leadership experience on a visual timeline
- **Featured Projects** (19 total) with category filters, expandable key highlights, GitHub links, and live demo links
- **Skills and Expertise** organized across 9 technology categories
- **Education** with academic records, GWA, and honors
- **Certifications** with featured and additional groupings, including IBM AI, Anthropic, and Google credentials
- **Contact section** with a functional email form (Formsubmit) and social links
- **Dark / light mode** toggle with smooth transitions and theme-aware profile photos
- **Fully responsive** across desktop, tablet, and mobile
- **Glassmorphism design** with animated background elements and scroll-triggered transitions

---

## Tech Stack

### Frontend

- React 18 with TypeScript
- Tailwind CSS v4
- Motion (animation library)
- Lucide React (icons)
- Radix UI primitives

### Development

- Vite 6 (build tool)
- pnpm (package manager)
- Git and GitHub (version control)

### Deployment

- Figma Make (primary deployment environment)
- Vercel-compatible (standard Vite React build output)

---

## Featured Projects

### MOOVE

**Tagline:** Small Movements. Healthier Journeys.

**Problem:** Filipino drivers spend long hours sedentary, with limited access to structured wellness support during or between driving sessions.

**Solution:** A full-stack web application that converts sedentary driving time into guided micro-exercise breaks. Features timed driving sessions, context-aware exercise prompting (traffic, parked, before/after), 10 embedded exercise videos, and AI-generated wellness summaries.

**My Role:** Founder, CEO, Full-Stack Engineer, Research Lead. Built the entire application from scratch.

**Technologies:** React 19, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Groq AI (llama-3.3-70b), Vercel, Vite

**Key Features:**
- Groq AI wellness summaries via a Vercel serverless endpoint with deterministic fallback
- Supabase authentication with PostgreSQL and Row Level Security across 13 database migrations
- Admin and research dashboards for participant analytics, think-aloud sessions, and feedback validation
- Developed toward TRL-4 prototype with real user feedback and expert exercise input

**Evaluation:** 4.93/5 satisfaction, 93% task completion, 93% recommendation intent

**GitHub:** https://github.com/ACJ08/MOOVE
**Live Demo:** https://moove-lyart.vercel.app/

---

### Tanglaw

**Tagline:** Trusted Information Within Reach, Anywhere.

**Problem:** Digitally marginalized Filipino communities, particularly during crises, lack reliable tools to verify information when connectivity is limited.

**Solution:** An offline-first Media and Information Literacy platform featuring Liyab, a Groq-powered AI assistant for explainable claim verification with confidence-scored results. Includes a Learning Center, Crisis Verification Mode, and a Truth Hub Network of community verification centers.

**My Role:** Founder, CEO, Full-Stack Engineer, Product Lead. Designed and built the platform for UNESCO Youth Hackathon 2026.

**Technologies:** React 18, TypeScript, Tailwind CSS, Express, Groq AI, Supabase, Tesseract.js (OCR), Vite, Vercel

**Key Features:**
- Liyab AI assistant for explainable, confidence-scored claim verification
- Express backend API proxy for secure Groq, URL analysis, and verification services
- Tesseract.js OCR for text extraction from uploaded images and documents
- localStorage-based progress tracking and offline caching for low-connectivity use

**GitHub:** https://github.com/ACJ08/Tanglaw
**Live Demo:** https://tanglaw-tau.vercel.app/

---

### CIPHER

**Tagline:** Prove Participation. Protect Privacy.

**Problem:** Clinical trial credential verification exposes sensitive patient data in traditional workflows.

**Solution:** A decentralized application on the Midnight Network enabling patients to prove clinical trial participation using zero-knowledge proofs, without exposing any sensitive information. Three role-based dashboards for Sponsors, Patients, and Verifiers.

**My Role:** Frontend Engineer during the Midnight Hackathon (June to July 2026). Responsible for frontend architecture, role-based dashboards, ZK workflow integration, and browser-based Demo Mode.

**Technologies:** React 18, TypeScript, Tailwind CSS, Midnight Network, WebCrypto, Radix UI, Vite, Framer Motion

**GitHub:** https://github.com/KAwasthi2889/ZK-Participation

---

### VERSE

**Tagline:** Continuity Intelligence for Modern Film Production.

**Problem:** Out-of-sequence film shooting causes continuity errors that are costly to identify and resolve.

**Solution:** An AI-powered continuity intelligence platform that builds a persistent semantic production memory from screenplays. Uses IBM Granite 3.1 for scene ingestion, NetworkX for knowledge graph construction, and LangChain for conflict detection with explainable recommendations and confidence scores.

**My Role:** Frontend Engineer during the IBM July Challenge Hackathon (June to July 2026). Built the collaborative production dashboard with human-in-the-loop review workflows.

**Technologies:** React 18, TypeScript, Tailwind CSS, FastAPI, IBM Granite, LangChain, NetworkX, YOLOv8, MediaPipe, Vite

**GitHub:** https://github.com/ACJ08/VERSE

---

### FinSight AI

AI-powered MSME market simulation platform for Philippine banks. Built as Team Lead, Project Manager, and Fullstack Developer for BPI DataWave Hackathon 2025. **Top 6 Finalist.**

**GitHub:** https://github.com/ACJ08/finsightAI-fullstack | **Demo:** https://finsight-api-rvll.onrender.com

---

### Verity System

Budget anomaly detection and secure anonymous reporting system with tracking codes. Built as Team Lead and System Analyst for CSSprint December 2025. **Top 4 Finalist.**

**GitHub:** https://github.com/zenpa1/verity

---

### Joyful Bakes: CakewJoy OMS

Production-deployed order management system for a real bakery business. Led an 8-member team across 6 user roles. 100% client approval.

**GitHub:** https://github.com/Luis-Jay/Cakewithjoy | **Demo:** https://cakewjoy.vercel.app

---

### Additional Projects

| Project | Description | GitHub |
|---|---|---|
| NYC Taxi Duration Prediction | Geospatial ML pipeline on 500K+ taxi trips | [GitHub](https://github.com/ACJ08/GeoRide-Analytics-Geospatial-Taxi-Duration-Prediction-Pipeline) |
| BankTerm Intelligence | Term deposit subscription classification on 45K+ records | [GitHub](https://github.com/ACJ08/BankTerm-Intelligence---Customer-Term-Deposit-Subscription-Prediction) |
| Sarcasm Detection (BERT Variants) | 93.51% accuracy on 28,503 headlines across 5 transformer models | [GitHub](https://github.com/ACJ08/DataSci7_3CSD_ML-Project) |
| 20 Newsgroups Text Classification | Multi-class NLP on 18K+ documents | [GitHub](https://github.com/ACJ08/Multi-Class-Text-Classification-using-20-Newsgroups-Dataset) |
| ShopZada Data Warehouse | Kimball DWH with 500K+ orders and 3 Tableau dashboards | [GitHub](https://github.com/GoldenSpectrum/dwh_finalproject_3CSD-E_group_5WORKS) |
| EduGrade | Role-based academic grading system with MVC architecture | [GitHub](https://github.com/ACJ08/ICS2608_Final-Project) |
| Split It | Flutter expense-splitting app with fair-share computation | [GitHub](https://github.com/ACJ08/Split-It-Final-Project) |

---

## Professional Experience

### Frontend AI Engineering Intern — Flyrank (Completed)

**Company:** Flyrank | Sarajevo, Europe
**Period:** July 2026 – September 2026

Completed the Front-end AI Engineering internship track at Flyrank from July to September 2026. Delivered 10 practical frontend assignments and an accepted capstone project across 21 meetings and events. Built responsive interfaces using React, TypeScript, and Tailwind CSS. Applied AI-assisted development workflows, conducted browser QA and visual fidelity testing, and met all 5 track requirements.

---

### Founder and CEO, Full-Stack Engineer — MOOVE

**Period:** September 2025 – Present

Founded and built MOOVE, a full-stack preventive wellness platform for Filipino drivers. Led product strategy, technical architecture, full-stack development, and research validation. Achieved 4.93/5 satisfaction and 93% task completion across usability testing.

---

### Founder and CEO — Tanglaw

**Period:** July 2026 – Present

Founded Tanglaw, an offline-first AI platform for Media and Information Literacy, built for UNESCO Youth Hackathon 2026.

---

## Education

**BS Computer Science — Data Science Specialization**
University of Santo Tomas | 2023 – Present

- GWA: 1.225
- Consistent Dean's Lister
- Candidate for Magna Cum Laude

---

## Certifications

**Featured (Recent and Professionally Relevant)**

- IBM AI Builders Challenge — IBM, 2026
- Anthropic AI Fluency: Framework and Foundations — Anthropic, 2026
- IBM Granite Models for Software Development — IBM, 2026
- IBM AI in the Real World — IBM, 2026
- IBM Bob: AI-Assisted Debugging — IBM, 2026
- Gemini Certified Student — Google for Education, 2026 (Valid through 2029)
- UNLEASH Philippines Talent — UNLEASH Philippines Innovation Lab, 2025

**Additional**

- BPI DataWave 2025 Learning Modules (3 certifications)
- Introduction to Python — DataCamp, 2025
- Responsive Web Design — FreeCodeCamp, 2024
- Google Analytics for Beginners — Google Analytics Academy, 2024
- Introduction to Neural Networks — Great Learning Academy, 2024
- Introduction to Artificial Intelligence — Great Learning Academy, 2024

---

## Leadership and Organizations

- Secretary Officer of the Class (3rd Year) — University of Santo Tomas, 2025–2026
- Executive Staff of Human Resource — UST ICS Student Council, 2025–2026
- Member, Market Analytics Department — UST Technovation Society, 2025–2026
- Human Resources Staff — AWS Cloud Club UST, 2025–2026
- UNLEASH Philippines Talent — September 2025 (Selected from all 18 Philippine regions)
- Vice President of the Class (2nd Year) — University of Santo Tomas, 2024–2025
- Committee Director of Crisis Management — UST ICS Student Council, 2024–2025

---

## Skills

**Programming Languages:** Java, JavaScript, TypeScript, Python, SQL, Dart

**Frontend:** React, Next.js, Tailwind CSS, HTML, CSS, JSP

**Backend and Full-Stack:** Node.js, Express.js, Supabase, Firebase, REST APIs

**Databases:** PostgreSQL, MongoDB, Supabase, Firebase Realtime Database, MySQL

**AI and Machine Learning:** PyTorch, HuggingFace Transformers, scikit-learn, OpenAI API, Groq API, IBM Granite, LangChain

**Data Engineering and Analytics:** Pandas, NumPy, Apache Airflow, Docker, Kimball Modeling, ETL Pipelines, Tableau

**Design:** Figma, UI/UX Design, Wireframing, Prototyping

**Tools:** Git, GitHub, Vercel, Render, Google Colab, Docker, n8n, VS Code

---

## Getting Started

**Requirements:** Node.js 18 or higher, pnpm

```bash
# Clone the repository
git clone https://github.com/ACJ08/your-portfolio-repo.git
cd your-portfolio-repo

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build
```

---

## Environment Variables

This portfolio does not require environment variables to run locally. The contact form uses Formsubmit.co, which requires no API keys.

If you fork this project and add your own integrations, document any required variables using the pattern below:

```env
VITE_EXAMPLE_KEY=your_key_here
```

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Root component, theme state, layout
│   └── components/
│       ├── Navigation.tsx       # Sticky nav with mobile menu
│       ├── Hero.tsx             # Typing animation and profile photo
│       ├── About.tsx            # Bio and highlight cards
│       ├── Skills.tsx           # 9-category skill grid
│       ├── Projects.tsx         # 19 projects with filter and expand system
│       ├── Experience.tsx       # Timeline of professional and leadership roles
│       ├── Education.tsx        # Academic records and honors
│       ├── Certifications.tsx   # Certifications with featured grouping
│       └── Contact.tsx          # Contact form and social links
├── imports/                     # Profile images and static assets
└── styles/
    ├── theme.css                # CSS custom properties and design tokens
    ├── fonts.css                # Google Fonts imports
    └── index.css                # Tailwind base configuration
```

---

## Design and Development Notes

- **Glassmorphism** visual language with backdrop blur, subtle borders, and layered gradients
- **Purple primary palette** with dark/light mode support and smooth theme transitions
- **Scroll-triggered animations** using Motion for section entrances
- **Recruiter-first hierarchy:** identity, internship experience, projects, skills, education
- **No em dashes** used anywhere in content (replaced with commas, colons, or separate sentences)
- **Contact form** powered by Formsubmit.co. First submission triggers a one-time email activation from Formsubmit to the portfolio owner.

---

## Contact

- **Email:** annecaroljonson1108@gmail.com
- **LinkedIn:** [linkedin.com/in/anne-carol-jonson](https://www.linkedin.com/in/anne-carol-jonson-745752314/)
- **GitHub:** [github.com/ACJ08](https://github.com/ACJ08)

---

## License

This portfolio is personal. All content, projects, and personal information belong to Anne Carol G. Jonson and are not licensed for reuse or redistribution.
