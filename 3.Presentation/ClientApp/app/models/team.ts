export interface ITeam {
    teamId: number;
    name: string;
    league: string;
    country: string;
    description: string;
    imageSource: string;
}

export class Team implements ITeam {
    constructor(
        public teamId: number,
        public name: string,
        public league: string,
        public country: string,
        public description: string,
        public imageSource: string) { }
}
