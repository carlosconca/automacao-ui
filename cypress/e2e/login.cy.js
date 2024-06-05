///<reference types="cypress"/>

describe('funcionalidade login', () => {

  beforeEach('', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  it('Dese realizar login co sucesso', () => {
    cy.get('#reg_email').type('carlos@ebac.com')
    cy.get('#reg_password').type('Carlos@ebac1234')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Ola, carlos')

  })

  it('Dese exibir uma mensagem de erro ao inserir usuário invalido', () => {
    cy.get('#reg_email').type('carlos@ebac')
    cy.get('#reg_password').type('Carlos@ebac1234')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')

  })

  it('Dese exibir uma mensagem de erro ao inserir senha invalido', () => {
    cy.get('#reg_email').type('carlos@ebac.com')
    cy.get('#reg_password').type('Carlos@ebac')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')
    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail carlos@ebac.com está incorreta')

  })
})