import React, { useState } from 'react';

const SearchBar = ({ searchPokemon }) => {
  const [text, setText] = useState('');
  const [border, setBorder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setBorder('error');
      console.log(border);
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
          border === 'error' ? 'border-red-500 border-4' : ''
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
    </form>
  );
};

export default SearchBar;
