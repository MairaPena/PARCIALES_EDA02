import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../features/pokemonSlice';

const PokemonChallenge = () => {
  const dispatch = useDispatch();
  const { pokemonList, status, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemon());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      {status === 'loading' && <div>Cargando...</div>}
      {status === 'succeeded' && (
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <div>Error: {error}</div>}
    </div>
  );
};

export default PokemonChallenge;