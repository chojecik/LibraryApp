import { UserRegistration } from "./user.registration.interface";

export class AppUser implements UserRegistration {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public street: string,
        public streetNumber: number,
        public localNumber: string,
        public city: string,
        public zipCode: string
    ) { };
}