import { FiExternalLink, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "DevTinder",
    subtitle: "Full-Stack Developer Networking Application",
    description:
      "A full-stack developer networking application built to explore practical full-stack development across frontend engineering, backend APIs, database design, authentication and deployment.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Render",
    ],
    highlights: [
      "Built a React frontend with Redux for application state management.",
      "Developed Node.js and Express.js backend services and RESTful APIs.",
      "Designed MongoDB data models using Mongoose for application persistence.",
      "Implemented frontend-backend communication for the deployed application.",
    ],
    icon: FiCode,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-base-100 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I’ve built
          </h2>

          <p className="mt-5 leading-7 text-base-content/60">
            Personal projects where I apply my engineering experience to solve
            practical problems and explore technologies across the full stack.
          </p>
        </div>

        {/* Project */}
        {projects.map((project) => {
          const ProjectIcon = project.icon;

          return (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-base-300 bg-base-200 shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Project visual */}
                <div className="flex min-h-[320px] items-center justify-center bg-base-300 p-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-primary-content shadow-xl">
                      <ProjectIcon size={44} />
                    </div>

                    <h3 className="mt-6 text-3xl font-bold">{project.title}</h3>

                    <p className="mt-2 text-sm text-base-content/50">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Project information */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-primary badge-outline">
                      Personal Project
                    </span>

                    <span className="text-sm text-base-content/40">
                      Full Stack
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold">{project.title}</h3>

                  <p className="mt-4 leading-7 text-base-content/65">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-7">
                    <h4 className="mb-4 font-semibold">What I worked on</h4>

                    <ul className="space-y-3">
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
                  </div>

                  {/* Technology stack */}
                  <div className="mt-7">
                    <h4 className="mb-4 font-semibold">Technology Stack</h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-base-300 bg-base-100 px-3 py-1.5 text-xs font-medium text-base-content/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/mshingane18/devTinder-web"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      Frontend Source
                    </a>

                    <a
                      href="https://github.com/mshingane18/devTinder"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      Backend Source
                    </a>

                    <a
                      href="https://devtinder-78uf.onrender.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      <FiExternalLink size={17} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
