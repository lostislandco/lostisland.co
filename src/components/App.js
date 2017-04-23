import React from 'react';
import { Link } from 'react-router';

import '../assets/flexboxgrid.css';
import '../assets/app.css';
import logo from '../assets/logo.svg';

const App = props => (
  <div className="container-fluid app">
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} title="Lost Island" role="presentation" />
        </Link>
      </div>
      {/*<nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/ventures">Ventures</Link></li>
          <li><Link to="/join-us">Join us</Link></li>
        </ul>
      </nav>*/}
    </header>

    {props.children}

    <footer className="work row">
      <div className="col-xs-3">
        <h3>L+I</h3>
      </div>

      <div className="col-xs-9">
        <div className="row">
          <ul className="col-xs-6">
            <li>(+46) 700 82 1951</li>
            <li>
              <a href="mailto:hello@lostisland.co">hello@lostisland.co</a>
            </li>
          </ul>
          <ul className="col-xs-3 links">
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="col-xs-3 links">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Github</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
