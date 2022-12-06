import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

export default {
  title: 'StepperComponent',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<StepperComponent>;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
});

const data=[
  {
    icon:"",
    label:"Label 1",
    index:0,
    name:"label1",
    status:false
  },
  {
    icon:"",
    label:"Label 2",
    index:1,
    name:"label2",
    status:false
  },
  {
    icon:"",
    label:"Label 3",
    index:2,
    name:"label3",
    status:false
  }
]

export const Primary = Template.bind({});
Primary.args = {
  progressBarList: data
};
