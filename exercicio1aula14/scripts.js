function contar() {
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let pas = document.getElementById('num3')]
    let res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        // window.alert(`[ERRO] Faltam dados`)
        res.innerHTML = `Tente Novamente`
    } else {
        res.innerHTML = 'Contando: '
        let n1 = Number(ini.value)
        let n2 = Number(fim.value)
        let n3 = Number(pas.value)
        if (n3 <= 0) {
            window.alert(`[ERRO] passo deve ser maior ou igual a 1`)
            n3 = 1
        }

        if (n1 < n2) {
            //contagem crescente
            for (n1; n1 <= n2; n1 += n3) {
                res.innerHTML += `${n1} \u{1F449} `
            }
        } else {
            //contagem regressiva
            for (n1; n1 >= n2; n1 -= n3) {
                res.innerHTML += `${n1}  \u{1F449} `
            }


        }
        res.innerHTML += `\u{1f3c1}`
    }
}
