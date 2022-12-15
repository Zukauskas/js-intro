// /* Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
//  */
// console.log("");
// console.log("#####Skaitiniai kintamieji#####");
// console.log("");

// const kebaboKaina = 5;
// console.log(`Kebabo kaina yra ${kebaboKaina} EUR`);

// const traukinioBilietas = 8;
// console.log(`Kelionės kaina Kaunas-Vilnius - ${traukinioBilietas} EUR`);

// const kazkoksSkaicius = 4 ** 10;
// console.log(`4**10 = ${kazkoksSkaicius}`);

// /* Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
//  */
// console.log("");
// console.log("#####Tekstiniai kintamieji#####");
// console.log("");

// const kaimynoVardas = "Jonas";
// console.log("Mano kaimynas yra " + kaimynoVardas);

// const geriausiasPrekybosCentras = "Norfa";
// console.log("Praktiški žmonės renkasi už " + geriausiasPrekybosCentras);

// const gyvunas = "Katė";
// console.log(`Mano megstamiausias gyvūnas - ${gyvunas}`);

// /*
// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
//  */
// console.log("");
// console.log("#####Skaitiniu kintamuju suma#####");
// console.log("");

// const visaSuma = kebaboKaina + traukinioBilietas + kazkoksSkaicius;
// console.log(visaSuma, "viskas");

// console.log("");
// console.log("#####Tekstiniai kintamieji kartu#####");
// console.log("");

// const visasTekstas = kaimynoVardas + " " + geriausiasPrekybosCentras + " " + gyvunas;
// console.log(visasTekstas);
// console.log("------------------------------------------");
// console.log("");
// console.log("");
// console.log("Užduotys su arrays, sąrašais, matricomis");
// console.log("");

// /* Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console */
// const list1 = [0, 2, 4, 6, 8];
// console.log(list1);
// console.log("");

// const fibonacci = [1, 1, 2, 3, 5];
// console.log(`Fibonacci: ${fibonacci}`);
// console.log("");

// const primeNumbers = [2, 3, 5, 7, 11];
// console.log("First few primes: ", primeNumbers);
// console.log("");

// /* Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console */
// let listSum = 0;

// listSum += list1[0];
// listSum -= list1[1];
// listSum += list1[2];
// listSum -= list1[3];
// listSum += list1[4];

// console.log("List1 rezultatas:", listSum);
// console.log("");

// let fibonacciSum = 0;

// fibonacciSum += fibonacci[0];
// fibonacciSum -= fibonacci[1];
// fibonacciSum += fibonacci[2];
// fibonacciSum -= fibonacci[3];
// fibonacciSum += fibonacci[4];

// console.log("Fibonacci rezultatas:", fibonacciSum);
// console.log("");

// let primeSum = 0;

// primeSum += primeNumbers[0];
// primeSum -= primeNumbers[1];
// primeSum += primeNumbers[2];
// primeSum -= primeNumbers[3];
// primeSum += primeNumbers[4];

// console.log("primeNumbers rezultatas:", primeSum);
// console.log("");

// /* Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
//  */

// const produktai = ["Pienas", "Kiaušiniai", "Duona", "Saldainiai", "Popierius"];
// console.log(produktai);
// console.log("");

// const penkiMenesiai = ["Sausis", "Kovas", "Gegužė", "Liepa", "Rugsėjis"];
// console.log("Penki mėnesiai: ", penkiMenesiai);
// console.log("");

// const lietuvosMiestai = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai", "Panevėžys"];
// console.log(`Miestai: ${lietuvosMiestai}`);
// console.log("");

// /* Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
//  */

// const separator = ", ";
// const ending = ".";
// let productList = "Produktų sąrašas: ";

// productList += produktai[4] + separator;
// productList += produktai[3] + separator;
// productList += produktai[2] + separator;
// productList += produktai[1] + separator;
// productList += produktai[0] + ending;

// console.log(productList);
// console.log("");

// let monthList = "Mėnesių sąrašas: ";

// monthList += penkiMenesiai[4] + separator;
// monthList += penkiMenesiai[3] + separator;
// monthList += penkiMenesiai[2] + separator;
// monthList += penkiMenesiai[1] + separator;
// monthList += penkiMenesiai[0] + ending;

// console.log(monthList);
// console.log("");

// let cityList = "Miestų sąrašas: ";

// cityList += lietuvosMiestai[4] + separator;
// cityList += lietuvosMiestai[3] + separator;
// cityList += lietuvosMiestai[2] + separator;
// cityList += lietuvosMiestai[1] + separator;
// cityList += lietuvosMiestai[0] + ending;

