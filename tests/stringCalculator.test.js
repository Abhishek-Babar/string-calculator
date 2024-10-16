const stringCalculator = require('../src/stringCalculator')

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(stringCalculator("")).toBe(0);
    });

    test('should return the number for a single number', () => {
        expect(stringCalculator("5")).toBe(5);
    });

    test('should return the sum for two numbers', () => {
        expect(stringCalculator("1,2")).toBe(3);
    });

    it('should return the sum for multiple numbers', () => {
        expect(stringCalculator("1,2,3,4,5")).toBe(15);
    });
});
