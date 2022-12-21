function count(string) {
    let letterObj = {};
    string.split("").map((a) => (a in letterObj ? (letterObj[a] += 1) : (letterObj[a] = 1)));
    return letterObj;
}

console.log(count("keba bas"));
