"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Panchkarma", href: "#panchkarma" },
  { label: "Doctors", href: "#doctors" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-ayurveda-brown text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Mon - Sun: 10:00 AM - 2:00 PM | 4:00 PM - 9:00 PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Amayra Palace, Ganjpara, Durg
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+918962414401" className="flex items-center gap-2 hover:text-ayurveda-gold transition-colors">
              <Phone className="w-4 h-4" />
              +91 89624-14401
            </a>
            <a href="tel:+918770225974" className="hover:text-ayurveda-gold transition-colors">
              +91 87702-25974
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Q0NNHl801Phha0FVU81HCKxRUwT7zW.png"
                alt="Shreenidhi Ayurved Logo"
                className="h-12 lg:h-16 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="font-serif text-primary text-lg lg:text-xl font-bold leading-tight">
                  Shreenidhi Ayurved
                </h1>
                <p className="text-muted-foreground text-xs">Consulting & Panchkarma Clinic</p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+918962414401"
                className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary rounded-xl transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+918962414401"
                  className="mt-3 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-center font-medium"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
