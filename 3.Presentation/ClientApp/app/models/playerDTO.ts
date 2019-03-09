export class PlayerDTO{
    constructor(
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
