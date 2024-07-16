import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPostDirective]',
  standalone: true,
})
export class PostDirective {
  @HostBinding('style.backgroundColor') bgColor = '#dfdff1';
  @HostBinding('style.transition') transition = 'all ease 0.3s';
  constructor() {}

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'lightgreen';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '#dfdff1';
  }
}
