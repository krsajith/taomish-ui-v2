export interface Page {
    formGroups: { [key: string]: Field[] };
    inputGroups: { [key: string]: Field[] };
    steps:  Partial<Step>[];
    lists: { [key: string]: Option[] };
    className:string;
}

export interface Step {
  stepName:string;
  icon:string;
  index:number;
  status:boolean;
  fields: Field[];
  label:string;
}

export interface Option {
    value: string;
    label: string;
}

export interface TopicListener {
    topic: string;
    function: string;
}

export interface Field {
    name: string;
    type: string;
    inputType?:string;
    label?: string;
    colSpan?:string;
    customCss?:string;
    reference?: string;
    validation?:Validation;
    store?:string;
    value?:string;
    fields?:Field[];
    topicListener?:TopicListener[];
    topic?:string;
    sectionName?:string
}


export interface Validation{
  min?:number;
  max?:number;
  required?:boolean;
  maxLength?:number;
  minLength?:number;
}

