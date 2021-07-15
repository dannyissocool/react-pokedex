import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

function App() {
  const [term, setTerm] = useState('1');
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial API call
  const pokemon_count = 151;
  useEffect(async () => {
    for (let i = 1; i <= pokemon_count; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(
          (res) =>
            setPokemonArray((pokemonArray) => [...pokemonArray, res.data]),
          setLoading(false)
        );
    }

    setLoading(false);
  }, []);

  // Search API call
  useEffect(async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${term}`)
      .then((res) => setPokemonArray(() => [res.data]), setLoading(false));
  }, [term]);

  return (
    <div className='container mx-auto'>
      <SearchBar searchPokemon={(text) => setTerm(text)} />
      {!loading && pokemonArray.length === 0 && (
        <h1 className='text-center'>No Results</h1>
      )}

      {loading ? (
        <h1 className='text-center'>Loading...</h1>
      ) : pokemonArray.length === 1 ? (
        <div className='grid sm:m-auto sm:grid-cols-1'>
          <PokemonCard pokemon={pokemonArray[0]} />
        </div>
      ) : (
        <div className='grid sm:m-auto sm:grid-cols-1 md:grid-cols-3 gap-4'>
          {pokemonArray.map((individual) => (
            <PokemonCard key={individual.id} pokemon={individual} />
          ))}
        </div>
      )}
      {console.log(pokemonArray)}
    </div>
  );
}

export default App;
