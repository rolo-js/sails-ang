import { SailsAngPage } from './app.po';

describe('sails-ang App', () => {
  let page: SailsAngPage;

  beforeEach(() => {
    page = new SailsAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aff!!');
  });
});
