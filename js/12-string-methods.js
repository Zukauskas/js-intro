console.clear()

const name = 'Petras'

console.log(name.length)
console.log(''.length)
console.log('name'.length)
console.log('    '.length)
console.log('       '.length)

console.log('Petras'[0])
console.log('Petras'[1])
console.log('Petras'[2])

console.log(' ')
console.log('#CHARAT')
console.log('-------------------')

console.log('Petras'.charAt(0))
console.log('Petras'.at(-1))

console.log(' ')
console.log('#INCLUDE')
console.log('-------------------')
console.log('Maryte'.includes('M'))
console.log('Maryte'.includes('ry'))
console.log('Maryte'.includes('rte'))
console.log('Maryte'.startsWith('ma'))
console.log('Maryte'.startsWith('Mar'))
console.log('Maryte'.endsWith('Mar'))
console.log('Maryte'.endsWith('yte'))

const istiktukas = 'pyst'
const sakinys = 'Va tai pyst ir yra...'
const sakinys2 = 'Pyst par galva su pagaliu.'

console.log('Istiktukas:', sakinys.includes(istiktukas))
console.log('Istiktukas2:', sakinys2.includes(istiktukas))

console.log(sakinys.toLowerCase())
console.log(sakinys.toUpperCase())

console.log('Istiktukas lowecase:', sakinys.toLowerCase().includes(istiktukas))
console.log('Istiktukas lowecase 2:', sakinys2.toLowerCase().includes(istiktukas))

console.log(' ')
console.log('#indexOf')
console.log('-------------------')

console.log('Jonas'.indexOf('J'))
console.log('Jonas'.indexOf('s'))
console.log('Jonas'.indexOf('on'))
console.log('Jonas'.indexOf('x'))
console.log('-------------------')
console.log('Vasara'.indexOf('a', 2))
console.log('Ananasas'.indexOf('a', 3))

console.log(' ')
console.log('#slice')
console.log('-------------------')

const w1 = 'Pasimatymas'
console.log(w1)

const w2 = w1.slice(1, -1)
console.log(w2)

console.log(' ')
console.log('#replace')
console.log('-------------------')

const s1 = 'Labas rytas, Lietuva!'
const s2 = s1.replace('rytas', 'vakaras')
console.log(s1)
console.log(s2)

const template = 'Gera diena, VARDAS!'
const userHi = template.replace('VARDAS', 'Ona')

console.log(template)
console.log(userHi)

const song = 'na na na na'
const song2 = song.replace('na', 'la')
const song3 = song.replace(/na/g, 'la')
const song4 = song.replaceAll('na', 'la')
console.log(song)
console.log(song2)
console.log(song3)
console.log(song4)

console.log(' ')
console.log('#Repeat')
console.log('-------------------')

const superSong = 'La' + 'la'.repeat(10) + '!'
console.log(superSong)
