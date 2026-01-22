/*
https://judge.beecrowd.com/pt/problems/view/1019
Objetivo: Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.


Input valor no beecrowd:
    const fs = require("fs");

    const input = fs.readFileSync(0, "utf8").trim();

    let valor = Number(input);

*/
let valor = 556
let tempo = valor
let retorno = [0,0,0] // hora, minuto,segundo

while (valor !== 0){
    if (valor >= 3600){
        retorno[0] = Math.floor(valor/3600)
        valor = valor - (retorno[0] * 3600)
    }
    else if (valor >= 60){
        retorno[1] = Math.floor(valor/60)
        valor = valor - (retorno[1] * 60)
    }
    else{
        retorno[2] = valor
        valor = valor - retorno[2]
    }
}

console.log(retorno[0]+":" + retorno[1] + ":" + retorno[2])
