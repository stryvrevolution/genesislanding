/**
 * PowerButton Component
 * Style: Bouton puissant avec effet technique
 * Utilise le vocabulaire de transformation physique
 */

export default function PowerButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props 
}) {
  const baseStyles = 'font-mono tracking-wider transition-all duration-200 uppercase font-semibold inline-block';
  
  const variants = {
    primary: 'bg-accent-primary hover:bg-accent-dark text-white hover:scale-105',
    secondary: 'bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white',
    outline: 'bg-transparent border border-border-light text-text-primary hover:border-accent-primary hover:text-accent-primary',
    ghost: 'bg-transparent text-accent-primary hover:bg-accent-primary/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

