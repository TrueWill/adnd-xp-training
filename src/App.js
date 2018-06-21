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
        Cost per week: {calculator(this.state).costPerWeek}
      </div>
    );
  }
}

export default App;
