import {
  FiArrowDown,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-base-200">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Left content */}
        <div>
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>

            <span className="text-base-content/70">
              Available for new opportunities
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Software Engineer
          </p>

          {/* Heading */}
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I’m Mahesh
            <span className="text-primary">.</span>
          </h1>

          {/* Specialization */}
          <p className="mt-6 text-xl font-medium text-base-content/70 sm:text-2xl">
            React.js · JavaScript · Micro Frontends
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-base-content/60 sm:text-lg">
            Software Engineer with 5+ years of experience building scalable
            enterprise applications, specializing in React.js, JavaScript, Micro
            Frontends, and maintainable frontend architecture.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToProjects}
              className="btn btn-primary btn-lg"
            >
              View Projects
              <FiArrowDown size={18} />
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Mahesh_Shingane_Frontend_Developer_React.pdf`}
              download
              className="btn btn-outline btn-lg"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/mshingane18"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-base-content/60 transition-colors hover:text-primary"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/mahesh-shingane-a45318166/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-base-content/60 transition-colors hover:text-primary"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:maheshshingane18@gmail.com"
              className="font-medium text-base-content/60 transition-colors hover:text-primary"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Technical profile card */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          {/* Glow */}
          <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl">
            {/* Card header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-base-content/40">
                  Developer Profile
                </p>

                <p className="mt-1 text-sm font-semibold">Mahesh Shingane</p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-content">
                MS
              </div>
            </div>

            {/* Architecture visual */}
            <div className="relative mt-8 rounded-2xl border border-base-300 bg-base-200 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                  Architecture
                </span>

                <span className="badge badge-success badge-sm">Scalable</span>
              </div>

              {/* Central application */}
              <div className="flex justify-center">
                <div className="rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-center">
                  <p className="text-sm font-bold text-primary">
                    React Application
                  </p>

                  <p className="mt-1 text-[11px] text-base-content/50">
                    JavaScript
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="mx-auto h-7 w-px bg-base-content/20" />

              {/* Micro frontends */}
              <div className="grid grid-cols-3 gap-2">
                {["MFE 01", "MFE 02", "MFE 03"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-base-300 bg-base-100 px-2 py-3 text-center"
                  >
                    <p className="text-[11px] font-semibold">{item}</p>

                    <p className="mt-1 text-[9px] text-base-content/40">
                      Module
                    </p>
                  </div>
                ))}
              </div>

              {/* Connector */}
              <div className="mx-auto h-7 w-px bg-base-content/20" />

              {/* API layer */}
              <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-center">
                <p className="text-xs font-semibold">
                  REST APIs · React Query · Axios
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-base-content/40">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Nx",
                  "Webpack",
                  "Module Federation",
                  "Redux",
                  "Node.js",
                  "MongoDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-base-300 bg-base-200 px-3 py-1.5 text-xs font-medium text-base-content/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-6 flex items-center justify-between border-t border-base-300 pt-5">
              <div>
                <p className="text-xs text-base-content/40">Experience</p>

                <p className="mt-1 text-sm font-semibold">5+ Years</p>
              </div>

              <div>
                <p className="text-xs text-base-content/40">Focus</p>

                <p className="mt-1 text-sm font-semibold">
                  Frontend Architecture
                </p>
              </div>

              <a
                href="#about"
                className="btn btn-circle btn-sm btn-ghost"
                aria-label="About me"
              >
                <FiExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
