const fs = require("fs");

fs.unlink("ArquivoNovoRenomeado.txt", function (err) {
    if (err) throw err;
    console.log("Arquivo deletado com sucesso!");
});