import detailReducer, {
  setDetail,
  setUnit,
} from './detailSlice';

describe('details reducer', () => {
  const initialState = {
    detail: { name: 'Archer', unit: { id: 1, attack: 50 }}
  }
  it('should handle initial state', () => {
    expect(detailReducer(undefined, { type: 'unknown' })).toEqual({
      detail: { name: '', unit: {}}
    });
  });
  
  it('should handle setting detail state', () => {
    const actual = detailReducer(initialState, setDetail({ value: 'Knight' }));
    expect(actual.detail.name).toEqual('Knight')
  })

  it('should handle setting unit state', () => {
    const actual = detailReducer(initialState, setUnit({ id: 13, attack: 41, accuracy: 4 }));
    expect(actual.detail.unit).toEqual({ id: 13, attack: 41, accuracy: 4 })
  })
});