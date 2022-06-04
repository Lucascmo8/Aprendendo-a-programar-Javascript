let pessoa = {nome: 'Lucas',
sexo: 'M',
peso: 100,
engordar(p){
    console.log('engordou')
    this.peso += p
}}
pessoa.engordar(56)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)