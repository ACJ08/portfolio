import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/annecaroljonson1108@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name}`,
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "success" || status === "error") setStatus("idle");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "annecaroljonson1108@gmail.com",
      href: "mailto:annecaroljonson1108@gmail.com?subject=Portfolio%20Inquiry",
      newTab: false,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+63 961 463 0401",
      href: "tel:+639614630401",
      newTab: false,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/anne-carol-jonson",
      href: "https://www.linkedin.com/in/anne-carol-jonson-745752314/",
      newTab: true,
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/ACJ08",
      href: "https://github.com/ACJ08",
      newTab: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Let's build impactful systems together.
          </p>
          <p className="mt-2 text-foreground max-w-2xl mx-auto">
            I'm open to discussing internship opportunities, collaborations, and technology projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-primary">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.newTab ? "_blank" : undefined}
                  rel={info.newTab ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 backdrop-blur-sm"
            >
              <h4 className="mb-4 text-primary">Open to Opportunities In:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Engineering", "Full-Stack Development", "Front-End Development",
                  "Back-End Development", "Web Development", "Mobile Development",
                  "Data Science", "Machine Learning", "Artificial Intelligence",
                  "Data Analytics", "Business Intelligence", "QA / Software Testing",
                  "Cloud Computing", "DevOps", "Product Development",
                  "Technology Consulting", "Research & Development", "Other Tech Roles",
                ].map((role, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Message Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-primary">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot (hidden) */}
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Your message..."
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-600 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Message sent! I'll get back to you soon. (If this is the first message, check your inbox to activate delivery.)</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Something went wrong. Please email me directly at annecaroljonson1108@gmail.com</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-5 h-5" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
