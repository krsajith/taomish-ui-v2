
import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

/**
 *Example Usage  <a (clickAway)="showChildren=false"/>
 */
@Directive({
    selector: '[clickAway]'
})
export class ClickAwayDirective {
    constructor(private _elementRef : ElementRef) {
    }

    @Output()
    public clickAway = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement:HTMLElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickAway.emit(targetElement);
        }
    }
}
