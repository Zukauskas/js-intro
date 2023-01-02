/*
    ARRAY (list, sąrašas, matrica, matrix, masyvas)
    "supaprastintas" objektas
*/

const emptyArray = []
console.log(emptyArray)

const marks = [10, 2, 8, 4, 6]
console.log(marks)

const usersNames = ['Petras', 'Marytė', 'Jonas', 'Ona']
console.log(usersNames)

const boolList = [true, false, true, true, false, false]
console.log(boolList)

// LABAI NEREKOMENDUOTINA MIKSTUOTI SKIRTINGO TIPO REIKMŠMES MASYVE
const combo1 = ['Jonas', 99, true]
console.log(combo1)

const marksCount = marks.length
console.log(marksCount)

const emptySize = emptyArray.length
console.log(emptySize)

const money = [5, 10, 20, 5]
console.log('Kupiūros:', money)

let wallet = 0

wallet += money[0]
wallet += money[1]
wallet += money[2]
wallet += money[3]

console.log('Wallet:', wallet, 'pinigų')

const marks2 = [10, 2, 8, 4, 6]

let marksSum = 0

marksSum += marks2[0]
marksSum += marks2[1]
marksSum += marks2[2]
marksSum += marks2[3]
marksSum += marks2[4]

console.log('Marks sum:', marksSum)

const abc = ['a', 'b', 'c', 'd', 'e', 'f']
const separator = ', '
const ending = '.'
let abcString = 'Abecele: '

abcString += abc[0] + separator
abcString += abc[1] + separator
abcString += abc[2] + separator
abcString += abc[3] + separator
abcString += abc[4] + separator
abcString += abc[5] + ending

console.log(abcString)
