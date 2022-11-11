import React from 'react';
import PropTypes from 'prop-types';

import Degree from './TEMIRLAN/Degree';

const TEMIRLAN = ({ data }) => (
  <div className="TEMIRLAN">
    <div className="link-to" id="TEMIRLAN" />
    <div className="title">
      <h3>TEMIRLAN</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

TEMIRLAN.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

TEMIRLAN.defaultProps = {
  data: [],
};

export default TEMIRLAN;
