import reducer from './reducer';

import {
  setRegions,
  selectRegion,
} from './actions';

describe('reducer', () => {
  describe('default state', () => {
    it('returns initialState', () => {
      const state = reducer();

      const { regions } = state;

      expect(regions).toHaveLength(0);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const state = reducer({
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      }, selectRegion(1));

      expect(state.selectRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });
});
