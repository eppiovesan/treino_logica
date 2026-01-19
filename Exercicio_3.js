/*
Objetivo: Criar uma função que receba um array de números inteiros e some apenas os valores positivos e ímpares.

*/

function somaValoresPositivosImpares(numeros){
    let numeros_validos = []
    let i = 0
    let resultado = 0

    while (i < numeros.length ){
        if ((numeros[i] > 0) && (numeros[i] % 2 != 0) ){
            numeros_validos.push (numeros[i])
        }
        i++
    }
    
    for(i=0; i<numeros_validos.length; i++){
        resultado += numeros_validos[i]
    }

    console.log(resultado.toString())

}

somaValoresPositivosImpares([ -3, 4, 7, 10, 5, -8, 9, 0 ])