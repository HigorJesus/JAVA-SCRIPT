let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
valores = []

function isNumero(n) {
    if(Number (n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function isLista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar (){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.txt = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if(valores.lenght ==0){
        window.alert('Adicione antes de finalizar')
    }else{


        res.innerHTML=''
        res.innerHTML+=''
    }
}


//vc parou em 8:50 NÃO FUNCIONOU PORRA NEINHUMA