import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DynamicFormViewComponent } from './dynamic-form-view.component';

export default {
  title: 'DynamicFormViewComponent',
  component: DynamicFormViewComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule,ReactiveFormsModule],
    }),
  ],
} as Meta<DynamicFormViewComponent>;

const Template: Story<DynamicFormViewComponent> = (
  args: DynamicFormViewComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
