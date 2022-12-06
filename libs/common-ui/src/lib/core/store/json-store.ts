import { BehaviorSubject, Observable, Subject, takeWhile } from 'rxjs';
import { JsonService } from '../api/json.service';
import { Option } from '../domain/option';
import { Update } from './basic-api-store';
import { Status } from './status';
import { Store } from './store';
import { StoreConfig } from './store-config';

export class JsonStore implements Store<any> {
  protected _list$ = new BehaviorSubject<any[]>([]);
  protected _optionsData$ = new BehaviorSubject<Option[]>([])
  protected _state$ = new Subject<Update>();

  values = this._list$.asObservable();
  optionsData = this._optionsData$.asObservable()
  state$ = this._state$.asObservable();
  protected status!: string;

  config:StoreConfig;
  list: any[] = [];


  constructor(
    private storeConfig: StoreConfig,
    private jsonService: JsonService
  ) {
    this.config = storeConfig;
    this.status = Status.Pending;
    this._state$.next({ status: this.status });
    jsonService.get<any>(`${storeConfig.path}`).subscribe((data) => {
      this._list$.next(data);
      this.list = data
      this.options()
      this.status = Status.Updated;
      this._state$.next({ status: this.status });
    });
  }
  getItemCount(): Promise<any> {
    return Promise.resolve("")
  }

  filter(): Promise<any> {
    return Promise.resolve()
  }

  async options() {
    const optionsList: Option[] = [];
    this.list.forEach(e => {
        optionsList.push({
          value: e[this.config.optionKey],
          label: e[this.config.optionLabel],
        });
    })
    this._optionsData$.next(optionsList);
}

  getList(parentValue?: string | undefined): Promise<any[]> {
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  insert(obj: any, index?: any): void {

  }

  findItem(key: string | number): Promise<any> {
    return Promise.resolve([]);
  }


}
