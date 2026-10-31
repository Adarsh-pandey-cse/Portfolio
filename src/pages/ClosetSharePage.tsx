import { useEffect } from 'react'
import { closetShareProjectData } from '../data/projects/closetShare'
import ProjectNavigation from '../components/projects/ProjectNavigation'
import ProjectHero from '../components/projects/ProjectHero'
import ProjectOverview from '../components/projects/ProjectOverview'
import ProjectFeatureGrid from '../components/projects/ProjectFeatureGrid'
import ProjectGallery from '../components/projects/ProjectGallery'
import ProjectTechStack from '../components/projects/ProjectTechStack'
import ProjectTimeline from '../components/projects/ProjectTimeline'
import ProjectDetails from '../components/projects/ProjectDetails'
import ProjectCTA from '../components/projects/ProjectCTA'
import Footer from '../components/Footer'
import WhatsAppFAB from '../components/WhatsAppFAB'

export default function ClosetSharePage() {
  useEffect(() => {
    // Scroll to top upon mounting page
    window.scrollTo(0, 0)

    // Set page title for SEO
    const prevTitle = document.title
    document.title = 'Closet Share — P2P Fashion Rental Marketplace Case Study | Adarsh Pandey'
    return () => {
      document.title = prevTitle
    }
  }, [])

  const data = closetShareProjectData

  return (
    <div className="min-h-screen bg-surface text-ink-black flex flex-col selection:bg-secondary-container selection:text-ink-black">
      {/* ── SECTION A: PROJECT NAVIGATION ── */}
      <ProjectNavigation title={data.title} liveUrl={data.liveUrl} />

      <main className="flex-1 w-full flex flex-col">
        {/* ── SECTION B: HERO ── */}
        <ProjectHero project={data} />

        {/* ── SECTION C: PROJECT OVERVIEW ── */}
        <ProjectOverview
          heading={data.overview.heading}
          subheading={data.overview.subheading}
          cards={data.overview.cards}
        />

        {/* ── SECTION D: KEY FEATURES ── */}
        <ProjectFeatureGrid
          heading={data.features.heading}
          subheading={data.features.subheading}
          features={data.features.items}
        />

        {/* ── SECTION E: SCREENSHOT GALLERY ── */}
        <ProjectGallery
          heading={data.gallery.heading}
          subheading={data.gallery.subheading}
          items={data.gallery.items}
          projectTitle={data.title}
        />

        {/* ── SECTION F: TECHNOLOGY STACK ── */}
        <ProjectTechStack
          heading={data.techStack.heading}
          subheading={data.techStack.subheading}
          technologies={data.techStack.technologies}
        />

        {/* ── SECTION G: DEVELOPMENT PROCESS ── */}
        <ProjectTimeline
          heading={data.process.heading}
          subheading={data.process.subheading}
          stages={data.process.stages}
        />

        {/* ── SECTION H: PROJECT DETAILS ── */}
        <ProjectDetails details={data.details} />

        {/* ── SECTION I: FINAL CALL TO ACTION ── */}
        <ProjectCTA
          heading={data.cta.heading}
          description={data.cta.description}
          liveUrl={data.liveUrl}
          primaryText={data.cta.primaryButtonText}
          secondaryText={data.cta.secondaryButtonText}
        />
      </main>

      {/* Reusable Footer & Contact Widget */}
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
