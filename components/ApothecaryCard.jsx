/**
 * ApothecaryCard Component
 * Carte style pharmacie ancienne avec éléments techniques modernes
 * Fusion laboratoire vintage + technologie
 */

export default function ApothecaryCard({ 
  title,
  latinName,
  indication,
  dosage,
  technicalData,
  className = ''
}) {
  return (
    <div className={`aged-paper border-2 border-vintage-bronze/30 p-6 md:p-8 relative vintage-texture ${className}`}>
      {/* Header - Vintage Style */}
      <div className="mb-6 pb-4 border-b-2 border-vintage-bronze/20">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-vintage text-2xl md:text-3xl text-text-primary italic">
            {title}
          </h3>
          <div className="text-vintage-gold/50 font-apothecary text-xs">
            ◆
          </div>
        </div>
        {latinName && (
          <p className="font-apothecary text-sm text-vintage-sepia tracking-wider">
            {latinName}
          </p>
        )}
      </div>

      {/* Indication - Mix vintage and modern */}
      {indication && (
        <div className="mb-6">
          <div className="font-apothecary text-xs text-vintage-sepia mb-2 tracking-widest uppercase">
            Indication
          </div>
          <p className="font-body text-sm text-text-primary leading-relaxed">
            {indication}
          </p>
        </div>
      )}

      {/* Dosage - Technical format */}
      {dosage && (
        <div className="mb-6 p-4 bg-bg-tertiary/30 border border-vintage-patina/20">
          <div className="font-apothecary text-xs text-vintage-sepia mb-2 tracking-widest uppercase">
            Dosage
          </div>
          <div className="font-mono text-sm text-text-primary">
            {dosage}
          </div>
        </div>
      )}

      {/* Technical Data - Modern overlay */}
      {technicalData && (
        <div className="mt-6 pt-4 border-t border-vintage-bronze/10">
          <div className="flex items-center justify-between mb-2">
            <div className="font-apothecary text-xs text-vintage-sepia tracking-widest uppercase">
              Data
            </div>
            <div className="w-8 h-px bg-vintage-gold/30"></div>
          </div>
          <div className="font-mono text-xs text-vintage-patina space-y-1">
            {Array.isArray(technicalData) ? (
              technicalData.map((data, idx) => (
                <div key={idx}>{data}</div>
              ))
            ) : (
              <div>{technicalData}</div>
            )}
          </div>
        </div>
      )}

      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-vintage-gold/20"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-vintage-gold/20"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-vintage-gold/20"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-vintage-gold/20"></div>
    </div>
  );
}

