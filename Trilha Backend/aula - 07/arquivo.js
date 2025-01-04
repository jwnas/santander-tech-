const path = require("path");
const fs = require("fs");

const filePath = path.join(process.cwd(), "aula - 07", "texto.txt");
const fileOutPath = path.join(process.cwd(), "aula - 07", "texto-linhas.txt");
console.log(filePath);

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.log(`Erro na leitura do caminho para o arquivo ${filePath}.`);
        return;
    }

    const texto = dados.toString();
    const linhas = texto.split("\n");

    const linhasJaustadas = linhas.map((linha, index, arrayDeLinhas) => `${index + 1} - ${linha}`);

    fs.writeFile(fileOutPath, linhasJaustadas.join("\n"), {}, (erro) => {
        if (erro) {
            console.log(`Erro na escritra do caminho para o arquivo ${fileOutPath}.`);
        };
    });
});
