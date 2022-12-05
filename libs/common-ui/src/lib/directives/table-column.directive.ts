import { AfterViewInit, Directive, ElementRef, Optional } from '@angular/core';
import { TableDirective } from './table.directive';

@Directive({
  selector: '[tuiTableColumn]'
})
export class TableColumnDirective implements AfterViewInit{

  constructor(
    private el: ElementRef,
    @Optional() private table: TableDirective
  ) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    const { x } = el.getBoundingClientRect();
    el.style.position = 'sticky';
    el.style.left = this.table ? `${x - this.table.x}px` : '0px';
  }

}
