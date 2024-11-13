import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from '../features/challengeSlice';
import pokemonReducer from '../features/pokemonSlice';

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    pokemon: pokemonReducer,
  },
});