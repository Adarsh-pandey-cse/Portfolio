import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AttendXPage from './pages/AttendXPage'
import ClosetSharePage from './pages/ClosetSharePage'
import HKOswalPage from './pages/HKOswalPage'
import WeddingInvitationPage from './pages/WeddingInvitationPage'
import EventInvitationPage from './pages/EventInvitationPage'
import WallsWindowSpacesPage from './pages/WallsWindowSpacesPage'

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout to allow target element to mount if coming from another route
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 70)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/attendx" element={<AttendXPage />} />
        <Route path="/projects/closet-share" element={<ClosetSharePage />} />
        <Route path="/projects/hk-oswal" element={<HKOswalPage />} />
        <Route path="/projects/wedding-invitation" element={<WeddingInvitationPage />} />
        <Route path="/projects/event-invitation" element={<EventInvitationPage />} />
        <Route path="/projects/walls-window-spaces" element={<WallsWindowSpacesPage />} />
        <Route path="/projects/walls window spaces" element={<WallsWindowSpacesPage />} />
        <Route path="/projects/walls%20window%20spaces" element={<WallsWindowSpacesPage />} />
        <Route path="/projects/walls-and-window-spaces" element={<WallsWindowSpacesPage />} />
        {/* Fallback back to HomePage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
