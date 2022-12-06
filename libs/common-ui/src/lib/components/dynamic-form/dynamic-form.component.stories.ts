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
  "gridCols": "grid-cols-3",
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
      "stepName":"step1",
      "sections": [
        {
          "sectionName": "Invoice",
          "index": 1,
          "fields": [
            {
              "name": "invoiceNumber",
              "label": "Invoice Number",
              "type": "input",
              "inputType": "text",
              "validation": {
                "required": true
              }
            },
            {
              "name": "invoiceDate",
              "label": "Invoice Date",
              "type": "input",
              "inputType": "date",
              "validation": {
                "required": true
              },
              "topic": "invoice-date.change"
            },
            {
              "name": "amount",
              "type": "inputGroup",
              "label": "Invoice Date",
              "reference": "amount",
              "customCssClass": "unit-input"
              // "topicListener":[
              //     { topic:"invoice-date.change" , function:"function1"}
              // ]
            },
            {
              "name": "selectData",
              "type": "select",
              "label": "Invoice Date",
              "validation": {
                "required": true
              },
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
              "colSpan": "col-span-3",
              "reference": "invoiceItem",
              "validation": {
                "required": true
              }
            }
          ]
        },
      ]
    },

    {
      "stepName":"step2",
      "sections": [
        {
          "sectionName": "Invoice",
          "index": 1,
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
              "name": "price",
              "label": "Invoice Date",
              "type": "input",
              "inputType": "number",
              "validation": {
                "required": true
              },
              "topic": "invoice-date.change"
            },
            {
              "name": "amount",
              "type": "select",
              "label": "Invoice Date",
            },
            {
              "name": "selectData",
              "type": "select",
              "label": "Invoice Date",
              "validation": {
                "required": true
              },
            }
          ]
        },
      ]
    },
  ]

}

export const Primary = Template.bind({});
Primary.args = {
    page: page,
    gridCols:page.gridCols
};
