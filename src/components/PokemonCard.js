import React from 'react';

 export const renderTypeColor = (type) => {
    switch (type) {
    case 'grass':
      return 'green';
    case 'poison':
      return 'purple';
    case 'fire':
      return 'red';
    case 'water':
      return 'blue';
    case 'bug':
      return 'pink';
    case 'ground':
      return 'indigo';
    case 'electric':
     return 'yellow'
    case 'flying':
      return 'blue'
    case 'fairy':
      return 'pink';
    case 'psychic':
      return 'purple';
    case 'fighting':
      return 'indigo'
    default:
      return 'gray';      
  }}

const PokemonCard = ({ pokemon, setPokemon }) => {
  return (
    
      <div onClick={() => setPokemon([pokemon])} className='cursor-pointer max-w-full rounded overflow-hidden shadow-2xl'>
        <img
          src={pokemon.sprites.front_default}
          alt=''
          className='w-1/2 m-auto mt-4 '
        />        
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-center'>
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </div>
          <p className='text-gray-100 text-base text-center bg-gray-800'>
            ID: {pokemon.id}
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {pokemon.types.map((type) => (
            <span className={`inline-block bg-${renderTypeColor(type.type.name)}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    
  );
};

export default PokemonCard;
