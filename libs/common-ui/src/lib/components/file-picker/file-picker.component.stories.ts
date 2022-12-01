import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FilePickerComponent } from './file-picker.component';

export default {
  title: 'FilePickerComponent',
  component: FilePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    }),
  ],
} as Meta<FilePickerComponent>;

const Template: Story<FilePickerComponent> = (args: FilePickerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  path:"",
  type:""
};
