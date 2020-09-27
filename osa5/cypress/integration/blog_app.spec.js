describe('Note ', function describeCallback() {
  it('front page can be opened', function testCallBack() {
    cy.visit('http://localhost:3000');
    cy.contains('Notes');
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2020');
  });
});
