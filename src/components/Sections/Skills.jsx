import SectionSeparator from "./SectionSeparator"

function Skills() {
  const frontend = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
  ]

  const backend = [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "OAuth", icon: "fas fa-key text-indigo-400" },
  ]

  const databases = [
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Firebase", icon: "devicon-firebase-plain colored" },
  ]

  const cloud = [
  {
    name: "AWS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GCP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
]

  return (
    <section
      id="skills"
      className="relative py-32 bg-white/20"
    >
      <SectionSeparator />

      <h2 className="text-5xl font-bold text-center text-black dark:text-white mb-16">
        Skills
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        <SkillBlock title="Frontend" skills={frontend} />
        <SkillBlock title="Backend" skills={backend} />
        <SkillBlock title="Databases" skills={databases} />
        <SkillBlock title="Cloud & Tools" skills={cloud} />

      </div>
    </section>
  )
}

/* ---------- Skill Group Card ---------- */
function SkillBlock({ title, skills }) {
  return (
    <div className="rounded-3xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        {title}
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

/* ---------- Single Skill ---------- */
function SkillItem({ skill }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        p-4 rounded-2xl
        bg-gray-50 dark:bg-slate-800
        border border-gray-200 dark:border-slate-700
        transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        hover:shadow-blue-500/20
      "
    >
      {skill.img ? (
        <img
          src={skill.img}
          alt={skill.name}
          className="h-10 mb-2 object-contain bg-white rounded-md p-1"
        />
      ) : (
        <i className={`${skill.icon} text-[2.4rem] mb-2`} />
      )}

      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {skill.name}
      </p>
    </div>
  )
}

export default Skills