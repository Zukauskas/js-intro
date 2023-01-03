class Basketball {
    constructor(league, teamSize) {
        this.league = league;
        this.teamSize = teamSize;
        this.players = [];
    }

    wannaBePlayer(player, costPerYear) {
        const newPlayer = {name: player, cost: costPerYear}
        this.players.push(newPlayer)
    }

}

export { Basketball }