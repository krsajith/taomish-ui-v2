import { Component, Input } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';
import { DynamicFormService } from '../dynamic-form.service';
import { Field } from '../page';

@Component({
  selector: 'tui--group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css'],
})
export class InputGroupComponent  extends BaseControlComponent {
  @Input() fields!:Field[]

  constructor(dynamicFormService:DynamicFormService){
    super();
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
}
