
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      return particle;
    };

    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      container.appendChild(createParticle());
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <motion.div ref={containerRef} className="particles" />;
};
