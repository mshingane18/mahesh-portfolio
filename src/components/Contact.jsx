import { FaMap, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
function Contact() {
  return (
    <section id="contact" className="bg-base-200 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm sm:p-12">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            {/* Intro */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let’s build something useful.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-base-content/60">
                I’m open to discussing software engineering opportunities,
                interesting technical challenges, and projects involving modern
                frontend architecture.
              </p>

              <a
                href="mailto:maheshshingane18@gmail.com"
                className="btn btn-primary mt-8"
              >
                <FiMail size={18} />
                Get In Touch
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:maheshshingane18@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-200 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FiMail size={18} />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">Email</p>
                  <p className="mt-1 text-sm font-medium">
                    maheshshingane18@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-200 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaMap size={18} />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">Location</p>
                  <p className="mt-1 text-sm font-medium">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/mahesh-shingane-a45318166/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-200 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaLinkedin size={18} />
                </div>

                <div>
                  <p className="text-xs text-base-content/40">LinkedIn</p>
                  <p className="mt-1 text-sm font-medium">Connect with me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
