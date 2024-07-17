import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
  standalone: true,
  pure: false,
})
export class LengthPipe implements PipeTransform {
  transform(value: string | any[], ...args: unknown[]): unknown {
    return value.length;
  }
}
