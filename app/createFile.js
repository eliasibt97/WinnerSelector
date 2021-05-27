var fs = require('fs');

const writeFile = (numeroRonda, numeroGanador, diferencia) => {
    var data = `${numeroGanador} ${diferencia}`;

    fs.writeFile(`./app/files/output/ronda-${numeroRonda}.txt`, data, (err) => {
        if(err) {
            console.log(err);
        }
        console.log("Archivo creado con exito");
    });
}

module.exports = { writeFile };