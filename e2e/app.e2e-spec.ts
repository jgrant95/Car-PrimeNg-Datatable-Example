import { ServerPrimengTablePage } from './app.po';

describe('server-primeng-table App', () => {
  let page: ServerPrimengTablePage;

  beforeEach(() => {
    page = new ServerPrimengTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
