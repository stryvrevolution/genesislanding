/**
 * VintageLabel Component
 * Style: Étiquette médicinale ancienne / Apothecary
 * Fusion entre vintage et technologie moderne
 */

export default function VintageLabel({ 
  title, 
  subtitle,
  formula,
  batch,
  className = '',
  variant = 'default'
}) {
  const variants = {
    default: 'aged-paper border-2 border-vintage-bronze/30',
    ornate: 'aged-paper border-2 border-vintage-bronze/30 ornate-corner',
    minimal: 'bg-overlay-offWhite border border-vintage-patina/20',
  };

  return (
    <div className={`${variants[variant]} p-6 md:p-8 relative vintage-texture ${className}`}>
      {/* Vintage Header */}
      <div className="mb-6 pb-4 border-b border-vintage-bronze/20">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-vintage text-2xl md:text-3xl text-text-primary">
            {title}
          </h3>
          {/* Vintage decorative element */}
          <div className="text-vintage-gold/40 font-apothecary text-xs">
            ◆
          </div>
        </div>
        {subtitle && (
          <p className="font-apothecary text-sm text-vintage-sepia tracking-wider">
            {subtitle}
          </p>
        )}
      </div>

      {/* Formula Section - Mix vintage and modern */}
      {formula && (
        <div className="mb-6">
          <div className="font-apothecary text-xs text-vintage-sepia mb-2 tracking-widest">
            FORMULA
          </div>
          <div className="font-mono text-sm text-text-primary">
            {formula}
          </div>
        </div>
      )}

      {/* Batch Number - Technical element */}
      {batch && (
        <div className="mt-6 pt-4 border-t border-vintage-bronze/10">
          <div className="flex items-center justify-between">
            <div className="font-apothecary text-xs text-vintage-sepia tracking-widest">
              BATCH
            </div>
            <div className="font-mono text-xs text-vintage-patina">
              {batch}
            </div>
          </div>
        </div>
      )}

      {/* Vintage texture overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none opacity-30">
        <div className="absolute top-2 left-2 w-1 h-1 bg-vintage-bronze/20 rounded-full"></div>
        <div className="absolute top-4 right-4 w-0.5 h-0.5 bg-vintage-bronze/20 rounded-full"></div>
        <div className="absolute bottom-3 left-6 w-1 h-1 bg-vintage-bronze/20 rounded-full"></div>
      </div>
    </div>
  );
}


