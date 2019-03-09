import {Question} from './question'
export class QuizDTO {
    constructor(
        public title: string,
        public description: string,
        public imageSource: string,
        public questions: Array<Question>) { }
}
