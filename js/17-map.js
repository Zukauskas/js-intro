console.clear();

// MAP - grazinamas naujas to pacio dydzio masyvas su modifikuotomis reiksmemis

const marks = [10, 2, 8, 4, 6];

const a = marks;

console.log(marks);
console.log(a);

a[0] = 2;

console.log(marks);
console.log(a);

const b = [1, 2, 3];
const c = [...b];

b[0] = 7;

console.log(b);
console.log(c);
