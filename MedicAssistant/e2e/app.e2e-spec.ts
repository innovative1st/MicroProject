import { MedicAssistantPage } from './app.po';

describe('medic-assistant App', () => {
  let page: MedicAssistantPage;

  beforeEach(() => {
    page = new MedicAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
