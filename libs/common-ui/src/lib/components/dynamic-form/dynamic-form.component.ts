
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {  AbstractControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { StoreService } from '../../store/store.service';
import { Store } from '../../store/store';

import { Observable } from 'rxjs';
import { BaseControlComponent } from '../../base-control/base-control.component';
import { DynamicFormService } from '../../dynamic-form.service';
import { Field, FieldStructure, Page } from '../../page';

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
    {
      provide: NG_VALIDATORS,
      useExisting: DynamicFormComponent,
      multi: true
    }
  ],
})
export class DynamicFormComponent extends BaseControlComponent implements OnInit,Validator {

  @Input() page!: Page;
  @Input() fields!: Field[];
  @Input() gridCols!:string;

  @Output() formGroupRef=new EventEmitter;

  ready = false;
  formGroup!: FormGroup;
  stores: { [k: string]: Store<any> } = {};
  values: { [k: string]: Observable<any> } = {};
  parentValueChanges: { [k: string]: Observable<string> } = {};
  progressBarList:any[]=[]
  activeForm:any="";

  fieldStructure:FieldStructure[]=[]

  constructor(private storeService: StoreService,private dynamicFormService:DynamicFormService) {
    super();
  }

  ngOnInit(): void {
    if(this.page) {
      this.activeForm=this.page.steps[0].stepName;
      this.page.steps.forEach(e=>{
        this.progressBarList.push({icon:e.icon, label:e.label,index:e.index,status:false,name:e.stepName})
      })
      this.fieldStructure = this.dynamicFormService.getFields(this.page);
      if(!this.gridCols){
        this.gridCols=this.page.gridCols
      }
    }

    this.formGroup=new FormGroup({})


    if(this.fieldStructure.length>1){
      this.fieldStructure.forEach(e=>{
        this.formGroup.addControl(e.stepName,this.dynamicFormService.buildFormGroup(e.fields))
      })
    }else{
        this.fields=this.fields?this.fields:this.fieldStructure[0].fields;
        this.formGroup = this.dynamicFormService.buildFormGroup(this.fields);
    }
    this.formGroup.valueChanges.subscribe(value=> this.onChange(value));
    this.ready=true;
    this.formGroupRef.emit(this.formGroup)
    console.log(this.formGroup);
  }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.formGroup.invalid?{formGroup:'Invalid'} : null;
  }

  // getFormGroup():FormGroup{
  //   return this.formGroup;
  // }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }

  getFormGroup(fieldName:any):FormGroup{
    return this.formGroup.get(fieldName) as FormGroup
  }

  setIndex(steper:any){
    if( steper.previousItemName!=undefined && this.getFormGroup(steper.previousItemName).invalid){
      alert("Please enter requred fields");
      return;
    }
    if(steper.currentIndex!==0 || steper.currentIndex==this.progressBarList,length-1){
      this.progressBarList[steper.currentIndex-1].status=true;
    }
    this.activeForm=steper.currentItemName;
  }
}
