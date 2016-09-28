import React from 'react';
import { Link } from 'react-router';

import '../assets/app.css';

const App = props => (
  <div className="app">
    <header>
      <div className="logo">
        <Link to="/">
          <img src={require('../assets/logo.svg')} title="Lost Island" role="presentation" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/ventures">Ventures</Link></li>
          <li><Link to="/join-us">Join us</Link></li>
        </ul>
      </nav>
    </header>

    {props.children}
  </div>
);

export default App;
