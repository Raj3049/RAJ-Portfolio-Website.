
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

export const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const colors = [
    'hsl(var(--primary) / 0.3)',
    'hsl(var(--primary) / 0.2)',
    'hsl(var(--accent) / 0.3)',
    'hsl(var(--accent) / 0.2)',
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setParticles(initialParticles);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = containerRef.current!.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - left,
        y: e.clientY - top
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animateParticles = (time: number) => {
    if (!previousTimeRef.current) {
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateParticles);
      return;
    }
    
    const deltaTime = time - previousTimeRef.current;
    previousTimeRef.current = time;
    
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    setParticles(prevParticles => 
      prevParticles.map(particle => {
        // Calculate distance from mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply force based on mouse proximity
        let newX = particle.x;
        let newY = particle.y;
        
        if (distance < 100) {
          // Repel particles from mouse
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          newX -= Math.cos(angle) * force * deltaTime;
          newY -= Math.sin(angle) * force * deltaTime;
        } else {
          // Normal floating movement
          newX += Math.sin(time * 0.001 + particle.id) * particle.speed;
          newY += Math.cos(time * 0.001 + particle.id) * particle.speed;
        }
        
        // Bounce off edges
        if (newX < 0 || newX > width) newX = particle.x;
        if (newY < 0 || newY > height) newY = particle.y;
        
        return {
          ...particle,
          x: newX,
          y: newY,
          opacity: 0.2 + (Math.sin(time * 0.001 + particle.id) + 1) * 0.15
        };
      })
    );
    
    requestRef.current = requestAnimationFrame(animateParticles);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <motion.div 
      ref={containerRef} 
      className="particles absolute inset-0 pointer-events-none overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          transition={{ type: 'tween', duration: 0.1 }}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}
    </motion.div>
  );
};
