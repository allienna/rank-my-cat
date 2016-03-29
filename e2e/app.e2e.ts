import { RankMyCatPage } from './app.po';

describe('rank-my-cat App', function() {
  let page: RankMyCatPage;

  beforeEach(() => {
    page = new RankMyCatPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rank-my-cat Works!');
  });
});
