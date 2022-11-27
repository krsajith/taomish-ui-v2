import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  declarations: [DynamicFormComponent, RepeaterComponent, InputGroupComponent],
  exports: [DynamicFormComponent, RepeaterComponent, InputGroupComponent],
})
export class CommonUiModule { }
