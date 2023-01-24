function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO!] Verifique os dados novamente!')
    }
    else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'imagens/crianca_m.png')
            }
            else if (idade >=10 && idade <21){
                img.setAttribute('src', 'imagens/jovem_m.png')
            }
            else if (idade<50){
                img.setAttribute('src', 'imagens/adulto_m.png')
            }
            else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
       }
       else if (fsex[1].checked){
        genero = 'Mulher'
         if(idade >=0 && idade <10){
            img.setAttribute('src', 'imagens/crianca_f.png')
            }
            else if (idade >=10 && idade <21){
                img.setAttribute('src', 'imagens/jovem_f.png')
            }
            else if (idade<50){
                img.setAttribute('src', 'imagens/adulto_f.png')
            }
            else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
       res.style.textAlign = 'center'
       res.appendChild(img)
    }
}