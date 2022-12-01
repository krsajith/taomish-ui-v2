import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NestedSelectComponent } from './nested-select.component';

export default {
  title: 'NestedSelectComponent',
  component: NestedSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
} as Meta<NestedSelectComponent>;

const Template: Story<NestedSelectComponent> = (
  args: NestedSelectComponent
) => ({
  props: args,
});

const data=[
  {
    name:"India",
    list:[
      {
        name:"Delhi"
      },
      {
        name:"Kota"
      },
      {
        name:"Kanpur"
      }
    ]
  },
  {
    name:"Nepal",
    list:[
      {
        name:"City 1"
      },
      {
        name:"City 2"
      }
    ]
  }
]

export const Primary = Template.bind({});
Primary.args = {
  optionData: data
};
