console.clear();

/* 
    
    IF - reiksmiu palyginimas

    Operatoriai:
    visi: >, <, <=, >=, ==, !=, ===, !==
    naudotini: >, <, <=, >=, ===, !==
    NEnaudotini: ==, !=

    Sablonai:

    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} else {} 

*/


const a = 7;
const b = 5;

// jeigu A daugiau B, tai spausdiname 'A daugiau uz B'
// jeigu A nera daugiau uz B, tai spaudiname 'A nera daugiau uz B'


if (a == b) {
    console.log(`${a} lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`)
}


if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`)
}


if (a != b) {
    console.log(`${a} nera lygu ${b}`)
} else {
    console.log(`${a} lygu ${b}`);
}

console.log('----------------------------------');

const c = 13;
const d = 11;

if (c > d) {
    console.log('C daugiau už D');
} else if (c < d) {
    console.log('C mažiau už D');
} else if (c == d){
    console.log('C yra lygu D');
} else {
    console.log('Kažkas neaiškaus su C ir D');
}


console.log('-----------Griežta------------');

if ( 5 === 5) {
    console.log('Taip')
}

if (5 !== 3) {
    console.log('Taip')
}

console.log('--------------------');


if (5 === '5') {
    console.log('vienodi')
} else {
    console.log('skirtingi')
}