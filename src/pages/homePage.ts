import { Locator as WebElement , Page, expect } from '@playwright/test';
import BasePage from './basePage';

export default class ArticlePage extends BasePage {
  readonly companyLogo: WebElement;
  readonly searchBox: WebElement;

  constructor(page: Page) {
    super(page);
    this.companyLogo = page.getByAltText('naveenopencart');
    this.searchBox = page.getByRole('textbox',{name:'search'});
  }

  async openHomePage() {
    await this.page.goto('/');
  }
}