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

describe("Inventory page component", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        const login = new loginPage();
        login.loginSuccess();
    });

    it("Should add product to cart", () => {
        cy.get(".inventory_item").first();
        cy.get(".btn_primary.btn_inventory").first().click();
        cy.get(".fa-layers-counter.shopping_cart_badge").should("be.visible");
    });

    it("should add more product to cart", () => {
        cy.get(".inventory_item").first();
        cy.get(".btn_primary.btn_inventory").first().click();
        cy.get(".btn_primary.btn_inventory").last().click();
        cy.get(".fa-layers-counter.shopping_cart_badge").should("be.visible");
    });

    it("should remove product to cart", () => {
        cy.get(".inventory_item").first();
        cy.get(".btn_primary.btn_inventory").first().click();
        cy.get(".btn_secondary.btn_inventory").first().click();
        cy.get(".fa-layers-counter.shopping_cart_badge").should("not.exist");
    });

    it("should change page when click at a product pic", () => {
        cy.get(".inventory_item").first().find("div.inventory_item_img").click();
        cy.url().should("include",'inventory-item.html?id=4')
    });

    it("should change when click filters", () => {
        cy.get(".inventory_item").first().find(".inventory_item_name").should("have.text",'Sauce Labs Backpack');
        cy.get(".product_sort_container").select("Name (Z to A)").should("have.value", "za");
        cy.get(".inventory_item").first().find(".inventory_item_name").should("have.text","Test.allTheThings() T-Shirt (Red)");
        cy.get(".product_sort_container").select("Price (low to high)").should("have.value", "lohi");
        cy.get(".inventory_item").first().find(".inventory_item_name").should("have.text","Sauce Labs Onesie");
        cy.get(".product_sort_container").select("Price (high to low)").should("have.value", "hilo");
        cy.get(".inventory_item").first().find(".inventory_item_name").should("have.text","Sauce Labs Fleece Jacket");
    });
});
describe("Sorting filter component", () => {});

describe("Address component", () => {});

describe("E2E", () => {});
