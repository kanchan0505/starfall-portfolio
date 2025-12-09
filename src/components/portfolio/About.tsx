import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface AboutProps {
  stats?: Stat[];
  description?: string;
}

const defaultStats: Stat[] = [];

const About: React.FC<AboutProps> = ({
  stats = defaultStats,
  description = "Hi, I’m Kanchan Sharma, a first-year Computer Science student with a strong passion for building practical and engaging digital experiences. I enjoy transforming ideas into real products — from collaborative platforms and finance trackers to creative visualization tools. I love experimenting with new concepts, exploring how things work, and continuously improving myself by working on different projects.",
}) => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      desc: 'Writing maintainable and scalable code'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Focus',
      desc: 'Creating intuitive user experiences'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      desc: 'Optimizing for speed and efficiency'
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto inter-font">
            {description}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 geist-font">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm inter-font">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats (render only when provided) */}
        {stats && stats.length > 0 && (
          <>
            <div className="divider mb-12" />
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  <div className="group">
                    <div className="text-4xl md:text-5xl font-light text-foreground mb-2 geist-font tracking-tight group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm inter-font font-normal">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export { About };
