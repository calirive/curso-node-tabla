const fs = require('fs');
const colors = require('colors');

/*const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        let salida = '';

        for (let i=1;i<=10;i++){
            salida +=(`${base} x ${i} = ${5*i}\n`);
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        console.log(`tabla-${base}.txt creado`);
    });
}*/

const crearArchivo = async(base = 5, listar, hasta) => {
    try {
        let salida = '';

        for (let i=1;i<=hasta;i++){
            salida +=(`${base} x ${i} = ${base*i}\n`);
        }

        if (listar) {
            console.log('======================'.green);
            console.log(`Tabla del ${base};`);
            console.log('======================'.green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt`);
    } catch (err) {
        throw (err);
    }
}

module.exports = {
    crearArchivo
}