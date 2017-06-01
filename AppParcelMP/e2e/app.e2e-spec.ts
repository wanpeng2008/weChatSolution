import { AppParcelMPPage } from './app.po';

describe('app-parcel-mp App', () => {
  let page: AppParcelMPPage;

  beforeEach(() => {
    page = new AppParcelMPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
