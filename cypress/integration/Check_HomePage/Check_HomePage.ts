/// <reference types="Cypress" />

const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

Given(`homepage is configured`, () => {});

Then(`this test should work just fine!`, () => {
  cy.visit('/');
  cy.get('img');
  cy.contains('p', 'Running in');
  cy.contains('a', 'Learn React');
});
