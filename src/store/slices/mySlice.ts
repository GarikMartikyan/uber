// src/store/mySlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface MySlice {
  value: number;
}

const initialState: MySlice = {
  value: 0,
};

const mySlice = createSlice({
  name: 'yourSlice',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {increment, decrement, setValue} = mySlice.actions;

export default mySlice.reducer;
