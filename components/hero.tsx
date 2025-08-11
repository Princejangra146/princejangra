"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg">
              <Link href="/officaldashboard">
                <Image
                  src="/main.jpg"
                  alt="Prince Jangra"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.h2
            className="text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi! I'm Prince Jangra 👋
          </motion.h2>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Frontend developer
            <br />
            based in Delhi.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
           I'm a Frontend developer from India, with a strong interest in building dynamic and user-focused web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              contact me <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-transparent"
            >
             <a href="/PJ%20RESUME%20(2).pdf" target="_blank" rel="noopener noreferrer">
  my resume <Download size={20} className="ml-2" />
</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Red dot indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="fixed bottom-8 left-4 w-3 h-3 bg-red-500 rounded-full"
        />
      </div>
    </section>
  )
}
