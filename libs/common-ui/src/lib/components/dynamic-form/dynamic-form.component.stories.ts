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



const  page: Page = {
  "className": "grid-cols-3",
  "formGroups": {
    "invoiceItem": [
      {
        "name": "item",
        "type": "input",
        "inputType": "text",
        "validation": {
          "required": true
        }
      },
      {
        "name": "qty",
        "type": "input",
        "inputType": "number",
      },
      {
        "name": "rate",
        "type": "input",
        "inputType": "date",
        "validation": {
          "required": true
        },
      },
      {
        "name": "rate2",
        "type": "input",
        "inputType": "text",
        "validation": {
          "required": true
        },
      },
    ]
  },
  "inputGroups": {
    "amount": [
      {
        "name": "amount",
        "type": "input",
        "inputType": "number",
        "validation": {
          "required": true,
          "min": 10,
          "max": 100
        }
      },
      {
        "name": "currency",
        "type": "select",
        // "reference": "currencies",
        "validation": {
          "required": true
        }
      }
    ]
  },
  "lists": {
    "currencies": [
      { "value": "USD", "label": "USD" },
      { "value": "INR", "label": "INR" }
    ]
  },
  "steps": [
    {
      "stepName":"step3",
      "index":0,
      "status":false,
      "label":"Step 3",

          "fields": [
            {
              "name": "invoiceNumber1",
              "label": "Invoice Number 1",
              "type": "input",
              "inputType": "text",
              "validation": {
                "required": true
              }
            },
            {
              "name": "price1",
              "label": "Invoice Date",
              "type": "input",
              "inputType": "number",
              "validation": {
                "required": true
              },
              "topic": "invoice-date.change"
            },
          ]
    },

    {
      "stepName":"step1",
      "index":1,
      "status":false,
      "label":"Step 1",
          "fields": [
            {
              "name": "invoiceNumber2",
              "label": "Invoice Number",
              "type": "input",
              "inputType": "text",
              "validation": {
                "required": true
              }
            },
            {
              "name": "invoiceDate2",
              "label": "Invoice Date",
              "type": "input",
              "inputType": "date",
              "validation": {
                "required": true
              },
              "topic": "invoice-date.change"
            },
            {
              "name": "amount2",
              "type": "inputGroup",
              "label": "Invoice Date",
              "reference": "amount",
              "customCssClass": "unit-input"
              // "topicListener":[
              //     { topic:"invoice-date.change" , function:"function1"}
              // ]
            },
            {
              "name": "selectData2",
              "type": "select",
              "label": "Invoice Date",
              "validation": {
                "required": true
              },
              // "topicListener":[
              //     { topic:"invoice-date.change" , function:"function1"}
              // ]
            },
            {
              "name": "items",
              "type": "repeater",
              "colSpan": "col-span-3",
              "reference": "invoiceItem",
              "validation": {
                "required": true
              }
            }
      ]
    },

    {
      "stepName":"step2",
      "index":2,
      "status":false,
      "label":"Step 2",
          "fields": [
            {
              "name": "invoiceNumber3",
              "label": "Invoice Number",
              "type": "input",
              "inputType": "text",
              "validation": {
                "required": true
              }
            },
            {
              "name": "price3",
              "label": "Invoice Date",
              "type": "input",
              "inputType": "number",
              "validation": {
                "required": true
              },
              "topic": "invoice-date.change"
            },
            {
              "name": "amount3",
              "type": "select",
              "label": "Invoice Date",
            },
            {
              "name": "selectData3",
              "type": "select",
              "label": "Invoice Date",
              "validation": {
                "required": true
              },
            }
          ]
        },
  ]

}

export const Primary = Template.bind({});
Primary.args = {
    page: page,
    className:page.className
};
