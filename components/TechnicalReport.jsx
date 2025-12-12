/**
 * TechnicalReport Component
 * Style: Fiche technique / Rapport médical
 * Technical Brutalism / Clinical UI
 */

export default function TechnicalReport({ 
  systemId = "ELEVATE_03.1",
  sequence = "#SEQ.ACT-3A.5.12",
  status = "SYS.INIT",
  className = '' 
}) {
  return (
    <div className={`bg-bg-primary border border-text-primary ${className}`}>
      {/* Header Section */}
      <div className="border-b border-text-primary">
        <div className="flex items-center justify-between p-4">
          <div>
            <div className="font-mono text-xs text-text-primary mb-1 uppercase tracking-wider">
              {systemId}
            </div>
            <div className="font-mono text-xs text-text-muted">
              {sequence}
            </div>
          </div>
          <div className="font-mono text-xs text-accent-primary uppercase tracking-wider">
            {status}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Title Section */}
        <div className="mb-6">
          <div className="font-display text-4xl md:text-6xl text-text-primary mb-2 font-black leading-tight">
            N'ADAPTEZ PAS<br />
            VOTRE VIE À UN RÉGIME.
          </div>
          <div className="font-display text-2xl md:text-4xl text-text-primary mb-4 font-black">
            ADAPTEZ VOTRE<br />
            <span className="text-accent-primary">BIOLOGIE</span> À VOS AMBITIONS.
          </div>
        </div>

        {/* Separator */}
        <div className="border-b border-text-primary my-6"></div>

        {/* Data Grid */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                PROTOCOL
              </div>
              <div className="font-mono text-sm text-text-primary">
                GENESIS V3.2
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                STATUS
              </div>
              <div className="font-mono text-sm text-accent-primary">
                ACTIVE
              </div>
            </div>
          </div>

          <div className="border-b border-text-primary"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                TRANSFORMATIONS
              </div>
              <div className="font-mono text-2xl text-text-primary font-semibold">
                50+
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                DATA POINTS
              </div>
              <div className="font-mono text-2xl text-text-primary font-semibold">
                273
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                APPROXIMATION
              </div>
              <div className="font-mono text-2xl text-text-primary font-semibold">
                0
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-b border-text-primary my-6"></div>

        {/* Description */}
        <div className="mb-6">
          <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">
            DESCRIPTION
          </div>
          <div className="font-mono text-sm text-text-primary leading-relaxed">
            La plupart des programmes échouent parce qu'ils ignorent votre signature métabolique.
            GENESIS la décode en 15 minutes.
          </div>
        </div>

        {/* Separator */}
        <div className="border-b border-text-primary my-6"></div>

        {/* Action Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-1">
              <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">
                ACTION REQUIRED
              </div>
              <a 
                href="#diagnostic"
                className="inline-block font-mono text-base text-text-primary border-2 border-accent-primary bg-accent-primary text-white px-8 py-4 hover:bg-accent-dark hover:border-accent-dark transition-colors uppercase font-semibold"
              >
                ANALYSER MA BIOLOGIE →
              </a>
            </div>
            <div>
              <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">
                DURATION
              </div>
              <div className="font-mono text-sm text-text-primary">
                15 min • Gratuit • Confidentiel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-text-primary p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
            OUTPUT LOAD: 80-90% | RPE: 8-9
          </div>
          <div className="font-mono text-xs text-text-muted">
            2779.25297714
          </div>
        </div>
      </div>
    </div>
  );
}

