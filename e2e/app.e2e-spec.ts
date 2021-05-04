import { AppVideoGalleryOvnyPage } from './app.po';

describe('app-video-gallery-ovny App', () => {
  let page: AppVideoGalleryOvnyPage;

  beforeEach(() => {
    page = new AppVideoGalleryOvnyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
