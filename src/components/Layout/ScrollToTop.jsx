import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FaArrowUp } from "react-icons/fa"

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname, hash } = useLocation()

  // Button visibility
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 🔑 Hash scrolling fix
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 0)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll back to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-blue-600 text-white
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:bg-blue-700
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop