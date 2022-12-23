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
console.clear();
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
