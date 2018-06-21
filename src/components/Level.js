import React from 'react';
import PropTypes from 'prop-types';

const Level = ({ value, onChange, isName, onIsNameChange }) => (
  <div>
    <label>
      Current level: <input type="number" value={value} onChange={onChange} />
    </label>
    <br />
    <label>
      Is name level?
      <input type="checkbox" checked={isName} onChange={onIsNameChange} />
    </label>
  </div>
);

Level.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isName: PropTypes.bool.isRequired,
  onIsNameChange: PropTypes.func.isRequired
};

export default Level;
