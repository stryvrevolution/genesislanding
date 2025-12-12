/**
 * LaboratorySection Component
 * Section qui fusionne l'esthétique vintage pharmacie et technologie moderne
 * Ambiance laboratoire hybride
 */

import HybridHeading from './HybridHeading';
import VintageLabel from './VintageLabel';
import ApothecaryCard from './ApothecaryCard';
import PowerButton from './PowerButton';

export default function LaboratorySection() {
  return (
    <section className="relative py-20 px-6 bg-bg-primary overflow-hidden">
      {/* Background - Mix of vintage and tech */}
      <div className="absolute inset-0 opacity-10">
        {/* Vintage texture overlay */}
        <div className="absolute inset-0 vintage-texture"></div>
        {/* Technical grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(230, 57, 70, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 57, 70, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - Hybrid style */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="font-apothecary text-xs text-vintage-gold/60 tracking-widest mb-2">
              LABORATOIRE DE TRANSFORMATION
            </div>
            <div className="font-mono text-xs text-text-muted">
              #GENESIS_V3.2 | PROTOCOL_ACTIVE
            </div>
          </div>
          
          <HybridHeading level={2} variant="default" className="mb-6">
            TRANSFORMATION
          </HybridHeading>
          
          <p className="font-body text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            <span className="font-vintage italic text-vintage-gold/70">Médecine ancestrale</span>
            {' '}rencontre{' '}
            <span className="font-mono text-accent-primary">technologie avancée</span>
          </p>
        </div>

        {/* Grid - Mix of vintage and modern cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vintage Label */}
          <VintageLabel
            title="GENESIS"
            subtitle="Optimisation Métabolique"
            formula="ROOT_CAUSE_ANALYSIS + METABOLIC_PROFILING"
            batch="#BATCH_2024.03.15"
            variant="ornate"
          />

          {/* Modern Technical Card */}
          <div className="bg-bg-tertiary border border-border-dark p-8">
            <div className="font-primary text-xl mb-4 tracking-tight">
              SYSTEM INIT
            </div>
            <div className="font-mono text-sm text-text-muted space-y-2 mb-6">
              <div>→ DIAGNOSTIC: 273 DATA POINTS</div>
              <div>→ ANALYSIS: ROOT CAUSE IDENTIFIED</div>
              <div>→ PROTOCOL: PERSONALIZED V3.2</div>
            </div>
            <div className="pt-4 border-t border-border-dark">
              <div className="font-apothecary text-xs text-vintage-gold/60 tracking-widest mb-2">
                EFFICACY RATE
              </div>
              <div className="font-primary text-3xl text-accent-primary">
                94.7%
              </div>
            </div>
          </div>
        </div>

        {/* Apothecary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ApothecaryCard
            title="Diagnostic"
            latinName="Diagnosis Forensis"
            indication="Identification des freins métaboliques invisibles"
            dosage="15 min | 273 data points"
            technicalData={[
              "HPA_AXIS: ANALYZED",
              "INSULIN_RESISTANCE: DETECTED",
              "THYROID_FUNCTION: OPTIMIZED"
            ]}
          />

          <ApothecaryCard
            title="Protocole"
            latinName="Protocolus Personalis"
            indication="Plan sur-mesure adapté à votre signature"
            dosage="8 semaines | Ajustements temps réel"
            technicalData={[
              "NUTRITION: CALIBRATED",
              "TRAINING: OPTIMIZED",
              "RECOVERY: MONITORED"
            ]}
          />

          <ApothecaryCard
            title="Transformation"
            latinName="Transformatio Validata"
            indication="Résultats mesurables et durables"
            dosage="50+ cas validés | 0 approximation"
            technicalData={[
              "SUCCESS_RATE: 94.7%",
              "AVG_RESULTS: -8.5kg",
              "SATISFACTION: 98.2%"
            ]}
          />
        </div>

        {/* CTA - Hybrid style */}
        <div className="text-center">
          <PowerButton variant="primary" size="lg">
            INITIER LA TRANSFORMATION →
          </PowerButton>
          <p className="font-apothecary text-xs text-vintage-gold/60 mt-4 tracking-widest">
            PROTOCOL VERIFIED | LABORATORY TESTED
          </p>
        </div>
      </div>
    </section>
  );
}

