function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var min = new Date()
    var hora = data.getHours()
    var minutos = min.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s)`
    if (hora>=0 && hora<12){
        img.src = "dia.png"
        document.body.style.background = '#878A8C'
    }
    else if (hora>=12 && hora<18){
        img.src = "tarde.png"
        document.body.style.background = '#EABD7C'
    } 
    else {
        img.src = "noite.png"
        document.body.style.background = '#2c2929dd'
    }
}
