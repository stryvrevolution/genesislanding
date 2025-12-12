/**
 * TechnicalBadge Component
 * Style: Badge technique avec style data-driven
 */

export default function TechnicalBadge({ 
  children, 
  variant = 'default',
  className = '' 
}) {
  const variants = {
    default: 'bg-bg-tertiary border border-border-light text-text-primary',
    accent: 'bg-transparent border border-accent-primary text-accent-primary',
    overlay: 'bg-bg-secondary border border-border-light text-text-primary',
  };

  return (
    <div className={`
      inline-block 
      px-4 
      py-2 
      rounded-sm
      font-mono 
      text-xs 
      tracking-wider 
      uppercase
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
}

