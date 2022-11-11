import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import TEMIRLAN from '../components/Resume/TEMIRLAN';
import ALIBI from '../components/Resume/ALIBI';

import abouttemirlan from '../data/resume/abouttemirlan';
import positions from '../data/resume/positions';

const sections = [
  'TEMIRLAN',
  'ALIBI',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Project's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <TEMIRLAN data={abouttemirlan} />
      <ALIBI data={positions} />

    </article>
  </Main>
);

export default Resume;
