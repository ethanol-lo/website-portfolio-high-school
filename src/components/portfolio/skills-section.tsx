"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Code, Palette, Wrench, Database, Globe, Smartphone, Music, AudioLines, Music2, CodeXml, SquareTerminal } from "lucide-react"

interface Skill {
  name: string
  level?: number // Made optional for list-only skills
  icon: React.ComponentType<{ className?: string }>
}

interface SkillCategory {
  title: string
  skills: Skill[]
  icon: React.ComponentType<{ className?: string }>
  showPercentages?: boolean // New prop to control display type
}

const skillCategories: SkillCategory[] = [
  {
    title: "Computer Science",
    icon: Code,
    showPercentages: false,
    skills: [
      { name: "Python", icon: Globe },
      { name: "Java", icon: SquareTerminal },
      { name: "Object Oriented Programming (OOP)", icon: CodeXml },
      { name: "HTML/CSS/Javascript", icon: CodeXml },
      { name: "DE Intro to OOP at Georgia Institute of Technology", icon: Wrench },
      { name: "2025 Harvard Undergraduate Ventures-TECH Summer Program (HUVTSP)", icon: Database },
      { name: "2025 Internship at ScoutOut", icon: Wrench},
      { name: "2025-26 Vice President of Walton Computer Science Honor Society", icon: Globe },
      { name: "Published two papers to arXiv", icon: Database },
      { name: "2024 Inspirit AI Scholars & Independent Research Program", icon: Globe },
      { name: "Research in Exoplanet Detection with ML", icon: Globe },
      { name: "Research in Cyclone Forecasting with ML", icon: Globe },
      { name: "5 in AP Computer Science A", icon: SquareTerminal },
      { name: "Contribution to Divergent Teams Hackathon with NLP model (1st Place)", icon: CodeXml },
      { name: "Mathnasium & freelance math/coding tutor", icon: Database },
      { name: "2023 GenCyber Workshop for Cybersecurity at Georgia State University", icon: Wrench },
    ]
  },
  {
    title: "Music",
    icon: Music,
    showPercentages: false,
    skills: [
      { name: "ABRSM Diploma in Cello Performance", icon: Music2 },
      { name: "ABRSM Cello Performance Grade 8 with Distinction", icon: Music2 },
      { name: "ABRSM Piano Performance Grade 8 with Distinction", icon: Music },
      { name: "Walton Chamber Orchesra Cello Principal 2023-26", icon: Music },
      { name: "Atlanta Symphony Youth Orchestra Cellist 2023-26", icon: Music},
      { name: "GMEA All-State Orchestra 2019-25", icon: Music },
      { name: "Founded the Spitzenreiter Piano Trio", icon: Music2 },
      { name: "Founded the Lotus Cello Quartet", icon: Music2 },
      { name: "2025-26 Tri-M Music Honor Society", icon: Music },
      { name: "Outstanding Performer at the 2023 Midwest Clinic International Band and Orchestra Conference", icon: Music2 },
      { name: "1st Place at the 2023 American Protege International Concerto Competition, performed at Carnegie Hall", icon: Music2 },
      { name: "1st Place at the 2022 Charleston International Chamber Music Competition", icon: Music2 },
    ]
  },
  {
    title: "Other Experiences",
    icon: Wrench,
    showPercentages: false,
    skills: [
      { name: "2025 National Junior Classical League Convention with Full Scholarship", icon: Globe },
      { name: "Summa Cum Laude in the National Latin Exam (2022-25)", icon: Globe },
      { name: "Walton JCL Webmaster (1st in GJCL Website Contest)", icon: Database },
      { name: "2024 Governor's Honors Program (Cello Major, CS Minor)", icon: Music2 },
      { name: "2023 Heifetz International Music Institute Summer Program", icon: Globe},
      { name: "2025-26 Founder/President of Walton Public Speaking Club", icon: Globe },
      { name: "2024-26 Vice President of Walton Asian Student Alliance", icon: Globe },
      { name: "2022-26 Math Varsity Team, Communications Coordinator & JV Coach", icon: Wrench },
      { name: "2024-25 Vice President of Academic Bowl (2022-25 member)", icon: Globe },
      { name: "2023-26 Tennis Varsity Team, 2025 State Finalists", icon: Globe },
      { name: "2025-26 Mu Alpha Theta Honor Society", icon: Database },
    ]
  }
]

const SkillCard = ({ skill, index, showPercentages }: { skill: Skill; index: number; showPercentages: boolean }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <skill.icon className="h-5 w-5 text-accent" />
          <span className="text-foreground font-medium">{skill.name}</span>
        </div>
        {showPercentages && skill.level && (
          <span className="text-sm text-muted-foreground font-medium">
            {skill.level}%
          </span>
        )}
      </div>
      
      {showPercentages && skill.level && (
        <div className="w-full bg-secondary rounded-full h-2">
          <motion.div
            className="bg-accent h-2 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.div>
  )
}

const SkillCategory = ({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-lg">
          <category.icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
      </div>
      
      <div className="grid gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            showPercentages={category.showPercentages || false}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Skills & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my skills and proficiency levels across different interests (view more in my resume)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              categoryIndex={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              SAT 1560
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
