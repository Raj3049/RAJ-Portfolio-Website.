import { motion } from "framer-motion";
import { GraduationCap, Link } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Deep Learning Foundations: Natural Language Processing with TensorFlow",
    issuer: "LinkedIn Learning",
    date: "Feb 2023",
    url: "https://www.linkedin.com/learning/certificates/7720c98655970e4b4a0d60c6506ccfe1a866c859496e773b66%206a5d7146d8109e?trk=share_certificate"
  },
  {
    id: 2,
    name: "Prompt Engineering for ChatGPT",
    issuer: "Coursera",
    date: "Feb 2024",
    url: "https://coursera.org/share/9ca054ade857491d71f2ca6122336291"
  },
  {
    id: 3,
    name: "ChatGPT Advanced Data Analysis",
    issuer: "Coursera",
    date: "May 2024",
    url: "https://coursera.org/share/dcbff11bf5afa91fa1b6b62271a0a2cc"
  },
  {
    id: 4,
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2024",
    url: "https://internalapp.nptel.ac.in/B2C/exam_form/candidate_login/candidate_scores.php?courseid=noc24-cs118"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 gradient-text"
        >
          Certificates
        </motion.h2>
        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg shadow-primary/5 card-hover flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <GraduationCap className="text-accent" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <p className="text-primary/80 mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground">{cert.date}</p>
                </div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline mt-2 md:mt-0"
              >
                <Link size={18} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
