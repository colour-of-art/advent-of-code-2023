const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let sum = 0;
rl.on('line', (line) => {
    let num = ""; 
    for (let i = 0; i < line.length; i++){
        if (line[i] >= '0' && line[i] <= '9'){
            num += line[i];
            break;
        }
    }
    for (let i = line.length-1; i >= 0; i--){
        if (line[i] >= '0' && line[i] <= '9'){
            num += line[i];
            break;
        }
    }
    sum += parseInt(num);
});

rl.on('close', () => {
  console.log(sum);
});
