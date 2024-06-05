///<reference types="cypress"/>

describe('funcionalidade cadastro', () => {
  it('Dese realizar caadastro com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#reg_email').type('carlos@ebac.com')
    cy.get('#reg_password').type('Carlos@ebac1234')
    cy.get('input[name="register"]').click()
    cy.contain('h1', "Minha conta").to.be
  })
})