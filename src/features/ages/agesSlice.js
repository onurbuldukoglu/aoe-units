import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: '',
  },
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload.value;
    },
    resetAge: (state) => {
      state.age  = '';
    }
  }
})

export const selectAge = (state) => state.age.age;
export const { setAge, resetAge } = ageSlice.actions;
export default ageSlice.reducer;
