import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicFormViewComponent } from './components/dynamic-form-view/dynamic-form-view.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { NestedSelectComponent } from './components/nested-select/nested-select.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { GridComponent } from './components/grid/grid.component';
import { TableComponent } from './components/table/table.component';
import { TableDirective } from './directives/table.directive';
import { TableColumnDirective } from './directives/table-column.directive';
import { StepperComponent } from './components/stepper/stepper.component';
import { RepeaterComponent } from './components/repeater/repeater.component';
import { InterceptorInterceptor } from './core/interceptor/interceptor.interceptor';

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
    GridComponent,
    TableComponent,
    TableDirective,
    TableColumnDirective,
    StepperComponent,
  ],
  exports: [
    DynamicFormComponent,
    RepeaterComponent,
    DynamicFormViewComponent,
    GridComponent,
    TableDirective,
    TableColumnDirective,
    TableComponent,
    StepperComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
  ],
})
export class CommonUiModule {}
