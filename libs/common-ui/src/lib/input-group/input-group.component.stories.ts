import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputGroupComponent } from './input-group.component';

export default {
  title: 'InputGroupComponent',
  component: InputGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InputGroupComponent>;

const Template: Story<InputGroupComponent> = (args: InputGroupComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
