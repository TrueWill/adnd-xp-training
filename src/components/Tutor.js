import React from 'react';
import PropTypes from 'prop-types';

const Tutor = ({ hasTutor, onHasTutorChange }) => (
  <div>
    <label>
      Has higher-level tutor of same class?
      <input type="checkbox" checked={hasTutor} onChange={onHasTutorChange} />
    </label>
  </div>
);

Tutor.propTypes = {
  hasTutor: PropTypes.bool.isRequired,
  onHasTutorChange: PropTypes.func.isRequired
};

export default Tutor;
