const fs = require('node:fs');
const readline = require('node:readline'); 

let sum = 0;
function readFile(file) {
    return new Promise((res, rej) => {
        try {
            var readInterface = readline.createInterface({
                input: fs.createReadStream(file),
                terminal: false
            });

            readInterface
                .on('line', function (line) {
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
                })
                .on('close', function () {
                    res(sum);
                });
        } catch(err){
            rej(err)
        }
    });
}

readFile('input.txt').then(x => console.log(x))
