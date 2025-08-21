"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import gsap from "gsap"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "My Work", href: "#projects" },
  { name: "Contact me", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(".nav-logo", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out"
      })

      // Nav items animation
      const navItems = gsap.utils.toArray(".nav-item") as HTMLElement[]
      navItems.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2 + i * 0.1
        })
      })

      // Right side buttons animation
      gsap.from(".nav-buttons", {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      })

    }, navRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="nav-logo text-2xl font-bold text-gray-900 dark:text-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Prince Jangra<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="nav-item text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 relative group font-medium"
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="nav-buttons hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 backdrop-blur-sm"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact →
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-900 dark:text-gray-100"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", display: "block" },
            closed: { opacity: 0, height: 0, display: "none" }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-2 px-4 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div
              className="pt-4 border-t border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
              >
                Contact Me →
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
