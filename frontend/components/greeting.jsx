import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return(
      <header>
        <h2>Hi, {currentUser.username}!</h2>
        <button onClick={logout}>Log Out</button>
      </header>
    );
  } else {
    return (
      <header>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/signup">Sign up!</Link>
      </header>
    );
  }
};

export default Greeting;
