function correctPolishLetters(string) {
    let letterArray = string.split("");
    for (let i = 0; i < letterArray.length; i++) {
        switch (letterArray[i]) {
            case "ą":
                letterArray[i] = "a";
                break;
            case "ć":
                letterArray[i] = "c";
                break;
            case "ę":
                letterArray[i] = "e";
                break;
            case "ł":
                letterArray[i] = "l";
                break;
            case "ń":
                letterArray[i] = "n";
                break;
            case "ó":
                letterArray[i] = "o";
                break;
            case "ś":
                letterArray[i] = "s";
                break;
            case "ź":
                letterArray[i] = "z";
                break;
            case "ż":
                letterArray[i] = "z";
                break;
        }
    }
    let newString = letterArray.join("");
    return newString;
}

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");
