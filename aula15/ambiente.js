let num = [7, 1, 7, 12, 4]
num[3] = 6
num.push(Number(-9))
num.push(-12)
num.push(+29)
num.length
num.sort()
/*console.log(num)
console.log(`você tem ${num.length} elementos na sua array`)
console.log(`esse é o terceiro valor -> ${num[2]}`)
for (let pos = 0; pos < num.length; pos++) {
    console.log(`o indice ${pos} recebeu o valor ${num[pos]}`)
}*/
for (let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`valor não foi encontrado`)
} else {
    console.log(`o valor 1 está no lugar ${pos}`)
}