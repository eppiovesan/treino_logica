/*
https://judge.beecrowd.com/pt/problems/view/1035

Objetivo: Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, 
e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for 
par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

*/

// readline para usar terminal em node
const readline = require ('readline')

const rl = readline.createInterface (
    {
        input: process.stdin,
        output: process.stdout
    }
)

// inicializando variaveis
let valor_A = 0
let valor_B = 0
let valor_C = 0 
let valor_D = 0
let resposta

rl.question('Digite o Valor A: ', (resposta) => {
    valor_A = Number(resposta)

    rl.question('Digite o Valor B: ', (resposta) => {
        valor_B = Number(resposta)

        rl.question('Digite o Valor C: ', (resposta) => {
            valor_C= Number(resposta)
            
            rl.question('Digite o Valor D: ', (resposta) => {
                valor_D = Number(resposta)

                if ((valor_B > valor_C) &&  //valor B MAIOR que valor C
                    (valor_D > valor_A) && //valor D MAIOR que valor A
                    ((valor_C + valor_D) > (valor_A + valor_B)) && // soma de C e D maipr que soma de A e B
                    (valor_C > 0) && (valor_D > 0) && // valor C e valor D maior que zero
                    (valor_A % 2 == 0)){
                    console.log("Valores aceitos")
                    }
                    
                else{
                    console.log("Valores não aceitos")
                }
            
            rl.close()
            })        
        })
    })
})

// garante a que a executação foi encerrada
rl.on('close', () => {
    process.exit(0)
})

