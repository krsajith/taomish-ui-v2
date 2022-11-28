import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../page';

@Component({
  selector: 'tui-dynamic-form-view',
  templateUrl: './dynamic-form-view.component.html',
  styleUrls: ['./dynamic-form-view.component.css'],
})
export class DynamicFormViewComponent {
  @Input() formGroup!:FormGroup;
  @Input() fields!:Field[];
}
