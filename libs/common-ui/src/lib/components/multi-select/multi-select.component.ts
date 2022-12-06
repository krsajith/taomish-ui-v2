import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { computePosition, flip } from '@floating-ui/dom';
import { BaseControlComponent } from '../../core/base-control/base-control.component';

@Component({
  selector: 'taomish-ui-v2-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent extends BaseControlComponent{
  isOpen = false;
  _options!: any[];
  @Input() label = 'label';
  @Input() value = 'value';

  selectedOptions: SelectionModel<any> =   new SelectionModel(true);
  selectedLabel!: string | unknown;

  @ViewChild('target', { static: true }) target!: ElementRef;
  @ViewChild('dropdown', { static: true }) dropdown!: ElementRef;


  searchValue='';
  width=0;


  constructor() {
    super();
   }

   writeValue(values: any[]): void {


    if (values && values.length > 0) {

      const selected = this._options.filter(o => values.includes(o[this.value]) )

      this.selectedOptions.select(...selected);
      this.updateView();
    }
  }

  @Input()
  public set options(options: any[]) {
    this._options = options;
    this.selectedOptions = new SelectionModel(true);
  }

  toggle(option: any) {
    this.selectedOptions.toggle(option);
    this.updateView();
  }

  private updateView() {
    this.onChange(this.selectedOptions.selected.map((o: any) => o[this.value]));
    this.selectedLabel = this.selectedOptions.selected
      .map((o: any) => o[this.label])
      .join(', ');
  }

  showDropDown() {
    this.isOpen = !this.isOpen;

    if(!this.isOpen) {
      this.hideDropDown();
      return;
    }

    this.dropdown.nativeElement.style.display='flex';
    computePosition(this.target.nativeElement, this.dropdown.nativeElement, {
      placement: 'top',
      middleware: [flip()],
    }).then(({ x, y }) => {
      Object.assign(this.dropdown.nativeElement.style, {
        // left: `${x}px`,
        // top: `${y}px`,
      });
    });
  }

  hideDropDown() {

    this.dropdown.nativeElement.style.display='none';
    this.isOpen=false;
  }
  selected(sel:any){
    let selitems = [];
    selitems = typeof sel === 'string' ? sel.split(","):[];
    return selitems;
  }

  checkAll($event:any){
    this.selectedOptions =  $event.target.checked ?  new SelectionModel(true,this._options):new SelectionModel(true);
    this.updateView();

  }

  clearall(){
    this.selectedOptions = new SelectionModel();
    this.updateView();
    this.isOpen = false;
  }

}
