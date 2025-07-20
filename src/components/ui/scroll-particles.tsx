"use client";

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface StaticParticle {
  id: string;
  x: number;
  y: number;
  opacity: number;
  size: number;
  animationDelay: number;
  animationDuration: number;
}

export const ScrollParticles = () => {
  const particles = useMemo(() => {
    const particleArray: StaticParticle[] = [];
    
    // Calculate page height (approximate based on typical portfolio page)
    const pageHeight = typeof window !== 'undefined' ? window.innerHeight * 6 : 3000; // 6 viewport heights
    const sideWidth = 150; // Width of the side areas where particles can appear
    
    // Generate particles for the entire page height
    for (let i = 0; i < 100; i++) {
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const id = `particle-${i}`;
      const opacity = Math.random() * 0.6 + 0.2; // 0.2 to 0.8
      const size = Math.random() * 4 + 2; // 2 to 6px
      const animationDelay = Math.random() * 4; // 0 to 4 seconds
      const animationDuration = Math.random() * 3 + 2; // 2 to 5 seconds
      
      // Position particles along the sides
      const x = side === 'left' 
        ? Math.random() * sideWidth 
        : -Math.random() * sideWidth; // Negative for right side positioning
      
      const y = Math.random() * pageHeight;

      particleArray.push({
        id,
        x,
        y,
        opacity,
        size,
        animationDelay,
        animationDuration
      });
    }
    
    return particleArray;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            right: particle.x < 0 ? Math.abs(particle.x) : 'auto',
            left: particle.x >= 0 ? particle.x : 'auto',
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#10b981',
            boxShadow: `0 0 ${particle.size * 2}px rgba(16, 185, 129, 0.5), 0 0 ${particle.size * 4}px rgba(16, 185, 129, 0.3)`,
            filter: `drop-shadow(0 0 ${particle.size}px rgba(16, 185, 129, 0.6))`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.animationDelay,
          }}
        />
      ))}
    </div>
  );
};