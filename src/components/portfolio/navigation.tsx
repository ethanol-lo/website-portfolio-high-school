"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  onNavClick?: (section: string) => void
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const Navigation = ({ onNavClick }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 })
  const navRefs = useRef<(HTMLDivElement | null)[]>([])

  // Update underline position when the active section changes
  useEffect(() => {
    const idx = navItems.findIndex(item => item.href === `#${activeSection}`)
    const el = navRefs.current[idx]
    if (el) {
      setUnderlineProps({
        left: el.offsetLeft,
        width: el.offsetWidth
      })
    }
  }, [activeSection])

  // Scroll and intersection observer logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const observerOptions = {
      threshold: 0.4, // 40% of section is visible (tweak as needed)
      rootMargin: '-100px 0px -50% 0px'
    }

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe sections
    const sections = ['about', 'skills', 'projects', 'contact']
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  // Handle nav click
  const handleNavClick = (href: string, index: number) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId) // immediately set for click feedback
    if (onNavClick) onNavClick(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-secondary/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              href="#" 
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => handleNavClick('#hero', -1)}
            >
              Portfolio
            </Link>
          </motion.div>
          {/* Navigation Items */}
          <div className="relative hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <div
                key={item.name}
                ref={el => navRefs.current[idx] = el}
                className="relative"
                onClick={() => handleNavClick(item.href, idx)}
                style={{ cursor: 'pointer' }}
              >
                <span
                  className={`transition-colors duration-200 px-2 py-1 text-base font-medium ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-primary font-semibold' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
            {/* Underline */}
            <motion.div
              className="absolute bottom-0 h-[2.5px] rounded bg-primary"
              animate={{
                left: underlineProps.left,
                width: underlineProps.width
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30 
              }}
              style={{ 
                left: underlineProps.left, 
                width: underlineProps.width, 
                willChange: 'left, width'
              }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
