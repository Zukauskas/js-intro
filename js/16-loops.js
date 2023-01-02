/*

    LOOPS - ciklas
    tevas --> for
    vaikai (isvestiniai) - while, for-of, for-in, foreach(technically not a loop, but an array method)
    next-level --> map, sort, filter, reduce, ...

*/
console.clear()
const marks = [10, 2, 8, 6, 4]

// FOR
let sumFor = 0
for (let iFor = 0; iFor < marks.length; ++iFor) {
  const mark = marks[iFor]
  sumFor += mark
}

console.log('For:', sumFor / marks.length)

// WHILE
let sumWhile = 0
let iWhile = 0
while (iWhile < marks.length) {
  const mark = marks[iWhile]
  sumWhile += mark
  iWhile++
}

console.log('While:', sumWhile / marks.length)

// FOR-OF
let sumForOf = 0
for (const mark of marks) {
  sumForOf += mark
}

console.log('ForOf:', sumForOf / marks.length)

// FOREACH
let sumForeach1 = 0
marks.forEach(function (mark, iForeach, list) {
  sumForeach1 += mark
})

console.log('ForEach:', sumForeach1 / marks.length)

let sumForeach2 = 0
marks.forEach((mark) => (sumForeach2 += mark))
console.log('ForEach 2:', sumForeach2 / marks.length)

let sumForeach3 = 0

function sumavimasForeach (mark) {
  sumForeach3 += mark
}

marks.forEach(sumavimasForeach)
console.log('ForEach 3:', sumForeach3 / marks.length)

// FOR-IN iteruoja per objekta

const user = {
  name: 'Petras',
  age: 99,
  isMarried: true,
  favoriteNumber: 13,
  children: 5,
  grandChildren: 25,
  key: 'geltonas'
}

let sumForObj = 0
const userKeys = Object.keys(user)
console.log(userKeys)

for (let i = 0; i < userKeys.length; i++) {
  const key = userKeys[i]
  const value = user[key]
  if (typeof value === 'number' && isFinite(value) && value > 0) {
    sumForObj += value
  }
}

console.log('For obj:', sumForObj, '->', 142)

let sumForin = 0

for (const key in user) {
  const value = user[key]
  if (typeof value === 'number' && isFinite(value) && value > 0) {
    sumForin += value
  }
}

console.log('For-in:', sumForin, '->', 142)
