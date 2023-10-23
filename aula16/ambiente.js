let num =[5,8,2,9,]
num.push(1) //acresenta mais elementos 
num.sort()  // deixa em ordem crescente ( o comando é o sort nao o num, num é o nome da variavel)
console.log(num)
console.log(`O vetor tem ${num.length} elementos `)
console.log( `O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if( pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor está na possição ${pos}`)
}