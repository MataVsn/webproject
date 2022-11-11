import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>ABDYKARIMOV TEMIRLAN</h2>
        <h2>ALIBI KENESBAY</h2>
      </header>
    </section>

    <section className="blurb">
      <p>Hello, we are students, that are prepared this website as a project.
        We are studying in the  <a href="https://iitu.edu.kz/ru/">iitu</a>. Third course, for a software engineering.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About project</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
