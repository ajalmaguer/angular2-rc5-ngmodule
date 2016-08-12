export class WebpackTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('w-root h1')).getText();
  }
}
