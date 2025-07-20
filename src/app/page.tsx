import Navigation from '@/components/portfolio/navigation'
import HeroSection from '@/components/portfolio/hero-section'
import AboutSection from '@/components/portfolio/about-section'
import SkillsSection from '@/components/portfolio/skills-section'
import ProjectsSection from '@/components/portfolio/projects-section'
import ContactSection from '@/components/portfolio/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation /* onNavClick removed - handled in client navigation */ />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}