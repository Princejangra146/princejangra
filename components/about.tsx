"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Smartphone, Zap } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "FullStack",
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm passionate about creating digital experiences that make a difference. With a focus on clean code and
            beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mx-auto rounded-2xl bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img
                  src="/main.jpg"
                  alt="Prince Jangra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            I’m a passionate web developer from India who loves solving real-world problems through code. As a fresher, I’ve been actively building projects to strengthen my skills and explore the latest technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing
              knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 transition-all duration-200 transform hover:scale-110 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 cursor-pointer"
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-white dark:text-gray-900" />
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
