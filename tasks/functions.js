console.clear();

console.log("#####FUNKCIJOS#####");
console.log("");

/* Funkcija pavadinimu “tusciaFunkcija”:
    nepriima jokių kintamųjų
    neatlieka jokios vidinės logikos
    gražina boolean tipo reikšmę “false”
    TESTAS:
        console.log( tusciaFunkcija() );
        rezultatas: false
 */

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

/* Funkcija pavadinimu “daugyba”:
        priima du skaičiaus tipo kintamuosius
    atskirame kintamajame įsimena sandaugos reikšmę
    gražina saudaugos rezultatą
    TESTAI:
        console.log( daugyba( skaicius1, skaicius2 ) );
        console.log( daugyba( skaicius3, skaicius2 ) );
        console.log( daugyba( skaicius1, skaicius3 ) );
        rezultatas: teisingos reikšmės;
 */

function daugyba(a, b) {
    const sandauga = a * b;
    return sandauga;
}

const skaicius1 = 15;
const skaicius2 = 24;
const skaicius3 = -15;

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));

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

function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius === "number" && Number.isNaN(skaicius) === false) {
        const skaiciusIlgis = skaicius.toString().length;
        if (Number.isInteger(skaicius)) {
            return skaiciusIlgis;
        } else {
            return skaiciusIlgis - 1;
        }
    } else {
        return "Pateikta netinkamo tipo reikšmė";
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
// rezultatas: 1
console.log(skaitmenuKiekisSkaiciuje(781));
// rezultatas: 3
console.log(skaitmenuKiekisSkaiciuje(37060123456));
// rezultatas: 11
console.log(skaitmenuKiekisSkaiciuje(337.4));
//rezultatas: 4
console.log(skaitmenuKiekisSkaiciuje(true));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje("asd"));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(skaitmenuKiekisSkaiciuje(NaN));
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
