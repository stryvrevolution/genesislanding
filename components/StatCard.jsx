/**
 * StatCard Component
 * Style: Carte de statistique technique avec style data-driven
 */

export default function StatCard({ 
  value, 
  label, 
  unit = '',
  variant = 'default',
  className = '' 
}) {
  return (
    <div className={`bg-bg-tertiary border border-border-light p-6 hover:border-accent-primary transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-1 h-12 bg-accent-primary flex-shrink-0"></div>
        <div className="flex-1">
          <div className="font-display text-3xl md:text-4xl text-text-primary mb-1 tracking-tight font-black">
            {value}
            {unit && <span className="text-accent-primary ml-1">{unit}</span>}
          </div>
          <div className="font-mono text-xs text-text-primary uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

