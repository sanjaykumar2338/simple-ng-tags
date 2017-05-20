import { SimpleNgTagsPage } from './app.po';

describe('simple-ng-tags App', () => {
  let page: SimpleNgTagsPage;

  beforeEach(() => {
    page = new SimpleNgTagsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
