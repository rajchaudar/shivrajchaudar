import { useEffect, useState } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"

function Navbar({ showSponsor }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  /* ================= SCROLL PROGRESS ================= */
  useEffect(() => {
    let rafId = null

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
      rafId = null
    }

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateProgress)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  /* ================= ACTIVE SECTION ================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ================= DARK MODE ================= */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const navLinks = [
    ["#education", "Education"],
    ["#projects", "Projects"],
    ["#skills", "Skills"],
    ["#tools", "Tools"],
    ["#certifications", "Certifications"],
    ["#contact", "Contact"],
  ]

  return (
    <>
      {/* ================= PROGRESS BAR ================= */}
      <div
        className={`
          fixed top-0 left-0 w-full h-1 z-[999] pointer-events-none
          transition-opacity duration-300
          ${showSponsor ? "opacity-0" : "opacity-100"}
        `}
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-300 dark:to-purple-400"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-2 left-0 right-0 z-50
          transition-all duration-300
          ${showSponsor ? "opacity-40 blur-sm pointer-events-none" : "opacity-100"}
        `}
      >

        {/* Top strip */}
        <div
          aria-hidden
          className="
            absolute -top-2 left-0 right-0 h-2 
            bg-[#928aff]/70 dark:bg-[#6c63ea]/70
            pointer-events-none
          "
        />

        {/* Main bar */}
        <div className="
          relative mx-auto max-w-7xl h-14 px-6
          flex items-center justify-between
          rounded-2xl
          backdrop-blur-xl
          bg-white/50 dark:bg-gray-900/60
          border border-white/20 dark:border-white/10
        ">
          {/* Logo */}
          <a
            href="#home"
            className="
              relative font-bold text-xl
              text-black dark:text-white
              hover:text-blue-600 transition
              after:absolute after:left-0 after:bottom-0
              after:h-[2px] after:w-full after:bg-blue-600
              after:origin-left after:scale-x-0
              after:transition-transform after:duration-300
              hover:after:scale-x-100
            "
          >
            Shivraj Chaudar
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map(([href, label]) => {
              const id = href.replace("#", "")
              const active = activeSection === id

              return (
                <li key={label}>
                  <a
                    href={href}
                    className={`
                      relative px-1 pb-1 font-medium transition
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-600
                      after:absolute after:left-0 after:bottom-0
                      after:h-[2px] after:w-full after:bg-blue-600
                      after:origin-left after:scale-x-0
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                      ${active ? "text-blue-600 after:scale-x-100" : ""}
                    `}
                  >
                    {label}
                  </a>
                </li>
              )
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100/50 hover:bg-gray-300/50 dark:bg-white/70 dark:hover:bg-gray-200/60"
            >
              {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black dark:text-white"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && !showSponsor && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="
            fixed top-0 left-0 right-0 z-50
            bg-white/80 dark:bg-gray-900/80
            backdrop-blur-xl
            border-b border-white/20 dark:border-white/10
            rounded-b-3xl shadow-2xl
          ">
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-xl font-semibold text-black dark:text-white">
                Shivraj Chaudar
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-200/70 dark:bg-gray-800/70"
              >
                ✕
              </button>
            </div>

            <div className="px-6 pb-6 space-y-4">
              {navLinks.map(([href, label]) => {
                const id = href.replace("#", "")
                const active = activeSection === id

                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-medium ${
                      active
                        ? "text-blue-600"
                        : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </a>
                )
              })}
            </div>
            <div className="border-t border-gray-200/50 dark:border-gray-700/50 flex justify-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-full bg-gray-500/10 hover:bg-gray-500/20 dark:bg-white/30 dark:hover:bg-white/20"
                >
                  {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
                </button>
              </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar