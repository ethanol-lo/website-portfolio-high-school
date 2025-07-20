"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  size?: "small" | "medium" | "large" | "wide" | "tall"
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Exoplanet Detection Using Machine Learning Models Trained on Synthetic Light Curves',
    description: 'Research on how SMOTE can significally improve ML-predicted classifications for exoplanets',
    longDescription: 'A comprehensive report about the performance of well-known ML algorithms with and without data augmentation techniques based on exoplanets from the Kepler mission',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/scientific-exoplanet-transit-light-curve-66d8e02a-20250718013147.jpg',
    technologies: ['Python', 'Google Colab', 'ML'],
    category: 'Machine Learning',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    size: 'large'
  },
  {
    id: '2',
    title: 'Predicting Cyclone Trajectory and Classification with Time Series Data',
    description: 'A research study on models that predict both trajectory and classification of cyclones in the Atlantic and Pacific',
    longDescription: 'A research study on models that use past cyclone data to predict its trajectory and then classify the current cyclone in timed intervals',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/hurricane-cyclone-trajectory-map-showing-f3ed18b6-20250716012830.jpg',
    technologies: ['Python', 'Google Colab', 'ML'],
    category: 'Machine Learning',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/taskmanager',
    size: 'medium'
  },
  {
    id: '3',
    title: 'Object Detection Using a Resource-Limited Device with Machine Learning',
    description: 'An object detection program on a Raspberry Pi that detects objects in both images and video streams',
    longDescription: 'An object detection program backed by YOLOv5 ran on a Raspberry Pi that detects objects in both images and video streams',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/raspberry-pi-object-detection-setup-with-1dfee59b-20250716012914.jpg',
    technologies: ['Python', 'Raspberry Pi', 'YOLOv5'],
    category: 'Miscellaneous',
    demoUrl: 'https://docs.google.com/presentation/d/1EtJitJznuKpm0uaRos67Nzg3VegD5v5Am9GKrqqCwho/edit?usp=sharing',
    githubUrl: 'https://github.com/example/weather',
    size: 'wide'
  },
  {
    id: '4',
    title: 'Automated Garbage Collection Robot',
    description: 'Identifies and disposes of garbage solely self-automated',
    longDescription: 'A LEGO Mindstorms EV3 robot that identifies and disposes of garbage using a color sensor and a vacuum mechanism',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/advanced-lego-mindstorms-ev3-robot-with--9304a544-20250716012851.jpg',
    technologies: ['LEGO Mindstorms EV3'],
    category: 'Robotics',
    githubUrl: 'https://github.com/example/apigateway',
    size: 'small'
  },
  {
    id: '5',
    title: 'Chatbot Using Domain Knowledge',
    description: 'A chatbot that provides information about a user-inputted file',
    longDescription: 'A chatbot that formulates answers and references based on user queries about a specific upload',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/futuristic-ai-chatbot-interface-with-glo-1ded34b3-20250716012839.jpg',
    technologies: ['Python', 'LangChain'],
    category: 'Miscellaneous',
    demoUrl: 'https://www.youtube.com/watch?v=B2sLZ2WX-Is',
    githubUrl: 'https://github.com/example/banking',
    size: 'tall'
  },
  {
    id: '6',
    title: 'Gyroscopic Self-Balancing Robot',
    description: 'A LEGO Mindstorms EV3 robot that balances on two wheels using a gyroscopic sensor',
    longDescription: 'A LEGO Mindstorms EV3 robot that balances on two wheels using a gyroscopic sensor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/lego-mindstorms-ev3-self-balancing-robot-e5d36121-20250716012902.jpg',
    technologies: ['LEGO Mindstorms EV3'],
    category: 'Robotics',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/analytics',
    size: 'medium'
  }
]

const categories = ['All', 'Machine Learning', 'Robotics', 'Miscellaneous']

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small":
      return "col-span-1 row-span-1";
    case "medium":
      return "col-span-1 row-span-2";
    case "large":
      return "col-span-2 row-span-3";
    case "wide":
      return "col-span-2 row-span-1";
    case "tall":
      return "col-span-1 row-span-3";
    default:
      return "col-span-1 row-span-1";
  }
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hover:bg-[#1a1a1a]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-[#1a1a1a]" />
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-2xl font-bold">All Projects</h1>
              </motion.div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="hover:bg-[#1a1a1a] lg:hidden"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <motion.p 
            className="text-[#a3a3a3] mt-2 max-w-2xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore my complete portfolio of projects, spanning machine learning research, robotics, and innovative solutions.
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`
                  ${selectedCategory === category 
                    ? "bg-[#10b981] text-black hover:bg-[#059669]" 
                    : "hover:bg-[#1a1a1a] text-[#a3a3a3] hover:text-white"
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`${getSizeClasses(project.size || 'medium')} group`}
              >
                <Card className="h-full bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#10b981] transition-all duration-300 overflow-hidden">
                  <div className="relative h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-32 overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      {project.featured && (
                        <Badge className="absolute top-3 right-3 bg-[#10b981] text-black">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#10b981] transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-[#a3a3a3] text-sm line-clamp-3 mb-3 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs border-[#2a2a2a] text-[#a3a3a3]"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-[#2a2a2a] text-[#a3a3a3]">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="hover:bg-[#2a2a2a] text-[#a3a3a3] hover:text-white flex-1"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="hover:bg-[#10b981] hover:text-black text-[#a3a3a3] flex-1"
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-[#a3a3a3] text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}