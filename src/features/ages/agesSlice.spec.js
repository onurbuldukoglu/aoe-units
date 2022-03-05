import agesReducer, {
  setAge,
  resetAge
} from './agesSlice';

describe('ages reducer', () => {
  const initialState = {
    age: 'Dark'
  };
  it('should handle initial state', () => {
    expect(agesReducer(undefined, { type: 'unknown' })).toEqual({
      age: '',
    });
  });

  it('should handle setting age', () => {
    const actual = agesReducer(initialState, setAge({value: 'Feudal'}));
    expect(actual.age).toEqual('Feudal');
  });

  it('should handle resetting age', () => {
    const actual = agesReducer(initialState, resetAge());
    expect(actual.age).toEqual('');
  });
});
