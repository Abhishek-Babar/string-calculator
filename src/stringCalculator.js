function stringCalculator(input) {
    if (input === "") return 0;
    let delimiter = /[\n,]/;
    if (input.startsWith("//")) {
        const parts = input.split("\n");
        //below line is to add "\" before special character like * + ? so they dont throw error while creating regexExp
        const escapedDelimiter = parts[0].slice(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(`${escapedDelimiter}|\\n`); //replace delimeter with custom
        input = parts.slice(1).join("\n"); //this line is to keep below code consistent
    }
    const numbers = input.split(delimiter).map(Number);
    return numbers.reduce((sum, c) => sum + c , 0);
}

module.exports = stringCalculator;