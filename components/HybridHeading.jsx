/**
 * HybridHeading Component
 * Fusion entre style vintage (serif) et moderne (sans-serif)
 * Crée un contraste visuel puissant
 */

export default function HybridHeading({ 
  children, 
  level = 1,
  variant = 'default',
  className = '',
  vintagePart = null
}) {
  const Tag = `h${level}`;
  
  const variants = {
    default: 'text-text-light',
    overlay: 'text-text-primary',
    accent: 'text-accent-primary',
  };

  const sizes = {
    1: 'text-5xl md:text-7xl lg:text-8xl',
    2: 'text-4xl md:text-5xl lg:text-6xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
  };

  // Split text if vintagePart is provided
  const renderContent = () => {
    if (vintagePart && typeof children === 'string') {
      const parts = children.split(vintagePart);
      return (
        <>
          <span className="font-primary">{parts[0]}</span>
          <span className="font-vintage text-vintage-gold/80">{vintagePart}</span>
          {parts[1] && <span className="font-primary">{parts[1]}</span>}
        </>
      );
    }
    
    // Default: mix of vintage and modern
    if (typeof children === 'string') {
      const words = children.split(' ');
      const firstWord = words[0];
      const rest = words.slice(1).join(' ');
      
      return (
        <>
          <span className="font-vintage text-vintage-gold/70 italic">{firstWord}</span>
          {' '}
          <span className="font-primary">{rest}</span>
        </>
      );
    }
    
    return children;
  };

  return (
    <Tag
      className={`
        ${variants[variant]} 
        ${sizes[level]} 
        font-black 
        tracking-tighter 
        leading-tight
        ${className}
      `}
    >
      {renderContent()}
    </Tag>
  );
}

