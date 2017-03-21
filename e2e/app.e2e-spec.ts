import { DvdRentalAngularFrontEndPage } from './app.po';

describe('dvd-rental-angular-front-end App', () => {
  let page: DvdRentalAngularFrontEndPage;

  beforeEach(() => {
    page = new DvdRentalAngularFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
