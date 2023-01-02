console.clear()

// destructuring

const pazymiai = [10, 9, 8, 7, 6]

const pirmas = pazymiai[0]
const antras = pazymiai[1]

console.log(pirmas)
console.log(antras)

const marks = [10, 2, 4, 6, 8]
const [first, second, third] = marks

console.log(first)
console.log(second)
console.log(third)

const petras = ['Petras', 99, true]

const [vardas, amzius, arVedes] = petras

console.log(vardas, amzius, arVedes)

const car = {
  brand: 'Tesla',
  model: 'S',
  color: 'red'
}

const { color, model } = car
console.log(color, model)

// SPREAD - išrašymas/iškopijavimas

const numbers = [1, 2, 3, 4, 5]
const numbers2 = [...numbers, ...numbers]
const numbers3 = [...numbers2, 99, ...numbers]

console.log(numbers)
console.log(numbers2)
console.log(numbers3)

const person = {
  name: 'Maryte',
  age: 88,
  isMarried: true,
  childrenCount: 5,
  phone: 123456789,
  address: 'Street str 1, City',
  height: 200,
  eyes: 'round'
}

console.log(person)

const person2 = { ...person, car: { ...car, price: 100000 }, happy: true }

console.log(person2)
console.log(person2.car.brand)

console.clear()

const a = ['a', 'aa']
const b = ['b', 'bb']
const c = ['c', 'cc']

const doubleABC = [...a, 111, ...b, ...c]
const doubleCBA = [...c, ...b, 222, ...a]
console.log(doubleABC)
console.log(doubleCBA)

const oa = { a: 'a', aa: 'aa' }
const ob = { b: 'b', bb: 'bb' }
const oc = { c: 'c', cc: 'cc' }

const oABC = { ...oa, ...ob, gg: 'gg', ...oc, cc: 'nebe CC' }
console.log(oABC)
console.log(oABC.cc)
console.log(oABC.gg)

const user = {
  name: 'Username',
  password: 'password123'
}

const user2 = { ...user, name: 'Petras' }

console.log(user)
console.log(user2)
console.log(user2.name)
