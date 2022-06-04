function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // if num.value não permite deixa em branco
    if (num.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        //tab.innerHTML='' reseta o select, para fazer uma nova tabuada
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
