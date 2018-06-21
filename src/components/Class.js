import React from 'react';
import PropTypes from 'prop-types';
import { costByClass } from '../constants';

const options = Object.keys(costByClass).map(x => <option key={x}>{x}</option>);

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
