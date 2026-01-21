import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contacts from './components/Sections/Contacts'
import Footer from './components/Layout/Footer'
import Education from './components/Sections/Education'
import Tools from './components/Sections/Tools'
import Certifications from './components/Sections/Certifications'
import ScrollToTop from './components/Layout/ScrollToTop'
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import RefundPolicy from "./pages/RefundPolicy"
import CancellationPolicy from "./pages/CancellationPolicy"
import Disclaimer from "./pages/Disclaimer"
import Contact from "./pages/Contact"
import './App.css'
import { BsRouter } from 'react-icons/bs'

function App() {
  const [showSponsor, setShowSponsor] = useState(false)
  return (
  <Router>
    <div className="relative min-h-screen overflow-hidden">
    <div
      className="
        fixed inset-0 -z-10 bg-gradient-to-b from-[#776dff] via-[#f98aff] via-[#f97ab5] to-[#f7e4e8]
       dark:from-[#0b21e6] dark:via-[#983ed3] dark:via-[#8a33b0] dark:to-[#cd258f]"/>

      <div className="fixed inset-0 -z-10 backdrop-blur-[120px]" />

      <ScrollToTop />
      <Navbar showSponsor={showSponsor} />

      <Routes>
          <Route path="/" element={
            <>
              <Hero setShowSponsor={setShowSponsor} />
              <Hero showSponsor={showSponsor} setShowSponsor={setShowSponsor} />
              <Education />
              <Projects />
              <Skills />
              <Tools />
              <Certifications />
              <Contacts />
            </>  
          }/>   
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App