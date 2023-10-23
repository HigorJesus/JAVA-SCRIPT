let valores= [9,8,7,6,5,4,]

/*for( let pos= 0 ; pos < valores.length ; pos++){
    console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A possição ${pos} tem o valor ${valores[pos]}`)  // maneira simplificada
}