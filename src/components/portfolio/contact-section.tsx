"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { siDiscord } from "simple-icons"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: Mail, href: "mailto:elo9908@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/ethanol-lo", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/ethan-lo-2307252ba", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/e.than.lo/", label: "Instagram" },
    { icon: "Discord", href: "https://discordapp.com/users/701097894731841609", label: "Discord" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCye4FoRA6XspjWJxTrBOhfA", label: "YouTube" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect or send me a message. I'll be happy to discuss anything with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-semibold text-foreground">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-[#1f1f1f] border-2 border-accent/50 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent hover:border-accent/70 transition-all duration-300 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-[#1f1f1f] border-2 border-accent/50 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent hover:border-accent/70 transition-all duration-300 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What's on your mind?"
                      rows={6}
                      required
                      className="bg-[#1f1f1f] border-2 border-accent/50 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent hover:border-accent/70 transition-all duration-300 resize-none outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 transition-colors"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about life. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Connect with me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border hover:border-accent transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      {link.icon === "Discord" ? (
                        <svg
                          className="h-5 w-5 text-accent"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d={siDiscord.path} />
                        </svg>
                      ) : (
                        <link.icon className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-secondary border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-medium text-foreground">Direct Email</h4>
              </div>
              <p className="text-muted-foreground mb-2">
                Prefer email? Drop me a line directly at:
              </p>
              <a
                href="mailto:elo9908@gmail.com"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                elo9908@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-lg bg-secondary border border-border">
              <h4 className="text-lg font-medium text-foreground mb-2">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond within 24 hours. Please no spamming.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}