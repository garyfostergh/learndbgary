import { LearndbPage } from './app.po';

describe('learndb App', function() {
  let page: LearndbPage;

  beforeEach(() => {
    page = new LearndbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
