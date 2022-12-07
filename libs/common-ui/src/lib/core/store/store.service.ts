import { Store } from "./store";

export interface StoreService {
  getState<T extends Store<any>>(name: string,payloadFunctionFile?:{[key:string]:Function}): T;
  removeState(name: string):void;
}
