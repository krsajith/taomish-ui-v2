export interface Page {
    formGroups: { [key: string]: Field[] };
    inputGroups: { [key: string]: Field[] };
    steps:  Partial<Step>[];
    lists: { [key: string]: Option[] };
    gridCols:string;
}

export interface Step {
  stepName:string;
  icon:string;
  index:number;
  sections:Section[];
}

export interface Option {
    value: string;
    label: string;
}

export interface Section {
    sectionName: string;
    index: number;
    fields: Field[];
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
    customCssClass?:string;
    reference?: string;
    validation?:Validation;
    store?:string;
    value?:string;
    fields?:Field[];
    topicListener?:TopicListener[];
    topic?:string;
}


export interface Validation{
  min?:number;
  max?:number;
  required?:boolean;
  maxLength?:number;
  minLength?:number;
}

export interface FieldStructure{
  stepName:string;
  fields:Field[];
}
