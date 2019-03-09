export class PostDTO {
    constructor(
        public title: string,
        public date: string,
        public body: string,
        public imageSource: string) { }
}