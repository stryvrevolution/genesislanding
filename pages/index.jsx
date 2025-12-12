import Head from 'next/head';
import { useState, useEffect } from 'react';

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

      <div className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-black tracking-tighter">
              GENESIS<span className="text-red-600">.</span>
            </div>
            <a 
              href="#diagnostic"
              className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-sm font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105"
            >
              DÉMARRER
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-8">
                <div className="inline-block bg-gray-900 border border-gray-800 px-4 py-2 rounded-sm mb-8">
                  <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                    Coaching 3.0 • Médecine Fonctionnelle
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-center mb-8 leading-tight tracking-tight">
                N'ADAPTEZ PAS<br />
                VOTRE VIE À UN RÉGIME.
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-black text-center mb-8 leading-tight tracking-tight">
                ADAPTEZ VOTRE<br />
                <span className="text-red-600">BIOLOGIE</span> À VOS AMBITIONS.
              </h2>

              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                La plupart des programmes échouent parce qu'ils ignorent votre signature métabolique.<br />
                <span className="text-white font-semibold">GENESIS la décode en 15 minutes.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a 
                  href="#diagnostic"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-10 py-4 rounded-sm font-bold text-lg tracking-wide transition-all duration-200 hover:scale-105 text-center"
                >
                  ANALYSER MA BIOLOGIE →
                </a>
                <div className="text-sm text-gray-500">
                  15 min • Gratuit • Confidentiel
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-red-600"></div>
                  <div>
                    <div className="text-2xl font-black">50+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Transformations</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-red-600"></div>
                  <div>
                    <div className="text-2xl font-black">273</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Data Points</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-red-600"></div>
                  <div>
                    <div className="text-2xl font-black">0</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Approximation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-sm mb-6">
                <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">
                  Le Constat
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                POURQUOI VOUS STAGNEZ
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Même avec des efforts maximaux
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frein 1 */}
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm hover:border-red-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 rounded-sm flex items-center justify-center mb-6">
                  <div className="text-2xl">🔴</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Les Freins Invisibles</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cortisol inversé, résistance insulinique, dysfonction thyroïdienne.
                  Ces blocages métaboliques sont silencieux mais dévastateurs.
                </p>
              </div>

              {/* Frein 2 */}
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm hover:border-red-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 rounded-sm flex items-center justify-center mb-6">
                  <div className="text-2xl">🟠</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Les Leviers Ignorés</h3>
                <p className="text-gray-400 leading-relaxed">
                  Votre morphotype, neurotype et chronobiologie sont des atouts 
                  inexploités par 99% des programmes génériques.
                </p>
              </div>

              {/* Frein 3 */}
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm hover:border-red-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 rounded-sm flex items-center justify-center mb-6">
                  <div className="text-2xl">⚪</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">L'Approximation</h3>
                <p className="text-gray-400 leading-relaxed">
                  "Mange moins, bouge plus" ne fonctionne pas parce que chaque 
                  métabolisme possède sa propre signature unique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-sm mb-6">
                <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">
                  La Méthode
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                COMMENT GENESIS FONCTIONNE
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center font-black text-xl">
                    01
                  </div>
                </div>
                <div className="flex-1 bg-gray-900/30 border border-gray-800 p-8 rounded-sm">
                  <h3 className="text-2xl font-bold mb-3">Diagnostic Forensique (15 min)</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    273 data points capturés : métabolisme, neurologie, chronobiologie, infrastructure.
                    Analyse croisée pour identifier vos freins invisibles et leviers génétiques.
                  </p>
                  <div className="text-sm text-red-600 font-semibold">
                    → Questionnaire intelligent • Gratuit • Confidentiel
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center font-black text-xl">
                    02
                  </div>
                </div>
                <div className="flex-1 bg-gray-900/30 border border-gray-800 p-8 rounded-sm">
                  <h3 className="text-2xl font-bold mb-3">Analyse GENESIS V3.2 (24h)</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Identification Root Cause (HPA, Insuline, Inflammation).
                    Cartographie de vos leviers métaboliques inexploités.
                    Construction du protocole sur-mesure.
                  </p>
                  <div className="text-sm text-red-600 font-semibold">
                    → Rapport diagnostique PDF complet • 3 options personnalisées
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center font-black text-xl">
                    03
                  </div>
                </div>
                <div className="flex-1 bg-gray-900/30 border border-gray-800 p-8 rounded-sm">
                  <h3 className="text-2xl font-bold mb-3">Exécution Guidée (8 semaines)</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Plan nutrition/entraînement adapté à votre signature métabolique.
                    Suivi hebdomadaire ou quotidien selon votre formule.
                    Ajustements temps réel basés sur vos biomarqueurs.
                  </p>
                  <div className="text-sm text-red-600 font-semibold">
                    → App EKKLO • Suivi coach • Garantie résultats
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a 
                href="#diagnostic"
                className="inline-block bg-red-600 hover:bg-red-700 px-10 py-4 rounded-sm font-bold text-lg tracking-wide transition-all duration-200 hover:scale-105"
              >
                DÉMARRER MON DIAGNOSTIC →
              </a>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Structure prête */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-sm mb-6">
                <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">
                  Résultats Validés
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                CE QUE DISENT MES CLIENTS
              </h2>
            </div>

            {/* Testimonials Grid - À remplir avec vrais témoignages */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm">
                <div className="mb-6">
                  <div className="text-red-600 text-4xl mb-4">"</div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    En 8 semaines j'ai enfin compris pourquoi je stagnais depuis 2 ans. 
                    -8 kg, sommeil réparé, énergie stable toute la journée.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                  <div>
                    <div className="font-bold">Thomas</div>
                    <div className="text-sm text-gray-500">34 ans • Formule Champion</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm">
                <div className="mb-6">
                  <div className="text-red-600 text-4xl mb-4">"</div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Le diagnostic GENESIS a révélé ma résistance à l'insuline. 
                    Correction en 4 semaines, -12 kg en 3 mois.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                  <div>
                    <div className="font-bold">Sarah</div>
                    <div className="text-sm text-gray-500">29 ans • Formule God</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                * Témoignages représentatifs. Résultats individuels variables selon engagement.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="order-2 md:order-1">
                <div className="aspect-square bg-gray-900 border border-gray-800 rounded-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-700 text-sm">
                    [Votre photo professionnelle]
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="order-1 md:order-2">
                <div className="inline-block bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-sm mb-6">
                  <span className="text-red-600 text-xs font-semibold tracking-wider uppercase">
                    Fondateur
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  Kévin Boukelmoune
                </h2>
                
                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                  Fondateur de GENESIS, le Coaching 3.0.
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Expert en transformation physique et optimisation de l'humain 
                  (Métabolisme, Neurologie, Performance).
                </p>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  50+ transformations validées. Approche Root Cause, 0 approximation.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-red-600"></div>
                    <span className="text-sm text-gray-500">Médecine Fonctionnelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-red-600"></div>
                    <span className="text-sm text-gray-500">Analyse Neurologique (Braverman)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-red-600"></div>
                    <span className="text-sm text-gray-500">Profilage Métabolique Avancé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="diagnostic" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              PRÊT À DÉCOUVRIR VOTRE<br />
              SIGNATURE MÉTABOLIQUE ?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Le diagnostic GENESIS est gratuit et prend 15 minutes.<br />
              Vous recevrez ensuite 3 options adaptées à votre profil.
            </p>

            <a 
              href="https://tally.so/r/votre-form-id" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 px-12 py-5 rounded-sm font-bold text-xl tracking-wide transition-all duration-200 hover:scale-105 mb-8"
            >
              ANALYSER MA BIOLOGIE MAINTENANT →
            </a>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Données cryptées (RGPD)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-black tracking-tighter mb-4">
                  GENESIS<span className="text-red-600">.</span>
                </div>
                <p className="text-sm text-gray-500">
                  Coaching 3.0<br />
                  Optimisation Métabolique
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>contact@genesis-coaching.com</div>
                  <div>Belgique • Mons</div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Légal</h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <a href="#" className="block hover:text-white transition-colors">CGV</a>
                  <a href="#" className="block hover:text-white transition-colors">Politique de confidentialité</a>
                  <a href="#" className="block hover:text-white transition-colors">Mentions légales</a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              © 2024 GENESIS Coaching 3.0. Tous droits réservés.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
