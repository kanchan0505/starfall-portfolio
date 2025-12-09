import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  hoverBg: string;
  hoverShadow: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-8 h-8" />,
    label: 'GitHub',
    href: 'https://github.com/Kanchan0505',
    hoverBg: 'hover:bg-foreground/10',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kanchan-sharma-ba980828b',
    hoverBg: 'hover:bg-[#0077b5]',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]'
  },
  {
    icon: <Mail className="w-8 h-8" />,
    label: 'Email',
    href: 'mailto:kanchan.sharma@cdgi.edu.in',
    hoverBg: 'hover:bg-primary',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]'
  }
];

const SocialConnect: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mb-6">
          <span className="gradient-text">Connect</span>
          <span className="text-foreground"> With Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 inter-font">
          Let's collaborate and build something amazing together
        </p>
        
        <div className="relative">
          <div 
            className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: '0 0 50px rgba(6, 182, 212, 0.2), 0 0 80px rgba(147, 51, 234, 0.15)'
            }}
          >
            <div className="flex flex-wrap justify-center gap-8">
              {socialLinks.map((social) => {
                const isMail = social.href.startsWith('mailto:');
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex flex-col items-center"
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <div
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center
                        bg-muted/50 backdrop-blur-sm border border-border/50
                        transition-all duration-300 text-foreground
                        ${social.hoverBg} ${social.hoverShadow}
                        group-hover:-translate-y-2 group-hover:scale-110
                      `}
                    >
                      {social.icon}
                    </div>
                    <span className="mt-3 text-muted-foreground text-sm font-medium transition-all duration-300 group-hover:text-foreground inter-font">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SocialConnect };
