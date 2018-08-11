import React from 'react';
import PropTypes from 'prop-types';
import { costByClassForNameLevel } from '../constants';

const options = Object.keys(costByClassForNameLevel).map(x => (
  <option key={x}>{x}</option>
));

const Class = ({ value, onChange }) => (
  <label>
    Base class:
    <select value={value} onChange={onChange}>
      {options}
    </select>
  </label>
);

Class.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Class;
