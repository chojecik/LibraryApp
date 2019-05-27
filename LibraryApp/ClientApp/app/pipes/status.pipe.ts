import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'statusPipe',
    pure: true
})
export class StatusPipe implements PipeTransform {
    constructor() { }

    transform(value: number, args?: any): string {
        if (value == 1) {
            return "Available";
        }
        else if (value == 2) {
            return "Borrowed";
        }
        else return "Reserved";
    }
}