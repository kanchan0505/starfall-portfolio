import { AuroraBackground } from '@/components/ui/aurora-background';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Projects } from '@/components/portfolio/Projects';
import OrbitingSkills from '@/components/ui/orbiting-skills';
import { SocialConnect } from '@/components/ui/social-connect';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Aurora Animated Background */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative">
        <Header logo={{ initials: 'MT', name: 'Portfolio' }} />

        <div className="divider" />

        <Hero
          titleLine1="Crafting Ideas into Digital Experiences"
          titleLine2=""
          subtitle="I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life."
          onPrimaryClick={handleScrollToProjects}
          onSecondaryClick={handleScrollToContact}
        />

        <About />

        <div className="divider max-w-6xl mx-auto" />

        <Projects />

        <div className="divider max-w-6xl mx-auto" />

        <OrbitingSkills />

        <div className="divider max-w-6xl mx-auto" />

        <SocialConnect />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
