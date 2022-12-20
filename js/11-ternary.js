/* 

    TERNARY - supaprastintas if
    (if) klausimas ? ka daryti kai true : ka daryti tai false;

*/

console.clear();

// IF variantas
const laimejo = true;
let pinigine = 10;

if (laimejo) {
    pinigine += 20;
} else {
    pinigine -= 1;
}

console.log(pinigine);

// IF supaprastintas
const pergale = false;
let zinute = "Sveikinu tu laimejai!";

if (!pergale) {
    zinute = "Oops... Bandykite is naujo";
}

console.log(zinute);

//TERNARY
const lotteryWin = false;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);

const msgWin = true;
const msg = msgWin ? "Sveikinu" : "Oops...";

console.log(msg);
