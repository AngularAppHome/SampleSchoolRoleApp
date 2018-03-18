import { BlankCliAppPage } from './app.po';

describe('blank-cli-app App', () => {
  let page: BlankCliAppPage;

  beforeEach(() => {
    page = new BlankCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
