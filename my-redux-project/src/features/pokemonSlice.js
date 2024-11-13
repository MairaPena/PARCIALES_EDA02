import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return data.results;
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