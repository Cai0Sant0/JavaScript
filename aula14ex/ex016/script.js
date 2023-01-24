function contar(){
    var ini = document.getElementById('in')
    var fi= document.getElementById('fi')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0){
        //window.alert('[ERRO!] Faltam dados !')
        res.innerHTML = 'Impossível contar !!!'
    }
    else {
        res.innerHTML = 'Contando: <br>' 
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pas.value)
        if(p <= 0){
            window.alert('Passo inválido, Considerando Passo 1')
            p = 1
        }
         if (i < f){
            for(var n = i; n<=f; n+=p){//Contagem progressiva
                res.innerHTML += ` ${n} \u{1f449} `
            }
        }
        else{
            for(var n = i; n>=f; n-=p){//Conatagem regressiva
                res.innerHTML += ` ${n} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}