import {Question} from './question'
export class Quiz {
    constructor(
        public quizId: number,
        public title: string,
        public description: string,
        public imageSource: string,
        public questions: Array<Question>) { }
}
