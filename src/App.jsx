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

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌈 GLOBAL GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10
        bg-gradient-to-b
        from-[#92b0f6]
        via-[#d98aeb]
        to-[#ff9db4]
        from-[#164fd5]  
        via-[#8845ae]  
        to-[#751a64] 

        dark:from-[#122fea]
        dark:via-[#a332d6]
        dark:to-[#b82999]
      " />

      {/* Optional soft noise / blur */}
      <div className="fixed inset-0 -z-10 backdrop-blur-[120px]" />

      {/* CONTENT */}
      <Navbar />
      <Hero />
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