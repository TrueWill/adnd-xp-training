import React, { Component } from 'react';
import Level from './components/Level';
import Class from './components/Class';
import calculator from './calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLevel: 10,
      isNameLevel: false,
      baseClass: 'Fighter'
    };
  }

  handleLevelChange = e => {
    this.setState({ currentLevel: Number(e.target.value) });
  };

  handleIsNameLevelChange = e => {
    this.setState({ isNameLevel: e.target.checked });
  };

  handleClassChange = e => {
    this.setState({ baseClass: e.target.value });
  };

  render() {
    const { currentLevel, isNameLevel, baseClass } = this.state;

    return (
      <div>
        <Level
          value={currentLevel}
          onChange={this.handleLevelChange}
          isName={isNameLevel}
          onIsNameChange={this.handleIsNameLevelChange}
        />
        {this.state.isNameLevel && (
          <Class value={baseClass} onChange={this.handleClassChange} />
        )}
        <hr />
        <p>
          Cost per week: {calculator(this.state).costPerWeek.toLocaleString()}{' '}
          g.p.
        </p>
        <p>
          Weeks:
          {isNameLevel
            ? ' 1'
            : ' 1 if higher-level tutor of same class, 2 if self-trained'}
        </p>
        <p>
          <small>(Assumes excellent performance)</small>
        </p>
      </div>
    );
  }
}

export default App;
