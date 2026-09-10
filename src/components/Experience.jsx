const experiences = [
  {
    period: "April 2021 – Present",
    company: "Cybage Software Pvt. Ltd.",
    role: "Software Engineer",
    location: "Pune, India",
    projects: [
      {
        name: "Space Management MFE",
        domain: "Workplace Management (IWMS)",
        technologies: [
          "React 18",
          "JavaScript",
          "Nx",
          "Webpack 5",
          "Module Federation",
          "TanStack React Query",
          "Jotai",
          "Axios",
          "OpenAPI",
          "Storybook",
          "Vitest",
        ],
        highlights: [
          "Built and maintained React 18 and JavaScript Micro Frontend applications using component-based architecture within an Nx Monorepo.",
          "Developed reusable React components and shared UI patterns using the Evo Design System and Storybook, with focus on accessibility and maintainability.",
          "Implemented TanStack React Query for server state and Jotai for lightweight client and UI state.",
          "Integrated RESTful APIs using Axios and OpenAPI-generated clients with asynchronous data flows.",
          "Configured Webpack 5 Module Federation with shared dependencies for Micro Frontend integration.",
          "Applied lazy loading and code splitting to support scalable frontend delivery.",
          "Led migration from Jest to Vitest, reducing test execution time from approximately 20 minutes to 10–12 minutes.",
          "Migrated CI/CD pipelines from Codefresh to Azure DevOps and standardised Docker-based deployment workflows.",
          "Integrated MCP servers for Atlassian, GitHub, Figma and database systems to provide AI-assisted development context.",
          "Created developer productivity agents for pull request creation, code review and test-case generation.",
        ],
      },
      {
        name: "iOfficeConnect",
        domain: "Workplace Management (IWMS)",
        technologies: [
          "Angular",
          "JavaScript",
          "AngularJS",
          "Webpack",
          "REST APIs",
          "Karma",
          "Jasmine",
          "Azure Pipelines",
          "Docker",
        ],
        highlights: [
          "Developed and maintained frontend modules for an enterprise workplace management platform covering spaces, reservations, assets and employee workflows.",
          "Configured and optimised Webpack builds using DLL builds, code splitting and template compilation.",
          "Implemented REST API integrations and internationalisation for multi-language deployments.",
          "Maintained frontend developer tooling including Gulp tasks, hot reload, linting and unit tests.",
          "Supported Azure Pipelines and Docker-based deployment workflows.",
        ],
      },
      {
        name: "RGA – Michaels Wreath Maker",
        domain: "E-Commerce",
        technologies: [
          "React",
          "Redux",
          "React Context API",
          "GraphQL",
          "Contentful CMS",
        ],
        highlights: [
          "Developed responsive React components and product-customisation workflows for an interactive e-commerce application.",
          "Managed application state using Redux and React Context API.",
          "Integrated GraphQL APIs and Contentful CMS for dynamic product content delivery.",
          "Participated in requirement analysis, sprint planning, estimation, code reviews and production support within an Agile Scrum team.",
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-base-200 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            5+ years of building enterprise applications
          </h2>

          <p className="mt-5 text-base-content/60 leading-7">
            My experience spans Micro Frontends, React applications, enterprise
            workplace platforms, e-commerce and developer productivity tooling.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-8px)] w-px bg-base-300 md:block" />

          {experiences.map((experience) => (
            <div key={experience.company} className="relative md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-base-200 bg-primary md:flex" />

              {/* Company */}
              <div className="mb-10">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{experience.company}</h3>

                    <p className="mt-1 text-lg text-primary">
                      {experience.role}
                    </p>
                  </div>

                  <div className="text-sm text-base-content/50 md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-8 space-y-8">
                  {experience.projects.map((project) => (
                    <article
                      key={project.name}
                      className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                    >
                      {/* Project header */}
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold">
                            {project.name}
                          </h4>

                          <p className="mt-1 text-sm text-base-content/50">
                            {project.domain}
                          </p>
                        </div>

                        <span className="badge badge-primary badge-outline">
                          Project
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-6 space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-base-content/65"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
