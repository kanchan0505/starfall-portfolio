import React from 'react';

interface HeroProps {
  titleLine1?: React.ReactNode;
  titleLine2?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  titleLine1 = 'Crafting Ideas into Digital Experiences',
  titleLine2 = '',
  subtitle = 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.',
  primaryButtonLabel = 'View My Work',
  secondaryButtonLabel = 'Get In Touch',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 float-animation">
          <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-6">
            {titleLine1}
            <span className="gradient-text block tracking-tight font-semibold">
              {titleLine2}
            </span>
          </h1>
          <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onPrimaryClick}
            className="primary-button px-8 py-3 text-primary-foreground rounded-lg font-medium text-sm min-w-[180px] inter-font"
          >
            {primaryButtonLabel}
          </button>
          <button
            onClick={onSecondaryClick}
            className="glass-button min-w-[180px] inter-font text-sm font-medium text-foreground rounded-lg px-8 py-3"
          >
            {secondaryButtonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
