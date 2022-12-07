import { Store } from "./store";

export abstract class StoreService {
  abstract getState<T extends Store<any>>(name: string,payloadFunctionFile?:{[key:string]:Function}): T;
  abstract removeState(name: string):void;
}
