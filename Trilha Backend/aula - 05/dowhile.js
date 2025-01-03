const contactList = ["Sheldon", "Amy", "Leonard", "Pene", "Raj", "Haward", "Bernadet"];

let buscarUsuario = false;
let indiceUsuario = 0;

do {
    const usuarioAtual = contactList[indiceUsuario]
    if (usuarioAtual && usuarioAtual.startsWith("H")) {
        buscarUsuario = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceUsuario = indiceUsuario + 1;

    if (indiceUsuario >= contactList.length) {
        buscarUsuario = true
        console.log(`Usuário não encontrado`)
    } 
} while (!buscarUsuario)