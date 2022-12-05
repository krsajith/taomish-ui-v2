import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormViewComponent } from '../dynamic-form-view/dynamic-form-view.component';
import { HttpClientModule } from '@angular/common/http';
import { Page } from '../../page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepeaterComponent } from '../../repeater/repeater.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';

export default {
    title: 'DynamicFormComponent',
    component: DynamicFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [DynamicFormViewComponent,RepeaterComponent,InputComponent,SelectComponent],
            imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
        }),
    ],
} as Meta<DynamicFormComponent>;

const Template: Story<DynamicFormComponent> = (args: DynamicFormComponent) => ({
    props: args,
    // template: `<form #f="ngForm">
    // <tui-form ngModel name="userInput" [page]="page" > </tui-form>
    // <p class="mt-3" >Form value: {{ f.value | json }}</p>
    //                </form>
    // `
});



// const Template: Story<DynamicFormComponent> = (args: DynamicFormComponent) => ({
//   props: args,
// });



const page: Page = {
    "gridCols":"gid-cols-3",
    "formGroups": {
        "invoiceItem": [
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
                "type": "input",
                "inputType":"date",
            }
        ]
    },
    "inputGroups": {
        "amount": [
            {
                "name": "amount",
                "type": "input",
                "inputType":"numer"
            },
            {
                "name": "currency",
                "type": "select",
                "reference": "currencies"
            }
        ]
    },
    "lists": {
        "currencies": [
            { "value": "USD", "label": "USD" },
            { "value": "INR", "label": "INR" }
        ]
    },
    "fields": [],
    "sections": [
        {
            "sectionName": "Invoice",
            "index": 1,
            "fields": [
                {
                    "name": "invoiceNumber",
                    "label": "Invoice Number",
                    "type": "input",
                    "inputType":"text",
                },
                {
                    "name": "invoiceDate",
                    "label": "Invoice Date",
                    "type": "input",
                    "colSpan":"col-span-2",
                    "inputType":"date",
                    "topic":"invoice-date.change"
                },
                {
                    "name": "amount",
                    "type": "inputGroup",
                    "label": "Invoice Date",
                    "reference": "amount",
                    "customCssClass":"unit-input"
                    // "topicListener":[
                    //     { topic:"invoice-date.change" , function:"function1"}
                    // ]
                }
            ]
        },
        {
            "sectionName": "Items",
            "index": 2,
            "fields": [
                {
                    "name": "items",
                    "type": "repeater",
                    "colSpan":"col-span-3",
                    "reference": "invoiceItem"
                }
            ]
        }
    ]
}

export const Primary = Template.bind({});
Primary.args = {
    page: page,
    gridCols:page.gridCols
};
