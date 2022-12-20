console.clear();
const n1 = 8;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function expression
// anonymous function
const minus = function (a, b) {
    return a - b;
};
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
};
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function
// if logic block has only 1 statement
// {} and return is optional
const divide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

// arrow function
// if logic block has only 1 parameter
// () can be omitted
// cant be omitted if () has something "odd" :D
const sqrt = (a) => a * a;
console.log(`${n1} ** 2 = ${sqrt(n1)}`);

console.log(hi());

const hello = () => "Hello kitty";
console.log(hello());

function hi() {
    return "Hi there!";
}
