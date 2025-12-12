import Head from 'next/head';
import { useState, useEffect } from 'react';
import PowerButton from '../components/PowerButton';
import TechnicalBadge from '../components/TechnicalBadge';
import StatCard from '../components/StatCard';
import TechnicalReport from '../components/TechnicalReport';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>GENESIS Coaching 3.0 | Optimisation Métabolique & Performance</title>
        <meta name="description" content="N'adaptez pas votre vie à un régime. Adaptez votre biologie à vos ambitions. 50+ transformations validées. Approche Root Cause, 0 approximation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-bg-primary text-text-primary min-h-screen relative overflow-hidden">
        {/* Technical overlay text (semi-transparent) - Background elements */}
        <div className="fixed top-20 left-10 font-mono text-xs text-text-muted opacity-20 [writing-mode:vertical-rl] z-0 pointer-events-none">
          SYSTEM INIT → TRANSFORMATION PROTOCOL
        </div>
        <div className="fixed bottom-20 right-10 font-mono text-xs text-text-muted opacity-20 z-0 pointer-events-none">
          OUTPUT LOAD: 80-90% | RPE: 8-9
        </div>
        <div className="fixed top-1/2 left-4 font-mono text-xs text-text-muted opacity-10 z-0 pointer-events-none">
          2779.25297714
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-bg-primary/95 backdrop-blur-md z-50 border-b border-border-light">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-baseline gap-2">
              <div className="font-mono text-2xl tracking-tighter">
                GENESIS<span className="text-accent-primary">.</span>
              </div>
              <div className="font-mono text-xs text-text-muted tracking-wider">
                by Stryv Lab.
              </div>
            </div>
            <PowerButton 
              href="#diagnostic"
              variant="primary" 
              size="sm"
            >
              DÉMARRER
            </PowerButton>
          </div>
        </nav>

        {/* Hero Section - Technical Report Style */}
        <section className="pt-24 pb-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Technical Report Card */}
              <TechnicalReport 
                systemId="ELEVATE_03.1"
                sequence="#SEQ.ACT-3A.5.12"
                status="SYS.INIT"
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6 bg-bg-secondary relative z-10">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="font-mono text-xs text-text-muted tracking-widest mb-2">
                  DIAGNOSTIC
                </div>
                <TechnicalBadge variant="accent" className="mb-2">
                  Le Constat
                </TechnicalBadge>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-6 font-black">
                POURQUOI VOUS STAGNEZ
              </h2>
              <p className="font-mono text-xl text-text-primary max-w-2xl mx-auto">
                Même avec des efforts maximaux
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frein 1 */}
              <div className="bg-bg-tertiary border border-border-light p-8 hover:border-accent-primary transition-all duration-300">
                <div className="w-12 h-12 border border-accent-primary flex items-center justify-center mb-6">
                  <div className="font-mono text-lg text-accent-primary">01</div>
                </div>
                <h3 className="font-mono text-xl mb-4 font-semibold">Les Freins Invisibles</h3>
                <p className="font-mono text-sm text-text-primary leading-relaxed">
                  Cortisol inversé, résistance insulinique, dysfonction thyroïdienne.
                  Ces blocages métaboliques sont silencieux mais dévastateurs.
                </p>
              </div>

              {/* Frein 2 */}
              <div className="bg-bg-tertiary border border-border-light p-8 hover:border-accent-primary transition-all duration-300">
                <div className="w-12 h-12 border border-accent-primary flex items-center justify-center mb-6">
                  <div className="font-mono text-lg text-accent-primary">02</div>
                </div>
                <h3 className="font-mono text-xl mb-4 font-semibold">Les Leviers Ignorés</h3>
                <p className="font-mono text-sm text-text-primary leading-relaxed">
                  Votre morphotype, neurotype et chronobiologie sont des atouts 
                  inexploités par 99% des programmes génériques.
                </p>
              </div>

              {/* Frein 3 */}
              <div className="bg-bg-tertiary border border-border-light p-8 hover:border-accent-primary transition-all duration-300">
                <div className="w-12 h-12 border border-accent-primary flex items-center justify-center mb-6">
                  <div className="font-mono text-lg text-accent-primary">03</div>
                </div>
                <h3 className="font-mono text-xl mb-4 font-semibold">L'Approximation</h3>
                <p className="font-mono text-sm text-text-primary leading-relaxed">
                  "Mange moins, bouge plus" ne fonctionne pas parce que chaque 
                  métabolisme possède sa propre signature unique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 bg-bg-primary relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <TechnicalBadge variant="accent" className="mb-6">
                  La Méthode
              </TechnicalBadge>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-6 font-black">
                COMMENT GENESIS FONCTIONNE
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-accent-primary flex items-center justify-center font-mono text-xl text-accent-primary">
                    01
                  </div>
                </div>
                <div className="flex-1 bg-bg-tertiary border border-border-light p-8">
                  <h3 className="font-mono text-xl mb-3 font-semibold">Diagnostic Forensique (15 min)</h3>
                  <p className="font-mono text-sm text-text-primary leading-relaxed mb-4">
                    273 data points capturés : métabolisme, neurologie, chronobiologie, infrastructure.
                    Analyse croisée pour identifier vos freins invisibles et leviers génétiques.
                  </p>
                  <div className="font-mono text-xs text-accent-primary font-semibold">
                    → Questionnaire intelligent • Gratuit • Confidentiel
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-accent-primary flex items-center justify-center font-mono text-xl text-accent-primary">
                    02
                  </div>
                </div>
                <div className="flex-1 bg-bg-tertiary border border-border-light p-8">
                  <h3 className="font-mono text-xl mb-3 font-semibold">Analyse GENESIS V3.2 (24h)</h3>
                  <p className="font-mono text-sm text-text-primary leading-relaxed mb-4">
                    Identification Root Cause (HPA, Insuline, Inflammation).
                    Cartographie de vos leviers métaboliques inexploités.
                    Construction du protocole sur-mesure.
                  </p>
                  <div className="font-mono text-xs text-accent-primary font-semibold">
                    → Rapport diagnostique PDF complet • 3 options personnalisées
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-accent-primary flex items-center justify-center font-mono text-xl text-accent-primary">
                    03
                  </div>
                </div>
                <div className="flex-1 bg-bg-tertiary border border-border-light p-8">
                  <h3 className="font-mono text-xl mb-3 font-semibold">Exécution Guidée (8 semaines)</h3>
                  <p className="font-mono text-sm text-text-primary leading-relaxed mb-4">
                    Plan nutrition/entraînement adapté à votre signature métabolique.
                    Suivi hebdomadaire ou quotidien selon votre formule.
                    Ajustements temps réel basés sur vos biomarqueurs.
                  </p>
                  <div className="font-mono text-xs text-accent-primary font-semibold">
                    → App EKKLO • Suivi coach • Garantie résultats
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <PowerButton 
                href="#diagnostic"
                variant="primary" 
                size="lg"
              >
                DÉMARRER MON DIAGNOSTIC →
              </PowerButton>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-6 bg-bg-secondary relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <TechnicalBadge variant="accent" className="mb-6">
                  Résultats Validés
              </TechnicalBadge>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-6 font-black">
                CE QUE DISENT MES CLIENTS
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-bg-tertiary border border-border-light p-8">
                <div className="mb-6">
                  <div className="text-accent-primary text-4xl mb-4">"</div>
                  <p className="font-mono text-base text-text-primary leading-relaxed mb-6">
                    En 8 semaines j'ai enfin compris pourquoi je stagnais depuis 2 ans. 
                    -8 kg, sommeil réparé, énergie stable toute la journée.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-elevated border border-border-light rounded-full"></div>
                  <div>
                    <div className="font-mono font-semibold text-text-primary">Thomas</div>
                    <div className="font-mono text-xs text-text-muted">34 ans • Formule Champion</div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-tertiary border border-border-light p-8">
                <div className="mb-6">
                  <div className="text-accent-primary text-4xl mb-4">"</div>
                  <p className="font-mono text-base text-text-primary leading-relaxed mb-6">
                    Le diagnostic GENESIS a révélé ma résistance à l'insuline. 
                    Correction en 4 semaines, -12 kg en 3 mois.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-elevated border border-border-light rounded-full"></div>
                  <div>
                    <div className="font-mono font-semibold text-text-primary">Sarah</div>
                    <div className="font-mono text-xs text-text-muted">29 ans • Formule God</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-mono text-text-muted text-sm">
                * Témoignages représentatifs. Résultats individuels variables selon engagement.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-bg-primary relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="order-2 md:order-1">
                <div className="aspect-square bg-bg-tertiary border border-border-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center font-mono text-text-muted text-sm">
                    [Votre photo professionnelle]
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="order-1 md:order-2">
                <TechnicalBadge variant="accent" className="mb-6">
                    Fondateur
                </TechnicalBadge>
                
                <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-6 font-black">
                  Kévin Boukelmoune
                </h3>
                
                <p className="font-mono text-base text-text-primary mb-6 leading-relaxed">
                  Fondateur de GENESIS, le Coaching 3.0.
                </p>
                
                <p className="font-mono text-sm text-text-primary mb-6 leading-relaxed">
                  Expert en transformation physique et optimisation de l'humain 
                  (Métabolisme, Neurologie, Performance).
                </p>
                
                <p className="font-mono text-sm text-text-primary mb-8 leading-relaxed">
                  50+ transformations validées. Approche Root Cause, 0 approximation.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-accent-primary"></div>
                    <span className="font-mono text-xs text-text-primary">Médecine Fonctionnelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-accent-primary"></div>
                    <span className="font-mono text-xs text-text-primary">Analyse Neurologique (Braverman)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-accent-primary"></div>
                    <span className="font-mono text-xs text-text-primary">Profilage Métabolique Avancé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="diagnostic" className="py-24 px-6 bg-bg-secondary relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-text-primary mb-8 font-black">
              PRÊT À DÉCOUVRIR VOTRE<br />
              SIGNATURE MÉTABOLIQUE ?
            </h2>
            
            <p className="font-mono text-base text-text-primary mb-12 leading-relaxed">
              Le diagnostic GENESIS est gratuit et prend 15 minutes.<br />
              Vous recevrez ensuite 3 options adaptées à votre profil.
            </p>

            <PowerButton 
              href="https://tally.so/r/votre-form-id" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary" 
              size="xl"
              className="mb-8"
            >
              ANALYSER MA BIOLOGIE MAINTENANT →
            </PowerButton>

            <div className="flex flex-wrap justify-center gap-8 font-mono text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Données cryptées (RGPD)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border-light py-12 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="font-mono text-2xl tracking-tighter mb-4">
                  GENESIS<span className="text-accent-primary">.</span>
                </div>
                <p className="font-mono text-xs text-text-primary">
                  Coaching 3.0<br />
                  Optimisation Métabolique
                </p>
              </div>

              <div>
                <h3 className="font-mono font-semibold mb-4 text-xs uppercase tracking-wider">Contact</h3>
                <div className="space-y-2 font-mono text-xs text-text-primary">
                  <div>contact@genesis-coaching.com</div>
                  <div>Belgique • Mons</div>
                </div>
              </div>

              <div>
                <h3 className="font-mono font-semibold mb-4 text-xs uppercase tracking-wider">Légal</h3>
                <div className="space-y-2 font-mono text-xs text-text-primary">
                  <a href="#" className="block hover:text-accent-primary transition-colors">CGV</a>
                  <a href="#" className="block hover:text-accent-primary transition-colors">Politique de confidentialité</a>
                  <a href="#" className="block hover:text-accent-primary transition-colors">Mentions légales</a>
                </div>
              </div>
            </div>

            <div className="border-t border-border-light pt-8 text-center font-mono text-xs text-text-primary">
              © 2024 GENESIS Coaching 3.0. Tous droits réservés.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
