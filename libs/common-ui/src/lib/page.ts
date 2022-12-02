export interface Page {
    formGroups: { [key: string]: Field[] };
    inputGroups: { [key: string]: Field[] };
    fields: Field[];
    sections: Section[];
    lists: { [key: string]: Option[] };
    colSpan:string;
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
    reference?: string;
    store?:string;
    value?:string;
    fields?:Field[];
    topicListener?:TopicListener[];
    topic?:string;
}



