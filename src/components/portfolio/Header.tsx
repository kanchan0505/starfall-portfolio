import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: {
    initials: string;
    name: string;
  };
  navLinks?: NavLink[];
  resumeLabel?: string;
  onResumeClick?: () => void;
}

const defaultNavLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({
  logo = { initials: 'MT', name: 'Portfolio' },
  navLinks = defaultNavLinks,
  resumeLabel = 'Resume',
  onResumeClick,
}) => {
  return (
    <nav className="w-full px-6 py-4 relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-muted/80 backdrop-blur-md border border-border/50 flex items-center justify-center">
            <span className="geist-font text-sm font-bold text-foreground">
              {logo.initials}
            </span>
          </div>
          <span className="geist-font text-lg font-medium text-foreground">
            {logo.name}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={onResumeClick}
          className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font"
        >
          {resumeLabel}
        </button>
      </div>
    </nav>
  );
};

export { Header };
