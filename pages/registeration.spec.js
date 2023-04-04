import { page } from "@playwright/test";
export default class registerPage{

  
   constructor(page) {this.page = page }
   async url(){
      await this.page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fbuild-your-own-computer")
   }
   async enterFirstName(firstname){
      await this.page.locator("#FirstName").type(firstname);
   }

   async lastName(lastName){
      await this.page.locator("#LastName").type(lastName);
   }
   async email(email){
      await this.page.locator("#Email").type(email);
   }
   

   
   async password(password){
      await this.page.locator("#Password").type(password);
   }

   async confirmPassword(confirmPassword){
      await this.page.locator("#ConfirmPassword").type(confirmPassword);
   }
   async registerButton(registerButton){
      await this.page.locator("#register-button").click();
   }
   
}


