import {createSlice} from '@reduxjs/toolkit';

interface MySlice {
  user: any;
}

const initialState: MySlice = {
  user: null,
};

const mySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const {setUser, clearUser} = mySlice.actions;

export default mySlice.reducer;
