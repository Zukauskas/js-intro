import { Artist } from "./Artist.js";

console.clear();

const raimonda = new Artist('Raimonda', 'EUR');

console.log(raimonda.intro());
// Hi, my name is Raimonda and I am a musician!

console.log(raimonda.songPrice(15));
// Raimonda's price per song is 0.15 EUR;

raimonda.addSong('Bumciki');
raimonda.addSong('Tra lia lai');
raimonda.addSong('Oj lijo lijo');
raimonda.addSong('Kai grazumo');

console.log(raimonda.playlist());
// Raimonda's playlist:
// ====================
// 1. Bumciki (0)
// 2. Tra lia lai (0)
// 3. Oj lijo lijo (0)
// 4. Kai grazumo (0)

console.log(raimonda.playSong(0));
// Playing song: Bumciki.
console.log(raimonda.playSong(0));
// Playing song: Bumciki.
console.log(raimonda.playSong(1));
// Playing song: Tra lia lai.
console.log(raimonda.playSong(2));
// Playing song: Oj lijo lijo.
console.log(raimonda.playSong(0));
// Playing song: Bumciki.
console.log(raimonda.playSong(3));
// Playing song: Kai grazumo.
console.log(raimonda.playSong(3));
// Playing song: Kai grazumo.

console.log(raimonda.playlist());
// Raimonda's playlist:
// ====================
// 1. Bumciki (3)
// 2. Tra lia lai (1)
// 3. Oj lijo lijo (1)
// 4. Kai grazumo (2)

console.log(raimonda.fortune());
// Total lifetime wealth of Raimonda is 1.05 EUR right now!

console.log(raimonda.songPrice(25));
// Raimonda's price per song is 0.25 EUR;

console.log(raimonda.playSong(2));
// Playing song: Oj lijo lijo.
console.log(raimonda.playSong(0));
// Playing song: Bumciki.
console.log(raimonda.playSong(3));
// Playing song: Kai grazumo.

console.log(raimonda.playlist());
// Raimonda's playlist:
// ====================
// 1. Bumciki (4)
// 2. Tra lia lai (1)
// 3. Oj lijo lijo (2)
// 4. Kai grazumo (3)

console.log(raimonda.fortune());
// Total lifetime wealth of Raimonda is 1.80 EUR right now!
