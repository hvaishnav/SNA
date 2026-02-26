import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ServicesSection from "./components/services-section"
import PanchkarmaSection from "./components/panchkarma-section"
import DoctorsSection from "./components/doctors-section"
import ProductsSection from "./components/products-section"
import GallerySection from "./components/gallery-section"
import TestimonialsSection from "./components/testimonials-section"
import FAQSection from "./components/faq-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import WhatsAppButton from "./components/whatsapp-button"
import AmbientAudio from "./components/ambient-audio"

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PanchkarmaSection />
      <DoctorsSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <AmbientAudio />
    </main>
  )
}
