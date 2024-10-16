function stringCalculator(input) {
    if (input === "") return 0;
    const numbers = input.split(",").map(Number);
    return numbers.reduce((sum, c) => sum + c , 0);
}

module.exports = stringCalculator;