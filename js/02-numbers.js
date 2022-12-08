/*     

    INICIJAVIMAS
    const - konstanta
    let - kintama reikšmė
    var - nenaudoti
    
*/

const PI = 3.14;
console.log(PI);

let wallet = 0;
console.log(wallet);

wallet = 5;
console.log(wallet);

wallet = 15;
console.log(wallet);

const negative = -888;
console.log(negative);

const max=Infinity;
const min=-Infinity;
console.log(min,max)

//Kintamųjų užvadinimas

const vienas = 1;
const antrasSkaicius = 2;
const PVM = 21;

const a = 5;
const b = 7;

console.log('--------------------------');
console.log('primityvios matematinės operacijos');
// primityvios matematinės operacijos

// suma
const suma = a + b;
console.log(a, b, suma);

// skirtumas
const skirtumas = a - b;
console.log(a, b, skirtumas);

// dalmuo
const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(b, a, dalmuoBA);

// sandauga
const sandauga = a * b;
console.log(a, b, sandauga);

// liekana
const liekanaAB = a % b;
const liekanaBA = b % a;

console.log(a, b, liekanaAB);
console.log(b, a, liekanaBA);

//laipsnis

const laipsnisAB = a ** b;
const laipsnisBA = b ** a;

console.log(a, b, laipsnisAB);
console.log(b, a, laipsnisBA);


console.log('----------------------------------')

const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;


let pazymiuSuma = 0;

console.log('Pažymių suma: ', pazymiuSuma);

pazymiuSuma += p1;
console.log('Pažymių suma: ', pazymiuSuma);

pazymiuSuma += p2;
console.log('Pažymių suma: ', pazymiuSuma);

pazymiuSuma += p3;
console.log('Pažymių suma: ', pazymiuSuma);

pazymiuSuma += p4;
console.log('Pažymių suma: ', pazymiuSuma);