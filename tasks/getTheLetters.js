/* 

priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
*/
console.clear();
function isrinktiRaides(string, whichLetters) {
    if (typeof string !== "string") {
        return console.log("Pirmasis kintamasis yra netinkamo tipo.");
    }
    if (string.length === 0 || string.length > 100) {
        return console.log("Pirmas kintamasis yra netinkamo dydžio");
    }
    if (typeof whichLetters !== "number") {
        return console.log("Antras kintamasis yra netinkamo tipo");
    }
    if (whichLetters <= 0) {
        return console.log("Antrasis kintamasis turi būti didesnis už nulį.");
    }
    if (whichLetters > string.length) {
        return console.log("Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgi");
    }
    if (whichLetters % 1 !== 0) {
        return console.log("Antrasis kintamasis turi buti sveikas skaicius");
    }
    let newString = "";
    for (i = whichLetters - 1; i < string.length; i += whichLetters) {
        newString += string[i];
    }
    console.log(newString);
}

isrinktiRaides("abcdefg", 2);
isrinktiRaides("abcdefghijkl", 3);
isrinktiRaides("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 4);
isrinktiRaides("abc", 0);
isrinktiRaides("abc", 4);
isrinktiRaides(1561, 2);
isrinktiRaides("Infinity", NaN);
isrinktiRaides(Infinity, "NaN");
isrinktiRaides(NaN, 5);
isrinktiRaides("Infinity", 2.5);
isrinktiRaides("Infinity", null);
isrinktiRaides(null, "NaN");
isrinktiRaides("Infinity", -5);
