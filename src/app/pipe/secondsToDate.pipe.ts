import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'secondsToDate'
})
export class SecondsToPipe implements PipeTransform {
    transform(input: any, args: any[] = []) {
        if(input) {
            return new Date(input);
        }
    }
}