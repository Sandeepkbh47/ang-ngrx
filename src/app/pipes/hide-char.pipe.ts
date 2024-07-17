import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideChar',
  standalone: true,
})
export class HideCharPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 5).padEnd(value.length, '*');
  }
}
