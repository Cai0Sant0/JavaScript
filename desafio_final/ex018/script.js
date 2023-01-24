let num = document.getElementById('num')
let lista = document.getElementById('list')
let resposta = document.getElementById('res')
let valores = []

function numre(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
    
}

function inlista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){
    if(numre(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''
    }
    else{
        window.alert('Valor inválido ou já existente na lista!')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        var tot = valores.length
        var m = valores[0]
        var me = valores[0]
        var soma = 0
        var média = 0

        for(var pos in valores){
            soma+=valores[pos]
        }
       
        for( var pos in valores){
            if(valores[pos]> m){
                m = valores[pos]
            }
            if(valores[pos]< me){
                me = valores[pos]
            }
        }
        média = soma/tot
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todo temos ${tot} número(s) cadastrado(s). </p>`
        resposta.innerHTML += `<p> O maior valor informado foi ${m}.</p>`
        resposta.innerHTML += `<p> O menor valor informado foi ${me}.</p>`
        resposta.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        resposta.innerHTML += `<p> A média dos números digitados é ${média}.</p>`
    }
}