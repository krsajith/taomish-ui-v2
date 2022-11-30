import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormViewComponent } from './dynamic-form-view/dynamic-form-view.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    DynamicFormComponent,
    RepeaterComponent,
    InputGroupComponent,
    DynamicFormViewComponent,
    GridComponent,
  ],
  exports: [
    DynamicFormComponent,
    RepeaterComponent,
    InputGroupComponent,
    DynamicFormViewComponent,
    GridComponent,
  ],
})
export class CommonUiModule {}
