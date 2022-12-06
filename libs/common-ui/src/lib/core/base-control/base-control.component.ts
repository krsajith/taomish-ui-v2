import {Component, Input, OnInit} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'taomish-ui-base-control',
  template: '',
})
export abstract class BaseControlComponent extends BaseComponent implements ControlValueAccessor {

  onChange = (_: any) => { }
  onTouch = () => { }

  constructor() {
    super();
  }
  abstract writeValue(obj: any | any[]): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
