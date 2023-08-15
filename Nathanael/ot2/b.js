const fs = require('fs');
const fsPromises = fs.promises;


async function funct() {


    let filehandle = null;
    let prom = null;
    let buffer = Buffer.from(' UNISENAI 2023');

    novoTxt = fs.readFileSync('novo.txt','utf-8');

    try {
        filehandle = await
            fsPromises.open('novo.txt', 'r+');

        
        prom = filehandle.write(
            buffer, 0, buffer.length,novoTxt.length+1);

    } finally {

        if (filehandle) {
            await filehandle.close();
        }
    }
}

funct().catch(console.error);

