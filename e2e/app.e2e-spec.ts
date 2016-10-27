import { LittleCrmPage } from './app.po';

describe('little-crm App', function() {
  let page: LittleCrmPage;

  beforeEach(() => {
    page = new LittleCrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
