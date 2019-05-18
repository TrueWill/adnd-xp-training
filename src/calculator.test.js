import calculator from './calculator';

test('default', () => {
  const state = {
    currentLevel: 10,
    isNameLevel: false,
    baseClass: 'Fighter',
    hasTutor: true
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 15000,
    weeks: 1,
    totalCost: 15000
  })
})

test('no tutor', () => {
  const state = {
    currentLevel: 10,
    isNameLevel: false,
    baseClass: 'Fighter',
    hasTutor: false
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 15000,
    weeks: 2,
    totalCost: 30000
  })
})

test('mix it up', () => {
  const state = {
    currentLevel: 7,
    isNameLevel: false,
    baseClass: 'Magic-User',
    hasTutor: true
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 10500,
    weeks: 1,
    totalCost: 10500
  })
})

test('name level Fighter', () => {
  const state = {
    currentLevel: 15,
    isNameLevel: true,
    baseClass: 'Fighter',
    hasTutor: false
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 15000,
    weeks: 1,
    totalCost: 15000
  })
})

test('name level Cleric', () => {
  const state = {
    currentLevel: 15,
    isNameLevel: true,
    baseClass: 'Cleric',
    hasTutor: false
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 30000,
    weeks: 1,
    totalCost: 30000
  })
})

test('name level Mage', () => {
  const state = {
    currentLevel: 15,
    isNameLevel: true,
    baseClass: 'Magic-User',
    hasTutor: false
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 60000,
    weeks: 1,
    totalCost: 60000
  })
})

test('name level Thief', () => {
  const state = {
    currentLevel: 15,
    isNameLevel: true,
    baseClass: 'Thief',
    hasTutor: false
  };

  const result = calculator(state);

  expect(result).toEqual({
    costPerWeek: 30000,
    weeks: 1,
    totalCost: 30000
  })
})
