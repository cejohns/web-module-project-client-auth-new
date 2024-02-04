import React, { useState } from 'react';
import axios from 'axios';

function AddFriend() {
  const [friend, setFriend] = useState({ name: '', age: '', email: '' });
  const [error, setError] = useState(''); // State to store any error message
  const [success, setSuccess] = useState(''); // State to store success message

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const addFriend = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    // Reset any previous success or error messages
    setError('');
    setSuccess('');

    axios.post('http://localhost:9000/api/friends', friend, {
      headers: {
        Authorization: token
      }
    })
    .then(() => {
      // handle success
      setSuccess('Friend added successfully!'); // Set a success message
      setFriend({ name: '', age: '', email: '' }); // Reset the form
      // You might also want to redirect or do something else here
    })
    .catch(() => {
      // handle error
      setError('Failed to add friend. Please try again.'); // Set an error message
      // If the error is more specific, you might want to display it:
      // setError(err.response.data.error);
    });
  };

  return (
    <>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={addFriend}>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Add Friend</button>
      </form>
    </>
  );
}

export default AddFriend;
