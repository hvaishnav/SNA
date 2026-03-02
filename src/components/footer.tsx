"use client"

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Panchkarma", href: "#panchkarma" },
  { label: "Doctors", href: "#doctors" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-ayurveda-brown text-primary-foreground">
      {/* Top banner */}
      <div className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl font-bold text-primary-foreground">Ready to begin your healing journey?</p>
            <p className="text-primary-foreground/80 text-sm">Call us today or visit our clinic</p>
          </div>
          <a
            href="tel:+918962414401"
            className="px-8 py-3 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Q0NNHl801Phha0FVU81HCKxRUwT7zW.png"
                alt="Shreenidhi Ayurved Logo"
                className="h-10 w-auto rounded-lg bg-primary-foreground/10 p-1"
              />
              <div>
                <h3 className="font-serif font-bold text-lg text-primary-foreground">Shreenidhi Ayurved</h3>
                <p className="text-primary-foreground/70 text-xs">Consulting & Panchkarma Clinic</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Authentic Ayurvedic healing rooted in ancient wisdom. We treat the root cause, not just the symptoms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-ayurveda-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapies */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Our Therapies</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Shirodhara</li>
              <li>Abhyanga Massage</li>
              <li>Netra Tarpan</li>
              <li>Nasya Therapy</li>
              <li>Kati Basti</li>
              <li>Virechana</li>
              <li>Suvarnaprashan</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-ayurveda-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Amayra Palace, Ganjpara, Durg, Chhattisgarh 491001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-ayurveda-gold shrink-0" />
                <span className="text-primary-foreground/70">+91 89624-14401 | +91 87702-25974</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-ayurveda-gold shrink-0" />
                <span className="text-primary-foreground/70">shreenidhiayurved9@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shreenidhi Ayurved. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  )
}
