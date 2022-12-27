console.clear();

/* 

    REDUCE - sutraukti/sumazinti
    procedura kaip is saraso reiksmiu gauti viena galutine reiksme
    daugiskaita -> vienaskaita

*/

const numbers = [10, 2, 8, 4, 6];

let sum = 0;
for (const number of numbers) {
    sum += number;
}
console.log("FOR SUM:",sum);

//paprastas reduce -logika vietoje
const reduceSum = numbers.reduce((sum, number) => sum + number);
console.log("REDUCE SUM:",reduceSum);


function calcSum(sum, number) {
 return sum + number;
}

//paprastas reduce - logika isorineje funkcijoje
const reduceSum2 = numbers.reduce(calcSum);
console.log("REDUCE SUM:",reduceSum2);


//KITI paprasti pavyzdiai
const reduceMinus = numbers.reduce((total, number) => total - number);
console.log("REDUCE MINUS:",reduceMinus);

const reduceMultiply = numbers.reduce((total, number) => total * number);
console.log("REDUCE Multiply:",reduceMultiply);

const reduceDivide = numbers.reduce((total, number) => total / number);
console.log("REDUCE Divide:",reduceDivide);

// reduce su nurodyta pradine akumuliatoriaus reiksme

const reduceMinus2 = numbers.reduce((total, number) => total - number, 0);
console.log("REDUCE 2 MINUS:",reduceMinus2);

const reduceMultiply2 = numbers.reduce((total, number) => total * number, 1);
console.log("REDUCE 2 Multiply:",reduceMultiply2);

const reduceDivide2 = numbers.reduce((total, number) => total / number, 1);
console.log("REDUCE 2 Divide:",reduceDivide2);

const students = [
    { name: "Petras", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Jonas", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
    { name: "Simon", age: 7, isMarried: false },
    { name: "Itoleta", age: 17, isMarried: true },
    { name: "Alas", age: 47, isMarried: true },
    { name: "Eliza", age: 2, isMarried: false },
];

const averageAge = students.reduce((t, s) => t + s.age, 0)/ students.length;
console.log("Students average Age:",Math.floor(averageAge));
console.log("Students average Age:",+averageAge.toFixed(1));
console.log("Students average Age:",parseInt(averageAge.toFixed(1)));
console.log("Students average Age:",parseFloat(averageAge.toFixed(1)));

console.log(+"5", parseInt("5"), parseFloat("5"));
console.log(+"3.1415", parseInt("3.1415"), parseFloat("3.1415"));
console.log(+"3.1415", parseInt("3.1415labas"), parseFloat("3.1415labas"));