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

    it('should handle new lines as delimiters', () => {
        expect(stringCalculator("1\n2,3")).toBe(6);
    });

    it('should handle multiple new lines as delimiters', () => {
        expect(stringCalculator("2\n4\n6,7")).toBe(19);
    });

    it('should support custom delimiters', () => {
        expect(stringCalculator("//;\n1;2")).toBe(3);
    });

    it('should support custom delimiters', () => {
        expect(stringCalculator("//*\n3\n2*5")).toBe(10);
    });
});
