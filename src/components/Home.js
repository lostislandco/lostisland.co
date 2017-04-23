import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <section className="hero">
      We help <Link to="/work">startups</Link> and <Link to="/work">established companies</Link> <br />
      invent, build, and launch their next product or <br />venture.
      <br /><br />
      We also build startups of <Link to="/ventures">our own</Link>.
    </section>

    <section className="work row">
      <div className="col-xs-3">
        <h3>Working on</h3>
      </div>

      <div className="col-xs-9">
        <div className="row">
          <span className="col-xs-6">Expressen</span>
          <span className="col-xs-3">Client</span>
          <span className="col-xs-3">Late 2016</span>
        </div>

        <div className="row">
          <span className="col-xs-6">iPhone and Android App</span>
          <span className="col-xs-3">Client</span>
          <span className="col-xs-3">Late 2016</span>
        </div>
      </div>
    </section>

    <section className="case row">
      <div className="col-xs-3">
        <h3>Case studies</h3>
      </div>

      <div className="col-xs-9">
        <div className="row">
          <div className="col-xs-6">
            <img src={require('../img/uber.png')} title="Fastlane-Uber" role="presentation" />
            <p>
              <span>Fastlane</span>
              Wake is a private space for you to
              share and discuss design work with your team.
              It is the perfect tool to enhance the workflow of design
              teams across the globe.
            </p>
          </div>

          <div className="col-xs-6">
            <img src={require('../img/tomasgunnarsson.png')} title="Tomas Gunnarsson - Bli peppad" role="presentation" />
            <p>
              <span>Bli peppad</span>
              Wake is a private space for you to
              share and discuss design work with your team.
              It is the perfect tool to enhance the workflow of design
              teams across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/*<section className="office row">
      <div className="col-xs-3">
        <h3>Office</h3>
      </div>

      <div className="col-xs-9">
        <div className="row">
          <div className="col-xs-12">
            <img src={require('../img/office.png')} title="Office" role="presentation" />
          </div>
        </div>
      </div>
    </section>*/}
  </div>
);

export default Home;
