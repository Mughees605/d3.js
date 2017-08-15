import { AngluarChartPage } from './app.po';

describe('angluar-chart App', () => {
  let page: AngluarChartPage;

  beforeEach(() => {
    page = new AngluarChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
