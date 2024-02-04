import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Navigation Links */}
          <Link to="/logout">Logout</Link>
          <Link to="/friends">Friends List</Link>
          <Link to="/friends/add">Add Friend</Link>
        </nav>
        
        <h2>Client Auth Project</h2>
        
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/friends/add" component={AddFriend} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
