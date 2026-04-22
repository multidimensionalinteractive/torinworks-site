import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'

const GA_ID = 'GA_MEASUREMENT_ID' // ← Replace with your GA4 ID (e.g., G-XXXXXXXXXX)

function usePageTracking() {
  const location = useLocation()
  useEffect(() => {
    if (typeof window.gtag === 'function' && GA_ID.startsWith('G-')) {
      window.gtag('config', GA_ID, { page_path: location.pathname + location.search })
    }
  }, [location])
}

export default function App() {
  usePageTracking()
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
