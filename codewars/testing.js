console.clear();
/* 

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/

/* function getMiddle(s) {
    const half = s.length / 2;
    if (Number.isInteger(half)) {
        return s[half - 1] + s[half];
    }

    return s[Math.floor(half)];
}

console.log(getMiddle("tetst"), "-->", "es");
 */
/* 
function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    const firstpart = [...cc]
        .slice(0, -4)
        .map((a) => (a = "#"))
        .join("");
    const lastFour = cc.slice(-4);

    return firstpart + lastFour;
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
 */
/* 
function isTriangle(a, b, c) {
    return !(a >= b + c || b >= a + c || c >= a + b);
}

console.log(isTriangle(11, 2, 2), true);
console.log(isTriangle(7, 20, 2), false);
 */
/* console.clear();
function diamond(n) {
    if (n % 2 === 0 || n < 1) {
        return null;
    }
    const numArr = [...Array(n + 1).keys()]
        .slice(1)
        .concat([...Array(n).keys()].slice(1).reverse())
        .filter((a) => a % 2 !== 0);
    const diamond = numArr.map((a, index) => (a = " ".repeat((Math.max(...numArr) - a) / 2) + "*".repeat(a) + "\n")).join("");

    return diamond;
}

console.log(diamond(99));
 */
/* 
console.clear();
function nbDig(n, d) {
    const reg = new RegExp(`${d}`, "g");
    let numArr = [...Array(n + 1).keys()]
        .map((a) => "" + a * a)
        .join("")
        .match(reg).length;
    return numArr;
}

console.log(nbDig(5750, 0), 4700, "n = 5750, d = 0"); */
// console.log(nbDig(11011, 2), 9481, "n = 11011, d = 2");

/* let string = "PAR1S";
console.log(string.split("").map((a) => (a === "0" ? "O" : a === "1" ? "I" : a === "5" ? "S" : a)));
 */

//Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

/* function incrementString (string) {
    let numString = string.match(/\d+$/g);
    let newNum;
    console.log(numString);
    if (numString === null) {
        return string + "1"
    }
    numString = (string.match(/\d+$/g))[0].split("")
    console.log(numString);
    const onlyString = string.slice(0, -numString.length)
    console.log(onlyString);
    if (numString[numString.length - 1] === "9" && numString[numString.length - 2] === "9" && numString[numString.length - 3] === "9" ) {
        newNum = numString.slice(0,-3).join("") + (Number(numString.slice(-3).join("")) + 1)
    } else if (numString[numString.length - 1] === "9" && numString[numString.length - 2] === "9") {
        newNum = numString.slice(0,-3).join("") + (Number(numString.slice(-3).join("")) + 1)
    } else if (numString[numString.length - 1] === "9") {
        newNum = numString.slice(0,-2).join("") + (Number(numString.slice(-2).join("")) + 1)
    } else {
        newNum = numString.slice(0,-1).join("") + (Number(numString.slice(-1)) + 1)
    }
    console.log(newNum);
    if (newNum.length > numString.length && numString[0] !== "9") {
        newNum = newNum.slice(1, numString.length+1)
    }
    return onlyString + newNum
  }

  console.log(incrementString("foo00999")) 

 */

function oddCount(n) {
  if (!isFinite(n)) {
    return 0;
  }
  console.log(n);
  return Array.from({ length: n }).filter((a) => a % 2 !== 0);
}

console.log(oddCount(7102150311246421));
