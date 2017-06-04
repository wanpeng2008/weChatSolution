import { AppParcelFrontPage } from './app.po';

describe('app-parcel-front App', () => {
  let page: AppParcelFrontPage;

  beforeEach(() => {
    page = new AppParcelFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
