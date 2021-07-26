import React, { useState } from 'react';

const SearchBar = ({ searchPokemon, error, setError, pokemonArray, goBack }) => {
  const [text, setText] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError(true);
      
      return;
    } else {
      searchPokemon(text);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='shadow-md w-full max-w-sm m-auto my-10 bg-blue-100 text-blue-800 flex flex-col justify-center items-center '
    >
      <h1 className='text-center text-xl p-5'>
        Search for a Pokemon or Pokedex ID
      </h1>
      <input
        type='text'
        className={`w-11/12 mx-auto mb-5 px-2 py-1 text-blue-800 border ${
         error ? 'border-red-500 border-4' : 'border-blue-500 border-4'
        }`}
        placeholder='Ex. Charizard or 6'
        onChange={(e) => setText(e.target.value)}
      />
      
      <button
        type='submit'
        className='w-full mx-auto px-3 py-1 bg-blue-500 text-blue-100'
      >
        Submit
      </button>
      {
        pokemonArray.length === 1 ? 
        <button 
          className='w-full mx-auto px-3 py-1 border-2 border-blue-400  text-blue-400' 
          onClick={() => goBack()}
        >
            Go Back
        </button> : ''
      }

    </form>
  );
};

export default SearchBar;
