import { Validation } from "./validation";

export interface Field {
    name: string;
    type: string;
    label: string;
    value: any;
    store: string;
    order: number;
    parentField:string
    joinColumn:string;
    dataFrom?:string;
    validation:Validation;
    divider:string;
    section?:number;
    colSpan:string;
    class?:string;
    progressBar?:string;
    formPart?:number; // for split form into multiple parts
    valueChanger?:string;
    valueChangerTrigger?:boolean;
    onfocusOut?:string;               //to perform any action after focus out on any field
    globalIndicatorGroupName?:string;
    selectValues?:string[];
    path?:string; // for file attatchment path
    s3FolderName?:string; // s3 storage folder name
    isView?:boolean;
    disable?:boolean;
    parentStore?:string;
    minDateReference?:string; //To set minimum date for date Field
    pipe?:string; // use for manipulate data on condition
}
