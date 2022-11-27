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
    return fields;
  }

  buildFormGroupFromFields(fields: Field[]): FormGroup {
    const formGroup = new FormGroup({});
    fields.filter(field=> !['inputGroup','repeater'].includes(field.type)).forEach(field => {
      const formControl = new FormControl();
      formGroup.addControl(field.name, formControl);
    })
    return formGroup;
  }
}
