import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Our project personal website. New York based Stanford ICME graduate, '
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Our project work
          </p>
        </div>
      </header>
      <p> Welcome to our website, where we will try to describe ourselves. {' '}
        <Link to="/resume">Resume</Link>, {' '}
        <Link to="/projects">Projects</Link>, {' '}
        view <Link to="/stats">Site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
