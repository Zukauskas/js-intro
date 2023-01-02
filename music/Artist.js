class Artist {

	constructor(name,currency){
		this.name = name;
		this.currency = currency;
		this.songList = [];
		this.moneyBag = 0;
	}

	intro() {

	return console.log(`Hi, my name is ${this.name} and I am a musician!`)
	}

	songPrice(price){
		this.price = +(price/100).toFixed(2);
		console.log(`${this.name}'s price per song is ${this.price} ${this.currency}`)
		return this.price
	}

	addSong(songName) {
		const newSong = {name: songName, timesPlayed: 0};
		this.songList.push(newSong)
	}

	playlist() {
		console.log(`${this.name}'s playlist:`);
		console.log('===========================')
	for (const [index,song] of this.songList.entries()) {
		console.log(`${index + 1}. ${song.name} (${song.timesPlayed})`)
		}

	}

	playSong(songPlace){
		for (const [index,song] of this.songList.entries()){
			if (index === songPlace){
				song.timesPlayed++
				this.moneyBag += this.price
				console.log(`Playing song: ${song.name}`)
			}
		
		}
			
	}

	fortune() {
		
		console.log(`Total lifetime wealth of ${this.name} is ${this.moneyBag} ${this.currency}`)
	}
}

export { Artist }
