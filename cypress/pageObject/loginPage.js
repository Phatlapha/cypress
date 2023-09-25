export class loginPage {
    elements = {
        inputUser: () => cy.get("input#user-name.form_input"),
        inputPassword: () => cy.get("input#password.form_input"),
        loginButton: () => cy.get("#login-button"),
    };

    loginSuccess(){
        this.elements.inputUser().type("standard_user");
        this.elements.inputPassword().type("secret_sauce");
        this.elements.loginButton().click();
    }
}

