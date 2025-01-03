// truthy: [], {}, número =! de 0, string não vazia.
console.log(!![], !!{}, !!1, !!"asdf", true)

if ([] && {} && 1 && "asdf" && true) {
    console.log("Tudo é truthy!")
}

// falsy: null, undefined, 0, "", NaN.
console.log(!!null, !!undefined, !!0, !!"", !!NaN, false)

if (null == undefined == 0 == "" == NaN == false) {
    console.log("Tudo é falsy!")
}
