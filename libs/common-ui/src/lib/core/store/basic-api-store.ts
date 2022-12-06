import {BehaviorSubject, Subject, takeWhile} from "rxjs";
import {ApiService} from "../api/api.service";
import {Status} from "./status";
import {Store} from "./store";
import {StoreConfig} from "./store-config";
import {Option} from '../domain/option'
import {ApiType} from "./api-type";
import { sortBy } from "lodash-es";

export interface Update {
  status: Status;
  value?: any;
  error?: any;
}

export class BasicApiStore implements Store<any> {
  protected _list$ = new BehaviorSubject<any[]>([]);
  protected _state$ = new Subject<Update>();
  protected _optionsData$=new BehaviorSubject<Option[]>([])

  optionsData=this._optionsData$.asObservable()
  values = this._list$.asObservable();
  config!: StoreConfig;
  state$ = this._state$.asObservable();
  protected status!: string;
  protected error!: string;
  idField: string;
  list: any[] = [];

  constructor(private storeConfig: StoreConfig, private apiService: ApiService,private payloadFunctionFile?:{ [key: string]: Function }) {
    this.config = storeConfig;
    this.idField = storeConfig.idField;
    this.setData();
  }

  setData() {
    this.status = Status.Pending;
    this._state$.next({ status: this.status });
    if(this.config.apiType == null ||this.config.apiType == ApiType.GET ) {
      this.apiService.get(this.config.path).subscribe((data:any) => {
        this.updateValue(data);
      })
    } else if (this.config.apiType === ApiType.POST) {
      let payload = {};
      console.trace(this.config,this.payloadFunctionFile)
      if(this.payloadFunctionFile != null && this.config.payloadFunction != null) {
        console.log(this.config,this.payloadFunctionFile)
        payload = this.payloadFunctionFile[this.config.payloadFunction]();
      }
      this.apiService.post(this.config.path,payload).subscribe((data:any) => {
        this.updateValue(data);
      })
    }
  }

  private updateValue(data: any) {
    if(!Array.isArray(data)){
      this._list$.next(data.content===undefined?data.invoices:data.content);
      this.list = data.content===undefined?data.invoices:data.content
    }else{
      this._list$.next(data);
      this.list = data
    }
    // this.list=sortBy(this.list,'status');
    this.options();
    this.status = Status.Updated;
    this._state$.next({ status: this.status });
  }

  async options() {
    const optionsList: Option[] = [];
    let filterByStatus=this.list.filter(e=>(e.status==undefined || e.status==true))
    // && (e.stage===undefined || e.stage==Status.Approved)

      filterByStatus.forEach(e => {
        if(this.config.optionKey===''){
          optionsList.push({
            value: e,
            label: e,
          });
        }else{
          optionsList.push({
            value: e[this.config.optionKey],
            label: e[this.config.optionLabel],
          });
        }
      })
      this._optionsData$.next(optionsList);
  }

  async getList(parentValue?: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (this.status !== Status.Pending) {
        resolve(this.list);
      } else {
        this.state$.pipe(takeWhile(value => value.status === Status.Pending, true)).subscribe(value => {
          resolve(this.list);
        })
      }
    });
  }

  insert(obj: any, index?: any) {
    this.status = Status.Pending;
    this._state$.next({ status: this.status });
        this.apiService.post(this.config.path, obj).subscribe(resp => {
          this.status = Status.Updated;
          this._state$.next({ status: obj[this.idField]? Status.Updated : Status.Submitted, value: resp });
          obj[this.idField] = resp[this.idField]
          this.add(resp, index);
    },
      err => {
        this.status = Status.Error;
        this.error = 'Error updating item, Please check all values';
        this._state$.next({ status: this.status, error: this.error });
      });
  }

  add(obj: any, index?: any): void {
    if (obj[this.idField]) {
      this.delete(obj[this.idField]);
    }
    if (index !== undefined) {
      this.list.splice(index, 0, obj)
    } else {
      this.list.unshift(obj)
    }
    this._list$.next(this.list);
  }

  delete(key: string | number) {
    const index = this.list.findIndex(e => e[this.idField] === key);
    const item = this.list[index];
    if (index >= 0) {
      this.list.splice(index, 1);
      this.status = Status.Deleted;
      this._state$.next({ status: this.status });
    }
    return item;
  }

  filter(groupName:any):Promise<any>{
    const filterData:any[]=[]
    return new Promise((resolve, reject) => {
      if (this.status==Status.Updated) {
        this.list.forEach(e=>{
          if(e.groupName==groupName){filterData.push({label:e['name'],value:e['name']})}
        })
        resolve(filterData);
      } else {
        this.state$.pipe(takeWhile(value => value.status === Status.Pending, true)).subscribe(value => {
          this.list.forEach(e=>{
            if(e.groupName==groupName){filterData.push({label:e['name'],value:e['name']})}
          })
          resolve(filterData);
        })
      }
    });
  }

  async findItem(key: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
      const item = this.list.find(e => e[this.idField] == key);
      if (item) {
        resolve(item);
      } else {
        this.state$.pipe(takeWhile(value => value.status === Status.Pending, true)).subscribe(value => {
          const item = this.list.find(e => e[this.idField] == key);
          resolve(item);
        })
      }
    });
  }

  getItemCount(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.list) {
        resolve(this.list.length);
      } else {
        this.state$.pipe(takeWhile(value => value.status === Status.Pending, true)).subscribe(value => {
          resolve(this.list.length);
        })
      }
    });
  }

}
