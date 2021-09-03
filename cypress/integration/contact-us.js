/// <reference types="cypress" />

describe(" Test Contact Us Page Form via website* ", () => {
    //Positive Test
    it("Should be able to submit a successfull submission via contact us form", () => {
        cy.visit("https://marvelapp.com/contact-us");
        //cy.get('#contact-us').click({force: true})
        cy.get('#hs-eu-confirmation-button').click();
        cy.get('[name="name"]').type("Oren Schuller Rauch");
        cy.get('[name="email"]').type("oren@gmail.com")
        cy.get('[name="message"]').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
    })

    //Negative Test
    it("Should not be able to submit a successfull submission via contact us form, as all fields are required", () => {
        cy.visit("https://marvelapp.com/contact-us");
        cy.get('[name="name"]').type("Oren");
        cy.get('[name="message"]').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
    })
})