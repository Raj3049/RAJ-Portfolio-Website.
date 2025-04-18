
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Particles } from "./Particles";

export const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const [title, setTitle] = useState("");
  const [isGreetingDone, setIsGreetingDone] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const fullGreeting = "Hey, I'm ";
  const fullTitle = "Full-stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullGreeting.length) {
        setGreeting(fullGreeting.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsGreetingDone(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isGreetingDone) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setTitle(fullTitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [isGreetingDone]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          <span className="block">{greeting}</span>
          <span className="gradient-text block">Your Name</span>
          <span className="text-3xl md:text-4xl block mt-4 text-muted-foreground">{title}</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting elegant digital experiences with modern web technologies
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
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
            animate={{
              boxShadow: [
                '0 0 20px 5px rgba(var(--primary), 0.3)',
                '0 0 30px 8px rgba(var(--accent), 0.3)',
                '0 0 20px 5px rgba(var(--primary), 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-primary/10 blur-xl"
          animate={{
            x: cursorPosition.x - 50,
            y: cursorPosition.y - 50,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ y: -5 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
