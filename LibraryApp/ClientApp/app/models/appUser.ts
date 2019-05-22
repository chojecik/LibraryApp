export class AppUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public street: string,
        public streetNumber: number,
        public localNumber: string,
        public city: string,
        public zipCode: string
    ) { };
}