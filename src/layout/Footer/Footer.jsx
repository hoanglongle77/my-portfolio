import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] text-[var(--color-foreground)] py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Dev Name + Quote */}
        <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-wide">
          My Portfolio
        </h2>
        <p className="text-sm opacity-80 italic">
          "Designing interfaces. Developing dreams."
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pt-2">
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 pt-6">
          © {new Date().getFullYear()} — Built by{" "}
          <span className="text-[var(--color-primary)] font-semibold">
            Hoang Long Le
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
