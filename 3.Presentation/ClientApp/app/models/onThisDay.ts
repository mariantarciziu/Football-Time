export interface IOnThisDay {
    id: number;
    subject: string;
    date: string;
    imageSource: string
}

export class OnThisDay implements IOnThisDay {
    constructor(
        public id: number,
        public subject: string,
        public date: string,
        public imageSource: string) { }
}