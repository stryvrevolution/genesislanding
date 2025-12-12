/**
 * HeroSection Component
 * Style: Section hero avec style technique et puissant
 * Utilise le vocabulaire de transformation physique
 */

import PowerHeading from './PowerHeading';
import PowerButton from './PowerButton';
import TechnicalBadge from './TechnicalBadge';
import StatCard from './StatCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary opacity-50"></div>
      
      {/* Technical overlay text (semi-transparent) */}
      <div className="absolute top-20 left-10 font-mono text-xs text-text-muted opacity-20 [writing-mode:vertical-rl]">
        SYSTEM INIT → TRANSFORMATION PROTOCOL
      </div>
      <div className="absolute bottom-20 right-10 font-mono text-xs text-text-muted opacity-20">
        OUTPUT LOAD: 80-90% | RPE: 8-9
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="text-center mb-8">
          <TechnicalBadge variant="accent">
            ELEVATE YOUR PERFORMANCE • PROTOCOL 3.1
          </TechnicalBadge>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <PowerHeading level={1} variant="default" accent={false}>
            PUSH BEYOND
          </PowerHeading>
          <PowerHeading level={1} variant="accent" accent={false}>
            YOUR LIMITS
          </PowerHeading>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12">
          <p className="font-body text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            ACTIVATE YOUR POTENTIAL.<br />
            <span className="text-text-light font-bold">TRANSFORM YOUR BIOLOGY.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <PowerButton size="lg" variant="primary">
            INITIATE TRANSFORMATION →
          </PowerButton>
          <PowerButton size="lg" variant="secondary">
            VIEW PROTOCOL
          </PowerButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard value="50+" label="Transformations" />
          <StatCard value="273" label="Data Points" />
          <StatCard value="0" label="Approximation" />
        </div>
      </div>
    </section>
  );
}


