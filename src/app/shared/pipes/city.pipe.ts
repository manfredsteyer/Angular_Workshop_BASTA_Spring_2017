import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    transform(value: string, fmt: string): string {

        if (!fmt) {
            fmt = 'short';
        }

        let long, short;

        switch(value) {
            case 'Hamburg':
                long = 'Airport Hamburg Helmut Schmidt';
                short = 'HAM';
                break;
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            default:
                long = short = 'ROM';
        }

        if (fmt == 'short') return short;
        return long;

    }

}