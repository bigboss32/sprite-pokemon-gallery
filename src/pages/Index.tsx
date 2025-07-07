import { useState, useEffect } from 'react';
import { PokemonCard } from '@/components/PokemonCard';

interface PokemonData {
  name: string;
  content: string;
  extra1: string;
  extra2: string;
  descrip: string;
  imagen: string;
}

const Index = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://gelan32-fastapi-pokemon.hf.space/pokemon'); // ✅ NUEVA URL
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data: PokemonData[] = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border px-4 py-6 sticky top-0 z-10">
        <div className="container mx-auto">
          <h1 className="font-pixel text-xl text-center text-foreground uppercase tracking-wider mb-2">
            Pokédex Pixel Art
          </h1>
          <div className="flex justify-center">
            <div className="bg-primary px-4 py-1 border border-border">
              <span className="font-pixel text-xs text-primary-foreground">
                {loading ? 'LOADING...' : `${pokemons.length} POKÉMON FOUND`}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Pokemon Grid */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-16">
            <div className="bg-card border-2 border-border p-8 inline-block">
              <h2 className="font-pixel text-lg text-foreground mb-4">Loading Pokédex...</h2>
              <p className="text-muted-foreground text-sm">
                Please wait while we fetch your Pokémon.
              </p>
            </div>
          </div>
        ) : pokemons.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-card border-2 border-border p-8 inline-block">
              <h2 className="font-pixel text-lg text-foreground mb-4">NO POKÉMON DATA</h2>
              <p className="text-muted-foreground text-sm">
                No Pokémon found in the API.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pokemons.map((pokemon, index) => (
              <PokemonCard key={`${pokemon.name}-${index}`} pokemon={pokemon} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-16 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-pixel text-xs text-muted-foreground">
            PIXEL ART POKÉDEX • GOTTA CATCH 'EM ALL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
