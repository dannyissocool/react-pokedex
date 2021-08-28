import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SearchResult from './components/SearchResult'
import SearchBar from './components/SearchBar';

function App() {
  const [term, setTerm] = useState('1');
  const [pokemonArray, setPokemonArray] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Initial API call
  const pokemon_count = 151;

  useEffect(() => getInitialPokemon()
  , []);

  async function getInitialPokemon() {
    setPokemonArray([]);
   
    setError(false);
    

    for (let i = 1; i <= pokemon_count; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(
          (res) =>
            setPokemonArray((pokemonArray) => [...pokemonArray, res.data]),          
          setLoading(false),
          setError(false)
        );
       
    }
    setLoading(false);
  }

  

  // Search for single Pokemon
  useEffect(() => {async function getAPokemon(term){
    
    const lowerCaseTerm = term.toLowerCase();

    await axios    
      .get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseTerm}`)
      .then((res) => { 
        setPokemonArray(() => [res.data]); 
        setSearchResult(() => [res.data]);
        setLoading(false);
        setError(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
    
  }
    getAPokemon(term)
  }, [term]);

  return (
    <>
      <SearchBar goBack={getInitialPokemon} pokemonArray={pokemonArray} setError={setError} error={error} searchPokemon={(text) => setTerm(text)} />

      <div className='container mx-auto'>       
        {!loading && pokemonArray.length === 0 && (
          <h1 className='text-center'>No Results</h1>
        )}

        {loading ? (
          <h1 className='text-center'>Loading...</h1>
        ) : pokemonArray.length === 1 ? (
          <>
            <div className='grid sm:m-auto sm:grid-cols-1 sm:w-1/2'>
              <SearchResult pokemon={pokemonArray[0]} setPokemon={setPokemonArray} />
            </div>
          </>
        ) : (
          <div className='grid m-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {pokemonArray.map((individual, idx) => (
              <PokemonCard                  
                setPokemon={setPokemonArray} 
                key={idx} 
                pokemon={individual}
              />
            ))}
          </div>
        )}
        
      </div>
    </>
  );
}

export default App;
