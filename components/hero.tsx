"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!containerRef.current) return

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Parallax effect on scroll (safe)
      gsap.to(".hero-image", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      })

      // Text parallax (safe)
      gsap.to(".hero-text-content", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400",
          scrub: 1,
        },
      })

      // Floating animation for the red dot (safe)
      gsap.to(".floating-dot", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 sm:pt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-tr from-pink-400/20 to-orange-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Mobile-first: Image shows first on small screens */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Debug: Simple visible container */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-3 shadow-2xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/main.jpg"
                  alt="Prince Jangra"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-purple-600/50 blur-2xl sm:blur-3xl -z-10 animate-pulse"></div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-sm animate-bounce"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-5 sm:-right-10 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>

          {/* Text content - shows second on mobile, first on desktop */}
          <div ref={textRef} className="hero-text-content order-2 lg:order-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              {/* Greeting */}
              <motion.h2
                className="hero-greeting text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi! I'm Prince Jangra 👋
              </motion.h2>

              {/* Main Title */}
              <motion.h1
                className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Frontend Developer
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & UI/UX Designer
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-700 dark:text-gray-300">
                  based in Delhi.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="hero-description text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
               I'm a passionate Frontend Developer and UI/UX Designer from India, specializing in creating beautiful, functional, and user-centered digital experiences. I bridge the gap between design and development.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md w-full sm:w-auto"
                >
                  contact me <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 bg-transparent hover:border-blue-500 dark:hover:border-blue-400 w-full sm:w-auto"
                >
                 <a href="/PJ%20RESUME%20(2).pdf" target="_blank" rel="noopener noreferrer">
              my resume <Download size={18} className="ml-2" />
            </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating dot indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="floating-dot fixed bottom-8 left-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
      />
    </section>
  )
}
