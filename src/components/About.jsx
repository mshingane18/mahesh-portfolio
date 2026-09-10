function About() {
  return (
    <section id="about" className="bg-base-100 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          {/* Section heading */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building scalable web experiences with clean architecture.
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-base-content/70 leading-8">
            <p>
              I’m a Software Engineer with over 5 years of experience building
              scalable enterprise web applications, with a strong focus on
              React.js, JavaScript, and Micro Frontend architecture.
            </p>

            <p>
              My experience spans component-based architecture, state
              management, RESTful API integration, automated testing, CI/CD, and
              frontend performance optimization. I enjoy solving complex
              technical problems and turning requirements into maintainable and
              reliable solutions.
            </p>

            <p>
              I’ve worked closely with backend, QA, product, and engineering
              teams on enterprise applications, production issues, API
              contracts, cross-team integrations, and technical improvements. I
              also have hands-on experience using AI-assisted development tools
              and MCP integrations to improve developer productivity.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
                <p className="text-2xl font-bold text-primary">React</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Primary Expertise
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
                <p className="text-2xl font-bold text-primary">MFE</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
