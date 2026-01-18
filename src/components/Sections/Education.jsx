import { useEffect, useRef } from "react"
import { FaRegCalendarAlt } from "react-icons/fa"
import SectionSeparator from "./SectionSeparator"

function Education() {
  const cardsRef = useRef([])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6")
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((card) => card && observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      title: "Bachelor of Engineering in Computer Science",
      institute: "Sinhgad Institute of Technology and Science, Narhe",
      year: "2022 – 2026",
      score: "Current CGPA: 8.06",
      icon: "🎓",
    },
    {
      title: "Higher Secondary Education (HSC)",
      institute: "Ajitdada English Medium School, Katphal",
      year: "2021 – 2022",
      score: "Scored: 82.33%",
      icon: "🏫",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institute:
        "Shri Haraneshwar Secondary and Higher Secondary Vidyalaya, Kalas",
      year: "2019 – 2020",
      score: "Scored: 93%",
      icon: "📘",
    },
  ]

  return (
    <section
      id="education"
      className="relative py-24 bg-white/20"
    ><SectionSeparator />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-black dark:text-white">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/10 via-blue-500/50 to-blue-500/10" />

          <div className="space-y-20">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } opacity-0 translate-y-6 transition-all duration-700`}
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.2)] z-10" />

                  {/* Card */}
                  <div className="w-full md:w-[45%] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg hover:-translate-y-1 transition p-6 flex gap-4">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl shrink-0">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <h4 className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.institute}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                            <FaRegCalendarAlt className="text-gray-800 dark:text-white" />
                            2022 – 2026
                      </p>
                      <p className="font-medium text-gray-800 dark:text-blue-400">
                        {item.score}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Education