function Contar(){

    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')         // 1º pegar os elementos do HTML
    var res = document.getElementById('res')

    // 2º execultar o tester lógico, se o valor de ini, fim e passo for igual a 0
    // irá disparar um alerta
    
    if (ini.value.length == 0 ||  fim.length == 0 || passo.value.length == 0) {   
     window.alert('Imposvel contar')
     window.alert('[ERRO] Faltam dados ')
    }else{
       res.innerHTML ="contando <br>" 
       var i = Number(ini.value)
       var f = Number(fim.value)        // 3º transformar o resultado em números 
       var p = Number(passo.value)

       if (p <=0) {
        window.alert('passo invalido, considerando passo 1') // 4º se o p de passo for menor ou igual a 0 
        p = 1                                                // irá disparar um alerta de passo invalido
       }
       
       if( i < f){
        for(var c = i; c <= f; c+= p){                     // contagem crescente
            res.innerHTML   +=   ` ${c} \u{1F449}`
       }
       }else{                                               // contagem decresente
        for( var c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1f449}`
        }
        }
        res.innerHTML+= `\u{1f3c1}`
       }
       
    }

