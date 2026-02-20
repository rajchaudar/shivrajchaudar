import { useEffect, useState, useMemo } from "react"

function Hero({ showSponsor, setShowSponsor }) {
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
      className="min-h-screen flex items-center pt-6.25 sm:pt-0 bg-white/20 justify-center px-6 relative overflow-hidden "
    >
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-0" />

      {/* Content */}
      <div
  className={`
    relative z-10 text-center max-w-2xl
    transition-all duration-300
    ${showSponsor ? "opacity-40 blur-sm pointer-events-none" : "opacity-100"}
  `}
>

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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1oPoTD-3pPQYawOgMPWy_yl9Wvhd_I9XO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-6 py-3 rounded-full
              bg-blue-600 text-white font-semibold
              hover:bg-blue-700 transition
            "
          >
            Download Resume
          </a>

          {/* Sponsor Me */}
          <button
            onClick={() => setShowSponsor(true)}
            className="
              inline-block px-6 py-3 rounded-full
              bg-white/70 dark:bg-gray-900/70
              text-gray-900 dark:text-white
              font-semibold
              backdrop-blur-md
              border border-white/40 dark:border-white/10
              hover:bg-white hover:scale-[1.03]
              transition-all
            "
          >
            💖 Sponsor Me
          </button>
        </div>
      </div>
      {showSponsor && (
      <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowSponsor(false)}
          />

          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="
                w-full max-w-md
                rounded-3xl
                bg-white/80 dark:bg-gray-900/80
                backdrop-blur-xl
                border border-white/30 dark:border-white/10
                shadow-2xl
                p-6
                animate-fadeIn
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Support My Work
                </h3>
                <button
                  onClick={() => setShowSponsor(false)}
                  className="w-9 h-9 rounded-full bg-gray-200/70 dark:bg-gray-400 dark:text-white "
                >✕
                </button>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                This is a voluntary sponsorship to support my open-source work,
                learning, and personal projects. No physical goods are shipped.
              </p>

              {/* Placeholder buttons */}
              <div className="space-y-3">
                {/* GitHub Sponsors */}
                <a
                  href="https://github.com/sponsors/rajchaudar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full
                    px-4 py-3 rounded-xl
                    bg-blue-400 dark:bg-blue-400
                    text-gray-900 dark:text-white
                    font-medium text-center
                    border border-gray-200 dark:border-gray-700
                    hover:bg-blue-500 dark:hover:bg-blue-500
                    transition
                  "
                >
                GitHub Sponsors
                </a>

                {/* PayU / UPI */}
                <a
                  href="https://u.payu.in/PAYUMN/kIMlnd8P67Vg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full
                    px-4 py-3 rounded-xl
                    bg-green-300 dark:bg-green-300/90
                    text-gray-900 dark:text-white
                    font-medium text-center
                    border border-gray-200 dark:border-gray-700
                    hover:bg-green-400 dark:hover:bg-green-400
                    transition
                  "
                >
                PayU / UPI & Cards
                </a>
              </div>

              <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
                Thank you for even considering.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  </>
    
  )
}

export default Hero