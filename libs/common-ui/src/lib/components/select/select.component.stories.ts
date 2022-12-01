import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'SelectComponent',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SelectComponent>;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  optionData:[
    {
      label:"Label 1",
      value:"1"
    },
    {
      label:"Label 2",
      value:"2"
    },
    {
      label:"Label 3",
      value:"3"
    }
  ]
};
