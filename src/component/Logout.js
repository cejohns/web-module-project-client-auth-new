import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Logout() {
  const history = useHistory();

  const logout = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
        Authorization: token
      }
    })
    .then(() => {
      localStorage.removeItem('token');
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <button onClick={logout}>Logout</button>
  );
}

export default Logout;
