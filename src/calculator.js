import { costByClassForNameLevel, costForBelowNameLevel } from './constants';

const calculator = state => {
  const { currentLevel, isNameLevel, baseClass } = state;

  const costPerLevelPerWeek = isNameLevel
    ? costByClassForNameLevel[baseClass]
    : costForBelowNameLevel;

  const costPerWeek = currentLevel * costPerLevelPerWeek;

  return {
    costPerWeek
  };
};

export default calculator;
