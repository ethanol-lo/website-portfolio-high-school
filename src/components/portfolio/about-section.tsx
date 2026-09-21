"use client"

import { Code, Palette, Zap, Target, Heart, Lightbulb } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Machine Learning & AI",
      description: "Conducted extensive machine learning research and projects, familiar with creating regression and classification models, such as
        XGBoost, GradientBoost, Logistic Regression, KNN, RF, MLP, SVM, CNN, RNN, LSTM, BERT"
    },
    {
      icon: Palette,
      title: "Languages & Frameworks",
      description: "Fluent in Python, Java, JUnit, HTML/CSS, and JavaScript. Currently taking Data Structures & Algorithms (1332). and Computer Organization & Programming (2110)."
    },
    {
      icon: Zap,
      title: "Databases & Tools",
      description: "Experienced in VS Code, IntelliJ, Git, Jupyter Notebook, Google Colab, and Raspberry Pi."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-3 gap-16 items-start"
        >
          {/* Left Column - Profile Photo - Cleaned version */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-2 shadow-lg">
                <div className="aspect-[2/3] w-full bg-secondary rounded-xl overflow-hidden border border-border">
                  <img 
                    src="/images/ethan-cello.png"
                    alt="Professional profile portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Quick stats underneath photo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">School</span>
                    <span className="text-sm font-medium text-foreground">Georgia Institute of Technology</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="text-sm font-medium text-foreground">Atlanta, Georgia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Graduation</span>
                    <span className="text-sm font-medium text-foreground">2028</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Music Taste</span>
                    <span className="text-sm font-medium text-foreground">Indie Pop, Classical, K/J-pop, R&B</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Middle & Right Columns - Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a junior at the Georgia Institute of Technology with a major in computer science and threads in AI and Modeling & Simulation. 
                I am always open to learning new things and taking on challenges that push me to grow both 
                personally and professionally.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed"> 
                Technology has fascinated me from a young age, and now there are limitless applications of AI that I'm eager
                to learn and apply. Started with Python, I learned through building small projects to taking on complex challenges.
                With the skills I've acquired so far, I aim to create impactful solutions that make a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">What Drives Me</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should be accessible, purposeful, and transformative. I can spend 
                countless hours coding, whether it's stubbornly debugging or productively adding on what I envision. 
                I'm always striving to improve my skills and myself, infinitely curious about new things.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Looking Forward</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As I continue my studies and work on new projects, I'm excited about opportunities 
                to contribute to innovative teams and tackle complex technical challenges. I'm always 
                eager to learn new technologies, make connections with others, and contribute to a more 
                advanced future.
              </p>
            </motion.div>

            {/* Skills section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-card rounded-lg p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
