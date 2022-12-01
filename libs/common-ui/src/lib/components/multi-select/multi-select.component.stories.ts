import { FormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { MultiSelectComponent } from './multi-select.component';

export default {
  title: 'MultiSelectComponent',
  component: MultiSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
      declarations:[SearchFilterPipe]
    }),
  ],
} as Meta<MultiSelectComponent>;

const Template: Story<MultiSelectComponent> = (args: MultiSelectComponent) => ({
  props: args,
});
const data=[
  {
    label:"Label 1",
    value:"label1"
  },
  {
    label:"Label 2",
    value:"label2"
  },
  {
    label:"Label 3",
    value:"label3"
  },
  {
    label:"Label 4",
    value:"label4"
  }
]
export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  value: 'value',
  options:data
};
