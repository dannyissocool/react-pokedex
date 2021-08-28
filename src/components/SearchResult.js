import React, { useState, useEffect } from 'react'
import { renderTypeColor } from './PokemonCard'
import axios from 'axios'

const SearchResult = ({ pokemon, setPokemon }) => {
  const [speciesData, setSpeciesData] = useState({});

  const getSpeciesData = async () => {
    await axios.get(pokemon.species.url)      
  }

  useEffect(() => {
    let isMounted = true;

    getSpeciesData().then((res) => {
      if (isMounted && res !== undefined) setSpeciesData(res.data);
    })
    .catch((err) => {
      console.log(err)
    })

    return () => { isMounted = false };
  }, [pokemon])

  const handleNext = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id + 1}`)
      .then((res) => {
        setPokemon([res.data])
      })
  }

  const handlePrev = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id - 1}`)
      .then((res) => {        
        setPokemon([res.data])
      })
  }
 

  return (
    <div className='max-w-full rounded overflow-hidden shadow-2xl my-2'>
        <div className='flex'>
          <svg
            onClick={() => handlePrev()}             
            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-40 mx-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <img
            src={pokemon.sprites.front_default}
            alt=''
            className='w-1/2 m-auto mt-4'
          />
          <svg
            onClick={() => handleNext()} 
            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-40 mx-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
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
            <span className={`inline-block bg-${renderTypeColor(type.type.name)}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5`}>
              {type.type.name}
            </span>
          ))}
        </div>

        { 
          speciesData === undefined && 
          <div className='text-lg p-4 font-semibold'>
            {speciesData.flavor_text_entries[5].flavor_text}
          </div> 
        }
        
        <div className='text-xl mb-2 text-center'>Move List:</div>
        <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4'>
          { pokemon.moves.map((move) => (
            <span className='text-lg mx-2 text-center pb-2'>
              {move.move.name[0].toUpperCase() + move.move.name.substring(1)}
            </span>
          )) }
        </div>
          
      </div>
  )
}

export default SearchResult
