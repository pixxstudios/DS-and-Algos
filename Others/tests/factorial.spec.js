const { factorial } = require('../factorial.js');

describe('factorial tests', () => {
    it('check for diff values', () => {
        expect(factorial(4)).toEqual(24);
        expect(factorial(8)).toEqual(40320);
        expect(factorial(1)).toEqual(1);
        expect(factorial(0)).toEqual(1);
    });
});