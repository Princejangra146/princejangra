"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" ref={ref}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
            (project.title === "QuickShow" || project.title === "QuickAI" || project.title === "Geo-rilla") ? (
              <a href={project.live} key={project.title} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
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
            ) : null
          ))}
        </div>
      </div>
    </section>
  )
}
