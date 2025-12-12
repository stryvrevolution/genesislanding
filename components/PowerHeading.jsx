/**
 * PowerHeading Component
 * Style: Titre puissant avec style technique
 * Utilise le vocabulaire de transformation physique
 */

export default function PowerHeading({ 
  children, 
  level = 1,
  variant = 'default',
  className = '',
  accent = false 
}) {
  const Tag = `h${level}`;
  
  const variants = {
    default: 'font-primary text-text-light',
    overlay: 'font-primary text-text-primary',
    accent: 'font-primary text-accent-primary',
  };

  const sizes = {
    1: 'text-5xl md:text-7xl lg:text-8xl',
    2: 'text-4xl md:text-5xl lg:text-6xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
  };

  return (
    <Tag
      className={`
        ${variants[variant]} 
        ${sizes[level]} 
        font-black 
        tracking-tighter 
        leading-tight
        uppercase
        ${className}
      `}
    >
      {accent && <span className="text-accent-primary">{children.split(' ')[0]}</span>}
      {accent ? ' ' + children.split(' ').slice(1).join(' ') : children}
    </Tag>
  );
}


