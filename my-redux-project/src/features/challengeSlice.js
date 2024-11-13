import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = challengeSlice.actions;
export default challengeSlice.reducer;