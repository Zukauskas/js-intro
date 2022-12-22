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

console.log("--------------");
console.log("COPY for");

const f = [9, 8, [7, [4], 3], 6, 5];
const g = [];
for (let i = 0; i < f.length; i++) {
    if (Array.isArray(f[i])) {
        const innerArray = [];
        for (let j = 0; j < f[i].length; j++) {
            innerArray.push(f[i][j]);
        }

        g.push(innerArray);
    } else {
        g.push(f[i]);
    }
}

console.log(f);
console.log(g);

f[0] = 99;
f[2][0] = 88;
f[2][1][0] = 44;

console.log(f);
console.log(g);

/* 

    for
        if
            for
                if
                    for
                        if
                        else
                else
        else
    
 kvepia rekursija :D
*/

console.log("-------------");
console.log("Structured Clone");

const h = [9, 8, [7, [4], 5], 6, 5];
const i = structuredClone(h);

console.log(h);
console.log(i);

h[0] = 99;
h[2][0] = 77;
h[2][1][0] = 44;

console.log(h);
console.log(i);

console.clear();

console.log("###MAP###");

const kiausiniai = [2, 4, 6, 8, 10];
// const eggs = [3, 5, 7, 9, 11];
const eggs = [];

for (let i = 0; i < kiausiniai.length; i++) {
    eggs.push(kiausiniai[i] * 2 - 1);
}

console.log(kiausiniai);
console.log(eggs);

function priceConvert(price) {
    return price * 1.5;
}

const didmenineKaina = [10, 20, 50, 100];
const mazmenineKaina = [];

for (const kaina of didmenineKaina) {
    mazmenineKaina.push(priceConvert(kaina));
}
console.log(didmenineKaina);
console.log(mazmenineKaina);

const retailPrice1 = didmenineKaina.map((price) => price * 1.5);
console.log(retailPrice1);

const retailPrice2 = didmenineKaina.map(priceConvert);
console.log(retailPrice2);

const aaa = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const bbb = aaa.map((n) => n * 2);
const ccc = aaa.map((n) => (n > 0 ? n : 0));
console.log(aaa);
console.log(bbb);
console.log(ccc);

const names = ["Petras", "Maryte", "Jonas", "Ona"];
const abbr = names.map((s) => s[0]);
console.log(names);
console.log(abbr);

const students = [
    { name: "Petras", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Jonas", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
];

const studentNames = students.map((s) => s.name);
console.log(students);
console.log(studentNames);

const extra = { children: 0, phone: null };
const studentExtra = students.map((s) => ({ ...s, ...extra }));

console.log(studentExtra);
