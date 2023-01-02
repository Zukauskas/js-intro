import { Student } from './Student.js'

console.clear()

const petras = new Student('Petras', 2000)

petras.addMark(10, 0, 2, 22)
petras.addMark(-22)
petras.addMark(8)
petras.addMark(3.14)
petras.addMark(-3.14)
petras.addMark(4)
petras.addMark(6)
petras.addMark(NaN)

petras.marks = [10]

console.log(petras.getName())
console.log(petras.marks)
console.log(petras.marksAverage())
