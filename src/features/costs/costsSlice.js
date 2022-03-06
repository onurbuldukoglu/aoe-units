import { createSlice } from "@reduxjs/toolkit";

export const costsSlice = createSlice({
  name: 'costs',
  initialState: {
    costs: { Wood: { min: 0, max: 200, active: false }, Food: { min: 0, max: 200, active: false }, Gold: { min: 0, max: 200, active: false } },
  },
  reducers: {
    setWood: (state, action) => {
      state.costs.Wood = action.payload.costs;
    },
    setFood: (state, action) => {
      state.costs.Food = action.payload.costs;
    },
    setGold: (state, action) => {
      state.costs.Gold = action.payload.costs;
    },
    toggleWood: (state, action) => {
      if (!action.payload) {
        state.costs.Wood = { min: 0, max: 200, active: false }
      } else {
        state.costs.Wood.active = true
      }
    },
    toggleFood: (state, action) => {
      if (!action.payload) {
        state.costs.Food = { min: 0, max: 200, active: false }
      } else {
        state.costs.Food.active = true
      }
    },
    toggleGold: (state, action) => {
      if (!action.payload) {
        state.costs.Gold = { min: 0, max: 200, active: false }
      } else {
        state.costs.Gold.active = true
      }
    }
  }
})

export const selectCosts = (state) => state.costs;
export const { setWood, setFood, setGold, toggleWood, toggleFood, toggleGold } = costsSlice.actions;
export default costsSlice.reducer;
