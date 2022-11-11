import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Learn about our project"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About our website</Link></h2>
          <h2 data-testid="heading"> </h2>
        </div>
      </header>
    </article>
  </Main>
);

export default About;
