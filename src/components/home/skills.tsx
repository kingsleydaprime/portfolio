import skills from '@/data/skills.json'
import {
  SiPython, SiTypescript, SiJavascript, SiGo, SiC, SiCplusplus,
  SiGnubash, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss,
  SiNestjs, SiNodedotjs, SiExpress, SiDjango, SiGraphql,
  SiPostgresql, SiMysql, SiRedis, SiPrisma,
  SiDocker, SiLinux, SiGit, SiGithubactions, SiNginx,
  SiOpencv, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiArduino,
  SiPostman, SiFigma, SiVscodium, SiNotion, 
} from 'react-icons/si'


import { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  // Languages
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Go: SiGo,
  C: SiC,
  'C++': SiCplusplus,
//   Java: SiJava,
  Bash: SiGnubash,
  // Frontend
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  // Backend
  NestJS: SiNestjs,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Django: SiDjango,
  GraphQL: SiGraphql,
  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Prisma: SiPrisma,
  // DevOps & Cloud
  Docker: SiDocker,
//   AWS: SiAmazon,
  Linux: SiLinux,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  Nginx: SiNginx,
  // AI & ML
  OpenCV: SiOpencv,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  'Scikit-learn': SiScikitlearn,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  // Robotics
  Arduino: SiArduino,
  // Tools
  Postman: SiPostman,
  Figma: SiFigma,
  'VS Code': SiVscodium,
  Notion: SiNotion,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
            Skills & Tools
          </span>
          <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
            What I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">

              {/* Category Label */}
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold border-b border-gray-200 pb-2">
                {group.category}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill]
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                    >
                      {Icon && <Icon size={14} />}
                      {skill}
                    </span>
                  )
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}