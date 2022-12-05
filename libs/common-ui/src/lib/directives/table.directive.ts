import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tuiTable]'
})
export class TableDirective {

  constructor(private el: ElementRef) {}

  get x() {
    return (this.el.nativeElement as HTMLElement)?.getBoundingClientRect()?.x;
  }

}
