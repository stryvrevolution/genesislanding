import Head from 'next/head';
import WorkoutPanel from '../components/WorkoutPanel';
import PowerButton from '../components/PowerButton';
import PowerHeading from '../components/PowerHeading';
import TechnicalBadge from '../components/TechnicalBadge';
import StatCard from '../components/StatCard';
import HeroSection from '../components/HeroSection';
import HybridHeading from '../components/HybridHeading';
import VintageLabel from '../components/VintageLabel';
import ApothecaryCard from '../components/ApothecaryCard';
import LaboratorySection from '../components/LaboratorySection';

export default function DesignSystem() {
  return (
    <>
      <Head>
        <title>GENESIS Design System | Style Transformation Physique</title>
        <meta name="description" content="Design system inspiré du style Under Armour - Puissance & Performance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-bg-primary text-text-light min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-bg-primary/90 backdrop-blur-md z-50 border-b border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-primary text-2xl tracking-tighter">
              GENESIS<span className="text-accent-primary">.</span>
            </div>
            <a 
              href="/"
              className="font-primary text-sm tracking-wide hover:text-accent-primary transition-colors"
            >
              ← RETOUR
            </a>
          </div>
        </nav>

        <div className="pt-20">
          {/* Hero Section Example */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto mb-16">
              <TechnicalBadge variant="accent" className="mb-6">
                HERO SECTION
              </TechnicalBadge>
              <PowerHeading level={2} variant="default">
                Exemple de Section Hero
              </PowerHeading>
            </div>
            <HeroSection />
          </section>

          {/* Colors Section */}
          <section className="py-20 px-6 bg-bg-secondary">
            <div className="max-w-6xl mx-auto">
              <TechnicalBadge variant="accent" className="mb-6">
                PALETTE DE COULEURS
              </TechnicalBadge>
              <PowerHeading level={2} variant="default" className="mb-12">
                Couleurs du Design System
              </PowerHeading>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Backgrounds */}
                <div className="space-y-4">
                  <h3 className="font-primary text-xl mb-4">Backgrounds</h3>
                  <div className="space-y-2">
                    <div className="bg-bg-primary border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">bg-primary</div>
                      <div className="font-mono text-xs text-text-muted">#000000</div>
                    </div>
                    <div className="bg-bg-secondary border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">bg-secondary</div>
                      <div className="font-mono text-xs text-text-muted">#0A0A0A</div>
                    </div>
                    <div className="bg-bg-tertiary border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">bg-tertiary</div>
                      <div className="font-mono text-xs text-text-muted">#1A1A1A</div>
                    </div>
                  </div>
                </div>

                {/* Overlays */}
                <div className="space-y-4">
                  <h3 className="font-primary text-xl mb-4">Overlays</h3>
                  <div className="space-y-2">
                    <div className="bg-overlay-offWhite border border-border-dark p-4 text-text-primary">
                      <div className="font-mono text-xs mb-2">overlay-offWhite</div>
                      <div className="font-mono text-xs text-text-muted">#F5F5F0</div>
                    </div>
                    <div className="bg-overlay-beige border border-border-dark p-4 text-text-primary">
                      <div className="font-mono text-xs mb-2">overlay-beige</div>
                      <div className="font-mono text-xs text-text-muted">#E8E8E3</div>
                    </div>
                  </div>
                </div>

                {/* Accents */}
                <div className="space-y-4">
                  <h3 className="font-primary text-xl mb-4">Accents</h3>
                  <div className="space-y-2">
                    <div className="bg-accent-primary border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">accent-primary</div>
                      <div className="font-mono text-xs">#E63946</div>
                    </div>
                    <div className="bg-accent-secondary border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">accent-secondary</div>
                      <div className="font-mono text-xs">#DC143C</div>
                    </div>
                    <div className="bg-accent-dark border border-border-dark p-4">
                      <div className="font-mono text-xs mb-2">accent-dark</div>
                      <div className="font-mono text-xs">#C41E3A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="py-20 px-6 bg-bg-primary">
            <div className="max-w-6xl mx-auto">
              <TechnicalBadge variant="accent" className="mb-6">
                TYPOGRAPHIE
              </TechnicalBadge>
              <PowerHeading level={2} variant="default" className="mb-12">
                Polices & Styles
              </PowerHeading>

              <div className="space-y-12">
                {/* Primary Font */}
                <div>
                  <h3 className="font-primary text-xl mb-4">Primary (Rajdhani)</h3>
                  <div className="font-primary text-4xl tracking-tighter uppercase">
                    PUSH BEYOND YOUR LIMITS
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-2">
                    Technique, condensée, puissante
                  </div>
                </div>

                {/* Secondary Font */}
                <div>
                  <h3 className="font-primary text-xl mb-4">Secondary (Orbitron)</h3>
                  <div className="font-secondary text-4xl tracking-wider">
                    SYSTEM INIT: TRANSFORMATION
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-2">
                    Futuriste, techno
                  </div>
                </div>

                {/* Display Font */}
                <div>
                  <h3 className="font-primary text-xl mb-4">Display (Barlow Condensed)</h3>
                  <div className="font-display text-4xl tracking-wider">
                    ELEVATE YOUR OUTPUT
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-2">
                    Condensée, impact maximum
                  </div>
                </div>

                {/* Mono Font */}
                <div>
                  <h3 className="font-primary text-xl mb-4">Mono (JetBrains Mono)</h3>
                  <div className="font-mono text-lg">
                    OUTPUT LOAD: 80-90% | RPE: 8-9 | THRESHOLD BREAKING
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-2">
                    Technique, code-like, data-driven
                  </div>
                </div>

                {/* Body Font */}
                <div>
                  <h3 className="font-primary text-xl mb-4">Body (Inter)</h3>
                  <div className="font-body text-lg leading-relaxed max-w-2xl">
                    La plupart des programmes échouent parce qu'ils ignorent votre signature métabolique.
                    GENESIS la décode en 15 minutes. Approche Root Cause, 0 approximation.
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-2">
                    Moderne, lisible, professionnel
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section className="py-20 px-6 bg-bg-secondary">
            <div className="max-w-6xl mx-auto">
              <TechnicalBadge variant="accent" className="mb-6">
                COMPOSANTS
              </TechnicalBadge>
              <PowerHeading level={2} variant="default" className="mb-12">
                Composants du Design System
              </PowerHeading>

              {/* Buttons */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">PowerButton</h3>
                <div className="flex flex-wrap gap-4">
                  <PowerButton variant="primary" size="md">ACTIVATE</PowerButton>
                  <PowerButton variant="secondary" size="md">INITIATE</PowerButton>
                  <PowerButton variant="outline" size="md">VIEW PROTOCOL</PowerButton>
                  <PowerButton variant="ghost" size="md">LEARN MORE</PowerButton>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <PowerButton variant="primary" size="sm">SMALL</PowerButton>
                  <PowerButton variant="primary" size="lg">LARGE</PowerButton>
                  <PowerButton variant="primary" size="xl">EXTRA LARGE</PowerButton>
                </div>
              </div>

              {/* Headings */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">PowerHeading</h3>
                <div className="space-y-6">
                  <PowerHeading level={1} variant="default">LEVEL 1 HEADING</PowerHeading>
                  <PowerHeading level={2} variant="default">LEVEL 2 HEADING</PowerHeading>
                  <PowerHeading level={3} variant="default">LEVEL 3 HEADING</PowerHeading>
                  <PowerHeading level={4} variant="accent">ACCENT HEADING</PowerHeading>
                </div>
              </div>

              {/* Badges */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">TechnicalBadge</h3>
                <div className="flex flex-wrap gap-4">
                  <TechnicalBadge variant="default">DEFAULT BADGE</TechnicalBadge>
                  <TechnicalBadge variant="accent">ACCENT BADGE</TechnicalBadge>
                  <TechnicalBadge variant="overlay">OVERLAY BADGE</TechnicalBadge>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">StatCard</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <StatCard value="50+" label="Transformations" />
                  <StatCard value="273" label="Data Points" />
                  <StatCard value="0" label="Approximation" />
                </div>
              </div>

              {/* Workout Panel */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">WorkoutPanel</h3>
                <WorkoutPanel />
              </div>
            </div>
          </section>

          {/* Vintage/Apothecary Section */}
          <section className="py-20 px-6 bg-bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 vintage-texture opacity-10 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-block mb-6">
                  <div className="font-apothecary text-xs text-vintage-gold/60 tracking-widest mb-2">
                    FUSION VINTAGE + TECH
                  </div>
                  <TechnicalBadge variant="accent" className="mb-2">
                    LABORATOIRE HYBRIDE
                  </TechnicalBadge>
                </div>
                <HybridHeading level={2} variant="default" className="mb-6">
                  STYLE APOTHICAIRE MODERNE
                </HybridHeading>
                <p className="font-body text-lg text-text-muted max-w-3xl mx-auto">
                  <span className="font-vintage italic text-vintage-gold/70">Médecine ancestrale</span>
                  {' '}rencontre{' '}
                  <span className="font-mono text-accent-primary">technologie avancée</span>
                </p>
              </div>

              {/* Vintage Typography */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">Typographie Vintage</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="font-vintage text-4xl text-vintage-gold/80 italic mb-4">
                      GENESIS
                    </div>
                    <div className="font-mono text-xs text-text-muted">
                      Playfair Display - Style pharmacie ancienne
                    </div>
                  </div>
                  <div>
                    <div className="font-apothecary text-3xl text-vintage-sepia tracking-widest mb-4">
                      APOTHECARY
                    </div>
                    <div className="font-mono text-xs text-text-muted">
                      Cormorant Garamond - Étiquettes médicinales
                    </div>
                  </div>
                </div>
              </div>

              {/* Vintage Components */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">Composants Vintage</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <VintageLabel
                    title="GENESIS"
                    subtitle="Optimisation Métabolique"
                    formula="ROOT_CAUSE_ANALYSIS + METABOLIC_PROFILING"
                    batch="#BATCH_2024.03.15"
                    variant="ornate"
                  />
                  <VintageLabel
                    title="PROTOCOL"
                    subtitle="Transformation Validée"
                    formula="PERSONALIZED_V3.2"
                    batch="#BATCH_2024.03.16"
                    variant="minimal"
                  />
                </div>
              </div>

              {/* Apothecary Cards */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">Apothecary Cards</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <ApothecaryCard
                    title="Diagnostic"
                    latinName="Diagnosis Forensis"
                    indication="Identification des freins métaboliques"
                    dosage="15 min | 273 data points"
                    technicalData={["HPA_AXIS: ANALYZED", "INSULIN: DETECTED"]}
                  />
                  <ApothecaryCard
                    title="Protocole"
                    latinName="Protocolus Personalis"
                    indication="Plan sur-mesure adapté"
                    dosage="8 semaines | Temps réel"
                    technicalData={["NUTRITION: CALIBRATED", "TRAINING: OPTIMIZED"]}
                  />
                  <ApothecaryCard
                    title="Résultat"
                    latinName="Transformatio Validata"
                    indication="Résultats mesurables"
                    dosage="50+ cas | 94.7% success"
                    technicalData={["SUCCESS: 94.7%", "AVG: -8.5kg"]}
                  />
                </div>
              </div>

              {/* Hybrid Heading Examples */}
              <div className="mb-16">
                <h3 className="font-primary text-xl mb-6">Hybrid Heading - Fusion Vintage/Moderne</h3>
                <div className="space-y-6">
                  <HybridHeading level={2} variant="default">
                    TRANSFORMATION
                  </HybridHeading>
                  <HybridHeading level={3} variant="accent" vintagePart="BIOLOGIE">
                    ADAPTEZ VOTRE BIOLOGIE À VOS AMBITIONS
                  </HybridHeading>
                </div>
              </div>

              {/* Laboratory Section Preview */}
              <div>
                <h3 className="font-primary text-xl mb-6">Section Laboratoire Complète</h3>
                <LaboratorySection />
              </div>
            </div>
          </section>

          {/* Copy Style Section */}
          <section className="py-20 px-6 bg-bg-primary">
            <div className="max-w-6xl mx-auto">
              <TechnicalBadge variant="accent" className="mb-6">
                STYLE ORATOIRE
              </TechnicalBadge>
              <PowerHeading level={2} variant="default" className="mb-12">
                Vocabulaire de Transformation Physique
              </PowerHeading>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-bg-tertiary border border-border-dark p-8">
                  <h3 className="font-primary text-xl mb-4">Impératifs Puissants</h3>
                  <div className="space-y-2 font-mono text-sm text-text-muted">
                    <div>→ PUSH BEYOND YOUR LIMITS</div>
                    <div>→ ACTIVATE YOUR POTENTIAL</div>
                    <div>→ ELEVATE YOUR OUTPUT</div>
                    <div>→ BREAK THE THRESHOLD</div>
                    <div>→ MAXIMIZE YOUR LOAD</div>
                    <div>→ INITIATE TRANSFORMATION</div>
                  </div>
                </div>

                <div className="bg-bg-tertiary border border-border-dark p-8">
                  <h3 className="font-primary text-xl mb-4">Vocabulaire Technique</h3>
                  <div className="space-y-2 font-mono text-sm text-text-muted">
                    <div>→ THRESHOLD BREAKING PROTOCOL</div>
                    <div>→ SYSTEM INIT: TRANSFORMATION</div>
                    <div>→ OUTPUT LOAD 80-90%</div>
                    <div>→ RPE 8-9</div>
                    <div>→ MOVEMENT PROTOCOL</div>
                    <div>→ CONDITIONING NODE</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

