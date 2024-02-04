import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axios.post('/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/friends');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
