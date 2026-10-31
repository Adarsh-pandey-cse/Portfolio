import { useEffect } from 'react'
import { wallsWindowSpacesProjectData } from '../data/projects/wallsWindowSpaces'
import ProjectNavigation from '../components/projects/ProjectNavigation'
import ProjectOverview from '../components/projects/ProjectOverview'
import ProjectGallery from '../components/projects/ProjectGallery'
import ProjectTechStack from '../components/projects/ProjectTechStack'
import ProjectTimeline from '../components/projects/ProjectTimeline'
import ProjectDetails from '../components/projects/ProjectDetails'
import Footer from '../components/Footer'
import WhatsAppFAB from '../components/WhatsAppFAB'

// Specialized Walls & Window Spaces Luxury Sections
import WallsHero from '../components/projects/walls-window-spaces/WallsHero'
import WallsLogoShowcase from '../components/projects/walls-window-spaces/WallsLogoShowcase'
import WallsVisitingCards from '../components/projects/walls-window-spaces/WallsVisitingCards'
import WallsPamphletSection from '../components/projects/walls-window-spaces/WallsPamphletSection'
import WallsDigitalBrochure from '../components/projects/walls-window-spaces/WallsDigitalBrochure'
import WallsColorTypography from '../components/projects/walls-window-spaces/WallsColorTypography'
import WallsFinalShowcase from '../components/projects/walls-window-spaces/WallsFinalShowcase'

export default function WallsWindowSpacesPage() {
  const data = wallsWindowSpacesProjectData

  useEffect(() => {
    // Scroll to top on page mount
    window.scrollTo(0, 0)

    // Set page title for SEO & agency prestige
    const prevTitle = document.title
    document.title =
      'Walls & Window Spaces — Complete Brand Identity & 8-Page Brochure | Adarsh Pandey'
    return () => {
      document.title = prevTitle
    }
  }, [])

  return (
    <div className="min-h-screen bg-surface text-ink-black flex flex-col selection:bg-[#C5A059] selection:text-black">
      {/* ── TOP STICKY PROJECT NAVIGATION ── */}
      <ProjectNavigation
        title={data.title}
        liveUrl={data.liveUrl}
        inquireUrl={data.inquireUrl}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* ── SECTION 1: CINEMATIC HERO ── */}
        <WallsHero />

        {/* ── SECTION 2: PROJECT OVERVIEW ── */}
        <ProjectOverview
          heading={data.overview.heading}
          subheading={data.overview.subheading}
          cards={data.overview.cards}
        />

        {/* ── SECTION 3: LOGO DESIGN AND BRAND IDENTITY ── */}
        <WallsLogoShowcase />

        {/* ── SECTION 4: BRAND IDENTITY MOCKUPS (EDITORIAL ASYMMETRIC GALLERY) ── */}
        <ProjectGallery
          heading={data.gallery.heading}
          subheading={data.gallery.subheading}
          items={data.gallery.items}
          projectTitle={data.title}
        />

        {/* ── SECTION 5: VISITING CARD DESIGN ── */}
        <WallsVisitingCards />

        {/* ── SECTION 6: BROCHURE AND PAMPHLET DESIGN ── */}
        <WallsPamphletSection />

        {/* ── SECTION 7: INTERACTIVE ANIMATED DIGITAL BROCHURE (SIGNATURE FEATURE) ── */}
        <WallsDigitalBrochure />

        {/* ── SECTION 8: COLOR PALETTE AND TYPOGRAPHY ── */}
        <WallsColorTypography />

        {/* ── SUPPORTING: DESIGN TOOLS & METHODOLOGY ── */}
        <ProjectTechStack
          heading={data.techStack.heading}
          subheading={data.techStack.subheading}
          technologies={data.techStack.technologies}
        />

        <ProjectTimeline
          heading={data.process.heading}
          subheading={data.process.subheading}
          stages={data.process.stages}
        />

        <ProjectDetails details={data.details} />

        {/* ── SECTION 9: FINAL BRAND PRESENTATION ── */}
        <WallsFinalShowcase />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
