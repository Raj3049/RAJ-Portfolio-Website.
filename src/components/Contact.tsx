import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  const inputClasses = "w-full bg-card border border-muted rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground";
  
  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:rajsinghbisht304@gmail.com" },
    { name: "GitHub", icon: Github, url: "https://github.com/Raj3049" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/raj-singh-150957250" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-muted-foreground mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={inputClasses}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>
              
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 mt-2"
                >
                  Message sent successfully!
                </motion.div>
              )}
              
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-2"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-md hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon size={20} className="text-primary" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-lg shadow-primary/5 aspect-w-16 aspect-h-9">
              <div className="w-full h-full relative">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">Ambala, Haryana 133003</span>
                </div>
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.013073289889!2d76.7821!3d30.3752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910287e5e2e2e2b%3A0x6e2e2e2e2e2e2e2e!2sAmbala%2C%20Haryana%20133003%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
