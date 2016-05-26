export class HolaAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hola-angular-2-app h1')).getText();
  }
}
