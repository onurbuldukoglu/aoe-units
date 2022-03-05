import { sagaActions } from './sagaActions';

describe('saga actions', () => {
  it('should export actions', () => {
    expect(sagaActions.DETAIL).toEqual('DETAIL');
  })
})
