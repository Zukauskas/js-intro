class Basketball {
    constructor(league, teamSize) {
        this.league = league;
        this.teamSize = teamSize;
        this.gamesPlayed = 0;
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
        if (team.players.some(p => p === player)) {
            return console.log(`"${team.name}" team can't add the same player twice`)
        }
        if (team.players.length === 3) {
            return console.log(`"${team.name}" team can't add extra players to it's team.\nMaximum players per team is 3`)
        }
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

    letsPlay(firstTeam, secondTeam) {
        const firstTeamName = this.teams[firstTeam - 1].name;
        const secondTeamName = this.teams[secondTeam - 1].name;
        console.log(`New game everybody!\n"${firstTeamName}" vs. "${secondTeamName}"`)
        this.gamesPlayed++
    }

}
export { Basketball };
