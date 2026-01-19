import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
import './App.css'
import Education from './components/Sections/Education'
import Tools from './components/Sections/Tools'
import Certifications from './components/Sections/Certifications'
import ScrollToTop from './components/Layout/ScrollToTop'
import { useState } from 'react'

function App() {
  const [showSponsor, setShowSponsor] = useState(false)
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌈 GLOBAL GRADIENT BACKGROUND */}
    <div
      className="
        fixed inset-0 -z-10
        bg-gradient-to-b

        from-[#776dff]
        via-[#f98aff]
        via-[#f97ab5]
        to-[#f7e4e8]

        dark:from-[#0b21e6]
        dark:via-[#983ed3]
        dark:via-[#8a33b0]
        dark:to-[#cd258f]
      "
    />

      {/* Optional soft noise / blur */}
      <div className="fixed inset-0 -z-10 backdrop-blur-[120px]" />

      {/* CONTENT */}
      <Navbar showSponsor={showSponsor} />
      <Hero showSponsor={showSponsor} setShowSponsor={setShowSponsor} />
      <Education />
      <Projects />
      <Skills />
      <Tools />
      <Certifications />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App