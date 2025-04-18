
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[90vh] flex flex-col items-center justify-center relative animated-bg"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span>{greeting}</span>
          <span className="gradient-text">Your Name</span>
        </h1>
        <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl">
          Full-stack developer crafting beautiful web experiences
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <img
            src="https://github.com/yourusername.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-accent/20 mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
