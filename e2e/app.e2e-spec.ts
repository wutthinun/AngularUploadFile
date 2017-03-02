import { AngularUploadFilePage } from './app.po';

describe('angular-upload-file App', function() {
  let page: AngularUploadFilePage;

  beforeEach(() => {
    page = new AngularUploadFilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
