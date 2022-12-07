import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { JsonService } from '../api/json.service';
import { BasicApiStore } from './basic-api-store';
import { JsonStore } from './json-store';
import { StoreType } from './stor-type';
import { Store } from './store';
import { StoreConfig } from './store-config';



@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stateObjects: { [k: string]: any } = {};

  stateQuery: { [k: string]: string } = {};

  stores: Map<string, Store<any>> = new Map();

  storeConfigs!:{ [k: string]: StoreConfig };

  constructor(private jsonService: JsonService,private apiService:ApiService) {
  }

  setConfigFile(storeConfigs:{ [k: string]: StoreConfig }){
    this.stores.clear();
    this.storeConfigs=storeConfigs;
  }

  getState<T extends Store<any>>(name: string,payloadFunctionFile?:{[key:string]:Function}): T {
    if (!this.stores.has(name)) {
      switch(this.storeConfigs[name].storeType) {
        case StoreType.json:
          this.stores.set(name, new JsonStore(this.storeConfigs[name],this.jsonService));
          break;
        case StoreType.api:
          this.stores.set(name, new BasicApiStore(this.storeConfigs[name],this.apiService,payloadFunctionFile));
      }
    }
    return this.stores.get(name) as T;
  }

  removeState(name: string){
    this.stores.delete(name);
  }
}
