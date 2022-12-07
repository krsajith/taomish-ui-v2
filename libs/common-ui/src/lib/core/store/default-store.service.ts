import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { JsonService } from '../api/json.service';
import { BasicApiStore } from './basic-api-store';
import { JsonStore } from './json-store';
import { StoreType } from './stor-type';
import { Store } from './store';
import { StoreConfig } from './store-config';
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class DefaultStoreService implements StoreService {

  stateObjects: { [k: string]: any } = {};

  stateQuery: { [k: string]: string } = {};

  stores: Map<string, Store<any>> = new Map();

  constructor(private jsonService: JsonService,private apiService:ApiService,private storeConfigs:Map<string,StoreConfig>) {
  }

  getState<T extends Store<any>>(name: string,payloadFunctionFile?:{[key:string]:Function}): T {
    const config = this.storeConfigs.get(name);
    if(!config) throw new Error(`Invalid store ${name}`);


    if (!this.stores.has(name) ) {
      switch(config.storeType) {
        case StoreType.json:
          this.stores.set(name, new JsonStore(config,this.jsonService));
          break;
        case StoreType.api:
          this.stores.set(name, new BasicApiStore(config,this.apiService,payloadFunctionFile));
      }
    }
    return this.stores.get(name) as T;
  }

  removeState(name: string){
    this.stores.delete(name);
  }
}
