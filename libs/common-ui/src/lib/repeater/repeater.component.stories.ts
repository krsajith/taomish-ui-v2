import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Field } from '../page';
import { RepeaterComponent } from './repeater.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormViewComponent } from '../components/dynamic-form-view/dynamic-form-view.component';

export default {
  title: 'RepeaterComponent',
  component: RepeaterComponent,
  decorators: [
    moduleMetadata({
      declarations:[DynamicFormViewComponent],
      imports: [HttpClientModule,FormsModule, ReactiveFormsModule ],
    }),
  ],
} as Meta<RepeaterComponent>;

const Template: Story<RepeaterComponent> = (args: RepeaterComponent) => ({
  props: args,
  template: `<form #f="ngForm">
  <tui-repeater #repeater ngModel name="userInput" [fields]="fields" > </tui-repeater>
  <button (click)="repeater.add()">Add</button>
  <p class="mt-3" >Form value: {{ f.value | json }}</p>
                 </form>
  `
});


const fields: Field[] = [
  {
    "name": "item",
    "type": "text"
  },
  {
    "name": "qty",
    "type": "number"
  },
  {
    "name": "rate",
    "type": "number"
  }
];


export const Primary = Template.bind({});
Primary.args = {
  fields:fields
};
