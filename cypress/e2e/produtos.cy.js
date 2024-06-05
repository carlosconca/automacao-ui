///<reference types="cypress"/>

describe('funcionalidade Produtos', () => {
  beforeEach('', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    
  })

  it('Dese selecionar o primiero produto da lista', () => {
    
    cy.get('.product-block')
    .firt()
    .click()
 
  })

  it('Dese selecionar o terceiro produto da lista', () => {
    
    cy.get('.product-block')
    .eq(3)
    .click()
 
  })

  it('Dese selecionar o ultimo produto da lista', () => {
    
    cy.get('.product-block')
    .last()
    .click()
 
  })

  it.skip('Dese selecionar um produto da lista pelo nome', () => {
    
    cy.get('.product-block')
    .contains('Frankie Sweatshirt')
    .click()

    cy.get('#tab-title-description > a').should('contain','Descrição')
 
  })
})