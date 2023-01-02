console.clear()

/*

    FOR - ciklas (en. loop)
    kartojame norimą logiką N kartų arba iki kol reikia (reikalinga ptikrinimo salyga)

    for () {
        logika kuria reikiad aryti N kartu
    }

*/

// isspausdinti skaicius nuo 0 iki 5

for (let i = 0; i <= 5; i++) {
  console.log('dirbu...', i)
}

// isspausdinti skaicius nuo 5 iki 10

for (let i = 5; i <= 10; i++) {
  console.log('dirbu...', i)
}

// isspausdinti skaicius nuo -10 iki -5

for (let i = -10; i <= -5; i++) {
  console.log('dirbu...', i)
}

// isspausdinti skaicius nuo 10 iki 5

for (let i = 10; i >= 5; i--) {
  console.log('dirbu...', i)
}

console.clear()

const marks = [10, 2, 8, 4, 6]
const count = marks.length
let sum = 0

for (let i = 0; i < count; i++) {
  sum += marks[i]
  console.log(i, '->', marks[i], '=>', sum)
}

const average = sum / count
console.log('Pazymiu vidurkis', average)

console.log('----------------------------')

function marksAverage (marksArray) {
  let sum = 0

  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i]
  }

  return sum / marksArray.length
}

const student1 = {
  name: 'Jonas',
  marks: [2, 4, 6]
}

const student2 = {
  name: 'Ona',
  marks: [4, 6, 8, 10]
}

const student3 = {
  name: 'Alonso',
  marks: [6, 8, 10, 7, 3]
}

const vidurkis1 = marksAverage(student1.marks)
const vidurkis2 = marksAverage(student2.marks)
const vidurkis3 = marksAverage(student3.marks)

console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis1}`)
console.log(`${student2.name} pazymiu vidurkis yra ${vidurkis2}`)
console.log(`${student3.name} pazymiu vidurkis yra ${vidurkis3}`)

console.log('--------------------------------')
