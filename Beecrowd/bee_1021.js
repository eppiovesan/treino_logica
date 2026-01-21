/*
https://judge.beecrowd.com/pt/problems/view/1021

Objetivo: Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).
Ex1 : 576.73 | Ex2: 4.00 | Ex3: 91.01

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

*/


let valor_original = 576.73 
let valor = 0

let qtde_n100 = 0
let qtde_n50 = 0
let qtde_n20 = 0
let qtde_n10 = 0
let qtde_n5 = 0
let qtde_n2 = 0


let qtde_m1 = 0
let qtde_m050 = 0
let qtde_m025 = 0
let qtde_m010 = 0
let qtde_m005 = 0
let qtde_m001 = 0

valor = valor_original
while (valor != 0){
    // notas de 100
    if (valor >= 100){
        qtde_n100 = Math.floor(valor/100)
        valor = Number((valor % 100).toFixed(2)) // toFixed(2) => arrendondar para 2 casas decimais   
    }
    // notas de 50
    else if (valor >= 50){
        qtde_n50 = Math.floor(valor/50)
        valor = Number((valor % 50).toFixed(2))
    }

    // notas de 20
    else if (valor >= 20){
        qtde_n20 = Math.floor(valor/20)
        valor = Number((valor % 20).toFixed(2))
    }

    // notas de 10
    else if (valor >= 10){
        qtde_n10 = Math.floor(valor/10)
        valor = Number((valor % 10).toFixed(2))
    }
    
    // notas de 5
    else if (valor >= 5){
        qtde_n5 = Math.floor(valor/5)
        valor = Number((valor % 5).toFixed(2))
    }

    // notas de 2
    else if (valor >= 2){
        qtde_n2 = Math.floor(valor/2)
        valor = Number((valor % 2).toFixed(2))
    }

    // moedas de 1
    else if (valor >= 1.00){
        qtde_m1 = Math.floor(valor/1)
        valor = Number((valor % 1).toFixed(2))
    }

    // moedas de 0.50
    else if (valor >= 0.50){
        qtde_m050 = Math.floor(valor/0.50)
        valor = Number((valor % 0.50).toFixed(2))
    }

    // moedas de 0.25
    else if (valor >= 0.25){
        qtde_m025 = Math.floor(valor/0.25)
        valor = Number((valor % 0.25).toFixed(2))
    }

    // moedas de 0.10
    else if (valor >= 0.10){
        qtde_m010 = Math.floor(valor/0.10)
        valor = Number((valor % 0.10).toFixed(2))
    }

    // moedas de 0.05
    else if (valor >= 0.05){
        qtde_m005 = Math.floor(valor/0.05)
        valor = Number((valor % 0.05).toFixed(2))
    }
    
    // moedas de 0.01
    else if (valor >= 0.01){
        qtde_m001 = Math.floor(valor/0.01)
        valor = Number((valor % 0.01).toFixed(2))
    }

}

console.log("NOTAS:")
console.log(qtde_n100 + " nota(s) de R$100.00")
console.log(qtde_n50 + " nota(s) de R$50.00")
console.log(qtde_n20 + " nota(s) de R$20.00")
console.log(qtde_n10 + " nota(s) de R$10.00")
console.log(qtde_n5 + " nota(s) de R$5.00")
console.log(qtde_n2 + " nota(s) de R$2.00\n")

console.log("MOEDAS:")
console.log(qtde_m1 + " moeda(s) de R$1.00")
console.log(qtde_m050 + " moeda(s) de R$0.50")
console.log(qtde_m025 + " moeda(s) de R$0.25")
console.log(qtde_m010 + " moeda(s) de R$0.10")
console.log(qtde_m005 + " moeda(s) de R$0.05")
console.log(qtde_m001 + " moeda(s) de R$0.01")