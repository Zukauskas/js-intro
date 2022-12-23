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

console.log(diamond(27));
