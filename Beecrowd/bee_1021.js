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
let i = 0


let notas_moedas = [100, 50, 20, 10, 5, 2, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let qtde_notas_moedas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let notas_moedas_aux = []



valor = Math.round(valor_original * 100)
let n = notas_moedas.length

for (i=0; i < n; i++){
    notas_moedas_aux[i] = notas_moedas[i] * 100
}

i=0
while (i < n){
    if (valor >= notas_moedas_aux[i]){
        qtde_notas_moedas[i] = Math.floor(valor/notas_moedas_aux[i])
        valor = valor % notas_moedas_aux [i]
    }
    i++
}

console.log("NOTAS:")
for (i=0; i<6 ; i++){
    console.log(qtde_notas_moedas[i] + " nota(s) de R$ " + notas_moedas[i].toFixed(2))
} 
console.log("MOEDAS:")
for (i=6; i < qtde_notas_moedas.length; i++){
    console.log(qtde_notas_moedas[i] + " moeda(s) de R$ " + notas_moedas[i].toFixed(2))
} 
