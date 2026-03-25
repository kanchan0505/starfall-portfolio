import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  href?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: 'Sorting Omega',
    description: 'Visualizer for sorting algorithms, trees, and graphs.',
    tags: ['TypeScript', 'React'],
    imageUrl: '/images/S002.jpg',
    href: 'https://sort-omega.vercel.app',
  },
  {
    title: 'Fee Management System',
    description: 'Fee management system built for a government school to handle collections and records.',
    tags: ['Next.js', 'MUI', 'Postgres'],
    imageUrl: '/images/S003.jpg',
    href: 'https://nextjs-feemanagement.vercel.app/',
  },
  {
    title: 'Course Outcome & SAR Generation',
    description: 'Marking software with CO–PO mapping for SAR report generation (private).',
    tags: ['Next.js', 'MUI', 'Postgres'],
    imageUrl: '/images/S004.jpg',
    // private project — no public link
  },
    {
    title: 'Jwellery Website for Balaji Jwellers',
    description: 'Ecommerce website with payment gateway +shipping integration via Shiprocket for balaji jwellers Indore ',
    tags: ['Next.js', 'MUI', 'Postgres'],
    imageUrl: '/images/S005.jpg',
    // private project — no public link
  }
   {
    title: 'Event Management Website - Citronics',
    description: 'Developed a full-stack event management website for a national-level techno-management fest, enabling event listings, registrations, and user engagement on a centralized platform. ',
    tags: ['Next.js', 'MUI', 'Postgres'],
    imageUrl: '/images/s0011.png',
      href: 'https://www.cdgicitronics.in',
    // private project — no public link
  }
  
];

const Projects: React.FC<ProjectsProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto inter-font">
            Featured projects showcasing my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const CardTag: any = project.href ? 'a' : 'div';
            const cardProps = project.href
              ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <CardTag
                {...cardProps}
                key={index}
                className="glass-card rounded-2xl p-6 text-left group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                aria-label={project.title}
              >
                {/* Project Image */}
                <div className="project-image rounded-xl h-40 mb-4 flex items-center justify-center overflow-hidden relative bg-muted/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  {project.imageUrl ? (
                    // image path assumed in `public/images/...` (use provided paths)
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // hide image element if not found
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="text-4xl opacity-50 group-hover:scale-110 transition-transform">💼</div>
                  )}

                  {project.href && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 geist-font group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm inter-font mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-badge px-3 py-1 rounded-full text-xs text-muted-foreground inter-font"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Projects };
