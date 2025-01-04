const { rejects } = require("assert");
const { resolve } = require("path");
const readline = require("readline");

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// solução simples/ call-back / aninhado
/*
prompt.question("Qual o seu número favorito?: ", (resposta) => {
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`);

    prompt.question("Qual a sua cor favorita?: ", (resposta) => {
        console.log(`A sua cor favorita é: ${resposta}`);
        prompt.close();
    });    
});
*/

// solução elaborada
const promptPromise = {
    question: (pergunta) => new Promise((resolve, rejects) => {
        try {
            prompt.question((pergunta), (resposta) => resolve (resposta));
        } catch (error) {
            rejects(error);
        };
    }),

    close: () => prompt.close()
};

// sequencia
async function askUser () {
    const num = await promptPromise.question("Qual o seu número favorito?: ");
    console.log(`O dobro do seu número favorito é: ${parseInt(num) * 2}`);
    
    const color = await promptPromise.question("Qual a sua cor favorita?: ");
    console.log(`A sua cor favorita é: ${color}`);
    promptPromise.close();
};

askUser();