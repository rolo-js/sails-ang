import { browser, by, element } from 'protractor';

export class SailsAngPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aff-root h1')).getText();
  }
}
