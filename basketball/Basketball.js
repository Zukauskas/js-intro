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
}
export { Basketball };
