const numerosPrimos = [1, 2, 3, 5, 7] //escopo global
console.log(numerosPrimos)


{
    const alunos = ["Pene", "Sheldon", "Leonard"] //escopo local
    console.log(alunos)
    {
        const condicoesDeTempo = ["Chuvoso", "Ensolarado", "Sol entre nuvens"]
        console.log(condicoesDeTempo)
    }    
}