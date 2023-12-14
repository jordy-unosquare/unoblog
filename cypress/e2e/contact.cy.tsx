type ChainableInputElement = Cypress.Chainable<JQuery<HTMLInputElement>>;

const submitAlias = 'submit';

export const mockResponseStatusCode = (statusCode: number) =>
  cy
    .intercept('POST', 'http://localhost:4200/api/contact', { statusCode })
    .as(submitAlias);

export const assertSubmitted = (submitted: boolean) =>
  cy.get(submitAlias).should(submitted ? 'not.be.null' : 'be.null');

export const clickSubmitButton = () => cy.get('button').click();


describe("contact page", ()=>{
  beforeEach(() => cy.visit('http://localhost:3000/contact'));

  it('Contact form fields should be empty by default', () => {
    cy.get('[data-testid="contactName"]').should('be.empty')
    cy.get('[data-testid="contactEmail"]').should('be.empty')
    cy.get('[data-testid="contactMessage"]').should('be.empty')
  });

  it('form fields should have errors for missing fields', () => {
    cy.get('[data-testid="contactName"]').invoke('prop', 'validity').should('deep.include', { valueMissing: true })
    cy.get('[data-testid="contactEmail"]').invoke('prop', 'validity').should('deep.include', { valueMissing: true })
    cy.get('[data-testid="contactName"]').invoke('prop', 'validity').should('deep.include', { valueMissing: true })
  });

  it('email field should have an error for an incorrect email address', () => {
    cy.get('[data-testid="contactEmail"]').type('pablo.armp');
    cy.get('[data-testid="contactEmail"]').invoke('prop', 'validity').should('deep.include', { typeMismatch: true })
  });
})

describe('Submitting a valid form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact');
    cy.get('[data-testid="contactName"]').type('Pablo');
    cy.get('[data-testid="contactEmail"]').type('pablo.armp@gmail.com');
    cy.get('[data-testid="contactMessage"]').type('Mas info!');
    mockResponseStatusCode(204);
    clickSubmitButton();
  });
  it('should send a POST request to the APi', () => assertSubmitted(true));
  it('should display a success message', () => {
    cy.window()
      .its('console')
      .then((console) => {
        cy.spy(console, 'log').as('log')
      })
  });
});

