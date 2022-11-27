import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RepeaterComponent } from './repeater.component';

export default {
  title: 'RepeaterComponent',
  component: RepeaterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<RepeaterComponent>;

const Template: Story<RepeaterComponent> = (args: RepeaterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
