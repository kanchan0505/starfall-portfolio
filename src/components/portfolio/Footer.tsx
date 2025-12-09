import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm inter-font">
            © {currentYear} Portfolio. Built with passion and code.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors inter-font"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors inter-font"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors inter-font"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors inter-font"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
