function stringCalculator(input) {
    if (input === "") return 0;
    const delimiter = /[\n,]/;
    const numbers = input.split(delimiter).map(Number);
    return numbers.reduce((sum, c) => sum + c , 0);
}

module.exports = stringCalculator;