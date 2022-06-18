import {
    createSlice,
    createSelector,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';

  export type CounterState = {
    value: number;
  };
  
  const initialState: CounterState = {
    value: 0,
  };
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: state => {
          state.value++;
      },
      decrement: state => {
        state.value--;
      },
    },
  });
  export const {
    increment, 
    decrement, 
  } = counterSlice.actions;
  
  export const selectCount = (state: RootState) => state.counter.value;

  export const isOdd = (state: RootState) => (state.counter.value % 2 !== 0) as boolean;

  export default counterSlice.reducer;