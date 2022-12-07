import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormViewComponent } from '../dynamic-form-view/dynamic-form-view.component';
import { HttpClientModule } from '@angular/common/http';
import { Page } from '../../page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { RepeaterComponent } from '../repeater/repeater.component';
import { StoreConfig } from '../../core/store/store-config';
import  storeConfigs  from '../../mock/store-config-list'



export default {
    title: 'DynamicFormComponent',
    component: DynamicFormComponent,
    decorators: [
        moduleMetadata({
            declarations: [DynamicFormViewComponent,RepeaterComponent,InputComponent,SelectComponent],
            imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
            providers:[{ provide: Map<string,StoreConfig>, useValue: storeConfigs} ]
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
        "name": "product",
        "label":"Product",
        "type": "select",
        "store": "globalIndicatorDetails",
        "globalIndicatorGroupName":"credit_products_ind",
        "validation": {
          "required": true
        }
      },
      {
        "name": "productLimit",
        "label":"Product Limit",
        "type": "inputGroup",
        "store":"currency",
        "reference":"amount"
      },
      {
        "sectionName":"Interest Details",
        "name": "interestType",
        "label":"Interest Type",
        "store": "globalIndicatorDetails",
        "globalIndicatorGroupName":"credit_products_ind",
        "type": "select",
        "validation": {
          "required": true
        }
      },
      {
        "name": "interestRate",
        "label":"Interest Rate",
        "type": "input",
        "inputType": "text",
        "validation": {
          "required": true
        }
      },
      {
        "name": "margin",
        "label":"Margin",
        "type": "input",
        "inputType": "text",
        "validation": {
          "required": true
        }
      },
      {
        "name": "index",
        "label":"Index",
        "type": "select",
        "store": "globalIndicatorDetails",
        "globalIndicatorGroupName":"credit_products_ind",
        "validation": {
          "required": true
        }
      },
      {
        "name": "calculationBases",
        "label":"Calculation Bases",
        "store": "globalIndicatorDetails",
        "globalIndicatorGroupName":"calculation_bases_ind",
        "type": "select",
        "validation": {
          "required": true
        }
      },
      {
        "name": "calculationMethods",
        "label":"Calculation Methods",
        "type": "select",
        "store": "globalIndicatorDetails",
        "globalIndicatorGroupName":"calculation_methods_ind",
        "validation": {
          "required": true
        }
      }
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
        "store":"currency",
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
      "stepName": "step1",
      "index": 1,
      "status": false,
      "label": "Step 1",
      "fields": [
        {
          "sectionName":"Bank Facility Details",
          "name": "facilityType",
          "label": "Facility Type",
          "store": "globalIndicatorDetails",
          "globalIndicatorGroupName":"facility_type_ind",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "facilityCode",
          "label": " ",
          "type": "input",
          "inputType": "text",
          "validation": {
            "required": true
          }
        },
        {
          "name": "entity",
          "label": "Entity/Company",
          "store": "company",
          "type": "select"
        },
        {
          "name": "country",
          "label": "Bank/Country of Bank",
          "type": "input",
          "inputType":"text",
          "validation": {
            "required": true
          }
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "input",
          "inputType":"date",
          "validation": {
            "required": true
          }
        },
        {
          "name": "endDate",
          "label": "End Date",
          "type": "input",
          "inputType":"date",
          "validation": {
            "required": true
          }
        },
        {
          "name": "amortizationApplicability",
          "label": "Amortization Applicability",
          "type": "select"
        },
        {
          "name": "amount",
          "label": "Amount",
          "store":"currency",
          "type": "inputGroup",
          "reference": "amount",
          "customCss": "unit-input",
          "validation": {
            "required": true
          }
        },
        {
          "sectionName":"Bank Fees",
          "name": "feesType",
          "label": "Fees Type",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "percentage",
          "label": "Percentage",
          "type": "input",
          "inputType":"number",
          "validation": {
            "required": true
          }
        },
        {
          "name": "amountFee",
          "label": "Amount",
          "store":"currency",
          "type": "inputGroup",
          "reference": "amount",
          "customCss": "unit-input",
          "validation": {
            "required": true
          }
        },
        {
          "sectionName":"Other Details",
          "name": "securityType",
          "label": "Security Type",
          "store": "globalIndicatorDetails",
          "globalIndicatorGroupName":"guarantee_type_ind",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "guaranteeType",
          "label": "Guarantee Type",
          "store": "countries",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "regionForLine",
          "label": "Region for Line",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "recallClause",
          "label": "Recall Clause",
          "type": "input",
          "inputType":"text"
        },
        {
          "name": "comments",
          "label": "Comments",
          "type": "input",
          "inputType":"text",
          "validation": {
            "required": true
          }
        },
        {
          "sectionName":"Settlement Bank Account",
          "name": "outflowAccounts",
          "label": "Outflow Accounts",
          "store": "accountDetails",
          "type": "select",
          "validation": {
            "required": true
          }
        },
        {
          "name": "inflowAccounts",
          "label": "Inflow Accounts",
          "store": "accountDetails",
          "type": "select",
          "validation": {
            "required": true
          }
        }
      ]
    },

    {
      "stepName": "step2",
      "index": 2,
      "status": false,
      "label": "Step 2",
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
    }
  ]

}

export const Primary = Template.bind({});
Primary.args = {
    page: page,
    className:page.className
};
