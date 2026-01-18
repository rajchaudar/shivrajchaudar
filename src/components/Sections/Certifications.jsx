import { useEffect, useRef } from "react"
import SectionSeparator from "./SectionSeparator"
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa"

function Certifications() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Issued 2025 · No Expiration",
      description:
        "Validates foundational knowledge of cloud services, Azure concepts, services, solutions, and management tools.",
      image:
        "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/twitter_thumb_201604_image.png",
      link:
        "https://www.credly.com/earner/earned/badge/7a8fcb67-8c97-42c9-b308-8b7d0065515a",
    },
    {
      title: "Elite Certificate in Demystifying Networking",
      issuer: "NPTEL",
      date: "Issued 2024 · No Expiration",
      description:
        "Strong understanding of networking fundamentals, protocols, architecture, and troubleshooting.",
      image: "https://salemcollege.org/assets/img/logo/nptel.jpg",
      link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS69S44480298502653980",
    },
  ]

  return (
    <section
      id="certifications"
      className="relative py-32 bg-white/20"
    >
      <SectionSeparator />

      <h2 className="text-5xl font-bold text-center text-black dark:text-white mb-20">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              opacity-0 translate-y-8 transition-all duration-700
              rounded-3xl overflow-hidden
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              shadow-lg hover:shadow-blue-500/20
              hover:-translate-y-2
            "
          >
            {/* Header */}
            <div className="relative p-6 flex justify-center bg-gradient-to-r from-blue-500/10 to-blue-600/20">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-28 object-contain drop-shadow"
              />

              {/* Verified Badge */}
              <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">
                <FaCheckCircle /> Verified
              </span>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {cert.date}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-lg
                  bg-blue-600/10 dark:bg-blue-500/20
                  text-blue-600 dark:text-blue-400
                  text-sm font-medium
                  hover:bg-blue-600/20 transition
                "
              >
                <FaExternalLinkAlt />
                Verify Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications