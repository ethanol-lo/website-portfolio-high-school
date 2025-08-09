"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollParticles } from '@/components/ui/scroll-particles'
import { siSpotify } from 'simple-icons'

const CyclingTypewriter = ({ words, delay = 0 }: { words: string[]; delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true)
      }, delay)
      return () => clearTimeout(startTimer)
    }

    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 60)
      } else {
        // Pause after completing a word, then start backspacing
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      // Backspacing phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 60)
      } else {
        // Pause after deletion, then move to next word
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setIsTyping(true)
        }, 800)
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [displayText, currentWordIndex, isTyping, words, delay, hasStarted])

  if (!hasStarted) {
    return (
      <span className="inline-block">
        <span className="animate-pulse text-accent">|</span>
      </span>
    )
  }

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}

export default function HeroSection() {
  const typewriterWords = [
    "High School Student",
    "Coder", 
    "Musician",
    "Athlete",
    "Calisthenics Enthusiast"
  ]

  const scrollToProjects = () => {
    const projectSection = document.getElementById('project')
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Scroll Particles */}
      <ScrollParticles />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)]" />
      </div>

      {/* Animated Background Elements - Enhanced with more particles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full"
          animate={ {
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={ {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full"
          animate={ {
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={ {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full"
          animate={ {
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={ {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Additional particles for hero section */}
        <motion.div
          className="absolute top-60 left-32 w-1.5 h-1.5 bg-accent rounded-full"
          animate={ {
            y: [0, -15, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={ {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-80 right-40 w-2.5 h-2.5 bg-accent rounded-full"
          animate={ {
            y: [0, -35, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={ {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute bottom-40 right-16 w-1 h-1 bg-accent rounded-full"
          animate={ {
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={ {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
        <motion.div
          className="absolute top-96 left-16 w-2 h-2 bg-accent rounded-full"
          animate={ {
            y: [0, -28, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={ {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-muted-foreground text-lg font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Ethan</span>
            <span className="text-accent"> Lo</span>
          </motion.h1>

          {/* Tagline with Cycling Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              <CyclingTypewriter words={typewriterWords} delay={1000} />
            </h2>
          </motion.div>

          {/* Brief Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            "Ipsa scientia potestas est"<br />
            - Sir Francis Bacon
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/ethanol-lo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-lo-2307252ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="mailto:elo9908@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://open.spotify.com/user/31qyixd4jbzuqf2levqqj4c7od4e?si=14d0070716ea459d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 group"
            >
              <svg
                className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={siSpotify.path} />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to about me</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
