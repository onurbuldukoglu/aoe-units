import costsReducer, { 
  setWood, 
  setFood, 
  setGold, 
  toggleWood, 
  toggleFood, 
  toggleGold } from './costsSlice';

describe('costs reducer', () => {
  const initialState = {
    costs: { Wood: { min: 10, max: 300, active: false }, Food: { min: 120, max: 2, active: false }, Gold: { min: '', max: -12, active: undefined } }
  };
  it('should handle initial state', () => {
    expect(costsReducer(undefined, { type: 'unknown' })).toEqual({
      costs: { Wood: { min: 0, max: 200, active: true }, Food: { min: 0, max: 200, active: true }, Gold: { min: 0, max: 200, active: true } }
    });
  });

  it('should handle setting wood cost', () => {
    const actual = costsReducer(initialState, setWood({ costs: {min: 16, max: 21, active: false} }));
    expect(actual.costs.Wood).toEqual({min: 16, max: 21, active: false});
  })

  it('should handle setting food cost', () => {
    const actual = costsReducer(initialState, setFood({ costs: {min: 15, max: 191, active: false} }));
    expect(actual.costs.Food).toEqual({min: 15, max: 191, active: false});
  })

  it('should handle setting gold cost', () => {
    const actual = costsReducer(initialState, setGold({ costs: {min: 150, max: 167, active: true} }));
    expect(actual.costs.Gold).toEqual({min: 150, max: 167, active: true});
  })

  it('should handle toggling on wood filter', () => {
    const actual = costsReducer(initialState, toggleWood(true));
    expect(actual.costs.Wood.active).toEqual(true);
  })

  it('should handle toggling off wood filter', () => {
    const actual = costsReducer(initialState, toggleWood(false));
    expect(actual.costs.Wood).toEqual({ min: 0, max: 200, active: false });
  })
  
  it('should handle toggling on food filter', () => {
    const actual = costsReducer(initialState, toggleFood(true));
    expect(actual.costs.Food.active).toEqual(true);
  })

  it('should handle toggling off food filter', () => {
    const actual = costsReducer(initialState, toggleFood(false));
    expect(actual.costs.Food).toEqual({ min: 0, max: 200, active: false });
  })

  it('should handle toggling on gold filter', () => {
    const actual = costsReducer(initialState, toggleGold(true));
    expect(actual.costs.Gold.active).toEqual(true);
  })

  it('should handle toggling off gold filter', () => {
    const actual = costsReducer(initialState, toggleGold(false));
    expect(actual.costs.Gold).toEqual({ min: 0, max: 200, active: false });
  })
});