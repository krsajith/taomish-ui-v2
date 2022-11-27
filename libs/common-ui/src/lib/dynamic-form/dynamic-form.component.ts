
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {  FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store } from '../store/store';

import { Observable } from 'rxjs';
import { BaseControlComponent } from '../base-control/base-control.component';
import { DynamicFormService } from '../dynamic-form.service';
import { Field, Page } from '../page';

@Component({
  selector: 'tui-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
  ],  
})
export class DynamicFormComponent extends BaseControlComponent implements OnInit {

  @Input() page!: Page;
  fields!: Field[];

  ready = false;
  formGroup!: FormGroup;
  stores: { [k: string]: Store<any> } = {};
  values: { [k: string]: Observable<any> } = {};
  parentValueChanges: { [k: string]: Observable<string> } = {};

  constructor(private storeService: StoreService,private dynamicFormService:DynamicFormService) {
    super();
  }
  ngOnInit(): void {
    this.fields = this.dynamicFormService.getFields(this.page);
    this.formGroup = this.dynamicFormService.buildFormGroup(this.fields);
    this.ready=true;
    this.formGroup.valueChanges.subscribe(value=> this.onChange(value));
  }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }
}
