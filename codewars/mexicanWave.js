console.clear();
function wave(str) {
    let arrSplit = ((str + " ").repeat(str.length - 1) + str).split(" ");
    console.log(arrSplit);

    return arrSplit.map((a, index) => a.slice(0, index) + a.at(index).toUpperCase() + a.slice(index + 1));
}

console.log(wave("codewars"));

let arr = [2, 3];

console.log(arr.map((a) => a * 2));

console.log(arr.filter((a) => a < 3));

console.log(arr.reduce((total, a) => total + a ** 2, 0));
