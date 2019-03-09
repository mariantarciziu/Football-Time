export class Question {
    constructor(
        public questionId: number,
        public questionText: string,
        public answerA: string,
        public answerB: string,
        public answerC: string,
        public answerD: string,
        public correctAnswer: string) { }
}
