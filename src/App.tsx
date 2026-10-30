import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import TickerStrip from './components/TickerStrip'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import CampusLeadership from './components/CampusLeadership'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-secondary-container selection:text-ink-black">
      <Navigation />
      <main className="flex-1 w-full flex flex-col">
        {/* Main Home Page / Hero Section with docked featured works */}
        <Hero />

        {/* About Section placed immediately below Hero (Education, Certifications, Skills) */}
        <About />

        {/* Dynamic Multi-Disciplinary Ticker Strip */}
        <TickerStrip />

        {/* Selected Projects Showcase */}
        <Projects />

        {/* Core Services */}
        <Services />

        {/* Capabilities & Recruiter Dossier Matrix */}
        <Process />

        {/* Campus Leadership & Community Proofs */}
        <CampusLeadership />

        {/* Design & Motion Gallery */}
        <Gallery />

        {/* Testimonials & Endorsements */}
        <Testimonials />

        {/* Contact Section placed at the very last */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
