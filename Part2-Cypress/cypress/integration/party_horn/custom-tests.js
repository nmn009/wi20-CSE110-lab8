describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(() => {
      const $el = Cypress.$('#volume-slider');
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(() => {
      const $el = Cypress.$('#volume-number');
      expect($el).to.have.value(33);
    });
  });

  it('Audio volume changes when slider changes', () =>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(() => {
      const $el = Cypress.$('#horn-sound');
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound changes when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(() => {
      const $el = Cypress.$('#sound-image');
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/images/party-horn.svg');
    });

    cy.get('#horn-sound').then(() => {
      const $el = Cypress.$('#horn-sound');
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/audio/party-horn.mp3')
    });
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/icons/volume-level-0.svg')
    });

    cy.get('#volume-number').clear().type(10);
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/icons/volume-level-1.svg')
    });

    cy.get('#volume-number').clear().type(50);
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/icons/volume-level-2.svg')
    });

    cy.get('#volume-number').clear().type(100);
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/wi20-CSE110-lab8/Part2-Cypress/assets/media/icons/volume-level-3.svg')
    });
  });

  it('The honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });

    cy.get('#volume-number').type('CSE110');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.be.disabled;
    });
  });

  it('An error is shown when typing a number outside of the given range for the volume text input', () =>{
    cy.get('#volume-number').clear().type(-1);
    cy.get('#volume-number:invalid').should('not.contain', '-');

  });
});
