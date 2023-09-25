export class loginPage {
    elements = {
        inputUser: () => cy.get("input#user-name.form_input"),
        inputPassword: () => cy.get("input#password.form_input"),
        loginButton: () => cy.get("#login-button"),
    };
}
