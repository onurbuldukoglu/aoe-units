import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detail: { name: '', unit: {}},
  },
  reducers: {
    setDetail: (state, action) => {
      state.detail.name = action.payload.value;
    },
    setUnit: (state, action) => {
      state.detail.unit = action.payload;
    }
  }
})

export const selectDetail = (state) => state.detail.detail;
export const { setDetail, setUnit } = detailSlice.actions;
export default detailSlice.reducer;
