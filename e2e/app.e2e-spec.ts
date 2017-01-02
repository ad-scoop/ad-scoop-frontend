import { AdscoopPage } from './app.po';

describe('adscoop App', function() {
  let page: AdscoopPage;

  beforeEach(() => {
    page = new AdscoopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
