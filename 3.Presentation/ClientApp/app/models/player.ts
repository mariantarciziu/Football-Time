export interface IPlayer {
    playerId: number;
    name: string;
    currentTeam: string;
    league: string;
    nationality: string;
    position: string;
    birthDay: string;
    height: string;
    weight: string;
    strengths: string;
    weaknesses: string;
    description: string;
    imageSource: string;
}

export class Player implements IPlayer {
    constructor(
        public playerId: number,
        public name: string,
        public currentTeam: string,
        public league: string,
        public nationality: string,
        public position: string,
        public birthDay: string, 
        public height: string,
        public weight: string,
        public strengths: string,
        public weaknesses: string,
        public description: string,
        public imageSource: string) { }
}