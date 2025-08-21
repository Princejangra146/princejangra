"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Code, Palette, Smartphone, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const features = [
  {
    icon: Code,
    title: "Frontend",
    description: "Building modern web applications with React, Next.js, and TypeScript",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces and experiences",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Developing mobile-first and responsive web applications",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed and user experience",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!ref.current) return

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Keep only safe floating background elements
      gsap.to(".floating-bg-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(".floating-bg-2", {
        y: 15,
        x: -15,
        rotation: -8,
        duration: 10,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <div className="floating-bg-1 absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
      <div className="floating-bg-2 absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 dark:from-pink-800/20 dark:to-orange-800/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="about-header text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm passionate about creating digital experiences that make a difference. With a focus on clean code and
            beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          <motion.div
            className="about-image"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-700 dark:to-purple-700 overflow-hidden shadow-2xl">
                <img
                  src="/main.jpg"
                  alt="Prince Jangra"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text space-y-4 sm:space-y-6"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            I'm a passionate Frontend Developer and UI/UX Designer from India who loves solving real-world problems through both code and design. I specialize in creating user-centered digital experiences that are not only beautiful but also functional and accessible.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              My approach combines technical expertise with design thinking - I start with user research and wireframes, then bring designs to life with clean, efficient code. When I'm not coding or designing, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer and design community.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Design", "User Research", "Prototyping"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="skill-tag px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs sm:text-sm font-medium text-white border border-transparent transition-all duration-200 transform hover:scale-110 hover:shadow-lg cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl group"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
