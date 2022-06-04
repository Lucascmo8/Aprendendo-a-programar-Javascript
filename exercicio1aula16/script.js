let num = document.getElementById('num1')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    // só permite numeros de 1 a 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
    } else {
        window.alert('valor invalido ou já cadastrado')
    }
    //para reiniciar o input
    num.value = ''
    num.focus()
}

function fim(){
    if (valores.length == 0) { 
     window.alert(`Adicione valores antes de finalizar`)
    } else {
        let qnt = valores.length
        if(valores.length == 1) { var vl = `valor`} else { var vl = 'valores'}
        valores.sort()
        var maior = valores.length -1
        var s = 0
        for(var pos in valores) { var c = s +=(valores[pos])}
        var media = c / valores.length

        res.innerHTML = ''
        res.innerHTML += `Temos ${qnt} ${vl}</br>`
        res.innerHTML += `O maior valor foi ${valores[maior]}</br>`
        res.innerHTML += `O menor valor foi ${valores[0]}</br>`
        res.innerHTML += `A soma dos numeros deu ${c}</br>`
        res.innerHTML += `A média é ${media}`
    }
}





/*function adicionar() {
    var valores = document.getElementById('num1')
    let n = Number(valores.value)
    let num = [1]
    

    num.push(7)
    console.log(num.length)
    num.sort()
    console.log(num[0])
    var ult = num.length - 1
    console.log(num[ult])
    var s = 0
    for(var element in num) { var c = s += (num[element])}
    console.log(c)
    var m = c / num.length
    console.log(m)
*/
