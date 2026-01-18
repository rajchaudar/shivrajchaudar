import SectionSeparator from "./SectionSeparator"
import { SiRailway } from "react-icons/si"

function Tools() {
  const toolGroups = [
    {
      title: "Editors & IDEs",
      tools: [
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "MongoDB Compass", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL Workbench", icon: "devicon-mysql-plain colored" },
      ],
    },
    {
      title: "Deployment & Cloud",
      tools: [
        {
          name: "AWS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        { name: "Vercel", textIcon: "▲" },
        { name: "Railway", component: SiRailway },
        { name: "Docker", icon: "devicon-docker-plain colored" },
      ],
    },
    {
      title: "Version Control",
      tools: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
      ],
    },
    {
      title: "API & Testing",
      tools: [
        {
          name: "Postman",
          img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Chrome DevTools",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        },
      ],
    },
    
  ]

  return (
    <section
      id="tools"
      className="relative py-32 bg-white/20"
    >
      <SectionSeparator />

      <h2 className="text-5xl font-bold text-center text-black dark:text-white mb-20">
        Development Tools
      </h2>

      {/* SIDE-BY-SIDE GROUPS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {toolGroups.map((group) => (
          <ToolGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  )
}

/* ---------- TOOL GROUP ---------- */
function ToolGroup({ group }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {group.title}
      </h3>

      {/* two pills per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {group.tools.map((tool) => (
          <ToolPill key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  )
}

/* ---------- TOOL PILL ---------- */
function ToolPill({ tool }) {
  const IconComponent = tool.component

  return (
    <div
      className="
        flex items-center gap-3
        px-4 py-2
        h-13
        rounded-full
        bg-gray-100 dark:bg-slate-800
        border border-gray-200 dark:border-slate-700
        text-gray-800 dark:text-gray-200
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-blue-500/20
        hover:border-blue-500/40
      "
    >
      {/* Devicon / font icon */}
      {tool.icon && <i className={`${tool.icon} text-lg`} />}

      {/* Image icon */}
      {tool.img && (
        <img
          src={tool.img}
          alt={tool.name}
          className="h-5 w-5 object-contain bg-white rounded-sm p-[2px]"
        />
      )}

      {/* React icon component (Railway) */}
      {IconComponent && (
        <IconComponent className="text-lg text-purple-600" />
      )}

      {/* Text symbol (Vercel ▲) */}
      {tool.textIcon && (
        <span className="font-bold text-base">{tool.textIcon}</span>
      )}

      <span className="font-medium text-sm whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  )
}

export default Tools