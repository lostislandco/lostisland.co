import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="hero">
    We help <Link to="/work">startups</Link> and <Link to="/work">established companies</Link> <br />
    invent, build, and launch their next product or <br />venture.
    <br /><br />
    We also build startups of <Link to="/ventures">our own</Link>.
  </div>
);

export default Home;
