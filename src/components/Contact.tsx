
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Get in Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg text-secondary-foreground">
            I'm always open to new opportunities and interesting projects.
            Let's connect!
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your.email@example.com"
              className="text-secondary-foreground hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
