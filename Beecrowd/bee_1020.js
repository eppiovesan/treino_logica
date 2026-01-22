/*
Objetivo: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.



*/


let valor = 30
let retorno = [0, 0, 0] // [anos, meses, dias]

while (valor != 0 ){
    if (valor >= 365){
        retorno[0] = Math.floor(valor/365)
        valor = valor - (retorno[0] * 365)
    }
    else if (valor >= 30 ){
        retorno[1] = Math.floor (valor/30)
        valor = valor - (retorno[1] * 30)
    }
    else{
        retorno[2] = valor
        valor = valor - retorno[2]
    }    
}
for (let i=0; i<retorno.length; i++){
    if (i==0){
      console.log (retorno[0] + " ano(s)")  
    }
    if (i==1){
        console.log(retorno[1] + " mes(es)")
    }
    if (i==2){
       console.log(retorno[2] + " dia(s)") 
    }
}