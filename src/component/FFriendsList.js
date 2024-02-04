import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/friends', {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      setFriends(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map(friend => (
        <div key={friend.id}>{friend.name} - {friend.email}</div>
      ))}
    </div>
  );
}

export default FriendsList;
