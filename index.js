let launch = numero => {
    if(numero === 0){
        return
    }

    console.log(numero)
    return launch(numero-1)
}
console.log(launch(10))



const misNumeros = [1, 2, 3, 4, 5]

let suma = indice => {
    if(indice === misNumeros.length){
        return
    }
    return 
}