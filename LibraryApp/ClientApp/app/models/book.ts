export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public genre: Genre,
        public numberOfPages: number,
        public yearOfPublishment: number,
        public status: Status
    ) { };
}

enum Genre {
    crimeStory = 0,
    thriller = 1,
    fantasy = 2,
    bellesLettres = 3,
    drama = 4,
}

enum Status {
    borrowed = 0,
    available = 1,
    reserved = 2,
}