import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return response.data.results;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;