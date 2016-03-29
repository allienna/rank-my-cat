export class RankMyCatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rank-my-cat-app p')).getText();
  }
}
