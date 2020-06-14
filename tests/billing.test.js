import { calculateCost } from '../libs/billing-lib';

test('Lowest tier', () => {
  const storage = 10;
  const expectedCost = 4000;
  const actualCost = calculateCost(storage);
  expect(actualCost).toEqual(expectedCost);
});

test('Medium tier', () => {
  const storage = 100;
  const expectedCost = 20000;
  const actualCost = calculateCost(storage);
  expect(actualCost).toEqual(expectedCost);
});

test('Highest tier', () => {
  const storage = 101;
  const expectedCost = 10100;
  const actualCost = calculateCost(storage);
  expect(actualCost).toEqual(expectedCost);
});
