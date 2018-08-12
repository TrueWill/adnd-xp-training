import { costByClassForNameLevel, costForBelowNameLevel } from './constants';

const calculator = state => {
  const { currentLevel, isNameLevel, baseClass, hasTutor } = state;

  const costPerLevelPerWeek = isNameLevel
    ? costByClassForNameLevel[baseClass]
    : costForBelowNameLevel;

  const costPerWeek = currentLevel * costPerLevelPerWeek;

  const weeks = isNameLevel || hasTutor ? 1 : 2;

  const totalCost = costPerWeek * weeks;

  return {
    costPerWeek,
    weeks,
    totalCost
  };
};

export default calculator;
