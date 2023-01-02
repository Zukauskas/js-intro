console.clear()

console.log('#####FUNKCIJOS#####')
console.log('')

// /* Funkcija pavadinimu “tusciaFunkcija”:
//     nepriima jokių kintamųjų
//     neatlieka jokios vidinės logikos
//     gražina boolean tipo reikšmę “false”
//     TESTAS:
//         console.log( tusciaFunkcija() );
//         rezultatas: false
//  */

// function tusciaFunkcija() {
//     return false;
// }

// console.log(tusciaFunkcija());

// /* Funkcija pavadinimu “daugyba”:
//         priima du skaičiaus tipo kintamuosius
//     atskirame kintamajame įsimena sandaugos reikšmę
//     gražina saudaugos rezultatą
//     TESTAI:
//         console.log( daugyba( skaicius1, skaicius2 ) );
//         console.log( daugyba( skaicius3, skaicius2 ) );
//         console.log( daugyba( skaicius1, skaicius3 ) );
//         rezultatas: teisingos reikšmės;
//  */

// function daugyba(a, b) {
//     const sandauga = a * b;
//     return sandauga;
// }

// const skaicius1 = 15;
// const skaicius2 = 24;
// const skaicius3 = -15;

// console.log(daugyba(skaicius1, skaicius2));
// console.log(daugyba(skaicius3, skaicius2));
// console.log(daugyba(skaicius1, skaicius3));

/* Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
        priima vieną kintamąjį
        jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
        priešingu atveju, funkcija tęsia darbą
        į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
        gražina skaitmenų kiekį
        TESTAI:
            console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            rezultatas: 1
            console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            rezultatas: 3
            console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            rezultatas: 11
            console.log( skaitmenuKiekisSkaiciuje( true ) );
            rezultatas: “Pateikta netinkamo tipo reikšmė.”
            console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            rezultatas: “Pateikta netinkamo tipo reikšmė.”
            console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            rezultatas: “Pateikta netinkamo tipo reikšmė.”
 */

// function skaitmenuKiekisSkaiciuje(skaicius) {
//     if (typeof skaicius === "number" && Number.isNaN(skaicius) === false) {
//         const skaiciusIlgis = Math.abs(skaicius).toString().length;
//         if (Number.isInteger(skaicius)) {
//             return skaiciusIlgis;
//         } else if (skaicius % 1 !== 0) {
//             return skaiciusIlgis - 1;
//         } else {
//         }
//     } else {
//         return "Pateikta netinkamo tipo reikšmė";
//     }
// }

// console.log(skaitmenuKiekisSkaiciuje(5));
// // rezultatas: 1
// console.log(skaitmenuKiekisSkaiciuje(-781));
// // rezultatas: 3
// console.log(skaitmenuKiekisSkaiciuje(37060123456));
// // rezultatas: 11
// console.log(skaitmenuKiekisSkaiciuje(337.4));
// //rezultatas: 4
// console.log(skaitmenuKiekisSkaiciuje(-337.4));
// //rezultatas: 4
// console.log(skaitmenuKiekisSkaiciuje(100000000000000000000000)); //pasidaryti kad veiktu su šituo :D
// //rezultatas: 4
// console.log(skaitmenuKiekisSkaiciuje(true));
// // rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log(skaitmenuKiekisSkaiciuje("asd"));
// // rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log(skaitmenuKiekisSkaiciuje(NaN));
// // rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log('--------------------------------------')
/*
Pirmas skaicius:
    isFinite
    yra typeof === "number"

*/

function isValidNumber (numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (typeof numbersArray[i] === 'number' && isFinite(numbersArray[i])) {
      return numbersArray[i]
    }
  }
  return 'KLAIDA: Masyve nėra tinkamų skaičių'
}

function biggestNumber (numbersArray) {
  if (!Array.isArray(numbersArray)) {
    return 'KLAIDA: reikia masyvo'
  }
  if (numbersArray.length < 1) {
    return 'KLAIDA: masyvas negali buti tuscias'
  }

  let biggest = isValidNumber(numbersArray)

  for (let i = 0; i < numbersArray.length; i++) {
    if (!isFinite(numbersArray[i]) || typeof numbersArray[i] !== 'number') {
      continue
    }

    if (biggest < numbersArray[i]) {
      biggest = numbersArray[i]
    }
  }
  return biggest
}

console.log(biggestNumber('pomidoras'))
console.log(biggestNumber(true))
console.log(biggestNumber())
console.log(biggestNumber(5))
console.log(biggestNumber(function () {}))
console.log(biggestNumber(null))
console.log(biggestNumber({}))
console.log(biggestNumber([]))

console.log(biggestNumber([0]), '-->', 0)
console.log(biggestNumber([1, 2, 3]), '-->', 3)
console.log(biggestNumber([-5, 78, 14, 0, 18]), '-->', 78)
console.log(biggestNumber([69, 69, 69, 69, 66]), '-->', 69)
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1)

console.log(biggestNumber([1, 2, 3, Infinity]), '-->', 3)
console.log(biggestNumber([1, 2, Infinity, 3]), '-->', 3)
console.log(biggestNumber([1, Infinity, 2, 3]), '-->', 3)
console.log(biggestNumber([Infinity, 1, 2, 3]), '-->', 3)

console.log(biggestNumber([1, 2, 3, NaN]), '-->', 3)
console.log(biggestNumber([1, 2, NaN, 3]), '-->', 3)
console.log(biggestNumber([1, NaN, 2, 3]), '-->', 3)
console.log(biggestNumber([NaN, 1, 2, 3]), '-->', 3)

console.log(biggestNumber([1, 2, 3, true]), '-->', 3)
console.log(biggestNumber([1, 2, true, 3]), '-->', 3)
console.log(biggestNumber([1, true, 2, 3]), '-->', 3)
console.log(biggestNumber([true, 0, -1, -2]), '-->', 0)

console.log(biggestNumber([1, 2, 3, 'true']), '-->', 3)
console.log(biggestNumber([1, 2, 'true', 3]), '-->', 3)
console.log(biggestNumber([1, 'true', 2, 3]), '-->', 3)
console.log(biggestNumber(['true', 0, -1, -2]), '-->', 0)

console.log(biggestNumber(['true', true, NaN, [], [5], Infinity, -Infinity, 0]), '-->', 0)
console.log(biggestNumber(['true', true, NaN, [], [5], Infinity, -Infinity]))
