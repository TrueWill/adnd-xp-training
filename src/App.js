import React, { Component } from 'react';
import Level from './components/Level';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLevel: 10,
      isNameLevel: false
    };
  }

  handleLevelChange = e => {
    this.setState({ currentLevel: Number(e.target.value) });
  };

  handleIsNameLevelChange = e => {
    this.setState({ isNameLevel: e.target.checked });
  };

  render() {
    const { currentLevel, isNameLevel } = this.state;

    return (
      <div>
        <Level
          value={currentLevel}
          onChange={this.handleLevelChange}
          isName={isNameLevel}
          onIsNameChange={this.handleIsNameLevelChange}
        />
      </div>
    );
  }
}

export default App;
