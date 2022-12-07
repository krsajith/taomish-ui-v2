import { Store } from "../core/store/store";
import { StoreService } from "../core/store/store.service";
import mockData from "./mock-data";
import { MockStore } from "./mock-store";

export class MockStoreService implements StoreService {
    getState<T extends Store<any>>(name: string, payloadFunctionFile?: { [key: string]: Function; } | undefined): T {
        return   new MockStore(mockData.get(name) || []) as unknown as T;
    }
    removeState(name: string): void {
        
    }

}