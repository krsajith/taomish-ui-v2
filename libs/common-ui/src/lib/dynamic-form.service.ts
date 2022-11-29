import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Page, Field } from './page';


@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  buildFormGroup(fields: Field[]): FormGroup {
    return this.buildFormGroupFromFields(fields);
  }

  public getFields(page: Partial<Page>) {
    let fields: Field[] = [...page.fields || []];
    if (page.sections) {
      page.sections.forEach(section => fields = [...fields, ...section.fields]);
    }
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
      formGroup.addControl(field.name, formControl);
    })
    return formGroup;
  }
}
