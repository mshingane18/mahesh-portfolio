import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold">Mahesh Shingane</p>

          <p className="mt-1 text-sm text-base-content/50">
            Software Engineer · React.js · JavaScript · Micro Frontends
          </p>
        </div>

        <a
          href="#home"
          className="btn btn-circle btn-ghost"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>

      <div className="border-t border-base-300">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-base-content/40">
          © {new Date().getFullYear()} Mahesh Shingane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
