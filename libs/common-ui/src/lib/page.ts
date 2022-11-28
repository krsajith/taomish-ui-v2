export interface Page {
    formGroups: { [key: string]: Field[] };
    inputGroups: { [key: string]: Field[] };
    fields: Field[];
    sections: Section[];
    lists: { [key: string]: Option[] };
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

export interface Field {
    name: string;
    type: string;
    label?: string;
    reference?: string;
    store?:string;
    value?:string;
    fields?:Field[]
}



