import { Page } from '@playwright/test';
import homePage from './homePage';


export default class PageManager {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get homePage() {
    return new homePage(this.page);
  }
  
}