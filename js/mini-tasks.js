/* Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 */
console.log('')
console.log('#####Skaitiniai kintamieji#####');
console.log('')

const kebaboKaina = 5;
console.log(`Kebabo kaina yra ${kebaboKaina} EUR`);

const traukinioBilietas = 8;
console.log(`Kelionės kaina Kaunas-Vilnius - ${traukinioBilietas} EUR`);

const kazkoksSkaicius = 4**10;
console.log(`4**10 = ${kazkoksSkaicius}`);

/* Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 */
console.log('')
console.log('#####Tekstiniai kintamieji#####');
console.log('')

const kaimynoVardas = 'Jonas';
console.log('Mano kaimynas yra ' + kaimynoVardas);

const geriausiasPrekybosCentras = "Norfa";
console.log("Praktiški žmonės renkasi už " + geriausiasPrekybosCentras);

const gyvunas = "Katė";
console.log(`Mano megstamiausias gyvūnas - ${gyvunas}`);

/* 
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
 */
console.log('')
console.log('#####Skaitiniu kintamuju suma#####');
console.log('')

const visaSuma = kebaboKaina + traukinioBilietas + kazkoksSkaicius;
console.log(visaSuma, "viskas");

console.log('')
console.log('#####Tekstiniai kintamieji kartu#####');
console.log('')

const visasTekstas = kaimynoVardas + ' ' + geriausiasPrekybosCentras + ' ' + gyvunas
console.log(visasTekstas)
console.log('------------------------------------------');
console.log('');
console.log('');
console.log('Užduotys su arrays, sąrašais, matricomis');
console.log('');

/* Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */
const list1 = [0, 2, 4, 6, 8];
console.log(list1);
console.log('');

const fibonacci = [1, 1, 2, 3, 5];
console.log(`Fibonacci: ${fibonacci}`);
console.log('');

const primeNumbers = [2, 3, 5, 7, 11];
console.log('First few primes: ', primeNumbers);
console.log('');

/* Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console */
let listSum = 0;

listSum += list1[0];
listSum -= list1[1];
listSum += list1[2];
listSum -= list1[3];
listSum += list1[4];

console.log('List1 rezultatas:', listSum);
console.log('');

let fibonacciSum = 0;

fibonacciSum += fibonacci[0];
fibonacciSum -= fibonacci[1];
fibonacciSum += fibonacci[2];
fibonacciSum -= fibonacci[3];
fibonacciSum += fibonacci[4];

console.log('Fibonacci rezultatas:', fibonacciSum);
console.log('');

let primeSum = 0;

primeSum += primeNumbers[0];
primeSum -= primeNumbers[1];
primeSum += primeNumbers[2];
primeSum -= primeNumbers[3];
primeSum += primeNumbers[4];

console.log('primeNumbers rezultatas:', primeSum);
console.log('');

/* Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 */

const produktai = ['Pienas', 'Kiaušiniai', 'Duona', 'Saldainiai', 'Popierius'];
console.log(produktai);
console.log('');

const penkiMenesiai = ['Sausis', 'Kovas', 'Gegužė', 'Liepa', 'Rugsėjis'];
console.log('Penki mėnesiai: ', penkiMenesiai);
console.log('');

const lietuvosMiestai = ['Kaunas', 'Vilnius', 'Klaipėda', 'Šiauliai', 'Panevėžys'];
console.log(`Miestai: ${lietuvosMiestai}`);
console.log('');

/* Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
 */

const separator = ', ';
const ending = '.';
let productList = 'Produktų sąrašas: ';

productList += produktai[4] + separator;
productList += produktai[3] + separator;
productList += produktai[2] + separator;
productList += produktai[1] + separator;
productList += produktai[0] + ending;

console.log(productList)
console.log('');

let monthList = 'Mėnesių sąrašas: ';

monthList += penkiMenesiai[4] + separator;
monthList += penkiMenesiai[3] + separator;
monthList += penkiMenesiai[2] + separator;
monthList += penkiMenesiai[1] + separator;
monthList += penkiMenesiai[0] + ending;

console.log(monthList)
console.log('');

let cityList = 'Miestų sąrašas: ';

cityList += lietuvosMiestai[4] + separator;
cityList += lietuvosMiestai[3] + separator;
cityList += lietuvosMiestai[2] + separator;
cityList += lietuvosMiestai[1] + separator;
cityList += lietuvosMiestai[0] + ending;

console.log(cityList)
console.log('');

