describe('Blog ', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
  });

  it('front page can be opened', function () {
    cy.contains('blogs');
  });

  it('app displays login form when opening', function () {
    cy.get('#login-form');
  });
});

describe('User', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');

    const testUser = {
      name: 'Test User',
      username: 'testuser',
      passwordHash: 'salasana',
    };

    const secondTestUser = {
      name: 'Second User',
      username: 'testuser2',
      passwordHash: 'salasana',
    };

    cy.request('POST', 'http://localhost:3001/api/users', testUser);
    cy.request('POST', 'http://localhost:3001/api/users', secondTestUser);
  });

  it('can not login with invalid credentials', function () {
    cy.get('#username').type('testuser');
    cy.get('#password').type('salasana1');
    cy.contains('Login').click();
    cy.contains('log in to application');
    cy.get('.error').should('have.css', 'border', '2px solid rgb(250, 58, 58)');
  });

  it('can login with valid credentials', function () {
    cy.login({ username: 'testuser', password: 'salasana' });
  });
});

describe('When logged in', function () {
  it('user can create a new blogs', function () {
    cy.login({ username: 'testuser', password: 'salasana' });
    cy.createBlog({ title: 'Test title', author: 'Test author', url: 'test.com' });
    cy.createBlog({ title: 'Second test title', author: 'Second test author', url: 'test2.com' });
    cy.contains('Test title by Test author');
  });
});

describe('Blogs can be', () => {
  it('liked', function () {
    cy.get('.blog-container .toggle-btn').last().click();
    cy.get('.like-btn').click();
  });

  it('and they are sorted by likes', function () {
    cy.visit('http://localhost:3000');
    cy.login({ username: 'testuser', password: 'salasana' });
    cy.get('.blog-container').then((blogContainer) => {
      cy.wrap(blogContainer[0]).should('contain', 'Second test title by Second test author');
    });
  });
});

describe('Removing blog', function () {
  it('can not be done by user that does not own the blog', function () {
    cy.login({ username: 'testuser2', password: 'salasana' });
    cy.get('.toggle-btn').first().click();
    cy.get('.remove-btn').should('not.exist');
  });

  it('can be done by the owner of the blog', function () {
    cy.login({ username: 'testuser', password: 'salasana' });
    cy.get('.toggle-btn').first().click();
    cy.get('.remove-btn').first().click();
    cy.get('.confirm-delete-btn').click();
    cy.get('.success').should('have.css', 'border', '2px solid rgb(31, 124, 31)');
  });
});
