import { createSlice } from "@reduxjs/toolkit";
import unitList from "../../data/age-of-empires-units.json"

export const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    units: unitList.units,
  },
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    }
  }
})

export const selectUnits = (state) => state.units.units;
export const { setUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
