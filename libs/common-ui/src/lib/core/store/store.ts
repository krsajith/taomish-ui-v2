import { Observable } from "rxjs";

export interface Store<T> {
    values : Observable<T[]>;
    optionsData: Observable<T[]>;
    options(parentValues?: string):void;
    getList(parentValue?: string): Promise<any[]>;
    insert(obj: any, index?: any):void;
    findItem(key: string | number): Promise<any>;
    filter(parentId:any):Promise<any>;
    getItemCount():Promise<any>;
}
