import unitsReducer, {
  setUnits
} from './unitsSlice';
import unitList from "../../data/age-of-empires-units.json";

describe('units reducer', () => {
  const initialState = {
    units: []
  }

  it('should handle initial state', () => {
    expect(unitsReducer(undefined, { type: 'unknown' })).toEqual({
      units: unitList.units
    })
  })

  it('should handle setting units list', () => {
    const actual = unitsReducer(initialState, setUnits([1, 'a', { k: 'v' }]));
    expect(actual.units).toEqual([1, 'a', { k: 'v' }])
  })
})
