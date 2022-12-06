import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RepeaterComponent } from './repeater.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '../select/select.component';
import { InputComponent } from '../input/input.component';
import { DynamicFormViewComponent } from '../dynamic-form-view/dynamic-form-view.component';
import { Field } from '../../page';

export default {
  title: 'RepeaterComponent',
  component: RepeaterComponent,
  decorators: [
    moduleMetadata({
      declarations:[DynamicFormViewComponent,InputComponent,SelectComponent],
      imports: [HttpClientModule,FormsModule, ReactiveFormsModule ],
    }),
  ],
} as Meta<RepeaterComponent>;

const Template: Story<RepeaterComponent> = (args: RepeaterComponent) => ({
  props: args,
  // template: `<form #f="ngForm">
  // <tui-repeater #repeater ngModel name="userInput" [fields]="fields" > </tui-repeater>
  // <button (click)="repeater.add()">Add</button>
  // <p class="mt-3" >Form value: {{ f.value | json }}</p>
  //                </form>
  // `
});


const fields: Field[] = [
  {
    "name": "item",
    "type": "input",
    "inputType":"text",
  },
  {
      "name": "qty",
      "type": "input",
      "inputType":"number",
  },
  {
      "name": "rate",
      "type": "select",
  }
];


export const Primary = Template.bind({});
Primary.args = {
  fields:fields
};
