import React from 'react';

const formStyles = {
  width: '270px',
  marginBottom: '1em',
};

const inputStyles = {
  marginBottom: '.2em',
  display: 'flex',
  justifyContent: 'space-between',
};

const login = (props) => {
  return (
    <>
      <h2>log in to application</h2>
      <form style={formStyles} onSubmit={(event) => props.handleLogin(event)}>
        <div style={inputStyles}>
          <label htmlFor="username">Username:</label>
          <input
            onChange={(event) => props.handleUser(event)}
            value={props.userCredentials.username}
            type="text"
            name="username"
          />
        </div>
        <div style={inputStyles}>
          <label htmlFor="password">Password:</label>
          <input
            onChange={(event) => props.handleUser(event)}
            value={props.userCredentials.password}
            type="password"
            name="password"
            autoComplete="on"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default login;
