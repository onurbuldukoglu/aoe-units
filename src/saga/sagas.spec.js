import { filterUnit } from './sagas';

describe('sagas', () => {
  it('should filter units by name', () => {
    const mockData = [{ name: 'Archer', attack: 12 }, {name: 'Knight', attack: 20}, {name: 'Onager', attack: 40}]
    const filtered = filterUnit(mockData, 'Knight');
    expect(filtered).toEqual([{name: 'Knight', attack: 20}]);
  })
})
