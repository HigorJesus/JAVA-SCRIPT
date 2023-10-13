function tabuada() {
    var num = document.getElementById("txtn")  //1º pegamos os valores dos inputs
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){                             //2º colomos uma condicional
        window.alert('Por favor digite um númeo!')
    }else{                                        //se o valor estiver vazio irá dispara um alerta
        var n = Number(num.value)                  //do contrario irá pegar o valor e transforma-lo e número
        var c = 1     // inicialização                          
        tab.innerHTML=''
        while(c <= 10){ //teste logico  enquanto c for menor ou igual a 10 
             let item = document.createElement('option')  // cria um item chamado optin para a tag seletion
             item.text = `${n} x ${c} = ${n*c}`//insere um texto dentro item 
             tab.appendChild(item)
             c++            // incremento do códgo
             }
        }
        
    
}