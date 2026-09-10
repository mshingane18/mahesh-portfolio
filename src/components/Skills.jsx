const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern, scalable and maintainable web applications.",
    skills: [
      "React 18",
      "JavaScript",
      "JavaScript ES6+",
      "React Hooks",
      "React Router v6",
      "HTML5",
      "CSS3",
      "Styled Components",
    ],
  },
  {
    title: "Architecture",
    description:
      "Designing modular applications for enterprise-scale development.",
    skills: [
      "Component-Based Architecture",
      "Micro Frontends",
      "Nx Monorepo",
      "Webpack 5",
      "Module Federation",
      "Code Splitting",
      "Lazy Loading",
    ],
  },
  {
    title: "State Management",
    description: "Managing server, client and application state effectively.",
    skills: ["Redux", "TanStack React Query", "Jotai", "React Context API"],
  },
  {
    title: "API & Integration",
    description:
      "Connecting frontend applications with backend services and platforms.",
    skills: [
      "REST APIs",
      "Axios",
      "OpenAPI",
      "JSON",
      "Asynchronous Programming",
      "GraphQL",
      "Contentful CMS",
    ],
  },
  {
    title: "Testing",
    description: "Writing reliable and maintainable automated tests.",
    skills: [
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Karma",
      "Jasmine",
      "Test-Driven Development",
    ],
  },
  {
    title: "DevOps & Developer Tools",
    description:
      "Supporting automated development, testing and deployment workflows.",
    skills: [
      "Git",
      "Bitbucket",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "Storybook",
      "ESLint",
      "Prettier",
      "Jira",
    ],
  },
  {
    title: "AI-Enabled Development",
    description:
      "Using AI and MCP-based workflows to improve developer productivity.",
    skills: [
      "GitHub Copilot",
      "Cursor AI",
      "Model Context Protocol (MCP)",
      "MCP Server Integration",
      "AI Agents",
      "Agentic Workflows",
      "PR Automation",
      "Automated Code Review",
      "Test Case Generation",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-base-200 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base-content/60">
            A combination of frontend engineering, scalable architecture,
            testing, DevOps and AI-assisted development.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5">
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-base-300 bg-base-200 px-3 py-1.5 text-sm font-medium text-base-content/75 transition-colors group-hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
