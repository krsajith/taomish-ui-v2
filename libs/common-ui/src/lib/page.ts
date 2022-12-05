export interface Page {
    formGroups: { [key: string]: Field[] };
    inputGroups: { [key: string]: Field[] };
    steps:  Partial<Step>[];
    lists: { [key: string]: Option[] };
}

export interface Option {
    value: string;
    label: string;
}

export interface Step {
    stepName:string;
    icon:string;
    index:number;
    sections:Section[];
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
    label?: string;
    reference?: string;
    store?:string;
    value?:string;
    fields?:Field[];
    topic?:string;
}



