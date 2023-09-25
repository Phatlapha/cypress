export class loginPage {
    elements = {
        inputUser: () => cy.get("input#user-name.form_input"),
        inputPassword: () => cy.get("input#password.form_input"),
        loginButton: () => cy.get("#login-button"),
    };

    username = {
        success: "standard_user",
        fail: "standard_userrry"
    }

    password = {
        success: "secret_sauce",
        fail: "secret_sauceses"
    }

    loginSuccess() {
        this.elements.inputUser().type(this.username.success);
        this.elements.inputPassword().type(this.password.success);
        this.elements.loginButton().click();
    };

    loginFail() {
        this.elements.inputUser().type(this.username.fail);
        this.elements.inputPassword().type(this.password.fail);
        this.elements.loginButton().click();
    }
}
