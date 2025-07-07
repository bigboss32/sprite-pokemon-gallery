import { useState } from 'react';
import { TypeBadge } from './TypeBadge';

interface PokemonData {
  name: string;
  content: string;
  extra1: string;
  extra2: string;
  descrip: string;
  imagen: string;
}

interface PokemonCardProps {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-card border-2 border-border rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 p-4 h-full flex flex-col">
            {/* Pokemon Image */}
            <div className="relative mb-4 bg-muted rounded-none p-4 flex-shrink-0">
              {!imageError ? (
                <img
                  src={pokemon.imagen}
                  alt={pokemon.name}
                  className="w-24 h-24 mx-auto object-contain pixel-art"
                  onError={() => setImageError(true)}
                  style={{ imageRendering: 'pixelated' }}
                />
              ) : (
                <div className="w-24 h-24 mx-auto bg-muted-foreground/20 flex items-center justify-center rounded-none">
                  <span className="font-pixel text-xs text-muted-foreground">?</span>
                </div>
              )}
            </div>

            {/* Pokemon Name */}
            <h3 className="font-pixel text-sm text-center mb-3 text-foreground uppercase tracking-wider">
              {pokemon.name}
            </h3>

            {/* Pokemon Types */}
            <div className="flex gap-2 justify-center mb-4 flex-wrap">
              <TypeBadge type={pokemon.extra1.toLowerCase()} />
              {pokemon.extra2 && (
                <TypeBadge type={pokemon.extra2.toLowerCase()} />
              )}
            </div>

            {/* Pokemon Description */}
            <div className="flex-1 flex items-center">
              <p className="text-xs text-muted-foreground text-center leading-relaxed line-clamp-4">
                {pokemon.content}
              </p>
            </div>

            {/* Flip indicator */}
            <div className="mt-2 text-center">
              <span className="text-xs text-muted-foreground font-pixel">CLICK TO FLIP</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-card border-2 border-border rounded-none shadow-lg p-4 h-full flex flex-col">
            {/* Title */}
            <h3 className="font-pixel text-sm text-center mb-4 text-foreground uppercase tracking-wider">
              {pokemon.name}
            </h3>

            {/* Description details */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-3">
                <div>
                  <h4 className="font-pixel text-xs text-primary mb-2">DESCRIPTION:</h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    {pokemon.content}
                  </p>
                </div>

                {pokemon.descrip && (
                  <div>
                    <h4 className="font-pixel text-xs text-primary mb-2">DETAILS:</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pokemon.descrip.replace(/Pregunta:|Respuesta:/g, '').trim()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Flip back indicator */}
            <div className="mt-2 text-center">
              <span className="text-xs text-muted-foreground font-pixel">CLICK TO FLIP BACK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};