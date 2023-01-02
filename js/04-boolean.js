/*
    BOOLEAN (loginė reikšmė)
    true (number -> 1)
    false (number -> 0)
*/

const isSnowing = true
const isRainning = false

console.log('Ar sninga?', isSnowing)
console.log('Ar lyja?', isRainning)

// Įdomesni atvejai

const luckyNumber = 13
const luckySentence = `My lucky number is ${luckyNumber}!`
console.log(luckySentence)

const snowString = `Ar sninga? Ats: ${isSnowing}`
console.log(snowString)

const rainString = `Ar lyja? Ats: ${isRainning}`
console.log(rainString)

const penkiosTiesosSum = true + true + true + true + true
console.log('Tiesos:', penkiosTiesosSum)

const penkiosMelaiSum = false + false + false + false + false
console.log('Tiesos:', penkiosMelaiSum)
