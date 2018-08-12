import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Polyfill for IE courtesy MDN
Number.isInteger =
  Number.isInteger ||
  function(value) {
    return (
      typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
