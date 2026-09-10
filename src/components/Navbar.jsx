import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      const dark = savedTheme === "dark";

      setIsDark(dark);

      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light",
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setIsDark(prefersDark);

      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light",
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light",
    );

    localStorage.setItem("portfolio-theme", newTheme ? "dark" : "light");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-1">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
            onClick={closeMenu}
          >
            <span className="text-primary">M</span>S
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal items-center gap-1">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Theme */}
          <button
            type="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/mshingane18"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mahesh-shingane-a45318166/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-base-300 bg-base-100 md:hidden">
          <ul className="menu w-full p-4">
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-3"
              >
                {isDark ? (
                  <>
                    <FiSun size={18} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon size={18} />
                    Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
