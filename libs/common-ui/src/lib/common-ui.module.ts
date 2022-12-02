import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormViewComponent } from './components/dynamic-form-view/dynamic-form-view.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { NestedSelectComponent } from './components/nested-select/nested-select.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    DynamicFormComponent,
    RepeaterComponent,
    DynamicFormViewComponent,
    InputComponent,
    SelectComponent,
    FilePickerComponent,
    NestedSelectComponent,
    MultiSelectComponent,
    SearchFilterPipe,
    DynamicFormViewComponent,
    GridComponent
  ],
  exports: [
    DynamicFormComponent,
    RepeaterComponent,
    DynamicFormViewComponent,
    GridComponent,
  ],
  exports: [DynamicFormComponent, RepeaterComponent, DynamicFormViewComponent],
})
export class CommonUiModule {}
