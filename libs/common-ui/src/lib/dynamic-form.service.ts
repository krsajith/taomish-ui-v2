import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from './core/store/store';
import { Page, Field, Validation } from './page';


@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  stores: { [k: string]: Store<any> } = {};
  values: { [k: string]: Observable<any> } = {};

  buildFormGroup(fields: Field[]): FormGroup {
    return this.buildFormGroupFromFields(fields);
  }

  public getFields(page: Partial<Page>):Field[] {
    let fields:Field[]=[]
    page.steps?.forEach(step=> fields.push(...step.fields || []))

    fields.forEach(field=>{
      if (field.type==='repeater' && field.reference && page.formGroups) {
        field.fields = page.formGroups[field.reference];
      }
      if (field.type==='inputGroup' && field.reference && page.inputGroups) {
        field.fields = page.inputGroups[field.reference];
      }
    });

    return fields;
  }

  buildFormGroupFromFields(fields: Field[]): FormGroup {
    const formGroup = new FormGroup({});
    fields.forEach(field => {
      const formControl = new FormControl();
      if(field.topic){
        formControl.valueChanges.subscribe(value=> console.log(field.topic,value))
      }
      if(field.validation){
        this.addValidation(field.validation,formControl);
      }
      formGroup.addControl(field.name, formControl);
    })
    return formGroup;
  }

  addValidation(validationList: Validation, formControl: FormControl) {
    const arr: any[] = []
    const customValidator:any[]=[]
    if (validationList.maxLength) arr.push(Validators.maxLength(validationList.maxLength))
    if (validationList.minLength) arr.push(Validators.minLength(validationList.minLength))
    if (validationList.required) arr.push(Validators.required)
    if (validationList.min) arr.push(Validators.min(validationList.min))
    if (validationList.max) arr.push(Validators.max(validationList.max))
    // if (validationList.customValidator){
    //   validationList.customValidator.forEach(e=>{
    //     if(e.functionKey=='unique')customValidator.push(CustomValidatorService.isUniqueFieldName(this.apiService,environment.apiEndpoint +e.url+localStorage.getItem('tenantId')+ `&facilityCode=`,this.page))
    //   })
    // }
    formControl.addValidators(arr);
    formControl.addAsyncValidators(customValidator)
  }
}
