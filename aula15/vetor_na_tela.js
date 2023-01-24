var valores = [6, 9, 5, 4, 2, 0]

valores.sort()
console.log(valores)

/*for( var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}*/

for(var pos in valores){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}
