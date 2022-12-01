import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../../base-control/base-control.component';

@Component({
  selector: 'taomish-ui-v2-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent extends BaseControlComponent implements OnInit{

  @Input() optionData:any[]=[];

  ngOnInit(): void {
  }


  writeValue(obj: any): void {
  }
}
