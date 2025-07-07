interface TypeBadgeProps {
  type: string;
}

const typeColors: Record<string, string> = {
  grass: 'bg-type-grass',
  poison: 'bg-type-poison',
  fire: 'bg-type-fire',
  water: 'bg-type-water',
  electric: 'bg-type-electric',
  psychic: 'bg-type-psychic',
  ice: 'bg-type-ice',
  dragon: 'bg-type-dragon',
  dark: 'bg-type-dark',
  fairy: 'bg-type-fairy',
  normal: 'bg-type-normal',
  fighting: 'bg-type-fighting',
  flying: 'bg-type-flying',
  ground: 'bg-type-ground',
  rock: 'bg-type-rock',
  bug: 'bg-type-bug',
  ghost: 'bg-type-ghost',
  steel: 'bg-type-steel',
};

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const bgColor = typeColors[type] || 'bg-muted';
  
  return (
    <span 
      className={`
        ${bgColor} 
        px-2 py-1 
        font-pixel text-xs 
        text-foreground 
        border border-border 
        rounded-none 
        shadow-sm 
        uppercase 
        tracking-wider
        transition-transform 
        hover:scale-110 
        hover:shadow-md
        inline-block
      `}
    >
      {type}
    </span>
  );
};