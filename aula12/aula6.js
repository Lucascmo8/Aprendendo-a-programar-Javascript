var agora = new Date()
var hora = agora.getHours()
var diasem = agora.getDay()
var idade = 20

switch(diasem){
case 0: console.log(`Hoje é Domingo`) 
 break
case 1: console.log(`Hoje é Segunda-Feira`) 
 break
case 2: console.log(`Hoje é Terça-Feira`) 
 break
case 3: console.log(`Hoje é Quarta-Feira`) 
 break
case 4: console.log(`Hoje é Quinta-Feira`) 
 break
case 5: console.log(`Hoje é Sexta-Feira`) 
 break
case 6: console.log(`Hoje é Sabado`) 
 break
default: console.log(`Dia invalido`)
}
console.log(`São ${hora} horas`)
if (hora < 12) {console.log(`Bom dia, você tem ${idade} anos`)}
else if(hora >=18) {console.log(`Boa noite, você tem ${idade} anos`)}
else {console.log(`Boa tarde, você tem ${idade} anos`)}

if (idade < 16  || idade >=65) {console.log(`saia`)} 
else if(idade>=18) {console.log(`pode entrar`)}
else {console.log(`espere um pouco`)}

