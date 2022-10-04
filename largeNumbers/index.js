let bigInt = require("big-integer");// підключення бібліотеки
function keySpace(bit) {//виведення кількості варіантів ключів
    return bigInt(2).pow(bit)
}
console.log(`8-бітна послідовність, простір ключів дорівнює ${keySpace(8)}`)
console.log(`16-бітна послідовність, простір ключів дорівнює ${keySpace(16)}`)
console.log(`32-бітна послідовність, простір ключів дорівнює ${keySpace(32)}`)
console.log(`64-бітна послідовність, простір ключів дорівнює ${keySpace(64)}`)
console.log(`128-бітна послідовність, простір ключів дорівнює ${keySpace(128)}`)
console.log(`512-бітна послідовність, простір ключів дорівнює ${keySpace(512)}`)
console.log(`1024-бітна послідовність, простір ключів дорівнює ${keySpace(1024)}`)
console.log(`2018-бітна послідовність, простір ключів дорівнює ${keySpace(2018)}`)
console.log(`4096-бітна послідовність, простір ключів дорівнює ${keySpace(4096)}
`)




function generate(bit) {//згенерувати випадкове значення ключа
    return bigInt.randBetween(0, keySpace(bit))
}
/*console.log(`Згенероване число ${generate(8)}
`)*/



function findKey(num) {//перебирати значення ключа
    let gen=generate(num)
    console.log(`Згенероване число ${gen}`)
    const start= new Date().getTime();
    for (let i = 1; i <= keySpace(num); i++) {
        if (i===gen.valueOf()) {
            break
        }
        else {'oops'}
    }
    const end = new Date().getTime();
    console.log(`Кількість часу: ${end - start}ms`);
}
findKey(8)
findKey(16)
//findKey(32)
//findKey(64)
//findKey(128)
//findKey(256)
//findKey(512)
//findKey(1024)
//findKey(2048)
//findKey(4096)
