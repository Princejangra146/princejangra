"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (!ref.current) return

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      // Keep only safe floating elements animation
      gsap.to(".floating-contact-1", {
        y: -20,
        x: 15,
        rotation: 8,
        duration: 8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(".floating-contact-2", {
        y: 25,
        x: -20,
        rotation: -12,
        duration: 10,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(".floating-contact-3", {
        y: -15,
        x: 25,
        rotation: 15,
        duration: 9,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 transition-colors duration-300 relative overflow-hidden" ref={ref}>
      {/* Floating background elements */}
      <div className="floating-contact-1 absolute top-20 left-20 w-28 h-28 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/20 dark:to-pink-700/20 rounded-full blur-2xl"></div>
      <div className="floating-contact-2 absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 dark:from-blue-700/20 dark:to-cyan-700/20 rounded-full blur-2xl"></div>
      <div className="floating-contact-3 absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-green-300/20 to-yellow-300/20 dark:from-green-700/20 dark:to-yellow-700/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="contact-header text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="contact-left space-y-8"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. Whether you need a website built, a design created, or both - let's bring your ideas to life!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "princejangra146@gmail.com" },
                { icon: Phone, label: "Phone", value: "9111135452" },
                { icon: MapPin, label: "Location", value: "Delhi, IND" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="contact-item flex items-center space-x-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-input">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 dark:focus:border-purple-400 h-12 rounded-xl backdrop-blur-sm"
                />
              </div>
              <div className="form-input">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 dark:focus:border-purple-400 h-12 rounded-xl backdrop-blur-sm"
                />
              </div>
              <div className="form-input">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 dark:focus:border-purple-400 resize-none rounded-xl backdrop-blur-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Prince Jangra. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
