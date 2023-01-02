import { Artist } from './Artist.js'

console.clear()

const raimonda = new Artist('Raimonda', 'EUR')

raimonda.intro()
// Hi, my name is Raimonda and I am a musician!

raimonda.songPrice(15)
// Raimonda's price per song is 0.15 EUR;

raimonda.addSong('Bumciki')
raimonda.addSong('Tra lia lai')
raimonda.addSong('Oj lijo lijo')
raimonda.addSong('Kai grazumo')

raimonda.playlist()
// Raimonda's playlist:
// ====================
// 1. Bumciki (0)
// 2. Tra lia lai (0)
// 3. Oj lijo lijo (0)
// 4. Kai grazumo (0)

raimonda.playSong(0)
// Playing song: Bumciki.
raimonda.playSong(0)
// Playing song: Bumciki.
raimonda.playSong(1)
// Playing song: Tra lia lai.
raimonda.playSong(2)
// Playing song: Oj lijo lijo.
raimonda.playSong(0)
// Playing song: Bumciki.
raimonda.playSong(3)
// Playing song: Kai grazumo.
raimonda.playSong(3)
// Playing song: Kai grazumo.

raimonda.playlist()
// Raimonda's playlist:
// ====================
// 1. Bumciki (3)
// 2. Tra lia lai (1)
// 3. Oj lijo lijo (1)
// 4. Kai grazumo (2)

raimonda.fortune()
// Total lifetime wealth of Raimonda is 1.05 EUR right now!

raimonda.songPrice(25)
// Raimonda's price per song is 0.25 EUR;

raimonda.playSong(2)
// Playing song: Oj lijo lijo.
raimonda.playSong(0)
// Playing song: Bumciki.
raimonda.playSong(3)
// Playing song: Kai grazumo.

raimonda.playlist()
// Raimonda's playlist:
// ====================
// 1. Bumciki (4)
// 2. Tra lia lai (1)
// 3. Oj lijo lijo (2)
// 4. Kai grazumo (3)

raimonda.fortune()
// Total lifetime wealth of Raimonda is 1.80 EUR right now!
