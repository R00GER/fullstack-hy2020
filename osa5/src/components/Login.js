import React, { useState } from 'react';

const Login = ({ login }) => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '290px',
    marginBottom: '1em',
  };
  
  const inputStyles = {
    marginBottom: '.2em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleUser = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(userCredentials);

    setUserCredentials({username: '', password: ''})
  }

  return (
    <>
      <h2>log in to application</h2>
      <form style={formStyles} onSubmit={handleLogin}>
        <div style={inputStyles}>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleUser}
            value={userCredentials.username}
            type="text"
            name="username"
          />
        </div>
        <div style={inputStyles}>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleUser}
            value={userCredentials.password}
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

export default Login;
