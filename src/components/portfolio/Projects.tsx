import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: 'FinTech Mobile App',
    description: 'React Native app with AI-powered financial insights and real-time market data.',
    tags: ['React Native', 'Node.js', 'AI'],
  },
  {
    title: 'Data Visualization Platform',
    description: 'Interactive dashboard for complex data analysis with beautiful charts.',
    tags: ['D3.js', 'Python', 'MongoDB'],
  },
  {
    title: '3D Portfolio Experience',
    description: 'Immersive WebGL experience with stunning 3D elements and animations.',
    tags: ['Three.js', 'WebGL', 'React'],
  },
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-left group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="project-image rounded-xl h-40 mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="text-4xl opacity-50 group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-foreground" />
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
