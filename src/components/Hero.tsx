import { motion } from "framer-motion";
import { useRef } from "react";
import { Particles } from "./Particles";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <motion.section 
      id="hero"
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[100vh] flex flex-col items-center justify-center relative animated-bg overflow-hidden"
    >
      <Particles />
      <div className="text-center space-y-8 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold space-y-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text block">Raj Singh Bisht</span>
          <span className="text-3xl md:text-4xl block mt-4 text-muted-foreground">Machine Learning & Data Science Enthusiast</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting intelligent solutions with data and code.
        </motion.p>
      </div>
    </motion.section>
  );
};
