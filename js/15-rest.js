console.clear();
/* 

    REST operatorius - surenka likusias nepaimtas reiškmes destrukturizuojant

*/

const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks;

console.log(marks);
console.log(first);
console.log(second);
console.log(visiKiti);

const person = {
    name: "Petras",
    age: 99,
    isMarried: true,
    favorite: {
        color: "red",
        number: 13,
        artist: "Spice Girls",
    },
};

const { age, isMarried, ...other } = person;
console.log(age, isMarried);
console.log(other);

function sum(a, b) {
    return a + b;
}

const s1 = sum(7, 5);
console.log(s1);

// 1 parametras (array), bet su daug reiksmiu
function arraySum(list) {
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

const s2 = arraySum([10, 2, 8, 4, 6]);
console.log(s2);

function sudetis(...args) {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

const s3 = sudetis(10, 2, 8, 4, 6);
console.log(s3);

function product() {
    let total = 1;

    for (let i = 0; i < [...arguments].length; i++) {
        total *= [...arguments][i];
    }

    return total;
}

const s4 = product(10, 2, 8, 4, 6);
console.log(s4);
