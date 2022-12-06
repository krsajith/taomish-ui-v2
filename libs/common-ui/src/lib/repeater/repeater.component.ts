import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { BaseControlComponent } from '../base-control/base-control.component';
import { DynamicFormService } from '../dynamic-form.service';
import { Field } from '../page';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'tui-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RepeaterComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: RepeaterComponent,
      multi: true
    }
  ],
})
export class RepeaterComponent extends BaseControlComponent implements OnInit, Validator {

  @Input() fields!: Field[];
  @Input() minimumRows = 1;

  parent = new FormGroup({
    formArray: new FormArray([])
  })

  constructor(private storeService: StoreService, private dynamicFormService: DynamicFormService) {
    super();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.parent.invalid?{ formArray :'invalid' }:null;
  }

  ngOnInit(): void {
    console.log('RepeaterComponent',this.fields);
    this.formArray.valueChanges.subscribe(value=> this.onChange(value));
    this.addForm();
  }

  writeValue(obj: any): void {
    console.log('write value');
  }

  addForm() {
    const form = this.dynamicFormService.buildFormGroupFromFields(this.fields);
    this.formArray.push(form)
    console.log(this.formArray);

  }

  get formArray(): FormArray {
    return this.parent.get('formArray') as FormArray;
  }

  get groups(): FormGroup[]{
    return this.formArray.controls as FormGroup[];
  }

  add() {
    this.addForm();
  }

  remove(index:number) {
    this.formArray.removeAt(index);
  }
}
