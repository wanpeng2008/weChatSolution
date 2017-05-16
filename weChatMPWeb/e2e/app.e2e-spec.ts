import { WeChatMPWebPage } from './app.po';

describe('we-chat-mpweb App', () => {
  let page: WeChatMPWebPage;

  beforeEach(() => {
    page = new WeChatMPWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
