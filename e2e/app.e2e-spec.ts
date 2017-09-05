import { MajesticLlamaPage } from './app.po';

describe('majestic-llama App', () => {
  let page: MajesticLlamaPage;

  beforeEach(() => {
    page = new MajesticLlamaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
