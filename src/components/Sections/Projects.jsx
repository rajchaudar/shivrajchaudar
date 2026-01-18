import { useState } from "react"
import SectionSeparator from "./SectionSeparator"
import { FaGithub } from "react-icons/fa"

function Projects() {
  const [activeVideo, setActiveVideo] = useState(null)

  const projects = [
    {
      id: 1,
      title: "MedSupply",
      description:
        "A medical product distribution platform with Razorpay payments, Google OAuth, admin dashboard, and real-time inventory management.",
      live: "https://rajchaudar.github.io/Meds/",
      github: "https://github.com/rajchaudar/Meds",
    },
    {
      id: 2,
      title: "HR Dashboard",
      description:
        "Employee management system with RBAC, authentication, MongoDB, and admin dashboard.",
      live: "https://nodejs-hr-dashboard.onrender.com",
      github: "https://github.com/rajchaudar/NODEJS_HR_Dashboard",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Tailwind CSS, JavaScript, EmailJS, Firebase tracking, and dark mode.",
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "GitHub Projects",
      description:
        "A collection of 20+ repositories including web apps, Python projects, QR generators, downloaders, and SQL examples.",
      github: "https://github.com/rajchaudar",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-24 bg-white/20"
    >
      <SectionSeparator />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-black dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg p-8 relative"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {project.id !== 4 && (
                  <>
                    <button
                      onClick={() => setActiveVideo(project.id)}
                      className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-500 transition"
                    >
                      ▶ Watch Demo
                    </button>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-500 transition"
                    >
                      🌐 Live Site
                    </a>
                  </>
                )}

                <a href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex items-center gap-2
                            text-sm px-4 py-2 rounded-md transition
                            bg-gray-800 text-white hover:bg-gray-700
                            dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
                        "
                        >
                        <FaGithub />
                        Source Code
                    </a>
              </div>

              {/* Video Modal (only for first 3 cards) */}
              {activeVideo === project.id && project.id !== 4 && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl z-20">
                  <div className="bg-white dark:bg-gray-900 w-full h-full rounded-2xl relative">
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-3 right-3 bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded"
                    >
                      ✕ Close
                    </button>

                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="CommingSoon.html"
                      title={`${project.title} Demo`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects