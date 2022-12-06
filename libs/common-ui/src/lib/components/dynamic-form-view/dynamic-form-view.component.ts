import { Component, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Field, Page } from '../../page';

@Component({
  selector: 'tui-dynamic-form-view',
  templateUrl: './dynamic-form-view.component.html',
  styleUrls: ['./dynamic-form-view.component.css'],
})
export class DynamicFormViewComponent {
  @Input() formGroup!:FormGroup;
  @Input() fields!:Field[];
  @Input() page!:Page;
  
  optionData=[
    {
      label:"Label 1",
      value:"label1"
    },
    {
      label:"Label 2",
      value:"label2"
    },
    {
      label:"Label 3",
      value:"label3"
    },
    {
      label:"Label 4",
      value:"label4"
    }
  ]

}
