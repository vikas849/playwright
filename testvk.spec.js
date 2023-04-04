import {expect, test} from "@playwright/test";
import registerPage from   "../pages/registeration.spec";
import addtocart from "../pages/addtocart.spec";
import loginPage  from "../pages/login.spec";

//+ve test case
test("registerOne",async({page})=> {
   const registerOne=new registerPage(page);
   
   registerOne.url();
   await registerOne.enterFirstName("vikas");
   await registerOne.lastName("kumar");
   //random mail generator
   var randomEmail = "abc"+parseInt(Math.random()*200000)+"@yopmail.com";
   await registerOne.email(randomEmail);
   await registerOne.password("vikas01");
   await registerOne.confirmPassword("vikas01");
   await registerOne.registerButton();
   //expect registration complete should appear
   await expect(
      page.getByText("Your registration completed")
   ).toBeVisible();
 
});

//-ve tc  specified email already exist
test("register",async({page})=> {
   const register=new registerPage(page);
   
   register.url();
   await register.enterFirstName("vikas");
   await register.lastName("kumar");
   await register.email("abcadsf@yopmail.com");
   await register.password("vikas01");
   await register.confirmPassword("vikas01");
   await register.registerButton();

   //ecpect validtion for email already exist
   await expect(
      page.getByText("The specified email already exists")
   ).toBeVisible();
 
})

//+ve check for required field when mandatory fields are left blank
test("registerThree",async({page})=> {
   const registerThree=new registerPage(page);
   
   registerThree.url();
   await registerThree.enterFirstName("");
   await registerThree.lastName("");
   await registerThree.registerButton();

 
   await expect(
      page.getByText("First name is required.")
   ).toBeVisible();
 
});




//global scope
const email ="vikas01@yopmail.com";
const password="vikas01@yopmail.com";

//+ve tc with valid login credentials
test ("login_01",async({page})=>{
   const login = new loginPage(page);
   login.url();
   await login.loginLink();
   await login.enterEmail(email);
   await login.enterPassword(password);
   await login.clickOnBtn();
   expect (await page.title()).toBe("nopCommerce demo store");
}
)

//-ve test case when email left blank validation error "Please enter your email" should appear
test ("login_02",async({page})=>{
   const login = new loginPage(page);
   login.url();
   await login.loginLink();
   await login.enterEmail("");
   await login.enterPassword(password);
   await login.clickOnBtn();
   await expect(
      page.getByText("Please enter your email")
   ).toBeVisible();
}
)

//tc for adding product to cart
test("add2cart",async({page})=>{
   const add2cart=new addtocart(page);
   add2cart.url();
   await add2cart.clickOnBooks();
   await add2cart.product();
});