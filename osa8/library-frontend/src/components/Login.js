import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../queries';

// , {
//   refetchQueries: [ { query: ALL_AUTHORS_AND_BOOKS } ]
//  }

// , {
//   onError: (error) => {
//     setError(error.graphQLErrors[0].message);
//   },
// }

const Login = ({ show, setToken }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [login, result] = useMutation(LOGIN);

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem('token', token);
    }
  }, [result.data]); // eslint-disable-line

  if (!show) {
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    login({ variables: { username: credentials.username, password: credentials.password } });
  };

  const handleCredentials = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={credentials.username}
          onChange={(e) => handleCredentials(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
        />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
