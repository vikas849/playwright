import { Page } from "@playwright/test"
export default class cart{
   constructor(page) {this.page = page }
   async url(){
      await this.page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fbuild-your-own-computer")
   }
   async clickOnBooks(clickOnBooks){
      await this.page.getByRole('link', { name: 'Books' }).click();
   }

   async product(book){
      await this.page.getByRole('heading', { name: 'Fahrenheit 451 by Ray Bradbury' }).getByRole('link', { name: 'Fahrenheit 451 by Ray Bradbury' }).click();
      await this.page.locator('#add-to-cart-button-37').click();
      await this.page.locator('#add-to-cart-button-37').click();
      await this.page.getByTitle('Close').click();
      await this.page.getByRole('link', { name: 'Shopping cart (1)' }).click();
       
      await this.page.getByLabel('I agree with the terms of service and I adhere to them unconditionally').check();
      await this.page.getByRole('button', { name: 'Checkout' }).click();
   }
   

}