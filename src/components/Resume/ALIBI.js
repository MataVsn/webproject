import React from 'react';
import PropTypes from 'prop-types';

import Job from './ALIBI/Job';

const ALIBI = ({ data }) => (
  <div className="ALIBI">
    <div className="link-to" id="ALIBI" />
    <div className="title">
      <h3>ALIBI</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

ALIBI.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

ALIBI.defaultProps = {
  data: [],
};

export default ALIBI;
