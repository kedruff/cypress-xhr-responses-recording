// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add(`recordResponses`, (cb, url) => {
  return cy
    .server({
      onResponse: response => {
        const myPaths = parse(response.url).path;
        cb({
          url: myPaths,
          method: response.method,
          data: response.response.body,
        });
      }
    })
    .route({ method: 'GET', url: url })
    .route({ method: 'POST', url: url })
    .route({ method: 'PUT', url: url });
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
