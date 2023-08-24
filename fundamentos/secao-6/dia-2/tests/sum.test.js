const { describe } = require('node:test');
const sum = require('./sum')

describe('Requisito 1', () => {
it('Verifica a soma de dois números', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('Verifica se os dados inseridos são números', () => {
    expect(sum('2', 2)).toBe('Os valores devem ser números!');
    expect(sum(2, '3')).toBe('Os valores devem ser números!');
    expect(sum('2', '3')).toBe('Os valores devem ser números!');
  });
});