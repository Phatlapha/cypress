/// <reference types="cypress" />
import { loginPage } from "../pageObject/loginPage";

describe("Log in page component", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
    });
    it("should log in when input correct username and password", () => {
        const login = new loginPage();
        login.loginSuccess();
        cy.get(".product_label").should("be.visible");
        cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
    });

    it("should not log in when input incorrect username", () => {
        const login = new loginPage();
        login.elements.inputUser().type(login.username.fail);
        login.elements.inputPassword().type(login.password.success);
        login.elements.loginButton().click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("should not log in when input incorrect password", () => {
        const login = new loginPage();
        login.elements.inputUser().type(login.username.success);
        login.elements.inputPassword().type(login.password.fail);
        login.elements.loginButton().click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("should not log in when input incorrect username and password", () => {
        const login = new loginPage();
        login.loginFail();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("should not log in when input nothing", () => {
        const login = new loginPage();
        login.elements.loginButton().click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Username is required");
    });

    it("should not log in when input only username", () => {
        const login = new loginPage();
        login.elements.inputUser().type(login.username.success);
        login.elements.loginButton().click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Password is required");
    });

    it("should log not in when input only password", () => {
        const login = new loginPage();
        login.elements.inputPassword().type(login.password.success);
        login.elements.loginButton().click();
        cy.get("[data-test='error']").should("be.visible");
        cy.get("[data-test='error']").should("have.text", "Epic sadface: Username is required");
    });
});

describe("Inventory page component", () => {});

describe("Sorting filter component", () => {});

describe("Address component", () => {});

describe("E2E", () => {});
