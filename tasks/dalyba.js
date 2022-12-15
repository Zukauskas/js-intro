/* turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
 */
console.clear();
function dalyba(a, b) {
    if (typeof a !== "number") {
        return console.log("Pirmasis kintamasis nėra skaičius");
    }
    if (typeof b !== "number") {
        return console.log("Antrasis kintamasis nėra skaičius");
    }
    if (b === 0) {
        return console.log("Hahaha, dalinti iš nulio negalima");
    }
    if (!isFinite(a)) {
        return console.log("Pirmas kintamasis turi buti normalus skaicius");
    }
    if (!isFinite(b)) {
        return console.log("Antras kintamasis turi buti normalus skaicius");
    }

    let result = a / b;
    if (!Number.isInteger(result)) {
        result = Number.parseFloat(result.toFixed(6));
    }

    return console.log(result);
}

dalyba(16, 4);
dalyba(4, 16);
dalyba(20, -5);
dalyba(-20, 5);
dalyba(-20, -5);
dalyba(10, 2.5);
dalyba(25.25, 2.5);
dalyba(21, 13);
dalyba(10, "tekstas");
dalyba("pirmas", 5);
dalyba(20, 0);
dalyba(Infinity, 2);
dalyba(100, Infinity);
dalyba(100, NaN);
dalyba(NaN, 5);
