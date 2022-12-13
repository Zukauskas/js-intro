/* 
    OBJECT (objektas)
    "tikras" objektas
*/

// [vardas, amzius, ar susituokęs]

const user1 = ['Petras', 99, true];
const user2 = ['Maryte', 87, false];

//Petras yra 99 metų amžiaus.
//Marytė yra 87 metų amžiaus.


const user1name = user1[0];
const user1Age = user1[1];

const userIntro = `${user1name} yra ${user1Age} metų amžiaus.`;
console.log(userIntro);


const user2name = user2[0];
const user2Age = user2[1];

const user2Intro = `${user2name} yra ${user2Age} metų amžiaus.`;
console.log(user2Intro);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: false,
    marks: [2, 4, 6, 8]
};
console.log(student1);


const student2 = {
    name: 'Ona',
    age: 69,
    isMarried: true,
    marks: [10, 2, 8, 4, 6]
};
console.log(student2);


//STANDARTINIS REIKSMES ITRAUKIMAS IS OBJEKTO -> obj['key']
const stud1Name = student1['name'];
const stud1Age = student1['age'];
const stud1Marks = student1['marks'];
const stud1Status = student1['isMarried'];

console.log(stud1Name);
console.log(stud1Age);
console.log(stud1Marks);
console.log(stud1Status);

const stud2Name = student2['name'];
const stud2Age = student2['age'];
const stud2Marks = student2['marks'];
const stud2Status = student2['isMarried'];

console.log(stud2Name);
console.log(stud2Age);
console.log(stud2Marks);
console.log(stud2Status);

//SUPAPRATSINTA OBJEKTO REIKSMES ISTRAUKIMO SINTAKSE -> obj.key

const car = {
    brand: 'Tesla',
    model: 'S',
    price: 100000,
    currency: 'EUR',
    color: 'red'
}

console.table(car);
console.log(car['brand']);
console.log(car.brand);

const obj = {
    simple: 'paprasta reikšmė',
    'child-name': "Johnny Boy"
}

console.log(obj.simple);
console.log(obj['child-name']);

const marks = student2.marks

let sum = 0;
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

const count = marks.length;

const average = sum / count;
console.log('Mark average:', average)

const person = {
    name: 'Petras',
    age: 99,
    children:[
        {
            name: 'Maryte',
            age: 13
        },
        {
            name: 'Jonas',
            age: 27
        },
        {
            name: 'Ona',
            age: 41
        }
    ],
}

console.log(person.children[2].name);
console.log(person.children.length);
