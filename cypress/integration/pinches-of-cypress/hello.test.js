/// <reference types="cypress" />

const email = 'titikgameindonesia@gmail.com';
const password = 'Matadajal2';


describe('Login Test', () => {
  it('Login Test', () => {
    // cy.visit('https://www.instagram.com')
    // cy.get('input[name="username"]').type(usernmae);
    // cy.get('input[name="password"]').type(password);
    // cy.get('button[type="submit"]').click();
    // cy.wait(5000);
    // cy.get('input[placeholder="Search"]').type('muhibbudins_', {force: true})
    // cy.wait(1000);
    // cy.contains('muhibbudins_').click()
    // cy.wait(5000);
    // if ( cy.contains('Follow') ) {
    //     cy.contains('Follow').click({force: true})
    // }

    cy.visit('https://github.com/login')
    cy.get('input[name="login"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
    // cy.visit('https://github.com/new');
    // cy.get('input[name="repository[name]"]').type('cypress-test-repo2');
    // cy.get('input[name="repository[description]"]').type('cypress-test-repo2');
    // cy.get('input[name="repository[auto_init]"]:first').click({force: true}); // Add a Readme FIle
    // cy.contains('Create repository').click();
    cy.visit('https://github.com/percobaansatu/cypress-test-repo2');
    // cy.visit('https://github.com/percobaansatu/cypress-test-repo2/new');
    cy.contains('Add file').click();
    cy.contains('Create new file').click();
    cy.get('input[name="filename"]').type('percobaan.md', {force: true});
    cy.get('*[class^="CodeMirror-code"]').type('# Percobaan',);
    cy.get('input[name="message"]').type('fetch percobaan.md');
    cy.get('button[id="submit-file"]').click()
    

    



  })


  
})