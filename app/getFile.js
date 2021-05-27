var fs = require('fs');
var { writeFile } = require('./createFile');

const splitInputs = (inputs) => {
    let splitedInputs = inputs.split('\r\n');
    return splitedInputs;
}

const validateRound = (round) => round > 0 && round < 10000;
const getWinner = (puntuacion1, puntuacion2) => puntuacion1 > puntuacion2;

const getFile = () => {
    fs.readFile(`./app/files/inputs/puntuaciones.txt`, (err, data) => {
        if(err) {
            console.log(err);
        }

        const inputs = data.toString();
        let splitedInputs = splitInputs(inputs);
        const validatedRound = validateRound(splitedInputs[0]);
        const round = splitedInputs[0];

        if(validatedRound) {
            splitedInputs.shift();
            
            var jugador1 = [];
            var jugador2 = [];
            splitedInputs.forEach(item => {
                var numbers = item.split(' ');
                jugador1.push(numbers[0]);
                jugador2.push(numbers[1]);
            });
            
            for(let i = 0; i < round; i++) {
                let winner = getWinner(jugador1[i],jugador2[i]);
                if(!winner) {
                    writeFile(i+1,2, (jugador1[i] - jugador2[i]) < 0 ? jugador2[i] - jugador1[i] : jugador1[i] - jugador2[i]);
                } else {
                    writeFile(i+1,1, (jugador2[i] - jugador1[i]) < 0 ? jugador1[i] - jugador2[i] : jugador2[i] - jugador1[i]);
                }
            }

        }
        
        
        
       
    });
}

module.exports = { getFile, splitInputs };