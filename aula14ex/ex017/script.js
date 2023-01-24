function tabuada(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(numero.value.length == 0){
        window.alert('Por favor digite um número !!!')
    }
    else{
        var num = Number(numero.value)
        var x = 1
        tab.innerHTML = ''
        while(x<=10){
            var item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}