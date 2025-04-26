import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/Raj3049" },
    { icon: Linkedin, url: "https://linkedin.com/in/raj-singh-150957250" },
  ];
  
  return (
    <footer className="py-12 px-4 border-t border-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <a href="#" className="text-2xl font-bold gradient-text">YD</a>
            <p className="text-muted-foreground mt-2">Raj Singh Bisht</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Raj Singh Bisht. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
