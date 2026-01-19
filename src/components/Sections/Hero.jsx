import { useEffect, useState, useMemo } from "react"

function Hero() {
  /* -------------------- PARTICLES -------------------- */
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#0171e3" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#0171e3" },
          },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#0171e3",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      })
    }
  }, [])

  /* -------------------- TYPING EFFECT -------------------- */
  const textArray = useMemo(() => [
    "Full Stack Developer",
    "Cloud Enthusiast",
    "JavaScript Developer",
    "Node.js Developer",
  ], [])

  const typingDelay = 80
  const erasingDelay = 50
  const newTextDelay = 2000

  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = textArray[textIndex]
    let timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingDelay)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, erasingDelay)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, newTextDelay)
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % textArray.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, textArray])

  /* -------------------- UI -------------------- */
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center bg-white/20 justify-center px-6 relative overflow-hidden"
    >
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div
          className="
            relative
            rounded-full
            p-[5px]
            bg-black/90
            animate-float
          "
        >
         {/* Glow layer */}
        <div
          className="
            absolute inset-[-15px] rounded-full
            bg-gradient-to-br from-white via-white to-white
            blur-3xl
            opacity-90
            animate-glowPulse
          "
        />

          {/* Inner white ring */}
          <div className="relative p-[2px] rounded-full bg-white">
            <img
              src="https://res.cloudinary.com/dc4dywdvb/image/upload/v1746352284/wfxazivsps8uwss2a7ka.webp"
              alt="Shivraj Chaudar – Full Stack Developer"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-black dark:text-white">
          Hi, I’m Shivraj
        </h1>

        {/* Typing Effect */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-950 mb-4 h-7">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Intro */}
        <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-8">
          Full Stack Developer with a passion for creating responsive web
          applications and cloud solutions. Currently pursuing Computer
          Engineering while building projects that combine elegant design
          with efficient functionality. Focused on JavaScript ecosystems,
          cloud technologies, and seamless user experiences.
        </p>

        {/* CTA */}
        <a
          href="https://shivrajassets.s3.eu-north-1.amazonaws.com/SHIVRAJ-CHAUDAR-B.E.-ComputerScience%26Engineering.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  </>
    
  )
}

export default Hero