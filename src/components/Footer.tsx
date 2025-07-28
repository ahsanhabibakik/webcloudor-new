"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Sparkles, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
  minimal?: boolean
}

export default function Footer({ className, minimal = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (minimal) {
    return (
      <footer className={cn("border-t bg-background", className)}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Webcloudor. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-webcloudor-blue transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-webcloudor-blue transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-webcloudor-blue transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn("relative bg-gradient-to-br from-gray-900 via-black to-gray-900", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-webcloudor-blue/10 to-webcloudor-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-webcloudor-yellow/10 to-webcloudor-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple bg-clip-text text-transparent">
                  Webcloudor
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transform your digital presence with cutting-edge web development and cloud solutions. 
                We create exceptional digital experiences that drive business growth.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-webcloudor-blue/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-webcloudor-blue/20 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-webcloudor-blue/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-webcloudor-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-webcloudor-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-webcloudor-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-webcloudor-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-webcloudor-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-webcloudor-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-webcloudor-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-webcloudor-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-webcloudor-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-webcloudor-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Cloud Solutions</li>
              <li className="text-gray-400 text-sm">UI/UX Design</li>
              <li className="text-gray-400 text-sm">E-commerce Solutions</li>
              <li className="text-gray-400 text-sm">Digital Transformation</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-webcloudor-blue/20 transition-all duration-300">
                  <Mail className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  hello@webcloudor.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-webcloudor-blue/20 transition-all duration-300">
                  <Phone className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-webcloudor-blue/20 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Webcloudor. All rights reserved. Crafted with ❤️ for the web.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href={"/privacy" as any}
                className="text-sm text-gray-400 hover:text-webcloudor-blue transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms" as any}
                className="text-sm text-gray-400 hover:text-webcloudor-blue transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-webcloudor-blue/25 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}