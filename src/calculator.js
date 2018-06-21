import { costByClass } from './constants';

const calculator = state => {
  const { currentLevel, isNameLevel, baseClass } = state;

  const costPerWeek =
    currentLevel * (isNameLevel ? costByClass[baseClass] : 1500);

  return {
    costPerWeek
  };
};

export default calculator;
