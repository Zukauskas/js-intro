class Basketball {
    constructor(league, teamSize) {
        this.league = league;
        this.teamSize = teamSize;
        this.players = [];
        this.teams = [];
    }

    wannaBePlayer(player, costPerYear) {
        const newPlayer = { name: player, cost: costPerYear };
        this.players.push(newPlayer);
    }

    createTeam(teamName) {
        const newTeam = { name: teamName, players: [] };
        this.teams.push(newTeam);
    }

    buyPlayer(teamID, playerID) {
        const team = this.teams[teamID - 1];
        const player = this.players[playerID - 1]
        team.players.push(player)
        console.log(`"${team.name}" team just acquired new player ${player.name} for ${player.cost} cash/year!`)
    }

    teamValue(teamID) {
        const team = this.teams[teamID - 1];
        const teamPlayers = team.players;
        let value = 0;
        for (const player of teamPlayers) {
            value += player.cost
        }

        console.log(`"${team.name}" team is paying ${value} cast/year for it's players.`)
    }

}
export { Basketball };
