/// <reference types="cypress" />

describe("Log in page component", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
    });
    it("should log in when input correct username and password", () => {
        const inputUser = "input#user-name.form_input";
        const inputPassword = "input#password.form_input";
        cy.get(inputUser).type("standard_user");
        cy.get(inputPassword).type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".product_label").should("be.visible");
        cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
    });

    it("should not log in when input incorrect username", () => {
        cy.get("input#user-name.form_input").type("standard_userrry");
        cy.get("input#password.form_input").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });

    it("should not log in when input incorrect password", () => {
        cy.get("input#user-name.form_input").type("standard_user");
        cy.get("input#password.form_input").type("secret_sauceses");
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });

    it("should not log in when input incorrect username and password", () => {
        cy.get("input#user-name.form_input").type("standard_11user");
        cy.get("input#password.form_input").type("secretary_sauce");
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });

    it("should not log in when input nothing", () => {
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });

    it("should not log in when input only username", () => {
        cy.get("input#user-name.form_input").type("standard_user");
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });

    it("should log not in when input only password", () => {
        cy.get("input#password.form_input").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get("h3").should("be.visible");
    });
});

describe("Inventory page component", () => {});

describe("Sorting filter component", () => {});

describe("Address component", () => {});

describe("E2E", () => {});
