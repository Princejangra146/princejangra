"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 94 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 95 },
      { name: "User Research", level: 88 },
      { name: "Wireframing", level: 92 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    title: "Design Tools & Methods",
    skills: [
      { name: "Adobe XD", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "User Testing", level: 82 },
      { name: "Information Architecture", level: 78 },
      { name: "Accessibility", level: 85 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!ref.current) return

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Keep only safe floating elements animation
      gsap.to(".floating-element-1", {
        y: -15,
        x: 10,
        rotation: 5,
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(".floating-element-2", {
        y: 20,
        x: -15,
        rotation: -8,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(".floating-element-3", {
        y: -10,
        x: 20,
        rotation: 12,
        duration: 7,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <div className="floating-element-1 absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 dark:from-blue-700/20 dark:to-cyan-700/20 rounded-full blur-2xl"></div>
      <div className="floating-element-2 absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/20 dark:to-pink-700/20 rounded-full blur-2xl"></div>
      <div className="floating-element-3 absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-green-300/20 to-blue-300/20 dark:from-green-700/20 dark:to-blue-700/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="skills-header text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical and design skills, combining frontend development expertise with UI/UX design capabilities to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="category-card bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl group"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="progress-bar w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden" data-level={skill.level}>
                      <div className="progress-fill h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
