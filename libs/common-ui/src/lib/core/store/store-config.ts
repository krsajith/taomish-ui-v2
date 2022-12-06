import {StoreType} from "./stor-type";
import {ApiType} from "./api-type";

export class StoreConfig {
    storeType?:  StoreType;
    apiType?: ApiType = ApiType.GET;
    payloadFunction?:string;
    baseUrl?:    string;
    path!:       string;
    name?:string;
    refreshOnInitUpdate!:boolean;
    loadOnInit!:boolean;
    optionKey!:string;
    optionLabel!:string;
    idField!:string;
    endPoint?:string;
}

