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
  const [numberInput, setNumberInput] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  // 🔵 Función que consulta FastAPI y activa loading
  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://gelan32-fastapi-pokemon.hf.space/pokemon');
      if (!response.ok) {
        throw new Error('Error fetching Pokémon data');
      }
      const data: PokemonData[] = await response.json();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 🔵 Carga inicial + Polling cada 5s
  useEffect(() => {
    fetchPokemons(); // carga inicial

    const interval = setInterval(() => {
      fetchPokemons(); // refresca cada 5 segundos
    }, 60000);

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  const handleSendNumber = async () => {
    if (numberInput.trim() === '') {
      alert('Please enter a number.');
      return;
    }

    setSending(true);

    try {
      const response = await fetch(
        'https://miguelgarzon42.app.n8n.cloud/webhook/8deb84a7-626d-4ef3-ac32-f4e5b10c1916',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ number: Number(numberInput) }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error sending number: ${response.status}`);
      }

      // ✅ Refresca datos al terminar
      await fetchPokemons();

      setNumberInput('');
    } catch (error) {
      console.error(error);
      alert('Failed to send number.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border px-4 py-6 sticky top-0 z-10">
        <div className="container mx-auto">
          <h1 className="font-pixel text-xl text-center text-foreground uppercase tracking-wider mb-2">
            Pokédex Pixel Art
          </h1>
          <div className="flex justify-center mb-4">
            <div className="bg-primary px-4 py-1 border border-border">
              <span className="font-pixel text-xs text-primary-foreground">
                {loading ? 'LOADING...' : `${pokemons.length} POKÉMON FOUND`}
              </span>
            </div>
          </div>

          {/* Input + Button + Spinner */}
          <div className="flex justify-center gap-4 items-center">
            <input
              type="number"
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              disabled={sending}
              className="px-4 py-2 border border-border bg-background text-foreground font-pixel disabled:opacity-50"
              placeholder="Enter number"
            />
            <button
              onClick={handleSendNumber}
              disabled={sending}
              className="bg-primary text-primary-foreground px-4 py-2 border border-border font-pixel disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Number'}
            </button>
            {sending && (
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 font-pixel text-lg text-foreground">Loading Pokédex...</span>
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
