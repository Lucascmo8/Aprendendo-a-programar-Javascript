function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - Number(fano.value)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Favor conferir o ano de nascimento`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'um Homen'
            if (idade >= 0 && idade < 10) {
                classe = 'Criança'
            } else if (idade < 21) {
                classe = 'Jovem'
            } else if (idade < 64) {
                classe = 'Aldulto'
            } else {
                classe = 'idoso'
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 10) {
                classe = 'Criança'
            } else if (idade < 21) {
                classe = 'Jovem'
            } else if (idade < 64) {
                classe = 'Aldulta'
            } else {
                classe = 'idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Você é ${genero} ${classe} com ${idade} anos`
    }
}