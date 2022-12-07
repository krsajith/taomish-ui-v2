import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Update } from "../core/store/basic-api-store";
import { Status } from "../core/store/status";
import { Store } from "../core/store/store";
import { Option } from "../page";


export class MockStore implements Store<any> {

  protected _list$ = new BehaviorSubject<any[]>([]);
  protected _state$ = new Subject<Update>();
  protected _optionsData$ = new BehaviorSubject<Option[]>([])

  optionsData = this._optionsData$.asObservable()
  values = this._list$.asObservable();

  state$ = this._state$.asObservable();
  protected status!: string;
  protected error!: string;
  list: any[] = [];

  constructor(list: any[]) {
    this.list = list;
    this._list$.next(this.list);
  }

  options(parentValues?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  getList(parentValue?: string | undefined): Promise<any[]> {
    return Promise.resolve(this.list);
  }
  insert(obj: any, index?: any): void {

  }
  findItem(key: string | number): Promise<any> {
    return Promise.resolve(this.list[0])
  }
  filter(parentId: any): Promise<any> {
    return Promise.resolve(this.list)
  }
  getItemCount(): Promise<any> {
    return Promise.resolve(5)
  }
}
