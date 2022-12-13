/* 
    TYPEOF - nustato reikšmės tipą
*/

const n = 5; //number
const s = 'hi'; // string
const b = true; //boolean

const nType = typeof n;
const sType = typeof s;
const bType = typeof b;


console.log(n, nType);
console.log(s, sType);
console.log(b, bType);

console.log('-----------------');

const x = '' + 5;

console.log(typeof x);