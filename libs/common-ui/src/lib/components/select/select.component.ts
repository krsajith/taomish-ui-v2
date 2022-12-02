import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../../base-control/base-control.component';

@Component({
  selector: 'tui-select',
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

  formGroup=new FormGroup({
    data:new FormControl('')
  })

  ngOnInit(): void {
  }

  get data():FormControl{
    return this.formGroup.get('data') as FormControl
  }

  writeValue(value: any): void {
    this.data.patchValue("")
    if (value){
      this.formGroup.patchValue({data:value})
    }
  }
}