// console.log(cityList);
// console.log("");

// console.log("-------KINTAMUJU PALYGINIMAS--------");
// console.log("Tarpusavyje palyginti skaičiaus tipo kintamuosius:");

// const b = 17;
// const d = 24;

// if (b > d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (b < d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (b === d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (b !== d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (b >= d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (b <= d) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// console.log("----------------------------------");
// console.log("Išvesti teksto tipo kintamųjų ilgius");

// const carModel = "Volkswagenas";
// console.log("Car Model:", carModel, "Length:", carModel.length);

// const cityName = "Bangladesh";
// console.log("City Name", cityName, "Length:", cityName.length);

// console.log("");

// console.log("Tarpusavyje palyginti teksto tipo kintamųjų ilgius:");

// if (carModel.length > cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (carModel.length < cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (carModel.length === cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (carModel.length !== cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (carModel.length >= cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (carModel.length <= cityName.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// console.log("---------------------------------------");
// console.log("Išvesti sąrašo tipo kintamųjų ilgius");
// console.log("Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:");

// const menesiai = ["Sausis", "Kovas", "Gegužė", "Liepa", "Rugsėjis", "Lapkritis"];
// console.log("Array -", menesiai, "Ilgis:", menesiai.length);
// console.log("");

// const miestai = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai", "Panevėžys"];
// console.log("Array -", miestai, "Ilgis:", miestai.length);
// console.log("");

// if (miestai.length > menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (miestai.length < menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (miestai.length === menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (miestai.length !== menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (miestai.length >= menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

// if (miestai.length <= menesiai.length) {
//     console.log("Pomidoras");
// } else {
//     console.log("Bandykite dar kartą");
// }

console.clear();
console.log("----------FOR LOOP---------------");
console.log("");

/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30

 */

function addNumbersInRange(number1, number2) {
    //parametru validacija
    if (typeof number1 !== "number") {
        return console.log("ERROR - pirmasis parametras nera skaicius");
    }

    if (typeof number2 !== "number") {
        return console.log("ERROR - antras parametras nera skaicius");
    }

    if (!isFinite(number1)) {
        return console.log("ERROR - pirmasis parametras turi buti normalus skaicius");
    }

    if (!isFinite(number2)) {
        return console.log("ERROR - antras parametras turi buti normalus skaicius");
    }

    if (number1 % 1 !== 0) {
        return console.log("ERROR - pirmasis parametras turi buti sveikas skaicius");
    }

    if (number2 % 1 !== 0) {
        return console.log("ERROR - antras parametras turi buti sveikas skaicius");
    }

    //LOGIKA
    let sum = 0;
    if (number1 < number2) {
        for (let i = number1; i <= number2; i++) {
            sum += i;
        }
    }

    if (number1 > number2) {
        for (let i = number2; i <= number1; i++) {
            sum += i;
        }
    }

    if (number1 === number2) {
        sum += number1;
    }

    console.log(`Adding all numbers in range from ${number1} to ${number2} equals: ${sum}.`);
}

addNumbersInRange(0, 0);
addNumbersInRange(0, 4);
addNumbersInRange(0, 100);
addNumbersInRange(574, 815);
addNumbersInRange(-50, 50);
addNumbersInRange(-70, 30);

console.log("--------REVERSED RANGE--------");

addNumbersInRange(0, 0);
addNumbersInRange(4, 0);
addNumbersInRange(100, 0);
addNumbersInRange(815, 574);
addNumbersInRange(50, -50);
addNumbersInRange(30, -70);

console.log("----------------INVALID RANGES-------------------");
addNumbersInRange("Labas", 10);
addNumbersInRange(10, "Labas");
addNumbersInRange("Labas", "rytas");
addNumbersInRange(2.5, 10);
addNumbersInRange(Infinity, 10);
addNumbersInRange(NaN, 10);
addNumbersInRange(10, null);

console.log("--------------------------------");

/*

panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

*/

const normalString = "Tautvydas";
let reversedString = "";
for (let i = normalString.length - 1; i >= 0; i--) {
    reversedString += normalString[i];
}
console.log("Normal string:", normalString, "Reversed String:", reversedString);

// MAKE IT A FUNCTION

function stringReverse(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    console.log(`Your string: ${string}. Same string reversed: ${reversedString}.`);
}

stringReverse("kebabas");

console.log("-----------------------------------");
