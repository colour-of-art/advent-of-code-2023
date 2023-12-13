const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

let sum = 0;
rl.on('line', (line) => {
    let numbers = line.split('').filter(char => char.toLowerCase() === char.toUpperCase());
    sum += parseInt(numbers[0] + numbers[numbers.length-1]);
});

rl.on('close', () => {
    console.log(sum);
});
