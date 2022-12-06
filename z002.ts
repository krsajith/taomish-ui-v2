import { table } from "console";

console.log("Hello");


const commonFields = { company: "UST", bank: "hdfc" }

const arr = [{ "item": "5454", "qty": 5454, "rate": 5454 }, { "item": "58787", "qty": 87878, "rate": 878787 }];

arr.forEach((element, index) => {
    arr[index] = { ...commonFields, ...arr[index] }
});

// calllApi(arr);

console.log(arr);


const data = {
    "facilityType": "BILATERAL",
    "facilityCode": "dfsdf",
    "entity": "f011f8d1-a53c-4bee-a039-a1090f05ff9a",
    "country": "MAHARASTRA /hyderbada",
    "startDate": "2022-12-15T00:00:00.000Z",
    "endDate": "2022-12-28T00:00:00.000Z",
    "amortizationApplicability": "Applicable",
    "amount": {
        "unit": 100000,
        "uom": "AED"
    },
    "feesType": "Lumpsum",
    "percentage": null,
    "amountFee": {
        "unit": 5000,
        "uom": "AED"
    },
    "securityType": "Secured",
    "guaranteeType": "No guarantee",
    "regionForLine": "hyderbada",
    "recallClause": "1001",
    "comments": "1000",
    "outflowAccounts": [
        "Federal@1",
        "Federal@12"
    ],
    "inflowAccounts": [
        "Federal@1",
        "Federal@12"
    ],
    "participantInfo": [
        {
            "lcTrade": [
                {
                    "participants": "f011f8d1-a53c-4bee-a039-a1090f05ff9a",
                    "currency": "AED",
                    "amount": 10,
                    "outflowAccount": "Federal@1",
                    "inflowAccount": "Federal@12"
                },
                {
                    "participants": "088852c6-8d4d-46dd-aa8e-50a2c9ca16f7",
                    "currency": "AED",
                    "amount": 10,
                    "outflowAccount": "Federal@1",
                    "inflowAccount": "Federal@1"
                }
            ],
            "product": "Import LC Structured",
            "productLimit": {
                "unit": 50,
                "uom": "AED"
            },
            "interestType": "Variable",
            "interestRate": "USDLIBOR + 100",
            "margin": "100",
            "index": "USDLIBOR",
            "calculationBases": "30/360",
            "calculationMethods": "Linear"
        }
    ],
    "bankAccountId": "b67b5ec1-5142-4ff7-b37d-5f9cfe0b1855"
};



const fields: any[] = [];

const mainFields = Object.keys(data);

mainFields.forEach(field => {
    fields.push({
        "name": field,
        "label": field,
        "type": "text"
    })
})

console.log(fields);