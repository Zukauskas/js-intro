console.clear();
/* 
    FUNKCIJOS - pasikartojančios perpanaudojamos logikos rinkinys/blokas

    function PAVADINIMAS (argumentai/parametrai) {
        argumentu patikrinimas/validacija
        logika, kuri pagamina rezultatą
        rezultato tikrinimas
        grąžinama reikšmė
    }
*/

function suma(a, b) {
    return a + b;
}

const n1 = 70;
const n2 = 500;
const n3 = 130;

const s12 = suma(n1, n2);
const s21 = suma(n2, n1);
const s13 = suma(n1, n3);
const s23 = suma(n2, n3);

console.log(s12, s21)
console.log(s13)
console.log(s23)
console.log('-------------------');

const savikaina1 = 10;
const savikaina2 = 20;
const savikaina3 = 100;


function coof(proc) {
    return 1 + proc / 100;
}

function salesPrice(cost) {
    const tax = 20;
    const margin = 30;
    return cost * coof(tax) * coof(margin);
}

// const price1 = savikaina1 * (1 + PVM / 100) + savikaina1 * (1 + pelnoDalis / 100);

const price1 = salesPrice(savikaina1);
const price2 = salesPrice(savikaina2);
const price3 = salesPrice(savikaina3);


console.log(savikaina1, "-->", price1);
console.log(savikaina2, "-->", price2);
console.log(savikaina3, "-->", price3);

console.log('---------------------------');

const student1 = [10, 2, 8, 4, 6];
const student2 = [6, 7, 8, 9, 10];
const student3 = [1, 3, 5, 7, 9];

function listAverage(marks) {
    const count = marks.length;
    let sum = 0;
    let index = 0;
    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];
    return sum / count;
}

const average1 = listAverage(student1);
const average2 = listAverage(student2);
const average3 = listAverage(student3);

console.log(average1);
console.log(average2);
console.log(average3);