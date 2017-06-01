import { AppParcelClientPage } from './app.po';

describe('app-parcel-client App', () => {
  let page: AppParcelClientPage;

  beforeEach(() => {
    page = new AppParcelClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
