import { Page } from "@playwright/test"
export default class loginPage{
   constructor(page) {this.page = page }
   async url(){
      await this.page.goto("https://demo.nopcommerce.com/")
   }
   async loginLink(loginLInk){
      await this.page.getByRole('link', { name: 'Log in' }).click();

   }
   async enterEmail(email){
      await this.page.locator("#Email").type(email);
   }
   async enterPassword(password){
      await this.page.locator("#Password").type(password);
   }


   async clickOnBtn(){
      await this.page.getByRole('button', { name: 'Log in' }).click();

   }
   

}