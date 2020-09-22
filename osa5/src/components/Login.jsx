import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '290px',
    marginBottom: '1em',
  };

  const labelStyles = {
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

    setUserCredentials({ username: '', password: '' });
  };

  return (
    <>
      <h2>log in to application</h2>
      <form style={formStyles} onSubmit={handleLogin}>
        <div>
          <label style={labelStyles} htmlFor="username">
            Username:
            <input
              onChange={handleUser}
              value={userCredentials.username}
              type="text"
              name="username"
            />
          </label>
        </div>
        <div>
          <label style={labelStyles} htmlFor="password">
            Password:
            <input
              onChange={handleUser}
              value={userCredentials.password}
              type="password"
              name="password"
              autoComplete="on"
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
