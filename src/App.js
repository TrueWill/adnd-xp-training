import React, { Component } from 'react';
import Level from './components/Level';
import Class from './components/Class';
import Tutor from './components/Tutor';
import calculator from './calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLevel: 10,
      isNameLevel: false,
      baseClass: 'Fighter',
      hasTutor: true
    };
  }

  handleLevelChange = e => {
    let level = Number(e.target.value);

    if (level > 0 && Number.isInteger(level)) {
      this.setState({ currentLevel: level });
    }
  };

  handleIsNameLevelChange = e => {
    this.setState({ isNameLevel: e.target.checked });
  };

  handleClassChange = e => {
    this.setState({ baseClass: e.target.value });
  };

  handleHasTutorChange = e => {
    this.setState({ hasTutor: e.target.checked });
  };

  render() {
    const { currentLevel, isNameLevel, baseClass, hasTutor } = this.state;

    const calculated = calculator(this.state);

    return (
      <div>
        <h2>AD&D XP Training Calculator</h2>
        <Level
          value={currentLevel}
          onChange={this.handleLevelChange}
          isName={isNameLevel}
          onIsNameChange={this.handleIsNameLevelChange}
        />
        {isNameLevel && (
          <Class value={baseClass} onChange={this.handleClassChange} />
        )}
        {!isNameLevel && (
          <Tutor
            hasTutor={hasTutor}
            onHasTutorChange={this.handleHasTutorChange}
          />
        )}
        <hr />
        <p>Cost per week: {calculated.costPerWeek.toLocaleString()} g.p.</p>
        <p>Weeks: {calculated.weeks}</p>
        <p>Total cost: {calculated.totalCost.toLocaleString()} g.p.</p>
        <p>
          <small>(Assumes excellent performance)</small>
        </p>
      </div>
    );
  }
}

export default App;
