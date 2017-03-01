import { VscodeIssuePage } from './app.po';

describe('vscode-issue App', () => {
  let page: VscodeIssuePage;

  beforeEach(() => {
    page = new VscodeIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
