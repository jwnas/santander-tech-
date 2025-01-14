import { join } from "path";
import { readFile, writeFile } from "fs";

const filePath = join(process.cwd(), "aula - 07", "texto.txt");
const fileOutPath = join(process.cwd(), "aula - 07", "texto-linhas.txt");
console.log(filePath);

console.time("Leitura arquivos");
readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.error(`Erro na leitura do caminho para o arquivo ${filePath}.`);
        return;
    }

    console.timeEnd("Manipular arquivos");

    const texto = dados.toString();
    const linhas = texto.split("\n");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const linhasJaustadas = linhas.map((linha, index, arrayDeLinhas) => `${index + 1} - ${linha}`);

    writeFile(fileOutPath, linhasJaustadas.join("\n"), {}, (erro) => {
        if (erro) {
            console.error(`Erro na escritra do caminho para o arquivo ${fileOutPath}.`);
        };

        // console.timeEnd("Manipular arquivos");
    });
});
