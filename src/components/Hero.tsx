
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";

export const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const fullGreeting = "Hey, I'm ";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullGreeting.length) {
        setGreeting(fullGreeting.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] flex flex-col items-center justify-center relative animated-bg"
    >
      <Particles />
      <div className="text-center space-y-8 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold space-y-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">{greeting}</span>
          <span className="gradient-text block">Your Name</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-stack developer crafting elegant digital experiences
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 mx-auto overflow-hidden">
            <img
              src="https://github.com/yourusername.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
        </motion.div>
      </div>
    </motion.section>
  );
};
