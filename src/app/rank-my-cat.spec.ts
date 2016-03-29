import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RankMyCatApp} from '../app/rank-my-cat';

beforeEachProviders(() => [RankMyCatApp]);

describe('App: RankMyCat', () => {
  it('should have the `defaultMeaning` as 42', inject([RankMyCatApp], (app: RankMyCatApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RankMyCatApp], (app: RankMyCatApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

