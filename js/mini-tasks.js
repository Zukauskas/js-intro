/* Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 */
console.log('')
console.log('#####Skaitiniai kintamieji#####');
console.log('')

const kebaboKaina = 5;
console.log(`Kebabo kaina yra ${kebaboKaina} EUR`);

const traukinioBilietas = 7.5;
console.log(`Kelionės kaina Kaunas-Vilnius - ${traukinioBilietas} EUR`);

const zemesMase = 6*10**24;
console.log(`Žemės masė apytikriai ~ ${zemesMase}kg`);

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

const visaSuma = kebaboKaina + traukinioBilietas + zemesMase;
console.log(visaSuma, "Dont what you ecpected :D");

console.log('')
console.log('#####Tekstiniai kintamieji kartu#####');
console.log('')

const visasTekstas = kaimynoVardas + ' ' + geriausiasPrekybosCentras + ' ' + gyvunas
console.log(visasTekstas)