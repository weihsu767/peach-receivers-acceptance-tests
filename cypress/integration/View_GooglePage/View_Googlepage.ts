
//const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

Given(`googlepage is showed`, () => {});

Then(`this page should work just fine!`, () => {
  cy.visit('https://www.google.com');
});
