import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'status',
    pure: true
})
export class StatusPipe implements PipeTransform {
    constructor() { }

    transform(value: any, args?: any): Status {
        return value;
    }
}