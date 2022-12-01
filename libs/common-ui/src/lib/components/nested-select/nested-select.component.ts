import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseControlComponent } from '../../base-control/base-control.component';

@Component({
  selector: 'taomish-ui-v2-nested-select',
  templateUrl: './nested-select.component.html',
  styleUrls: ['./nested-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NestedSelectComponent),
      multi: true,
    }
  ]
})
export class NestedSelectComponent extends BaseControlComponent{
  @Input() optionData:any[]=[];
  @ViewChild('input') invTextER!: ElementRef;

  visibalData:any;
  isView=false

  width=50

  toggle:boolean[]=[]

  constructor() {
    super();
   }


  writeValue(value: any): void {
    this.visibalData=""
    if(value){
      this.visibalData=value;
    }
  }

  selectOption(val:any){
    // this.onChange(val);
    this.visibalData=val;
    this.isView=false;
  }

  getWidth(){
    this.width = this.invTextER.nativeElement.offsetWidth + 2;
  }
}
