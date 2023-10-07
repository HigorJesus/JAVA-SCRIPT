function Verificar(){ 
    var data= new Date()
    var ano= data.getFullYear() 
    var fano= document.getElementById('txtano')
    var resp=document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        gênero=""
        if(fsex[0].checked){
            gênero='homem'
            var img= document.createElement('img')
            img.setAttribute('id', 'foto')
            if(idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'crianca-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 50){
                //adulto
               img.setAttribute('src', 'adulto-m.png')
            } else{
                //senhor
                img.setAttribute('src', 'senhor-m.png')
            }
        } if(fsex[1].checked){
            gênero='mulher'
            if(idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'menine.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mina.png')
            } else if(idade < 50){
                //adulto
               img.setAttribute('src', 'mulher.png')
            } else{
                //senhor
                img.setAttribute('src', 'senhora.png')
            }
        } 
            
        res.style.textAlign='center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}
