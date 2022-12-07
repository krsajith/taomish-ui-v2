import { ApiType, StoreConfig, StoreType } from "@taomish-ui-v2/common-ui";
import { environment } from "../../environments/environment";

 const tenantId="tenantId="+localStorage.getItem('tenantId');


export const StoreConfigList: { [key: string]: StoreConfig } = {
  profitCenter: {
    name: "profit-center",
    path: environment.apiEndpoint+"/api-bm/api/profitcenter/v1/getall?"+tenantId+"&page=0&size=2000",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'uuid',
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  globalIndicatorDetails: {
    name: "globalIndicatorDetails",
    path: environment.apiEndpoint+"/api-bm/api/globalindicatordetails/v1/getallglobalindicatordetails?"+tenantId+"&page=0&size=2000",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'name',
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  company: {
    name: "company",
    path: environment.apiEndpoint+ "/api-bm/api/company/v1/getcompanybycriteria",
    //path: 'company',
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'uuid',
    payloadFunction: 'companyPayload',
    apiType: ApiType.POST,
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  counterParty: {
    name: "counterparty",
    path: environment.apiEndpoint+ "/api-bm/api/counterparty/v1/getcounterpartybycriteria?"+tenantId,
    // path: 'counterparty',
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'uuid',
    optionLabel: 'name',
    payloadFunction: 'counterPartyPayload',
    apiType: ApiType.POST,
    storeType: StoreType.api,
    idField: "uuid"
  },
  commodity: {
    name: "commodity",
    path: environment.apiEndpoint+"/api-bm/api/commodity/v1/getall?"+tenantId+"&page=0&size=20",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  incoterm:{
    name: "incoterm",
    path: environment.apiEndpoint+"/api-bm/api/incoterm/v1/getall?"+tenantId+"&page=0&size=20",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  countries: {
    name: "countries",
    path: environment.apiEndpoint+"/api-bm/api/location/v1/getallbylocationtype?"+tenantId+"&locationType=Country",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'name',
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  cities: {
    name: "city",
    path: environment.apiEndpoint+"/api-bm/api/location/v1/getallbylocationtype?"+tenantId+"&locationType=City",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'name',
    optionLabel: 'name',
    storeType: StoreType.api,
    idField: "uuid"
  },
  currency: {
    name: "currency",
    path: "./assets/application/data/currency.json",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'value',
    optionLabel: 'label',
    storeType: StoreType.json,
    idField: "uuid",
  },
  accountDetails: {
    name: "accountDetails",
    path: environment.apiEndpoint+"/api-bm/api/accountDetails",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "accountNo",
    optionLabel: 'accountNo',
    storeType: StoreType.api,
    idField: "uuid"
  },
  bankLimit: {
    name: "bank-limit",
    path: environment.apiEndpoint+"/api-bm/api/bankLimits",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'atsStatus',
    storeType: StoreType.api,
    idField: "uuid"
  },
  bankAccount: {
    name: "bankAccount",
    path: environment.apiEndpoint+"/api-bm/api/bank",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'atsStatus',
    storeType: StoreType.api,
    idField: "uuid"
  },
  vesselMaster: {
    name: "vesselMaster",
    path: environment.apiEndpoint+"/api-bm/api/vessel-master",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'atsStatus',
    storeType: StoreType.api,
    idField: "uuid"
  },
  clauseMaster: {
    name: "clauseMaster",
    path: environment.apiEndpoint+"/api-bm/api/clauseMaster",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: "uuid",
    optionLabel: 'atsStatus',
    storeType: StoreType.api,
    idField: "uuid"
  }
}
