import React from 'react';

const Navigation = ({ handlePage, token, logout }) => (
  <div>
    <button onClick={() => handlePage('authors')}>authors</button>
    <button onClick={() => handlePage('books')}>books</button>
    {token && (
      <>
        <button onClick={() => handlePage('add')}>add book</button>
        <button onClick={() => handlePage('recommend')}>recommend</button>
      </>
    )}
    {!token ? (
      <button onClick={() => handlePage('login')}>login</button>
    ) : (
      <button onClick={() => logout()}>logout</button>
    )}
  </div>
);

export default Navigation;
