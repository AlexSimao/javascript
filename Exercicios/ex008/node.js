// Variaveis Compostas/Vetores/Arrays

var num = [5,2,8] 
console.log(num) // Imprima num
console.log(num[0]) // Imprima o item do índice 0
console.log(num[1]) // Imprima o item do índice 1
console.log(num[2]) // Imprima o item do índice 2
num.push(4) // Adicione novo elemento com o valor 4
console.log(num) // Imprima num
console.log(num.length) // Imprima o comprimento/"quantidade de elemetos"
console.log(num.sort()) // Imprima o num organizado

/* for (let pos=0; pos < num.length; pos++){
    console.log(`Índice ${pos} = ${num[pos]}`)
} // Imprimindo todos os elementos do array */

for (let pos in num){
    console.log(`Índice ${pos} = ${num[pos]}`)
} // (simplificado com for-In)


// ===============================================

var id = ["Alex", "Simão", new Date().getFullYear() - 2003]

console.log(`Meu nome é ${id[0]} ${id[1]} e tenho ${id[2]} anos.`)
