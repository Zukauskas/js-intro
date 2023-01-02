import { Basketball } from './Basketball.js';

// Game league name, max players per team
const game = new Basketball('Bun land', 3);

// name, price
game.wannaBePlayer('Lola Bunny', 200);
game.wannaBePlayer('Bugs Bunny', 150);
game.wannaBePlayer('Daffy Duck', 100);
game.wannaBePlayer('Tweety', 80);
game.wannaBePlayer('Tasmanian Devil', 175);
game.wannaBePlayer('Brow', 140);
game.wannaBePlayer('Wet-Fire', 50);
game.wannaBePlayer('Chromos', 95);
game.wannaBePlayer('White Mamba', 105);
game.wannaBePlayer('Arachnneka', 195);

game.createTeam('Goon Squad');
// A "Goon Squad" just entered a game!

game.createTeam('Monstars');
// A "Monstars" just entered a game!

// team id, player id
game.buyPlayer(1, 1);
// "Goon Squad" team just acquired new player Lola Bunny for 200 cash/year!

game.buyPlayer(1, 2);
// "Goon Squad" team just acquired new player Bugs Bunny for 150 cash/year!

game.buyPlayer(1, 5);
// "Goon Squad" team just acquired new player Tasmanian Devil for 175 cash/year!

game.buyPlayer(2, 6);
// "Monstars" team just acquired new player Brow for 140 cash/year!

game.buyPlayer(2, 8);
// "Monstars" team just acquired new player Chromos for 95 cash/year!

game.buyPlayer(2, 10);
// "Monstars" team just acquired new player Arachnneka for 195 cash/year!

game.teamValue(1);
// "Goon Squad" team is paying 525 cash/year for it's players.

game.teamValue(2);
// "Monstars" team is paying 430 cash/year for it's players.

game.buyPlayer(2, 8);
// "Monstars" team can't add the same player twice!

game.buyPlayer(2, 7);
// "Monstars" team can't add extra players to it's team.\nMaximum players per team is 3.

game.letsPlay(1, 2);
// New game everybody!\n"Goon Squad" vs. "Monstars"

game.score(77, 76);
// "Goon Squad" wins!

game.letsPlay(2, 1);
// New game everybody!\n"Monstars" vs. "Goon Squad"

game.score(80, 69);
// "Monstars" wins!

game.letsPlay(1, 2);
// New game everybody!\n"Goon Squad" vs. "Monstars"

game.score(84, 82);
// "Goon Squad" wins!

game.seasonSummary();
// Season summary for "Bun land" 3x3 league:
// ####################
// Total games played: 3
// Winner team: "Goon Squad"
// ####################