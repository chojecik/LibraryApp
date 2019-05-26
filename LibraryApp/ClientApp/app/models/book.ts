export class Book {
    constructor();

    constructor(
        public id?: number,
        public title?: string,
        public author?: string,
        public genre?: Genre,
        public numberOfPages?: number,
        public yearOfPublishment?: number,
        public status?: Status
    ) { };
}



