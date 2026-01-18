/*
Objetivo: criar uma função que receba um array de números inteiros some 
os valores que são múltiplos de 3 e 5, mas não são de ambos 
 simultaneamente e mostre o resultado em tela
*/

function tamanhoArray (array){
    let tamanho = array.length
    return tamanho
}

function somaMultiplos(numeros_inteiros){

    let n = 0
    let i = 0
    let contador = 0
    let numeros_validos = []
    let nv = 0

    n = tamanhoArray(numeros_inteiros);
    while (i < n){
        if (((numeros_inteiros[i] % 3 == 0) && (numeros_inteiros[i] %  5 != 0 )) ||
            ((numeros_inteiros[i] % 5 == 0) && (numeros_inteiros[i] %  3 != 0 )))
                numeros_validos.push(numeros_inteiros[i])

        i ++
    }
    i = 0
    nv = tamanhoArray(numeros_validos)

    for (i=0; i< nv; i++)
        contador = contador + numeros_validos[i]

    console.log(contador)
 
}

somaMultiplos([1,4,7,9,15,5,30,12])

