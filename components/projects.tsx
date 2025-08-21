"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { ExternalLink, Github, Figma } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const projects = [
  {
    title: "QuickShow",
   
    description:
      "QuickShow is a sleek, full-stack web application designed for booking movie tickets online. It offers everything from seat selection to payment.",
    image: "/bookmyshow.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Stripe"],
    github: "https://github.com/Princejangra146/Qucikshow",
    live: "https://qucikshow-98hv.vercel.app/",
  },
  {
    title: "QuickAI",
    
    description:
      " It is a fullstack AI SaaS platform that enables users to generate content—like articles, marketing copy, and images—using OpenAI technology .",
    image: "/quickai.png",
    technologies: ["React", "TypeScript", "Clerk", "OpenAI"],
    github: "https://github.com/Princejangra146/qucikai",
    live: "https://quickai-gs.vercel.app/",
  },
  {
    title: "Geo-rilla",
   
    description:
      "AI powered Geo-location based Attendance System .",
    image: "/georilla.jpg",
    technologies: ["React", "Express", "AI", "Tailwind"],
    github: "https://github.com/Arindamsharma12/Georilla",
    live: "https://georilla-vert.vercel.app/",
  },
  
]

const figmaProjects = [
  {
    title: "Grocery App",
    description: " complete UI/UX design system for a modern grocery app with micro-interactions and user flows.",
    image: "/grocery app.png",
    figma: "https://www.figma.com/proto/9lSdCqhdFkNMrf6ZptT5KH/Grocery?node-id=1-3&p=f&t=MFZO1DXEcsr9Ap9W-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
    category: "UI/UX Design"
  },
  {
    title: "Currvtech Landing Page",
    description: " complete UI/UX design system for a modern landing page with micro-interactions and user flows.",
    image: "/Frame 1.png",
    figma: "https://www.figma.com/proto/uVBVU3Cl8yQFYVcx2jeLeD/curvvtech?node-id=3-5&starting-point-node-id=3%3A5",
    category: "Landing Page"
  },
  {
    title: "Amrutam Web App",
    description: "complete UI/UX design system for a modern web app with micro-interactions and user flows.",
    image: "/medical.png",
    figma: "https://www.figma.com/proto/pR4DDxvSVxX8pqwH1CnqZh/Untitled?node-id=2-1215&t=egkmzrdmBfXOViZ0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    category: "Web Design"
  },
  
  
]

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!ref.current) return

    // Register plugin on client only
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Keep only safe parallax effect for section background
      gsap.to(".projects-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden" ref={ref}>
      {/* Background with parallax effect */}
      <div className="projects-bg absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          id="projects-header"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
              <a href={project.live} key={project.title} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="project-card group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className={`w-full h-48 sm:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105`}
                      style={{ objectPosition: project.title === 'QuickShow' ? 'left' : 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={20} />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
          ))}
        </div>

        <div className="mt-24">
          <div id="figma-header" className="text-center mb-12">
            <h3 className="inline-flex items-center gap-3 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Figma size={24} className="text-white" />
              </div>
              Figma Designs & UI/UX Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              A showcase of my UI/UX design work, user research, and design systems created in Figma. From wireframes to high-fidelity prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {figmaProjects.map((fp, i) => (
              <a href={fp.figma} key={fp.title} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="figma-card group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col h-full backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={fp.image || "/placeholder.jpg"}
                      alt={fp.title}
                      width={500}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                        {fp.category}
                      </span>
                    </div>
                    
                    {/* Figma link indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 backdrop-blur">
                        <Figma size={14} /> View in Figma
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {fp.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
                      {fp.description}
                    </p>
                    
                    {/* Hover effect indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <div className="text-xs text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Open Design →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
