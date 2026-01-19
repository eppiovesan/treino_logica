/*
Objetivo: criar uma função que receba um texto e retorne a palvra que mais aparece e 
o número de vezes que ela aparece. 
Caso dê empate entre as palavras que mais aparecem, a primeira que aparecer no texto deve ser exibida.

Exemplo:
    - Entrada: O teste é importante. O teste ajuda a aprender, e o teste melhora a lógica.
    - Saída: Palavra: o, Contagem: 3
*/

function tamanhoArray(array){   
    let tamanho = array.length
    return tamanho
}

function converteTextoParaMinusculo(texto){
    let texto_ajustado = texto.toLowerCase()
    return texto_ajustado
}
function removePontuacoes(texto){
    let texto_limpo = ''

    for (let i = 0; i < texto.length; i++)
        if ((texto[i] == '.') || (texto[i] == ',') || (texto[i] == ';') || 
            (texto[i] == ':') || (texto[i] == '-') || (texto[i] == '?') || 
            (texto[i] == '!'))
            texto_limpo = texto_limpo + ''
        else
            texto_limpo = texto_limpo + texto[i]        

    return texto_limpo
}

function divideTexto (texto){
    let texto_dividido = []
    palavra = ''

    for (let i=0; i < texto.length; i++)
        if (texto[i] != ' ') {
            palavra = palavra + texto [i]    
            // se for a última palavra já é inserida no array
            if (i == texto.length -1){
                texto_dividido.push(palavra)  
            }
        } 
        else {
            texto_dividido.push(palavra)
            palavra = ""
        }

    return texto_dividido
}

function verficaPalavraMaisFrequente(texto){
    let texto_novo = ''
    let palavras = []
    let palavra_nome = []
    let palavra_contador = []
    let i = 0
    let existe = false
    let contador = 0
    let palavra_mais_frequente = ''

    texto_novo = converteTextoParaMinusculo(texto)
    texto_novo = removePontuacoes(texto_novo)

    palavras = divideTexto(texto_novo)

    while (i < palavras.length){
        //verfica no array que já possui as palavras se a palavra em questão existe
        existe = false
        for (let j= 0; j < palavra_nome.length; j++){ 
            //se existir, incrementa o valor do contador com mesmo indice
            if (palavras[i] == palavra_nome[j]){
                palavra_contador[j] += 1
                existe = true                
            }
        }
        // se não exisitr, inclui a palavra no array de nome e contador
        if (existe == false){
            palavra_nome.push(palavras[i])
            palavra_contador.push(1)
        }

        i++    
    }

    // verificar qual palavra mais aparece
    for (i=0; i < palavra_contador.length; i++ )
        if(contador < palavra_contador[i]){
            contador = palavra_contador [i]
            palavra_mais_frequente = palavra_nome[i]
        }


    console.log('Palavra: ' + palavra_mais_frequente + '\nQuantidade: ' + contador.toString()) 
}

let texto = "Testar, testar e testar! Errar faz parte; testar ensina."
verficaPalavraMaisFrequente(texto)
