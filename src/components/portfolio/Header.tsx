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
  resumeHref?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({
  logo = {  name: 'Portfolio' },
  navLinks = defaultNavLinks,
  resumeLabel = 'Resume',
  onResumeClick,
  resumeHref = '/images/kanchanShama.pdf',
}) => {
  return (
    <nav className="w-full px-6 py-4 relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          
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

        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onResumeClick) {
              e.preventDefault();
              onResumeClick();
            }
          }}
          className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font"
        >
          {resumeLabel}
        </a>
      </div>
    </nav>
  );
};

export { Header };
